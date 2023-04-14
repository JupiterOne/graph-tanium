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

export enum Queries {
  ENDPOINT_QUERY = `query endpoints(
      $after: Cursor,
      $first: Int,
      $before: Cursor,
      $last: Int,
      $filter: EndpointFieldFilter,
      $source: EndpointSource,
      $refresh: Cursor
    ) {
      endpoints(
        after: $after,
        first: $first,
        before: $before,
        last: $last,
        filter: $filter,
        source: $source,
        refresh: $refresh
      ) {
        edges {
          node {
            id
            eidFirstSeen
            eidLastSeen
            namespace
            computerID
            systemUUID
            name
            domainName
            serialNumber
            manufacturer
            model
            ipAddress
            ipAddresses
            macAddresses
          }
        }
        pageInfo {
          hasNextPage
          endCursor
        }
        totalRecords
        collectionInfo {
          active
          success
          expectedTotal
          respondedTotal
          contributedTotal
          respondedPercentage
          startCursor
        }
     }
    }`,
}
