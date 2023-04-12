import {
  Entity,
  IntegrationMissingKeyError,
  IntegrationStep,
  IntegrationStepExecutionContext,
  RelationshipClass,
  createDirectRelationship,
} from '@jupiterone/integration-sdk-core';
import { IntegrationConfig } from '../../config';
import { Entities, Relationships, Steps } from '../constants';
import { createAPIClient } from '../../tanium/client';
import { createEndpointEntity } from './converter';
import { ACCOUNT_ENTITY_KEY } from '../account';

export const endpointSteps: IntegrationStep<IntegrationConfig>[] = [
  {
    id: Steps.ENDPOINTS,
    name: 'Fetch Endpoints',
    entities: [Entities.ENDPOINT],
    relationships: [Relationships.ACCOUNT_HAS_ENDPOINT],
    mappedRelationships: [],
    dependsOn: [Steps.ACCOUNT],
    executionHandler: fetchEndpoints,
  },
];

async function fetchEndpoints({
  instance,
  jobState,
}: IntegrationStepExecutionContext<IntegrationConfig>) {
  const accountEntity = await jobState.getData<Entity>(ACCOUNT_ENTITY_KEY);
  if (!accountEntity) {
    throw new IntegrationMissingKeyError(
      'Unable to get account entity from jobState.',
    );
  }

  const client = createAPIClient(instance.config);
  await client.iterateEndpoints(async (endpoint) => {
    const endpointEntity = createEndpointEntity(endpoint);
    await jobState.addEntity(endpointEntity);
    await jobState.addRelationship(
      createDirectRelationship({
        from: accountEntity,
        to: endpointEntity,
        _class: RelationshipClass.HAS,
      }),
    );
  });
}
