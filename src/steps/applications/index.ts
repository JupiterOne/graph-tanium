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
import { createApplicationEntity, createVersionEntities } from './converter';
import { ACCOUNT_ENTITY_KEY } from '../account';

export const applicationSteps: IntegrationStep<IntegrationConfig>[] = [
  {
    id: Steps.APPLICATIONS,
    name: 'Fetch Applications',
    entities: [Entities.APPLICATION, Entities.VERSION],
    relationships: [
      Relationships.ACCOUNT_HAS_APPLICATION,
      Relationships.APPLICATION_HAS_VERISON,
    ],
    mappedRelationships: [],
    dependsOn: [Steps.ACCOUNT],
    executionHandler: fetchApplications,
  },
];

async function fetchApplications({
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
  await client.iterateApplications(async (application) => {
    const applicationEntity = createApplicationEntity(application);
    await jobState.addEntity(applicationEntity);
    await jobState.addRelationship(
      createDirectRelationship({
        from: accountEntity,
        to: applicationEntity,
        _class: RelationshipClass.HAS,
      }),
    );
    const versionEntities = createVersionEntities(application);
    if (versionEntities) {
      await jobState.addEntities(versionEntities);
      for (const versionEntity of versionEntities) {
        await jobState.addRelationship(
          createDirectRelationship({
            from: applicationEntity,
            to: versionEntity,
            _class: RelationshipClass.HAS,
          }),
        );
      }
    }
  });
}
