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
import {
  createApplicationEntity,
  createApplicationEntityKey,
  createVersionEntities,
} from './converter';
import { ACCOUNT_ENTITY_KEY } from '../account';
import getDifferentKeys from '../../utils/getDifferentKeys';

export const applicationSteps: IntegrationStep<IntegrationConfig>[] = [
  {
    id: Steps.APPLICATIONS,
    name: 'Fetch Applications',
    entities: [Entities.APPLICATION, Entities.VERSION],
    relationships: [
      Relationships.ACCOUNT_HAS_APPLICATION,
      Relationships.APPLICATION_HAS_VERSION,
    ],
    mappedRelationships: [],
    dependsOn: [Steps.ACCOUNT],
    executionHandler: fetchApplications,
  },
];

async function fetchApplications({
  instance,
  jobState,
  logger,
}: IntegrationStepExecutionContext<IntegrationConfig>) {
  const accountEntity = await jobState.getData<Entity>(ACCOUNT_ENTITY_KEY);
  if (!accountEntity) {
    throw new IntegrationMissingKeyError(
      'Unable to get account entity from jobState.',
    );
  }

  const client = createAPIClient(instance.config);
  await client.iterateApplications(async (application) => {
    const applicationKey = createApplicationEntityKey(application);
    const applicationEntity = createApplicationEntity(application);
    const existentApplicationEntity = await jobState.findEntity(applicationKey);
    if (existentApplicationEntity) {
      logger.warn(
        `Detailed duplicate entity report: ${JSON.stringify(
          getDifferentKeys(existentApplicationEntity, applicationEntity),
        )}`,
      );
      return;
    }
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
