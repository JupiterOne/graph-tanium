/*
  configurationItem: ConfigurationItem
  primaryUser: EndpointUser!
  lastLoggedInUser: String!
  isVirtual: Boolean
  isEncrypted: Boolean
  chassisType: String!
  os: EndpointOS!
  disks: [EndpointDisk!]
  memory: Memory!
  processor: Processor!
  networking: Networking!
  eventCounts: EndpointEventCounts!
  services: [EndpointService!]!
  installedApplications(filter: FieldFilter): [EndpointInstalledApplication!]!
  deployedSoftwarePackages(filter: FieldFilter): [EndpointDeploySoftwarePackage!]!
  sensorReadings(sensors: [EndpointSensorRef!]!, includeHiddenColumns: Boolean! = false): EndpointSensorReadings!
  compliance: EndpointCompliance
  discover: EndpointDiscover
  risk: EndpointRisk
  configurationItem: ConfigurationItem
  sentinel: EndpointSentinel!
    */

/* endpoints(after: Cursor, first: Int = 20, before: Cursor, last: Int, filter: EndpointFieldFilter, source: EndpointSource, refresh: Cursor): EndpointConnection*/
export enum Queries {
  ENDPOINT_QUERY = `query assetProductEndpoints(
      $after: Cursor,
      $first: Int,
      $filter: AssetProductEndpointsFilter,
    ) {
      assetProductEndpoints(
        after: $after,
        first: $first,
        filter: $filter,
      ) {
        edges {
          node {
            computerId
            computerName
            createdAt
            eid
            id
            ipAddress
            manufacturer
            operatingSystem
            osPlatform
            serialNumber
            servicePack
            updatedAt
            userName
          }
          cursor
        }
        pageInfo {
          startCursor
          hasNextPage
          hasPreviousPage
          endCursor
        }
        totalCount
      }
    }`,
  APPLICATION_QUERY = `query assetProducts(
      $after: Cursor,
      $first: Int,
      $filter: AssetProductsFilter,
    ) {
      assetProducts(
        after: $after,
        first: $first,
        filter: $filter,
      ) {
        edges {
          node {
            vendor
            name
            installation {
              installedCount
              usedCount
              unusedCount
              pendingUsage
            }
            tracking {
              state
              reportingPeriodDays
              normalMinutesUsedPerDay
              highMinutesUsedPerDay
              baselinePeriodDays
            }
            usage {
              usageNotDetected
              notInstalled
              baselining
              limited
              normal
              high
            }
            versions {
              version
              installs
            }
          }
          cursor
        }
        pageInfo {
          startCursor
          hasNextPage
          hasPreviousPage
          endCursor
        }
        totalCount
      }
    }`,
}
