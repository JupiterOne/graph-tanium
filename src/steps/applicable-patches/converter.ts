import {
  createIntegrationEntity,
  parseTimePropertyValue,
} from '@jupiterone/integration-sdk-core';
import { Entities } from '../constants';
import formatKey from '../../utils/formatKey';

function createAvailablePatchKey(
  applicablePatch: ApplicablePatch,
  computerId: string,
) {
  return formatKey(
    `${Entities.AVAILABLE_PATCH._type}:${applicablePatch.title}:${computerId}`,
  );
}

export default function buildAvailablePatchConverter(computerId: string) {
  return function createAvailablePatchEntity(applicablePatch: ApplicablePatch) {
    return createIntegrationEntity({
      entityData: {
        source: applicablePatch,
        assign: {
          _key: createAvailablePatchKey(applicablePatch, computerId),
          _class: Entities.AVAILABLE_PATCH._class,
          _type: Entities.AVAILABLE_PATCH._type,
          displayName: applicablePatch.title,
          name: applicablePatch.title,
          installStatus: applicablePatch.installStatus,
          uninstallable: applicablePatch.uninstallable !== 'False',
          severity: applicablePatch.severity,
          releaseDate: parseTimePropertyValue(applicablePatch.releaseDate),
          bulletins: applicablePatch.bulletins,
          sizeInBytes: applicablePatch.sizeInBytes,
          kbArticles: applicablePatch.kbArticles,
          cveIds: applicablePatch.cveIds.split(' '),
          superseded: applicablePatch.superseded !== 'False',
          customField: applicablePatch.customField,
          osType: applicablePatch.osType,
          product: applicablePatch.product,
          classification: applicablePatch.classification,
          computerId,
        },
      },
    });
  };
}
