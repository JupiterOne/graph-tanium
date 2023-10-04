import {
  createIntegrationEntity,
  parseTimePropertyValue,
} from '@jupiterone/integration-sdk-core';
import { Entities } from '../constants';
import formatKey from '../../utils/formatKey';

function createInstalledPatchKey(
  installedPatch: InstalledPatch,
  computerId: string,
) {
  return formatKey(
    `${Entities.INSTALLED_PATCH._type}:${installedPatch.title}:${computerId}`,
  );
}

export default function buildInstalledPatchConverter(computerId: string) {
  return function createInstalledPatchEntity(installedPatch: InstalledPatch) {
    return createIntegrationEntity({
      entityData: {
        source: installedPatch,
        assign: {
          _key: createInstalledPatchKey(installedPatch, computerId),
          _class: Entities.INSTALLED_PATCH._class,
          _type: Entities.INSTALLED_PATCH._type,
          displayName: installedPatch.title,
          name: installedPatch.title,
          installedOn: parseTimePropertyValue(installedPatch.dateInstalled),
          installSource: installedPatch.installSource,
          computerId,
        },
      },
    });
  };
}
