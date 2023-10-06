import {
  IntegrationStep,
  IntegrationStepExecutionContext,
  RelationshipClass,
  createDirectRelationship,
} from '@jupiterone/integration-sdk-core';
import { IntegrationConfig } from '../../config';
import { Entities, Relationships, Steps } from '../constants';
import { createAPIClient } from '../../tanium/client';
import buildAvailablePatchConverter from './converter';

export const availablePatchesSteps: IntegrationStep<IntegrationConfig>[] = [
  {
    id: Steps.AVAILABLE_PATCHES,
    name: 'Fetch Available Patches',
    entities: [Entities.AVAILABLE_PATCH],
    relationships: [Relationships.ENDPOINT_HAS_AVAILABLE_PATCH],
    mappedRelationships: [],
    dependsOn: [Steps.ENDPOINTS],
    executionHandler: fetchAvailablePatches,
  },
];

async function fetchAvailablePatches({
  instance,
  jobState,
}: IntegrationStepExecutionContext<IntegrationConfig>) {
  const client = createAPIClient(instance.config);

  await jobState.iterateEntities(
    { _type: Entities.ENDPOINT._type },
    async (endpointEntity) => {
      const createAvailablePatchEntity = buildAvailablePatchConverter(
        endpointEntity.computerId as string,
      );
      await client.iterateApplicablePatches(
        endpointEntity.computerId as string,
        async (applicablePatch) => {
          if (
            !applicablePatch.title ||
            applicablePatch.title === '[no results]'
          ) {
            return;
          }
          const availablePatchEntity =
            createAvailablePatchEntity(applicablePatch);
          if (!jobState.hasKey(availablePatchEntity._key)) {
            await jobState.addEntity(availablePatchEntity);
          }

          const relationship = createDirectRelationship({
            _class: RelationshipClass.HAS,
            from: endpointEntity,
            to: availablePatchEntity,
          });
          if (!jobState.hasKey(relationship._key)) {
            await jobState.addRelationship(relationship);
          }
        },
      );
    },
  );
}
