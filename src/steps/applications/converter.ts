import {
  createIntegrationEntity,
  Entity,
} from '@jupiterone/integration-sdk-core';
import { AssetProduct } from '../../tanium/gql-types';
import { Entities } from '../constants';
import formatKey from '../../utils/formatKey';

export function createApplicationEntityKey({ name, vendor }: AssetProduct) {
  return formatKey(`${Entities.APPLICATION._type}:${vendor}:${name}`);
}

export function createApplicationVersionEntityKey(
  vendor: string,
  name: string,
  version: string,
) {
  return formatKey(`${Entities.VERSION._type}:${vendor}:${name}:${version}`);
}

export function createApplicationEntity(application: AssetProduct) {
  return createIntegrationEntity({
    entityData: {
      source: application,
      assign: {
        _key: createApplicationEntityKey(application),
        _class: Entities.APPLICATION._class,
        _type: Entities.APPLICATION._type,
        name: application.name,
        displayName: application.name,
        installedCount: application.installation?.installedCount,
        pendingUsage: application.installation?.pendingUsage,
        usedCount: application.installation?.usedCount,
        unusedCount: application.installation?.unusedCount,
        trackingState: application.tracking?.state,
        baselinePeriodDays: application.tracking?.baselinePeriodDays,
        highMinutesUsedPerDay: application.tracking?.highMinutesUsedPerDay,
        normalMinutesUsedPerDay: application.tracking?.normalMinutesUsedPerDay,
        reportingPeriodDays: application.tracking?.reportingPeriodDays,
        notInstalledCount: application.usage?.notInstalled,
        baselineUsageCount: application.usage?.baselining,
        highUsageCount: application.usage?.high,
        normalUsageCount: application.usage?.normal,
        limitedUsageCount: application.usage?.limited,
        usageNotDetectedCount: application.usage?.usageNotDetected,
        vendor: application.vendor,
      },
    },
  });
}

export function createVersionEntities(application: AssetProduct) {
  if (application.versions) {
    const applicationEntities: Entity[] = [];
    for (const version of application.versions) {
      applicationEntities.push(
        createIntegrationEntity({
          entityData: {
            source: application,
            assign: {
              _key: createApplicationVersionEntityKey(
                application.vendor,
                application.name,
                version.version,
              ),
              _class: Entities.VERSION._class,
              _type: Entities.VERSION._type,
              name: application.name,
              displayName: application.name,
              version: version.version,
              installedCount: version.installs,
            },
          },
        }),
      );
    }
    return applicationEntities;
  }
}
