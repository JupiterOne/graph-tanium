import { createIntegrationEntity } from '@jupiterone/integration-sdk-core';
import { EndpointInstalledApplication } from '../../tanium/gql-types';
import { Entities } from '../constants';
import formatKey from '../../utils/formatKey';

function createInstalledApplicationKey(
  installedApplication: EndpointInstalledApplication,
  computerId: string,
) {
  return formatKey(
    `${Entities.INSTALLED_APPLICATION._type}:${installedApplication.name}:${installedApplication.version}:${computerId}`,
  );
}

export default function buildInstalledApplicationConverter(computerId: string) {
  return function createInstalledApplicationEntity(
    installedApplication: EndpointInstalledApplication,
  ) {
    return createIntegrationEntity({
      entityData: {
        source: installedApplication,
        assign: {
          _key: createInstalledApplicationKey(installedApplication, computerId),
          _class: Entities.INSTALLED_APPLICATION._class,
          _type: Entities.INSTALLED_APPLICATION._type,
          displayName: installedApplication.name,
          name: installedApplication.name,
          version: installedApplication.version,
          silentUninstallString: installedApplication.silentUninstallString,
          uninstallable: installedApplication.uninstallable,
          computerId,
        },
      },
    });
  };
}
