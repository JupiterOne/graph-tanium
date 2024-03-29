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
  ASSET_PRODUCT_ENDPOINTS_QUERY = `query assetProductEndpoints(
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
  INSTALLED_APPLICATIONS_QUERY = `query installedApplications($filter: EndpointFieldFilter) {
      endpoints(filter: $filter) {
        edges {
          node {
            computerID
            installedApplications {
              name
              version
              silentUninstallString
              uninstallable
            }
          }
        }
      }
    }`,
  APPLICABLE_PATCHES_QUERY = `query getApplicablePatches($filter: EndpointFieldFilter) {
    endpoints(filter: $filter) {
      edges {
        node {
          computerID
          sensorReadings(sensors:[{name:"Applicable Patches"}]) {
            columns {
              name
              values
            }
          }
        }
      }
    }
  }`,
  INSTALLED_PATCHES_QUERY = `query getPatchInstallationHistory($filter: EndpointFieldFilter) {
    endpoints(filter: $filter) {
      edges {
        node {
          computerID
          sensorReadings(
            sensors: [
              {
                name: "Patch Installation History"
                params: [
                  { name: "iAge", value: "90" }
                  { name: "showDate", value: "1" }
                  { name: "showOther", value: "1" }
                  { name: "showSCCM", value: "1" }
                  { name: "showTanium", value: "1" }
                  { name: "showWUSA", value: "1" }
                  { name: "showWU", value: "1" }
                ]
              }
  
            ]
          ) {
            columns {
              name
              values
            }
          }
        }
      }
    }
  }`,
}
