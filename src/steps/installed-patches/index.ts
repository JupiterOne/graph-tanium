import {
  IntegrationStep,
  IntegrationStepExecutionContext,
  RelationshipClass,
  createDirectRelationship,
} from '@jupiterone/integration-sdk-core';
import { IntegrationConfig } from '../../config';
import { Entities, Relationships, Steps } from '../constants';
import { createAPIClient } from '../../tanium/client';
import buildInstalledPatchConverter from './converter';

export const installedPatchesSteps: IntegrationStep<IntegrationConfig>[] = [
  {
    id: Steps.INSTALLED_PATCHES,
    name: 'Fetch Installed Patches',
    entities: [Entities.INSTALLED_PATCH],
    relationships: [Relationships.ENDPOINT_HAS_INSTALLED_PATCH],
    mappedRelationships: [],
    dependsOn: [Steps.ENDPOINTS],
    executionHandler: fetchInstalledPatches,
  },
];

async function fetchInstalledPatches({
  instance,
  jobState,
}: IntegrationStepExecutionContext<IntegrationConfig>) {
  const client = createAPIClient(instance.config);

  await jobState.iterateEntities(
    { _type: Entities.ENDPOINT._type },
    async (endpointEntity) => {
      const createInstalledPatchEntity = buildInstalledPatchConverter(
        endpointEntity.computerId as string,
      );
      await client.iterateInstalledPatches(
        endpointEntity.computerId as string,
        async (installedPatch) => {
          if (
            !installedPatch.title ||
            ['[no results]', 'No Patches Found'].includes(
              installedPatch.title,
            ) ||
            installedPatch.title.toLowerCase().startsWith('tse-error')
          ) {
            return;
          }
          const installedPatchEntity =
            createInstalledPatchEntity(installedPatch);
          if (!jobState.hasKey(installedPatchEntity._key)) {
            await jobState.addEntity(installedPatchEntity);
          }

          const relationship = createDirectRelationship({
            _class: RelationshipClass.HAS,
            from: endpointEntity,
            to: installedPatchEntity,
          });
          if (!jobState.hasKey(relationship._key)) {
            await jobState.addRelationship(relationship);
          }
        },
      );
    },
  );
}
