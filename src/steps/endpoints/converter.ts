import { createIntegrationEntity } from '@jupiterone/integration-sdk-core';
import { AssetProductEndpoint } from '../../tanium/gql-types';
import { Entities } from '../constants';

export function createEndpointEntityKey(id: number) {
  return `${Entities.ENDPOINT._type}:${id}`;
}

export function createEndpointEntity(endpoint: AssetProductEndpoint) {
  if (endpoint.id) {
    return createIntegrationEntity({
      entityData: {
        source: endpoint,
        assign: {
          _key: createEndpointEntityKey(endpoint.id),
          _class: Entities.ENDPOINT._class,
          _type: Entities.ENDPOINT._type,
          id: endpoint.id.toString(),
          name: endpoint.computerName,
          displayName: endpoint.computerName || endpoint.id.toString(),
          hostname: endpoint.computerName,
          manufacturer: endpoint.manufacturer,
          serial: endpoint.serialNumber,
          ipAddress: endpoint.ipAddress,
          computerId: endpoint.computerId,
          // Our currently allowed platform options doesn't include "Mac" as reported by Tanium
          platform:
            endpoint.osPlatform == 'Mac'
              ? 'darwin'
              : endpoint.osPlatform?.toLowerCase(),
          osVersion: endpoint.operatingSystem,
        },
      },
    });
  }
}

export function parseOsDetails(name: string) {
  const splitName = name.split(' ');
  let matches: RegExpMatchArray | null | undefined;
  let i = splitName.length - 1;
  for (; i >= 0; i--) {
    matches = splitName[i].match(/\(?(\d+(?:\.\d+)*|\d+)\)?/);
    if (matches?.length) break;
  }

  return {
    osName: splitName.slice(0, i).join(' '),
    osVersion: matches?.pop(),
  };
}
