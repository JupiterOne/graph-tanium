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
        osName: endpoint.os.name,
        systemLanguage: endpoint.os.language,
        platform: endpoint.os.platform.toLowerCase(),
        osVersion:
          endpoint.os.platform === 'Windows'
            ? endpoint.os.windows?.majorVersion
            : versionNumFromOsName(endpoint.os.name),
        riskScore: endpoint.risk?.totalScore,
        riskLevel: endpoint.risk?.riskLevel,
        criticalityScore: endpoint.risk?.criticalityScore,
        assetCriticality: endpoint.risk?.assetCriticality,
      },
    },
  });
}

const versionNumberRegex = new RegExp(/\b\w*\(*\d+(\.\d+)*\)*\b/);
function versionNumFromOsName(name: string): string | undefined {
  const osVersionArr = versionNumberRegex.exec(name);
  return osVersionArr?.length ? osVersionArr[0] : undefined;
}
