import {
  IntegrationStep,
  IntegrationStepExecutionContext,
  RelationshipClass,
  createDirectRelationship,
} from '@jupiterone/integration-sdk-core';
import { IntegrationConfig } from '../../config';
import { Entities, Relationships, Steps } from '../constants';
import { createAPIClient } from '../../tanium/client';
import { createApplicationVersionEntityKey } from '../applications/converter';
import buildInstalledApplicationConverter from './converter';

export const installedApplicationsSteps: IntegrationStep<IntegrationConfig>[] =
  [
    {
      id: Steps.INSTALLED_APPLICATIONS,
      name: 'Fetch Installed Applications',
      entities: [Entities.INSTALLED_APPLICATION],
      relationships: [
        Relationships.ENDPOINT_HAS_INSTALLED_APPLICATION,
        Relationships.INSTALLED_APPLICATION_IS_VERSION,
      ],
      mappedRelationships: [],
      dependsOn: [Steps.ENDPOINTS, Steps.APPLICATIONS],
      executionHandler: fetchInstalledApplications,
    },
  ];

async function fetchInstalledApplications({
  instance,
  jobState,
}: IntegrationStepExecutionContext<IntegrationConfig>) {
  const client = createAPIClient(instance.config);
  await jobState.iterateEntities(
    { _type: Entities.ENDPOINT._type },
    async (endpointEntity) => {
      const createInstalledApplicationEntity =
        buildInstalledApplicationConverter(endpointEntity.computerId as string);
      await client.iterateInstalledApplications(
        endpointEntity.computerId as string,
        async (installedApplication) => {
          const installedApplicationEntity =
            createInstalledApplicationEntity(installedApplication);
          await jobState.addEntity(installedApplicationEntity);

          await jobState.addRelationship(
            createDirectRelationship({
              _class: RelationshipClass.HAS,
              from: endpointEntity,
              to: installedApplicationEntity,
            }),
          );

          const applicationVersionKey = createApplicationVersionEntityKey(
            endpointEntity.vendor as string,
            installedApplication.name,
            installedApplication.version,
          );
          if (jobState.hasKey(applicationVersionKey)) {
            await jobState.addRelationship(
              createDirectRelationship({
                _class: RelationshipClass.IS,
                fromKey: installedApplicationEntity._key,
                fromType: Entities.INSTALLED_APPLICATION._type,
                toKey: applicationVersionKey,
                toType: Entities.VERSION._type,
              }),
            );
          }
        },
      );
    },
  );
}
