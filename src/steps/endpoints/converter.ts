import { createIntegrationEntity } from '@jupiterone/integration-sdk-core';
import { Endpoint } from '../../tanium/gql-types';
import { Entities } from '../constants';

export function createEndpointEntityKey(id: string) {
  return `${Entities.ENDPOINT._type}:${id}`;
}

export function createEndpointEntity(endpoint: Endpoint) {
  const macAddress = endpoint.macAddresses?.filter(
    (v) => v !== '[results currently unavailable]',
  );

  const { osVersion, osName } = parseOsDetails(endpoint.os.name);

  return createIntegrationEntity({
    entityData: {
      source: endpoint,
      assign: {
        _key: createEndpointEntityKey(endpoint.id),
        _class: Entities.ENDPOINT._class,
        _type: Entities.ENDPOINT._type,
        name: endpoint.name,
        displayName: endpoint.name,
        hostname: endpoint.name,
        model: endpoint.model,
        manufacturer: endpoint.manufacturer,
        namespace: endpoint.namespace,
        serial: endpoint.serialNumber,
        ipAddress: endpoint.ipAddresses ?? [endpoint.ipAddress],
        domainName: endpoint.domainName,
        macAddress,
        computerId: endpoint.computerID,
        systemUuid: endpoint.systemUUID,
        osName,
        systemLanguage: endpoint.os.language,
        platform: endpoint.os.platform.toLowerCase(),
        osVersion,
        riskScore: endpoint.risk?.totalScore,
        riskLevel: endpoint.risk?.riskLevel,
        criticalityScore: endpoint.risk?.criticalityScore,
        assetCriticality: endpoint.risk?.assetCriticality,
      },
    },
  });
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
