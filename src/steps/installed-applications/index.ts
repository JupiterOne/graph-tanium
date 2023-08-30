import {
  IntegrationStep,
  IntegrationStepExecutionContext,
  RelationshipClass,
  createDirectRelationship,
} from '@jupiterone/integration-sdk-core';
import { IntegrationConfig } from '../../config';
import { Entities, Relationships, Steps } from '../constants';
import { createAPIClient } from '../../tanium/client';
import buildInstalledApplicationConverter from './converter';
import formatKey from '../../utils/formatKey';

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

  const applicationVersionKeysMap = new Map<string, string[]>();
  await jobState.iterateEntities(
    { _type: Entities.VERSION._type },
    (versionEntity) => {
      const key = formatKey(`${versionEntity.name}:${versionEntity.version}`);
      if (!applicationVersionKeysMap.has(key)) {
        applicationVersionKeysMap.set(key, []);
      }
      applicationVersionKeysMap.set(key, [
        ...(applicationVersionKeysMap.get(key) || []),
        versionEntity._key,
      ]);
    },
  );

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

          const applicationVersionKey = formatKey(
            `${installedApplication.name}:${installedApplication.version}`,
          );
          if (applicationVersionKeysMap.has(applicationVersionKey)) {
            const versionEntityKeys = applicationVersionKeysMap.get(
              applicationVersionKey,
            ) as string[];
            const installedApplicationIsVersionRelationships = versionEntityKeys
              .filter((versionKey) => jobState.hasKey(versionKey))
              .map((versionKey) =>
                createDirectRelationship({
                  _class: RelationshipClass.IS,
                  fromKey: installedApplicationEntity._key,
                  fromType: Entities.INSTALLED_APPLICATION._type,
                  toKey: versionKey,
                  toType: Entities.VERSION._type,
                }),
              );
            await jobState.addRelationships(
              installedApplicationIsVersionRelationships,
            );
          }
        },
      );
    },
  );
}
