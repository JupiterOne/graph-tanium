import {
  Entity,
  IntegrationMissingKeyError,
  IntegrationStep,
  IntegrationStepExecutionContext,
  RelationshipClass,
  createDirectRelationship,
} from '@jupiterone/integration-sdk-core';
import { createAPIClient } from '../../tanium/client';
import { Entities, Relationships, Steps } from '../constants';
import { IntegrationConfig } from '../../config';
import { createUserEntity } from './converter';
import { ACCOUNT_ENTITY_KEY } from '../account';

export const userSteps: IntegrationStep<IntegrationConfig>[] = [
  {
    id: Steps.USERS,
    name: 'Fetch Users',
    entities: [Entities.USER],
    relationships: [Relationships.ACCOUNT_HAS_USER],
    mappedRelationships: [],
    dependsOn: [Steps.ACCOUNT],
    executionHandler: fetchUsers,
  },
];
async function fetchUsers({
  instance,
  jobState,
}: IntegrationStepExecutionContext<IntegrationConfig>) {
  const accountEntity = await jobState.getData<Entity>(ACCOUNT_ENTITY_KEY);
  if (!accountEntity) {
    throw new IntegrationMissingKeyError(
      'could not retrieve account entity from job state',
    );
  }

  const client = createAPIClient(instance.config);
  await client.iterateUsers(async (user) => {
    const userEntity = await jobState.addEntity(createUserEntity(user));
    await jobState.addRelationship(
      createDirectRelationship({
        from: accountEntity,
        to: userEntity,
        _class: RelationshipClass.HAS,
      }),
    );
  });
}
