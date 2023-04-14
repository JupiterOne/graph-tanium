export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Any: any;
  Cursor: any;
  Date: any;
  DateTimeComponent: any;
  JSONNumber: any;
  Map: any;
  ParameterDefinitionType: any;
  Time: any;
};

export type ApiToken = {
  __typename?: 'APIToken';
  created: Scalars['Time'];
  expiration: Scalars['Time'];
  id: Scalars['ID'];
  lastUsed: Scalars['Time'];
  notes: Scalars['String'];
  persona?: Maybe<Persona>;
  tokenString?: Maybe<Scalars['String']>;
  trustedIPAddresses: Array<Scalars['String']>;
};

export type ApiTokenGrantInput = {
  expiresInDays?: InputMaybe<Scalars['Int']>;
  notes?: InputMaybe<Scalars['String']>;
  personaName?: InputMaybe<Scalars['String']>;
  trustedIPAddresses: Array<Scalars['String']>;
};

export type ApiTokenGrantPayload = {
  __typename?: 'APITokenGrantPayload';
  error?: Maybe<SystemError>;
  token?: Maybe<ApiToken>;
};

export type ApiTokenQueryPayload = {
  __typename?: 'APITokenQueryPayload';
  error?: Maybe<SystemError>;
  tokens?: Maybe<Array<ApiToken>>;
};

export type ApiTokenRevokeInput = {
  id: Scalars['ID'];
};

export type ApiTokenRevokePayload = {
  __typename?: 'APITokenRevokePayload';
  error?: Maybe<SystemError>;
};

export type ApiTokenRotateInput = {
  tokenString: Scalars['String'];
};

export type ApiTokenRotatePayload = {
  __typename?: 'APITokenRotatePayload';
  error?: Maybe<SystemError>;
  token?: Maybe<ApiToken>;
};

export type Action = {
  __typename?: 'Action';
  approver?: Maybe<Principal>;
  comment: Scalars['String'];
  creationTime?: Maybe<Scalars['Time']>;
  creator: Principal;
  distributeSeconds?: Maybe<Scalars['Int']>;
  expirationTime?: Maybe<Scalars['Time']>;
  expireSeconds?: Maybe<Scalars['Int']>;
  id: Scalars['ID'];
  metadata: Array<Metadata>;
  name: Scalars['String'];
  package: PackageRef;
  results: ActionResults;
  scheduledAction?: Maybe<ScheduledAction>;
  startTime?: Maybe<Scalars['Time']>;
  status?: Maybe<ActionStatus>;
  stopped: Scalars['Boolean'];
  stoppedFlag?: Maybe<Scalars['Boolean']>;
  targets: ActionTargets;
};

export type ActionActionGroupInput = {
  id?: InputMaybe<Scalars['ID']>;
  name?: InputMaybe<Scalars['String']>;
};

export type ActionChangeClientSetting = {
  name: SettingName;
  value: Scalars['Any'];
};

export type ActionCollectAd = {
  minimumMinutesBetweenRuns?: InputMaybe<Scalars['Int']>;
};

export type ActionCreateInput = {
  comment?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  package: PackageRefInput;
  schedule?: InputMaybe<ActionScheduleInput>;
  targets: ActionTargetsInput;
};

export type ActionCreatePayload = {
  __typename?: 'ActionCreatePayload';
  action?: Maybe<Action>;
  error?: Maybe<SystemError>;
};

export type ActionGroup = {
  __typename?: 'ActionGroup';
  any: Scalars['Boolean'];
  computerGroups: Array<ComputerGroup>;
  id: Scalars['ID'];
  name: Scalars['String'];
  userGroups?: Maybe<Array<NamedRef>>;
  visibility: ActionGroupVisibility;
};

export type ActionGroupConnection = Connection & {
  __typename?: 'ActionGroupConnection';
  edges: Array<ActionGroupEdge>;
  pageInfo: PageInfo;
  totalRecords: Scalars['Int'];
};

export type ActionGroupCreateInput = {
  any?: Scalars['Boolean'];
  computerGroups: Array<NamedRefInput>;
  name: Scalars['String'];
  userGroups?: InputMaybe<Array<NamedRefInput>>;
  visibility: ActionGroupVisibility;
};

export type ActionGroupCreatePayload = {
  __typename?: 'ActionGroupCreatePayload';
  error?: Maybe<SystemError>;
  group?: Maybe<ActionGroup>;
};

export type ActionGroupDeletePayload = {
  __typename?: 'ActionGroupDeletePayload';
  error?: Maybe<SystemError>;
  id?: Maybe<Scalars['ID']>;
};

export type ActionGroupEdge = Edge & {
  __typename?: 'ActionGroupEdge';
  cursor: Scalars['Cursor'];
  node: ActionGroup;
};

export enum ActionGroupVisibility {
  Admin = 'ADMIN',
  All = 'ALL',
  UserGroups = 'USER_GROUPS',
}

export type ActionInfo = {
  __typename?: 'ActionInfo';
  id: Scalars['ID'];
};

export type ActionInput = {
  _dev_action?: InputMaybe<DevAction>;
  changeClientSetting?: InputMaybe<ActionChangeClientSetting>;
  collectActiveDirectoryInfo?: InputMaybe<ActionCollectAd>;
  description?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  reboot?: InputMaybe<ActionReboot>;
  replaceExisting?: InputMaybe<Scalars['Boolean']>;
  restartService?: InputMaybe<ActionService>;
  schedule?: InputMaybe<ActionSchedule>;
  startService?: InputMaybe<ActionService>;
  stopService?: InputMaybe<ActionService>;
  target?: InputMaybe<ActionTarget>;
};

export type ActionOperationChangeClientSettingInput = {
  name: ActionOperationChangeClientSettingName;
  value: Scalars['String'];
};

export enum ActionOperationChangeClientSettingName {
  HotCachePercentage = 'HotCachePercentage',
  LogVerbosityLevel = 'LogVerbosityLevel',
  RandomSensorDelayInSeconds = 'RandomSensorDelayInSeconds',
  StateProtectedFlag = 'StateProtectedFlag',
}

export type ActionOperationCollectActiveDirectoryInfoInput = {
  minimumMinutesBetweenRuns?: InputMaybe<Scalars['Int']>;
};

export type ActionOperationInput = {
  addTags?: InputMaybe<Array<Scalars['String']>>;
  changeClientSetting?: InputMaybe<ActionOperationChangeClientSettingInput>;
  collectActiveDirectoryInfo?: InputMaybe<ActionOperationCollectActiveDirectoryInfoInput>;
  reboot?: InputMaybe<ActionOperationRebootInput>;
  removeTags?: InputMaybe<Array<Scalars['String']>>;
  restartService?: InputMaybe<Scalars['String']>;
  startService?: InputMaybe<Scalars['String']>;
  stopService?: InputMaybe<Scalars['String']>;
};

export type ActionOperationRebootInput = {
  randomDelaySeconds?: InputMaybe<Scalars['Int']>;
};

export type ActionPerformInput = {
  comment?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  operation?: InputMaybe<ActionOperationInput>;
  package?: InputMaybe<PackageRefInput>;
  schedule?: InputMaybe<ActionPerformScheduleInput>;
  targets: ActionTargetsInput;
};

export type ActionPerformPayload = {
  __typename?: 'ActionPerformPayload';
  error?: Maybe<SystemError>;
  scheduledActions?: Maybe<Array<ActionPerformPlatform>>;
};

export type ActionPerformPlatform = {
  __typename?: 'ActionPerformPlatform';
  platforms?: Maybe<Array<EndpointPlatform>>;
  scheduledAction: ScheduledAction;
};

export type ActionPerformScheduleInput = {
  distributeSeconds?: InputMaybe<Scalars['Int']>;
  endTime?: InputMaybe<Scalars['Time']>;
  expireSeconds?: InputMaybe<Scalars['Int']>;
  reissueSeconds?: InputMaybe<Scalars['Int']>;
  startTime?: InputMaybe<Scalars['Time']>;
};

export type ActionReboot = {
  randomDelaySeconds?: InputMaybe<Scalars['Int']>;
};

export type ActionResults = {
  __typename?: 'ActionResults';
  completed: Scalars['Int'];
  downloading: Scalars['Int'];
  expired: Scalars['Int'];
  failed: Scalars['Int'];
  failedVerification: Scalars['Int'];
  id: Scalars['ID'];
  pendingVerification: Scalars['Int'];
  running: Scalars['Int'];
  verified: Scalars['Int'];
  waiting: Scalars['Int'];
  waitingToRetry: Scalars['Int'];
};

export type ActionSchedule = {
  distributeOverSeconds?: InputMaybe<Scalars['Int']>;
  end?: InputMaybe<Scalars['Time']>;
  reissueSeconds?: InputMaybe<Scalars['Int']>;
  start?: InputMaybe<Scalars['Time']>;
};

export type ActionScheduleInput = {
  distributeSeconds?: InputMaybe<Scalars['Int']>;
  expireSeconds?: InputMaybe<Scalars['Int']>;
  startTime?: InputMaybe<Scalars['Time']>;
};

export type ActionService = {
  name: Scalars['String'];
};

export enum ActionStatus {
  Active = 'ACTIVE',
  Expired = 'EXPIRED',
  Open = 'OPEN',
  Pending = 'PENDING',
  Stopped = 'STOPPED',
}

export type ActionStopPayload = {
  __typename?: 'ActionStopPayload';
  error?: Maybe<SystemError>;
  id?: Maybe<Scalars['ID']>;
};

export type ActionTarget = {
  actionGroup?: InputMaybe<Scalars['String']>;
  endpoints?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  platforms?: InputMaybe<Array<EndpointPlatform>>;
  targetGroup?: InputMaybe<Scalars['String']>;
};

export type ActionTargetGroupInput = {
  filter?: InputMaybe<ComputerGroupFilter>;
  id?: InputMaybe<Scalars['ID']>;
  name?: InputMaybe<Scalars['String']>;
};

export type ActionTargets = {
  __typename?: 'ActionTargets';
  actionGroup: NamedRef;
  targetGroup: NamedRef;
};

export type ActionTargetsInput = {
  actionGroup?: InputMaybe<ActionActionGroupInput>;
  endpoints?: InputMaybe<Array<Scalars['ID']>>;
  platforms?: InputMaybe<Array<EndpointPlatform>>;
  targetGroup?: InputMaybe<ActionTargetGroupInput>;
};

export type Asset = {
  configurationItem?: Maybe<ConfigurationItem>;
  id: Scalars['ID'];
  manufacturer: Scalars['String'];
  model: Scalars['String'];
  name: Scalars['String'];
  serialNumber: Scalars['String'];
};

export type AssetImportPayload = {
  __typename?: 'AssetImportPayload';
  id?: Maybe<Scalars['Int']>;
  index: Scalars['Int'];
  status: AssetImportStatus;
};

export enum AssetImportStatus {
  Created = 'Created',
  ErrorDuplicateItemInProcess = 'ErrorDuplicateItemInProcess',
  ErrorInvalidState = 'ErrorInvalidState',
  ErrorMissingKey = 'ErrorMissingKey',
  NoChange = 'NoChange',
  Updated = 'Updated',
}

export type AssetPagination = {
  __typename?: 'AssetPagination';
  items: Array<Maybe<Asset>>;
  pageInfo: PaginationInfo;
};

export type AssetProduct = {
  __typename?: 'AssetProduct';
  installation?: Maybe<AssetProductInstallation>;
  name: Scalars['String'];
  tracking?: Maybe<AssetProductTracking>;
  usage?: Maybe<AssetProductUsage>;
  vendor: Scalars['String'];
  versions?: Maybe<Array<AssetProductVersion>>;
};

export type AssetProductConnection = Connection & {
  __typename?: 'AssetProductConnection';
  edges: Array<Maybe<AssetProductEdge>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type AssetProductEdge = Edge & {
  __typename?: 'AssetProductEdge';
  cursor: Scalars['Cursor'];
  node: AssetProduct;
};

export type AssetProductEndpoint = {
  __typename?: 'AssetProductEndpoint';
  computerId?: Maybe<Scalars['String']>;
  computerName?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Time']>;
  eid?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  ipAddress?: Maybe<Scalars['String']>;
  manufacturer?: Maybe<Scalars['String']>;
  operatingSystem?: Maybe<Scalars['String']>;
  osPlatform?: Maybe<Scalars['String']>;
  serialNumber?: Maybe<Scalars['String']>;
  servicePack?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['Time']>;
  userName?: Maybe<Scalars['String']>;
};

export type AssetProductEndpointConnection = Connection & {
  __typename?: 'AssetProductEndpointConnection';
  edges: Array<Maybe<AssetProductEndpointEdge>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type AssetProductEndpointEdge = Edge & {
  __typename?: 'AssetProductEndpointEdge';
  cursor: Scalars['Cursor'];
  node: AssetProductEndpoint;
};

export type AssetProductEndpointsFilter = {
  name?: InputMaybe<Scalars['String']>;
  usage?: InputMaybe<AssetProductUsageEnum>;
  vendor?: InputMaybe<Scalars['String']>;
  version?: InputMaybe<Scalars['String']>;
};

export type AssetProductInstallation = {
  __typename?: 'AssetProductInstallation';
  installedCount?: Maybe<Scalars['Int']>;
  pendingUsage?: Maybe<Scalars['Int']>;
  unusedCount?: Maybe<Scalars['Int']>;
  usedCount?: Maybe<Scalars['Int']>;
};

export enum AssetProductState {
  Cataloged = 'Cataloged',
  Ignored = 'Ignored',
  Tracked = 'Tracked',
}

export type AssetProductTracking = {
  __typename?: 'AssetProductTracking';
  baselinePeriodDays?: Maybe<Scalars['Int']>;
  highMinutesUsedPerDay?: Maybe<Scalars['Int']>;
  normalMinutesUsedPerDay?: Maybe<Scalars['Int']>;
  reportingPeriodDays?: Maybe<Scalars['Int']>;
  state?: Maybe<AssetProductState>;
};

export type AssetProductTrackingInput = {
  baselinePeriodDays: Scalars['Int'];
  highMinutesUsedPerDay: Scalars['Int'];
  normalMinutesUsedPerDay: Scalars['Int'];
  reportingPeriodDays: Scalars['Int'];
  state: AssetProductState;
};

export type AssetProductUsage = {
  __typename?: 'AssetProductUsage';
  baselining: Scalars['Int'];
  high: Scalars['Int'];
  limited: Scalars['Int'];
  normal: Scalars['Int'];
  notInstalled: Scalars['Int'];
  usageNotDetected: Scalars['Int'];
};

export enum AssetProductUsageEnum {
  Baselining = 'Baselining',
  High = 'High',
  Limited = 'Limited',
  Normal = 'Normal',
  NotInstalled = 'NotInstalled',
  UsageNotDetected = 'UsageNotDetected',
}

export type AssetProductVersion = {
  __typename?: 'AssetProductVersion';
  installs: Scalars['Int'];
  version: Scalars['String'];
};

export type AssetProductsFilter = {
  search?: InputMaybe<Scalars['String']>;
  states?: InputMaybe<Array<AssetProductState>>;
  vendors?: InputMaybe<Array<Scalars['String']>>;
};

export type AssetProductsInput = {
  name: Scalars['String'];
  tracking: AssetProductTrackingInput;
  vendor: Scalars['String'];
};

export type AssetProductsPayload = {
  __typename?: 'AssetProductsPayload';
  products?: Maybe<Array<AssetProductsResult>>;
};

export type AssetProductsResult = {
  __typename?: 'AssetProductsResult';
  failureReason?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  tracking?: Maybe<AssetProductTracking>;
  vendor?: Maybe<Scalars['String']>;
};

export type AssetsImportInput = {
  json: Scalars['String'];
  sourceName: Scalars['String'];
};

export type AssetsImportPayload = {
  __typename?: 'AssetsImportPayload';
  assets?: Maybe<Array<AssetImportPayload>>;
};

export type BlobCategoryPayload = {
  __typename?: 'BlobCategoryPayload';
  contentSetID: Scalars['Int'];
  domain: Scalars['ID'];
  name: Scalars['ID'];
  permissionType: PermissionType;
  retentionPolicy: RetentionType;
};

export type BlobMetadata = {
  __typename?: 'BlobMetadata';
  category: Scalars['ID'];
  domain: Scalars['ID'];
  expiration?: Maybe<Scalars['Time']>;
  key: Scalars['ID'];
  lastModified?: Maybe<Scalars['Time']>;
  size?: Maybe<Scalars['Int']>;
};

export type CiEntity = {
  category: EntityCategory;
  comments?: Maybe<Scalars['String']>;
  created: Scalars['Time'];
  details?: Maybe<Scalars['Map']>;
  id: Scalars['ID'];
  name: Scalars['String'];
  private: Scalars['Boolean'];
  updated: Scalars['Time'];
};

export type Class = CiEntity & {
  __typename?: 'Class';
  category: EntityCategory;
  comments?: Maybe<Scalars['String']>;
  created: Scalars['Time'];
  details?: Maybe<Scalars['Map']>;
  id: Scalars['ID'];
  name: Scalars['String'];
  private: Scalars['Boolean'];
  updated: Scalars['Time'];
};

export type ClassDetailsArgs = {
  schemaVersion?: InputMaybe<Scalars['String']>;
};

export type CloseDirectConnectionInput = {
  connectionID: Scalars['ID'];
};

export type CloseDirectConnectionPayload = {
  __typename?: 'CloseDirectConnectionPayload';
  result: Scalars['Boolean'];
};

export type ComputerGroup = {
  __typename?: 'ComputerGroup';
  contentSet?: Maybe<NamedRef>;
  expression: Scalars['String'];
  filterEnabled: Scalars['Boolean'];
  id: Scalars['ID'];
  managementRightsEnabled: Scalars['Boolean'];
  name: Scalars['String'];
  type: ComputerGroupType;
};

export type ComputerGroupConnection = Connection & {
  __typename?: 'ComputerGroupConnection';
  edges: Array<ComputerGroupEdge>;
  pageInfo: PageInfo;
  totalRecords: Scalars['Int'];
};

export type ComputerGroupCreateInput = {
  contentSetRef?: InputMaybe<NamedRefInput>;
  filter: ComputerGroupFilter;
  managementRightsEnabled: Scalars['Boolean'];
  name: Scalars['String'];
};

export type ComputerGroupCreatePayload = {
  __typename?: 'ComputerGroupCreatePayload';
  error?: Maybe<SystemError>;
  group?: Maybe<ComputerGroup>;
};

export type ComputerGroupDeletePayload = {
  __typename?: 'ComputerGroupDeletePayload';
  error?: Maybe<SystemError>;
  id?: Maybe<Scalars['ID']>;
};

export type ComputerGroupEdge = Edge & {
  __typename?: 'ComputerGroupEdge';
  cursor: Scalars['Cursor'];
  node: ComputerGroup;
};

export type ComputerGroupFilter = {
  any?: Scalars['Boolean'];
  filters?: InputMaybe<Array<ComputerGroupFilter>>;
  memberOf?: InputMaybe<EndpointFieldFilterComputerGroup>;
  negated?: Scalars['Boolean'];
  op?: FieldFilterOp;
  sensor?: InputMaybe<EndpointFieldFilterSensor>;
  value?: InputMaybe<Scalars['String']>;
};

export enum ComputerGroupType {
  Manual = 'MANUAL',
  Standard = 'STANDARD',
}

export type ComputerGroupsFilter = {
  filterEnabled?: InputMaybe<Scalars['Boolean']>;
  managementRightsEnabled?: InputMaybe<Scalars['Boolean']>;
  type?: InputMaybe<ComputerGroupType>;
};

export type ConfigurationItem = {
  __typename?: 'ConfigurationItem';
  entityClassIDs: Array<Scalars['ID']>;
  entityID: Scalars['ID'];
  namespace: Scalars['String'];
};

export type ConfigurationItemEntityConnection = Connection & {
  __typename?: 'ConfigurationItemEntityConnection';
  edges: Array<Maybe<ConfigurationItemEntityEdge>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type ConfigurationItemEntityEdge = Edge & {
  __typename?: 'ConfigurationItemEntityEdge';
  cursor: Scalars['Cursor'];
  node: CiEntity;
};

export type ConfigurationItemProperties = {
  __typename?: 'ConfigurationItemProperties';
  customerItemsLimit?: Maybe<Scalars['Int']>;
  userSpecifiedAssetsMaxAge?: Maybe<Scalars['Int']>;
};

export type ConfigurationItemRelationshipConnection = Connection & {
  __typename?: 'ConfigurationItemRelationshipConnection';
  edges: Array<Maybe<ConfigurationItemRelationshipEdge>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type ConfigurationItemRelationshipEdge = Edge & {
  __typename?: 'ConfigurationItemRelationshipEdge';
  cursor: Scalars['Cursor'];
  node: Relationship;
};

export enum ConnectedState {
  Connected = 'CONNECTED',
  Disconnected = 'DISCONNECTED',
  Unknown = 'UNKNOWN',
}

export type Connection = {
  edges: Array<Maybe<Edge>>;
  pageInfo: PageInfo;
};

export type CreateBlobCategoryInput = {
  contentSetID: Scalars['Int'];
  domain: Scalars['ID'];
  name: Scalars['ID'];
  permissionType: PermissionType;
  retentionPolicy: RetentionType;
};

export type DefaultRangeEnd = {
  __typename?: 'DefaultRangeEnd';
  interval?: Maybe<Scalars['Int']>;
  intervalCount?: Maybe<Scalars['Int']>;
  model: Scalars['ParameterDefinitionType'];
  parameterType: Scalars['ParameterDefinitionType'];
  type?: Maybe<Scalars['DateTimeComponent']>;
  unixTimeStamp?: Maybe<Scalars['Int']>;
};

export type DeleteActionInput = {
  name: Scalars['String'];
};

export type DeleteConfigurationItemElementInput = {
  id: Scalars['ID'];
};

export type DeleteConfigurationItemElementResult = {
  __typename?: 'DeleteConfigurationItemElementResult';
  error?: Maybe<Scalars['String']>;
};

export type DeleteRelationshipInput = {
  ids: Array<Scalars['ID']>;
};

export type DevAction = {
  packageName: Scalars['String'];
  parameters?: InputMaybe<Scalars['Map']>;
};

export type DirectConnect = {
  __typename?: 'DirectConnect';
  alerts?: Maybe<DirectConnectAlerts>;
  performance?: Maybe<DirectConnectPerf>;
  processes?: Maybe<DirectConnectProcesses>;
};

export type DirectConnectAlertScope = {
  endTime?: InputMaybe<Scalars['Time']>;
  startTime: Scalars['Time'];
};

export type DirectConnectAlerts = {
  __typename?: 'DirectConnectAlerts';
  all?: Maybe<Array<EndpointAlert>>;
};

export type DirectConnectAlertsAllArgs = {
  scope?: InputMaybe<DirectConnectAlertScope>;
};

export type DirectConnectPerf = {
  __typename?: 'DirectConnectPerf';
  _dev_query?: Maybe<Array<EndpointMetric>>;
  cpuUsagePercent: Scalars['Float'];
  memoryUsedPercent: Scalars['Float'];
};

export type DirectConnectPerf_Dev_QueryArgs = {
  query: PerfQuery;
};

export type DirectConnectProcesses = {
  __typename?: 'DirectConnectProcesses';
  all?: Maybe<Array<Process>>;
};

export type DiskSpace = {
  __typename?: 'DiskSpace';
  free: Scalars['String'];
  total: Scalars['String'];
  usedPercentage: Scalars['String'];
  usedSpace: Scalars['String'];
};

export type DownloadBlobUrlInput = {
  category: Scalars['ID'];
  domain: Scalars['ID'];
  key: Scalars['ID'];
  responseHeaderCacheControl?: InputMaybe<Scalars['String']>;
  responseHeaderContentDisposition?: InputMaybe<Scalars['String']>;
  responseHeaderContentType?: InputMaybe<Scalars['String']>;
  responseHeaderExpires?: InputMaybe<Scalars['String']>;
};

export type DownloadBlobUrlPayload = {
  __typename?: 'DownloadBlobURLPayload';
  exists: Scalars['Boolean'];
  url: Scalars['String'];
};

export type Edge = {
  cursor: Scalars['Cursor'];
};

export enum EdgeDirection {
  AtoB = 'AtoB',
  Bidirectional = 'Bidirectional',
  BtoA = 'BtoA',
}

export type Element = CiEntity & {
  __typename?: 'Element';
  category: EntityCategory;
  classes?: Maybe<EntityPagination>;
  comments?: Maybe<Scalars['String']>;
  created: Scalars['Time'];
  details?: Maybe<Scalars['Map']>;
  eid?: Maybe<Scalars['ID']>;
  entityClassIDs: Array<Scalars['ID']>;
  id: Scalars['ID'];
  name: Scalars['String'];
  namespace: Scalars['String'];
  private: Scalars['Boolean'];
  updated: Scalars['Time'];
};

export type ElementClassesArgs = {
  page?: InputMaybe<Scalars['Int']>;
  perPage?: InputMaybe<Scalars['Int']>;
};

export type ElementDetailsArgs = {
  schemaVersion?: InputMaybe<Scalars['String']>;
};

export type Endpoint = Asset & {
  __typename?: 'Endpoint';
  chassisType: Scalars['String'];
  compliance?: Maybe<EndpointCompliance>;
  computerID: Scalars['String'];
  configurationItem?: Maybe<ConfigurationItem>;
  deployedSoftwarePackages: Array<EndpointDeploySoftwarePackage>;
  discover?: Maybe<EndpointDiscover>;
  disks?: Maybe<Array<EndpointDisk>>;
  domainName: Scalars['String'];
  eidFirstSeen?: Maybe<Scalars['Time']>;
  eidLastSeen?: Maybe<Scalars['Time']>;
  eventCounts: EndpointEventCounts;
  id: Scalars['ID'];
  installedApplications: Array<EndpointInstalledApplication>;
  ipAddress: Scalars['String'];
  ipAddresses?: Maybe<Array<Scalars['String']>>;
  isEncrypted?: Maybe<Scalars['Boolean']>;
  isVirtual?: Maybe<Scalars['Boolean']>;
  lastLoggedInUser: Scalars['String'];
  macAddresses?: Maybe<Array<Scalars['String']>>;
  manufacturer: Scalars['String'];
  memory: Memory;
  model: Scalars['String'];
  name: Scalars['String'];
  namespace: Scalars['String'];
  networking: Networking;
  os: EndpointOs;
  primaryUser: EndpointUser;
  processor: Processor;
  risk?: Maybe<EndpointRisk>;
  sensorReadings: EndpointSensorReadings;
  sentinel: EndpointSentinel;
  serialNumber: Scalars['String'];
  services: Array<EndpointService>;
  systemUUID: Scalars['String'];
};

export type EndpointDeployedSoftwarePackagesArgs = {
  filter?: InputMaybe<FieldFilter>;
};

export type EndpointInstalledApplicationsArgs = {
  filter?: InputMaybe<FieldFilter>;
};

export type EndpointSensorReadingsArgs = {
  includeHiddenColumns?: Scalars['Boolean'];
  sensors: Array<EndpointSensorRef>;
};

export type EndpointAlert = {
  __typename?: 'EndpointAlert';
  evidence?: Maybe<Array<EndpointAlertEvidence>>;
  evidenceToGather?: Maybe<Array<Scalars['String']>>;
  firing?: Maybe<Scalars['Boolean']>;
  key?: Maybe<Scalars['String']>;
  labels?: Maybe<Scalars['Map']>;
  leadup?: Maybe<Scalars['Int']>;
  pendingAt?: Maybe<Scalars['Time']>;
  ref?: Maybe<Scalars['String']>;
  resolvedAt?: Maybe<Scalars['Time']>;
  schema: Scalars['Int'];
  start?: Maybe<Scalars['Time']>;
  topProcessesExpr?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['Float']>;
};

export type EndpointAlertEvidence = {
  __typename?: 'EndpointAlertEvidence';
  name?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
  values?: Maybe<Array<Maybe<EndpointAlertEvidenceValues>>>;
};

export type EndpointAlertEvidenceValues = {
  __typename?: 'EndpointAlertEvidenceValues';
  labels?: Maybe<Scalars['Map']>;
  value?: Maybe<Scalars['Float']>;
};

export type EndpointCollectionInfo = {
  __typename?: 'EndpointCollectionInfo';
  active: Scalars['Boolean'];
  contributedTotal: Scalars['Int'];
  expectedTotal?: Maybe<Scalars['Int']>;
  respondedPercentage?: Maybe<Scalars['Float']>;
  respondedTotal?: Maybe<Scalars['Int']>;
  startCursor?: Maybe<Scalars['Cursor']>;
  success: Scalars['Boolean'];
};

export type EndpointCompliance = {
  __typename?: 'EndpointCompliance';
  complianceFindings?: Maybe<Array<EndpointComplianceComplianceFinding>>;
  cveFindings?: Maybe<Array<EndpointComplianceCveFinding>>;
};

export type EndpointComplianceComplianceFindingsArgs = {
  filter?: InputMaybe<FieldFilter>;
};

export type EndpointComplianceCveFindingsArgs = {
  filter?: InputMaybe<FieldFilter>;
};

export type EndpointComplianceComplianceFinding = {
  __typename?: 'EndpointComplianceComplianceFinding';
  category?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  profile?: Maybe<Scalars['String']>;
  profileVersion?: Maybe<Scalars['String']>;
  rule?: Maybe<Scalars['String']>;
  ruleId?: Maybe<Scalars['String']>;
  standard?: Maybe<Scalars['String']>;
  standardVersion?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['String']>;
};

export type EndpointComplianceCveFinding = {
  __typename?: 'EndpointComplianceCveFinding';
  cveId?: Maybe<Scalars['String']>;
  cveYear?: Maybe<Scalars['String']>;
  cvssScore?: Maybe<Scalars['Float']>;
  cvssScoreV3?: Maybe<Scalars['Float']>;
  firstFound?: Maybe<Scalars['Date']>;
  lastFound?: Maybe<Scalars['Date']>;
  severity?: Maybe<Scalars['String']>;
  severityV3?: Maybe<Scalars['String']>;
  summary?: Maybe<Scalars['String']>;
};

export type EndpointConnection = Connection & {
  __typename?: 'EndpointConnection';
  collectionInfo: EndpointCollectionInfo;
  edges: Array<EndpointEdge>;
  pageInfo: PageInfo;
  totalRecords: Scalars['Int'];
};

export type EndpointDeploySoftwarePackage = {
  __typename?: 'EndpointDeploySoftwarePackage';
  applicability: Scalars['String'];
  gallery: Scalars['String'];
  id: Scalars['ID'];
  name: Scalars['String'];
  vendor: Scalars['String'];
  version: Scalars['String'];
};

export type EndpointDiscover = {
  __typename?: 'EndpointDiscover';
  discoverMethod?: Maybe<Scalars['String']>;
  discoverProfile?: Maybe<Scalars['String']>;
  natIpAddress?: Maybe<Scalars['String']>;
  openPorts?: Maybe<Array<Scalars['Int']>>;
};

export type EndpointDisk = {
  __typename?: 'EndpointDisk';
  free?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  total?: Maybe<Scalars['String']>;
  usedPercentage?: Maybe<Scalars['String']>;
  usedSpace?: Maybe<Scalars['String']>;
};

export type EndpointEdge = Edge & {
  __typename?: 'EndpointEdge';
  cursor: Scalars['Cursor'];
  node: Endpoint;
};

export type EndpointEventCounts = {
  __typename?: 'EndpointEventCounts';
  all: Scalars['Int'];
  appCrash: Scalars['Int'];
  cpu: Scalars['Int'];
  disk: Scalars['Int'];
  memory: Scalars['Int'];
  network: Scalars['Int'];
};

export type EndpointFieldFilter = {
  any?: Scalars['Boolean'];
  filters?: InputMaybe<Array<EndpointFieldFilter>>;
  memberOf?: InputMaybe<EndpointFieldFilterComputerGroup>;
  negated?: Scalars['Boolean'];
  op?: FieldFilterOp;
  path?: InputMaybe<Scalars['String']>;
  sensor?: InputMaybe<EndpointFieldFilterSensor>;
  value?: InputMaybe<Scalars['String']>;
};

export type EndpointFieldFilterComputerGroup = {
  id?: InputMaybe<Scalars['ID']>;
  name?: InputMaybe<Scalars['String']>;
};

export type EndpointFieldFilterSensor = {
  column?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  params?: InputMaybe<Array<EndpointFieldFilterSensorParam>>;
};

export type EndpointFieldFilterSensorParam = {
  name: Scalars['String'];
  value: Scalars['String'];
};

export type EndpointIdChange = {
  __typename?: 'EndpointIdChange';
  newId: Scalars['ID'];
  oldId: Scalars['ID'];
};

export type EndpointIdChangesPayload = {
  __typename?: 'EndpointIdChangesPayload';
  before: Scalars['Time'];
  changes: Array<EndpointIdChange>;
};

export type EndpointInstalledApplication = {
  __typename?: 'EndpointInstalledApplication';
  name: Scalars['String'];
  silentUninstallString: Scalars['String'];
  uninstallable?: Maybe<Scalars['Boolean']>;
  version: Scalars['String'];
};

export type EndpointMetric = {
  __typename?: 'EndpointMetric';
  metric?: Maybe<EndpointMetricInfo>;
  value?: Maybe<Scalars['Any']>;
  values?: Maybe<Scalars['Any']>;
};

export type EndpointMetricInfo = {
  __typename?: 'EndpointMetricInfo';
  name?: Maybe<Scalars['String']>;
};

export type EndpointOs = {
  __typename?: 'EndpointOS';
  generation: Scalars['String'];
  language: Scalars['String'];
  name: Scalars['String'];
  platform: EndpointPlatform;
  windows?: Maybe<EndpointWindowsOs>;
};

export enum EndpointPlatform {
  Aix = 'AIX',
  Linux = 'Linux',
  Mac = 'Mac',
  Solaris = 'Solaris',
  Unknown = 'Unknown',
  Windows = 'Windows',
}

export type EndpointRisk = {
  __typename?: 'EndpointRisk';
  assetCriticality: Scalars['String'];
  criticalityScore: Scalars['Float'];
  riskLevel: Scalars['String'];
  totalScore: Scalars['Float'];
  vectors: EndpointRiskVectors;
};

export type EndpointRiskAdministrativeAccessVector = {
  __typename?: 'EndpointRiskAdministrativeAccessVector';
  direct: Scalars['Int'];
  impactRating: Scalars['String'];
  impactRatingScore: Scalars['Int'];
  inbound: Scalars['Int'];
  indirect: Scalars['Int'];
  outbound: Scalars['Int'];
  score: Scalars['Float'];
  sessions: Scalars['Int'];
};

export type EndpointRiskComplianceVector = {
  __typename?: 'EndpointRiskComplianceVector';
  complianceFailCount: Scalars['Int'];
  score: Scalars['Float'];
};

export type EndpointRiskExpiredCertificatesVector = {
  __typename?: 'EndpointRiskExpiredCertificatesVector';
  certificatesCount: Scalars['Int'];
  ports: Scalars['String'];
  score: Scalars['Float'];
};

export type EndpointRiskInsecureTlsVector = {
  __typename?: 'EndpointRiskInsecureTLSVector';
  ports: Scalars['String'];
  protocols: Scalars['String'];
  score: Scalars['Float'];
};

export type EndpointRiskPasswordIdentificationVector = {
  __typename?: 'EndpointRiskPasswordIdentificationVector';
  filesConfirmed: Scalars['String'];
  score: Scalars['Float'];
};

export type EndpointRiskSystemVulnerabilityVector = {
  __typename?: 'EndpointRiskSystemVulnerabilityVector';
  cveCount: Scalars['Int'];
  score: Scalars['Float'];
};

export type EndpointRiskVectors = {
  __typename?: 'EndpointRiskVectors';
  administrativeAccess?: Maybe<EndpointRiskAdministrativeAccessVector>;
  compliance?: Maybe<EndpointRiskComplianceVector>;
  expiredCertificates?: Maybe<EndpointRiskExpiredCertificatesVector>;
  insecureTLS?: Maybe<EndpointRiskInsecureTlsVector>;
  passwordIdentification?: Maybe<EndpointRiskPasswordIdentificationVector>;
  systemVulnerability?: Maybe<EndpointRiskSystemVulnerabilityVector>;
};

export type EndpointSensorReadingColumn = {
  __typename?: 'EndpointSensorReadingColumn';
  name: Scalars['String'];
  sensor: EndpointSensorReadingRef;
  values: Array<Scalars['String']>;
};

export type EndpointSensorReadingRef = {
  __typename?: 'EndpointSensorReadingRef';
  name: Scalars['String'];
  params?: Maybe<Array<EndpointSensorReadingRefParam>>;
};

export type EndpointSensorReadingRefParam = {
  __typename?: 'EndpointSensorReadingRefParam';
  name: Scalars['String'];
  value: Scalars['String'];
};

export type EndpointSensorReadings = {
  __typename?: 'EndpointSensorReadings';
  columns: Array<EndpointSensorReadingColumn>;
};

export type EndpointSensorRef = {
  columns?: InputMaybe<Array<Scalars['String']>>;
  filter?: InputMaybe<SensorValueFilter>;
  maxAge?: InputMaybe<Scalars['Int']>;
  name: Scalars['String'];
  params?: InputMaybe<Array<EndpointSensorRefParam>>;
};

export type EndpointSensorRefParam = {
  name: Scalars['String'];
  value: Scalars['String'];
};

export type EndpointSentinel = {
  __typename?: 'EndpointSentinel';
  sccmClient: EndpointSentinelSccmClient;
  windowsDefender: EndpointSentinelWindowsDefender;
};

export type EndpointSentinelSccmClient = {
  __typename?: 'EndpointSentinelSCCMClient';
  health?: Maybe<Scalars['String']>;
  reason?: Maybe<Scalars['String']>;
};

export type EndpointSentinelWindowsDefender = {
  __typename?: 'EndpointSentinelWindowsDefender';
  antiSpywareEnabled?: Maybe<Scalars['String']>;
  antivirusEnabled?: Maybe<Scalars['String']>;
  antivirusSignatureUpdateAge?: Maybe<Scalars['String']>;
  clientVersion?: Maybe<Scalars['String']>;
  healthy?: Maybe<Scalars['String']>;
  installed?: Maybe<Scalars['String']>;
  processEnabled?: Maybe<Scalars['String']>;
  processStartType?: Maybe<Scalars['String']>;
  quickScanAge?: Maybe<Scalars['String']>;
};

export type EndpointService = {
  __typename?: 'EndpointService';
  displayName: Scalars['String'];
  name: Scalars['String'];
  startupMode?: Maybe<EndpointServiceStartupMode>;
  status?: Maybe<EndpointServiceStatus>;
};

export enum EndpointServiceStartupMode {
  Auto = 'AUTO',
  Boot = 'BOOT',
  Disabled = 'DISABLED',
  Manual = 'MANUAL',
  OnDemand = 'ON_DEMAND',
  System = 'SYSTEM',
}

export enum EndpointServiceStatus {
  ContinuePending = 'CONTINUE_PENDING',
  Paused = 'PAUSED',
  PausePending = 'PAUSE_PENDING',
  Running = 'RUNNING',
  StartPending = 'START_PENDING',
  Stopped = 'STOPPED',
  StopPending = 'STOP_PENDING',
}

export type EndpointSoftwarePackage = {
  __typename?: 'EndpointSoftwarePackage';
  installableVersions?: Maybe<Array<EndpointSoftwarePackageVersion>>;
  installedVersions?: Maybe<Array<EndpointSoftwarePackageVersion>>;
  name: Scalars['String'];
  updateToVersions?: Maybe<Array<EndpointSoftwarePackageVersion>>;
};

export type EndpointSoftwarePackageVersion = {
  __typename?: 'EndpointSoftwarePackageVersion';
  removable: Scalars['Boolean'];
  softwarePackageID?: Maybe<Scalars['ID']>;
  version: Scalars['String'];
};

export type EndpointSource = {
  tds?: InputMaybe<EndpointSourceTds>;
  ts?: InputMaybe<EndpointSourceTs>;
};

export type EndpointSourceTds = {
  allNamespaces?: Scalars['Boolean'];
  excludeErrors?: Scalars['Boolean'];
  excludeNoResults?: Scalars['Boolean'];
  namespaces?: InputMaybe<Array<Scalars['String']>>;
};

export type EndpointSourceTs = {
  excludeErrors?: Scalars['Boolean'];
  excludeNoResults?: Scalars['Boolean'];
  expectedCount?: InputMaybe<Scalars['Int']>;
  maxAge?: InputMaybe<Scalars['Int']>;
  maxWaitTime?: Scalars['Int'];
  minPercentage?: InputMaybe<Scalars['Float']>;
  stableWaitTime?: InputMaybe<Scalars['Int']>;
};

export type EndpointUser = {
  __typename?: 'EndpointUser';
  city: Scalars['String'];
  country: Scalars['String'];
  department: Scalars['String'];
  email: Scalars['String'];
  name: Scalars['String'];
  phoneNumber: Scalars['String'];
};

export type EndpointWindowsOs = {
  __typename?: 'EndpointWindowsOS';
  majorVersion: Scalars['String'];
  releaseId: Scalars['String'];
  type: Scalars['String'];
};

export type EntitiesQueryParams = {
  category?: InputMaybe<Array<InputMaybe<EntityCategory>>>;
  eids?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
};

export enum EntityCategory {
  ConfigurationItemClass = 'ConfigurationItemClass',
  CustomerItem = 'CustomerItem',
  ManagedEndpoint = 'ManagedEndpoint',
  ManagedItem = 'ManagedItem',
  UnmanagedEndpoint = 'UnmanagedEndpoint',
}

export type EntityInput = {
  category: EntityCategory;
  comments?: InputMaybe<Scalars['String']>;
  details?: InputMaybe<Scalars['Map']>;
  eid?: InputMaybe<Scalars['ID']>;
  entityClassIDs?: InputMaybe<Array<Scalars['ID']>>;
  id?: InputMaybe<Scalars['ID']>;
  name: Scalars['String'];
  namespace?: InputMaybe<Scalars['String']>;
  private: Scalars['Boolean'];
};

export type EntityPagination = {
  __typename?: 'EntityPagination';
  items: Array<Maybe<CiEntity>>;
  pageInfo: PaginationInfo;
};

export enum EntitySortField {
  Category = 'category',
  Comments = 'comments',
  Created = 'created',
  Details = 'details',
  Eid = 'eid',
  Id = 'id',
  Name = 'name',
  Namespace = 'namespace',
  Private = 'private',
  Updated = 'updated',
}

export type EntitySortRequest = {
  field: EntitySortField;
  order?: InputMaybe<SortOrder>;
};

export type FieldFilter = {
  any?: Scalars['Boolean'];
  filters?: InputMaybe<Array<FieldFilter>>;
  negated?: Scalars['Boolean'];
  op?: FieldFilterOp;
  path?: InputMaybe<Scalars['String']>;
  restrictOwner?: Scalars['Boolean'];
  value?: InputMaybe<Scalars['String']>;
};

export enum FieldFilterOp {
  Contains = 'CONTAINS',
  EndsWith = 'ENDS_WITH',
  Eq = 'EQ',
  Gt = 'GT',
  Gte = 'GTE',
  Lt = 'LT',
  Lte = 'LTE',
  Matches = 'MATCHES',
  ReadAfter = 'READ_AFTER',
  StartsWith = 'STARTS_WITH',
  UpdatedAfter = 'UPDATED_AFTER',
}

export enum FilterField {
  EndpointChassisType = 'ENDPOINT_CHASSIS_TYPE',
  EndpointComplianceComplianceFindings = 'ENDPOINT_COMPLIANCE_COMPLIANCE_FINDINGS',
  EndpointComplianceComplianceFindingsCategory = 'ENDPOINT_COMPLIANCE_COMPLIANCE_FINDINGS_CATEGORY',
  EndpointComplianceComplianceFindingsId = 'ENDPOINT_COMPLIANCE_COMPLIANCE_FINDINGS_ID',
  EndpointComplianceComplianceFindingsProfile = 'ENDPOINT_COMPLIANCE_COMPLIANCE_FINDINGS_PROFILE',
  EndpointComplianceComplianceFindingsProfileVersion = 'ENDPOINT_COMPLIANCE_COMPLIANCE_FINDINGS_PROFILE_VERSION',
  EndpointComplianceComplianceFindingsRule = 'ENDPOINT_COMPLIANCE_COMPLIANCE_FINDINGS_RULE',
  EndpointComplianceComplianceFindingsRuleId = 'ENDPOINT_COMPLIANCE_COMPLIANCE_FINDINGS_RULE_ID',
  EndpointComplianceComplianceFindingsStandard = 'ENDPOINT_COMPLIANCE_COMPLIANCE_FINDINGS_STANDARD',
  EndpointComplianceComplianceFindingsStandardVersion = 'ENDPOINT_COMPLIANCE_COMPLIANCE_FINDINGS_STANDARD_VERSION',
  EndpointComplianceComplianceFindingsState = 'ENDPOINT_COMPLIANCE_COMPLIANCE_FINDINGS_STATE',
  EndpointComplianceCveFindings = 'ENDPOINT_COMPLIANCE_CVE_FINDINGS',
  EndpointComplianceCveFindingsCveId = 'ENDPOINT_COMPLIANCE_CVE_FINDINGS_CVE_ID',
  EndpointComplianceCveFindingsCveYear = 'ENDPOINT_COMPLIANCE_CVE_FINDINGS_CVE_YEAR',
  EndpointComplianceCveFindingsCvssScore = 'ENDPOINT_COMPLIANCE_CVE_FINDINGS_CVSS_SCORE',
  EndpointComplianceCveFindingsCvssScoreV3 = 'ENDPOINT_COMPLIANCE_CVE_FINDINGS_CVSS_SCORE_V3',
  EndpointComplianceCveFindingsFirstFound = 'ENDPOINT_COMPLIANCE_CVE_FINDINGS_FIRST_FOUND',
  EndpointComplianceCveFindingsLastFound = 'ENDPOINT_COMPLIANCE_CVE_FINDINGS_LAST_FOUND',
  EndpointComplianceCveFindingsSeverity = 'ENDPOINT_COMPLIANCE_CVE_FINDINGS_SEVERITY',
  EndpointComplianceCveFindingsSeverityV3 = 'ENDPOINT_COMPLIANCE_CVE_FINDINGS_SEVERITY_V3',
  EndpointComplianceCveFindingsSummary = 'ENDPOINT_COMPLIANCE_CVE_FINDINGS_SUMMARY',
  EndpointComputerId = 'ENDPOINT_COMPUTER_ID',
  EndpointDeployedSoftwarePackages = 'ENDPOINT_DEPLOYED_SOFTWARE_PACKAGES',
  EndpointDeployedSoftwarePackagesApplicability = 'ENDPOINT_DEPLOYED_SOFTWARE_PACKAGES_APPLICABILITY',
  EndpointDeployedSoftwarePackagesGallery = 'ENDPOINT_DEPLOYED_SOFTWARE_PACKAGES_GALLERY',
  EndpointDeployedSoftwarePackagesId = 'ENDPOINT_DEPLOYED_SOFTWARE_PACKAGES_ID',
  EndpointDeployedSoftwarePackagesName = 'ENDPOINT_DEPLOYED_SOFTWARE_PACKAGES_NAME',
  EndpointDeployedSoftwarePackagesVendor = 'ENDPOINT_DEPLOYED_SOFTWARE_PACKAGES_VENDOR',
  EndpointDeployedSoftwarePackagesVersion = 'ENDPOINT_DEPLOYED_SOFTWARE_PACKAGES_VERSION',
  EndpointDiscoverDiscoverMethod = 'ENDPOINT_DISCOVER_DISCOVER_METHOD',
  EndpointDiscoverDiscoverProfile = 'ENDPOINT_DISCOVER_DISCOVER_PROFILE',
  EndpointDiscoverNatIpAddress = 'ENDPOINT_DISCOVER_NAT_IP_ADDRESS',
  EndpointDiscoverOpenPorts = 'ENDPOINT_DISCOVER_OPEN_PORTS',
  EndpointDisksFree = 'ENDPOINT_DISKS_FREE',
  EndpointDisksName = 'ENDPOINT_DISKS_NAME',
  EndpointDisksTotal = 'ENDPOINT_DISKS_TOTAL',
  EndpointDisksUsedPercentage = 'ENDPOINT_DISKS_USED_PERCENTAGE',
  EndpointDisksUsedSpace = 'ENDPOINT_DISKS_USED_SPACE',
  EndpointDiskSpaceFree = 'ENDPOINT_DISK_SPACE_FREE',
  EndpointDiskSpaceTotal = 'ENDPOINT_DISK_SPACE_TOTAL',
  EndpointDiskSpaceUsedPercentage = 'ENDPOINT_DISK_SPACE_USED_PERCENTAGE',
  EndpointDiskSpaceUsedSpace = 'ENDPOINT_DISK_SPACE_USED_SPACE',
  EndpointDomainName = 'ENDPOINT_DOMAIN_NAME',
  EndpointEidFirstSeen = 'ENDPOINT_EID_FIRST_SEEN',
  EndpointEidLastSeen = 'ENDPOINT_EID_LAST_SEEN',
  EndpointEventCountsAll = 'ENDPOINT_EVENT_COUNTS_ALL',
  EndpointEventCountsAppCrash = 'ENDPOINT_EVENT_COUNTS_APP_CRASH',
  EndpointEventCountsCpu = 'ENDPOINT_EVENT_COUNTS_CPU',
  EndpointEventCountsDisk = 'ENDPOINT_EVENT_COUNTS_DISK',
  EndpointEventCountsMemory = 'ENDPOINT_EVENT_COUNTS_MEMORY',
  EndpointEventCountsNetwork = 'ENDPOINT_EVENT_COUNTS_NETWORK',
  EndpointId = 'ENDPOINT_ID',
  EndpointInstalledApplications = 'ENDPOINT_INSTALLED_APPLICATIONS',
  EndpointInstalledApplicationsName = 'ENDPOINT_INSTALLED_APPLICATIONS_NAME',
  EndpointInstalledApplicationsSilentUninstallString = 'ENDPOINT_INSTALLED_APPLICATIONS_SILENT_UNINSTALL_STRING',
  EndpointInstalledApplicationsUninstallable = 'ENDPOINT_INSTALLED_APPLICATIONS_UNINSTALLABLE',
  EndpointInstalledApplicationsVersion = 'ENDPOINT_INSTALLED_APPLICATIONS_VERSION',
  EndpointIpAddress = 'ENDPOINT_IP_ADDRESS',
  EndpointIpAddresses = 'ENDPOINT_IP_ADDRESSES',
  EndpointIsEncrypted = 'ENDPOINT_IS_ENCRYPTED',
  EndpointIsVirtual = 'ENDPOINT_IS_VIRTUAL',
  EndpointLastLoggedInUser = 'ENDPOINT_LAST_LOGGED_IN_USER',
  EndpointMacAddresses = 'ENDPOINT_MAC_ADDRESSES',
  EndpointManufacturer = 'ENDPOINT_MANUFACTURER',
  EndpointMemoryRam = 'ENDPOINT_MEMORY_RAM',
  EndpointMemoryTotal = 'ENDPOINT_MEMORY_TOTAL',
  EndpointModel = 'ENDPOINT_MODEL',
  EndpointName = 'ENDPOINT_NAME',
  EndpointNamespace = 'ENDPOINT_NAMESPACE',
  EndpointNetworkingAdaptersConnectionId = 'ENDPOINT_NETWORKING_ADAPTERS_CONNECTION_ID',
  EndpointNetworkingAdaptersMacAddress = 'ENDPOINT_NETWORKING_ADAPTERS_MAC_ADDRESS',
  EndpointNetworkingAdaptersManufacturer = 'ENDPOINT_NETWORKING_ADAPTERS_MANUFACTURER',
  EndpointNetworkingAdaptersName = 'ENDPOINT_NETWORKING_ADAPTERS_NAME',
  EndpointNetworkingAdaptersSpeed = 'ENDPOINT_NETWORKING_ADAPTERS_SPEED',
  EndpointNetworkingAdaptersType = 'ENDPOINT_NETWORKING_ADAPTERS_TYPE',
  EndpointNetworkingDnsServers = 'ENDPOINT_NETWORKING_DNS_SERVERS',
  EndpointNetworkingWirelessAdaptersSsid = 'ENDPOINT_NETWORKING_WIRELESS_ADAPTERS_SSID',
  EndpointNetworkingWirelessAdaptersState = 'ENDPOINT_NETWORKING_WIRELESS_ADAPTERS_STATE',
  EndpointOsGeneration = 'ENDPOINT_OS_GENERATION',
  EndpointOsLanguage = 'ENDPOINT_OS_LANGUAGE',
  EndpointOsName = 'ENDPOINT_OS_NAME',
  EndpointOsPlatform = 'ENDPOINT_OS_PLATFORM',
  EndpointOsWindowsMajorVersion = 'ENDPOINT_OS_WINDOWS_MAJOR_VERSION',
  EndpointOsWindowsReleaseId = 'ENDPOINT_OS_WINDOWS_RELEASE_ID',
  EndpointOsWindowsType = 'ENDPOINT_OS_WINDOWS_TYPE',
  EndpointPrimaryUserCity = 'ENDPOINT_PRIMARY_USER_CITY',
  EndpointPrimaryUserCountry = 'ENDPOINT_PRIMARY_USER_COUNTRY',
  EndpointPrimaryUserDepartment = 'ENDPOINT_PRIMARY_USER_DEPARTMENT',
  EndpointPrimaryUserEmail = 'ENDPOINT_PRIMARY_USER_EMAIL',
  EndpointPrimaryUserName = 'ENDPOINT_PRIMARY_USER_NAME',
  EndpointPrimaryUserPhoneNumber = 'ENDPOINT_PRIMARY_USER_PHONE_NUMBER',
  EndpointProcessorArchitecture = 'ENDPOINT_PROCESSOR_ARCHITECTURE',
  EndpointProcessorCacheSize = 'ENDPOINT_PROCESSOR_CACHE_SIZE',
  EndpointProcessorConsumption = 'ENDPOINT_PROCESSOR_CONSUMPTION',
  EndpointProcessorCpu = 'ENDPOINT_PROCESSOR_CPU',
  EndpointProcessorFamily = 'ENDPOINT_PROCESSOR_FAMILY',
  EndpointProcessorHighConsumption = 'ENDPOINT_PROCESSOR_HIGH_CONSUMPTION',
  EndpointProcessorLogicalProcessors = 'ENDPOINT_PROCESSOR_LOGICAL_PROCESSORS',
  EndpointProcessorManufacturer = 'ENDPOINT_PROCESSOR_MANUFACTURER',
  EndpointProcessorRevision = 'ENDPOINT_PROCESSOR_REVISION',
  EndpointProcessorSpeed = 'ENDPOINT_PROCESSOR_SPEED',
  EndpointRisk = 'ENDPOINT_RISK',
  EndpointRiskAssetCriticality = 'ENDPOINT_RISK_ASSET_CRITICALITY',
  EndpointRiskCriticalityScore = 'ENDPOINT_RISK_CRITICALITY_SCORE',
  EndpointRiskRiskLevel = 'ENDPOINT_RISK_RISK_LEVEL',
  EndpointRiskTotalScore = 'ENDPOINT_RISK_TOTAL_SCORE',
  EndpointRiskVectorsAdministrativeAccess = 'ENDPOINT_RISK_VECTORS_ADMINISTRATIVE_ACCESS',
  EndpointRiskVectorsAdministrativeAccessDirect = 'ENDPOINT_RISK_VECTORS_ADMINISTRATIVE_ACCESS_DIRECT',
  EndpointRiskVectorsAdministrativeAccessImpactRating = 'ENDPOINT_RISK_VECTORS_ADMINISTRATIVE_ACCESS_IMPACT_RATING',
  EndpointRiskVectorsAdministrativeAccessImpactRatingScore = 'ENDPOINT_RISK_VECTORS_ADMINISTRATIVE_ACCESS_IMPACT_RATING_SCORE',
  EndpointRiskVectorsAdministrativeAccessInbound = 'ENDPOINT_RISK_VECTORS_ADMINISTRATIVE_ACCESS_INBOUND',
  EndpointRiskVectorsAdministrativeAccessIndirect = 'ENDPOINT_RISK_VECTORS_ADMINISTRATIVE_ACCESS_INDIRECT',
  EndpointRiskVectorsAdministrativeAccessOutbound = 'ENDPOINT_RISK_VECTORS_ADMINISTRATIVE_ACCESS_OUTBOUND',
  EndpointRiskVectorsAdministrativeAccessScore = 'ENDPOINT_RISK_VECTORS_ADMINISTRATIVE_ACCESS_SCORE',
  EndpointRiskVectorsAdministrativeAccessSessions = 'ENDPOINT_RISK_VECTORS_ADMINISTRATIVE_ACCESS_SESSIONS',
  EndpointRiskVectorsCompliance = 'ENDPOINT_RISK_VECTORS_COMPLIANCE',
  EndpointRiskVectorsComplianceComplianceFailCount = 'ENDPOINT_RISK_VECTORS_COMPLIANCE_COMPLIANCE_FAIL_COUNT',
  EndpointRiskVectorsComplianceScore = 'ENDPOINT_RISK_VECTORS_COMPLIANCE_SCORE',
  EndpointRiskVectorsExpiredCertificates = 'ENDPOINT_RISK_VECTORS_EXPIRED_CERTIFICATES',
  EndpointRiskVectorsExpiredCertificatesCertificatesCount = 'ENDPOINT_RISK_VECTORS_EXPIRED_CERTIFICATES_CERTIFICATES_COUNT',
  EndpointRiskVectorsExpiredCertificatesPorts = 'ENDPOINT_RISK_VECTORS_EXPIRED_CERTIFICATES_PORTS',
  EndpointRiskVectorsExpiredCertificatesScore = 'ENDPOINT_RISK_VECTORS_EXPIRED_CERTIFICATES_SCORE',
  EndpointRiskVectorsInsecureTls = 'ENDPOINT_RISK_VECTORS_INSECURE_TLS',
  EndpointRiskVectorsInsecureTlsPorts = 'ENDPOINT_RISK_VECTORS_INSECURE_TLS_PORTS',
  EndpointRiskVectorsInsecureTlsProtocols = 'ENDPOINT_RISK_VECTORS_INSECURE_TLS_PROTOCOLS',
  EndpointRiskVectorsInsecureTlsScore = 'ENDPOINT_RISK_VECTORS_INSECURE_TLS_SCORE',
  EndpointRiskVectorsPasswordIdentification = 'ENDPOINT_RISK_VECTORS_PASSWORD_IDENTIFICATION',
  EndpointRiskVectorsPasswordIdentificationFilesConfirmed = 'ENDPOINT_RISK_VECTORS_PASSWORD_IDENTIFICATION_FILES_CONFIRMED',
  EndpointRiskVectorsPasswordIdentificationScore = 'ENDPOINT_RISK_VECTORS_PASSWORD_IDENTIFICATION_SCORE',
  EndpointRiskVectorsSystemVulnerability = 'ENDPOINT_RISK_VECTORS_SYSTEM_VULNERABILITY',
  EndpointRiskVectorsSystemVulnerabilityCveCount = 'ENDPOINT_RISK_VECTORS_SYSTEM_VULNERABILITY_CVE_COUNT',
  EndpointRiskVectorsSystemVulnerabilityScore = 'ENDPOINT_RISK_VECTORS_SYSTEM_VULNERABILITY_SCORE',
  EndpointSentinelSccmClientHealth = 'ENDPOINT_SENTINEL_SCCM_CLIENT_HEALTH',
  EndpointSentinelSccmClientReason = 'ENDPOINT_SENTINEL_SCCM_CLIENT_REASON',
  EndpointSentinelWindowsDefenderAntivirusEnabled = 'ENDPOINT_SENTINEL_WINDOWS_DEFENDER_ANTIVIRUS_ENABLED',
  EndpointSentinelWindowsDefenderAntivirusSignatureUpdateAge = 'ENDPOINT_SENTINEL_WINDOWS_DEFENDER_ANTIVIRUS_SIGNATURE_UPDATE_AGE',
  EndpointSentinelWindowsDefenderAntiSpywareEnabled = 'ENDPOINT_SENTINEL_WINDOWS_DEFENDER_ANTI_SPYWARE_ENABLED',
  EndpointSentinelWindowsDefenderClientVersion = 'ENDPOINT_SENTINEL_WINDOWS_DEFENDER_CLIENT_VERSION',
  EndpointSentinelWindowsDefenderHealthy = 'ENDPOINT_SENTINEL_WINDOWS_DEFENDER_HEALTHY',
  EndpointSentinelWindowsDefenderInstalled = 'ENDPOINT_SENTINEL_WINDOWS_DEFENDER_INSTALLED',
  EndpointSentinelWindowsDefenderProcessEnabled = 'ENDPOINT_SENTINEL_WINDOWS_DEFENDER_PROCESS_ENABLED',
  EndpointSentinelWindowsDefenderProcessStartType = 'ENDPOINT_SENTINEL_WINDOWS_DEFENDER_PROCESS_START_TYPE',
  EndpointSentinelWindowsDefenderQuickScanAge = 'ENDPOINT_SENTINEL_WINDOWS_DEFENDER_QUICK_SCAN_AGE',
  EndpointSerialNumber = 'ENDPOINT_SERIAL_NUMBER',
  EndpointServicesDisplayName = 'ENDPOINT_SERVICES_DISPLAY_NAME',
  EndpointServicesName = 'ENDPOINT_SERVICES_NAME',
  EndpointServicesStartupMode = 'ENDPOINT_SERVICES_STARTUP_MODE',
  EndpointServicesStatus = 'ENDPOINT_SERVICES_STATUS',
  EndpointSoftware = 'ENDPOINT_SOFTWARE',
  EndpointSoftwareName = 'ENDPOINT_SOFTWARE_NAME',
  EndpointSystemUuid = 'ENDPOINT_SYSTEM_UUID',
  Invalid = 'INVALID',
}

export enum FilterMatch {
  All = 'ALL',
  Any = 'ANY',
  Not = 'NOT',
}

export enum FilterOps {
  Contains = 'CONTAINS',
  EndsWith = 'ENDS_WITH',
  Eq = 'EQ',
  Gt = 'GT',
  Gte = 'GTE',
  LastSeen = 'LAST_SEEN',
  Lt = 'LT',
  Lte = 'LTE',
  Matches = 'MATCHES',
  StartsWith = 'STARTS_WITH',
  UpdatedSince = 'UPDATED_SINCE',
}

export type FilterSpec = {
  field?: InputMaybe<FilterField>;
  match?: InputMaybe<FilterMatch>;
  op?: InputMaybe<FilterOps>;
  subs?: InputMaybe<Array<InputMaybe<FilterSpec>>>;
  value?: InputMaybe<Scalars['String']>;
};

export type GraphqlRequiredPrivilege = {
  displayName: Scalars['String'];
  name: Scalars['String'];
};

export enum GraphqlRestHttpMethod {
  Delete = 'DELETE',
  Get = 'GET',
  Patch = 'PATCH',
  Post = 'POST',
  Put = 'PUT',
}

export type GraphqlRestPagination = {
  recordsPath?: InputMaybe<Array<Scalars['String']>>;
  style?: GraphqlRestPaginationStyle;
  totalRecordsPath?: InputMaybe<Array<Scalars['String']>>;
};

export enum GraphqlRestPaginationStyle {
  LimitOffset = 'LIMIT_OFFSET',
}

export type IdReference = {
  __typename?: 'IDReference';
  id: Scalars['ID'];
  name: Scalars['String'];
};

export type IdRefInput = {
  id: Scalars['ID'];
};

export type ImportConfigurationItemEntitiesPayload = {
  __typename?: 'ImportConfigurationItemEntitiesPayload';
  entities: Array<ImportConfigurationItemEntityPayload>;
  failedCount: Scalars['Int'];
  importedCount: Scalars['Int'];
};

export type ImportConfigurationItemEntityPayload = {
  __typename?: 'ImportConfigurationItemEntityPayload';
  entity?: Maybe<CiEntity>;
  errorMessage?: Maybe<Scalars['String']>;
};

export type KillProcessInput = {
  connectionID?: InputMaybe<Scalars['ID']>;
  endpoint?: InputMaybe<OpenDirectConnectionInput>;
  name: Scalars['String'];
  pid: Scalars['Int'];
  signal: Signal;
};

export type KillProcessPayload = {
  __typename?: 'KillProcessPayload';
  result: Scalars['Boolean'];
};

export type ListBlobFilter = {
  prefix?: InputMaybe<Scalars['String']>;
  recursive?: InputMaybe<Scalars['Boolean']>;
};

export type LiveQueryOptions = {
  expectedCount?: InputMaybe<Scalars['Int']>;
  stableWaitTime?: InputMaybe<Scalars['Int']>;
};

export type Memory = {
  __typename?: 'Memory';
  ram: Scalars['String'];
  total: Scalars['String'];
};

export type MergeConfigurationItemElementsInput = {
  duplicateElementId: Scalars['ID'];
  targetElementId: Scalars['ID'];
};

export type MergeConfigurationItemElementsPayload = {
  __typename?: 'MergeConfigurationItemElementsPayload';
  element?: Maybe<Element>;
};

export type Metadata = {
  __typename?: 'Metadata';
  adminFlag: Scalars['Boolean'];
  name: Scalars['String'];
  value: Scalars['String'];
};

export enum Modifiers {
  DetermineConnectedState = 'DetermineConnectedState',
  GetServiceStartupMode = 'GetServiceStartupMode',
  GetServiceStatus = 'GetServiceStatus',
  HandleNoConnectionSsid = 'HandleNoConnectionSSID',
  HandleNoSilentUninstallString = 'HandleNoSilentUninstallString',
  IsEncrypted = 'IsEncrypted',
  ParseBoolPtrForUninstallable = 'ParseBoolPtrForUninstallable',
  Platform = 'Platform',
}

export type Mutation = {
  __typename?: 'Mutation';
  actionCreate: ActionCreatePayload;
  actionGroupCreate: ActionGroupCreatePayload;
  actionGroupDelete: ActionGroupDeletePayload;
  actionPerform: ActionPerformPayload;
  actionStop: ActionStopPayload;
  apiTokenGrant: ApiTokenGrantPayload;
  apiTokenRevoke: ApiTokenRevokePayload;
  apiTokenRotate: ApiTokenRotatePayload;
  assetProducts?: Maybe<AssetProductsPayload>;
  assetsImport: AssetsImportPayload;
  closeDirectConnection: CloseDirectConnectionPayload;
  computerGroupCreate: ComputerGroupCreatePayload;
  computerGroupDelete: ComputerGroupDeletePayload;
  createBlobCategory: BlobCategoryPayload;
  deleteConfigurationItemElement?: Maybe<DeleteConfigurationItemElementResult>;
  deleteRelationship?: Maybe<RelationshipResult>;
  downloadBlobURL: DownloadBlobUrlPayload;
  importConfigurationItemEntities: ImportConfigurationItemEntitiesPayload;
  killProcess: KillProcessPayload;
  manageSoftware: SoftwareDeploymentDetails;
  mergeConfigurationItemElements: MergeConfigurationItemElementsPayload;
  openDirectConnection: OpenDirectConnectionPayload;
  ping: Scalars['Boolean'];
  pingDirectConnection: PingDirectConnectionPayload;
  removeBlob: RemoveBlobPayload;
  reportImport: ReportImportPayload;
  scheduledActionApprove: ScheduledActionApprovePayload;
  scheduledActionCreate: ScheduledActionCreatePayload;
  scheduledActionDelete: ScheduledActionDeletePayload;
  sensorHarvest: SensorHarvestPayload;
  syncAssets?: Maybe<SyncAssetResult>;
  threatResponseAlertResolve: ThreatResponseAlertResolvePayload;
  updateConfigurationItemProperties?: Maybe<UpdateConfigurationItemPropertiesResult>;
  uploadBlobURL: UploadBlobUrlPayload;
  upsertRelationship?: Maybe<RelationshipResult>;
};

export type MutationActionCreateArgs = {
  input: ActionCreateInput;
};

export type MutationActionGroupCreateArgs = {
  input: ActionGroupCreateInput;
};

export type MutationActionGroupDeleteArgs = {
  ref: NamedRefInput;
};

export type MutationActionPerformArgs = {
  input: ActionPerformInput;
};

export type MutationActionStopArgs = {
  ref: IdRefInput;
};

export type MutationApiTokenGrantArgs = {
  input: ApiTokenGrantInput;
};

export type MutationApiTokenRevokeArgs = {
  input: ApiTokenRevokeInput;
};

export type MutationApiTokenRotateArgs = {
  input: ApiTokenRotateInput;
};

export type MutationAssetProductsArgs = {
  input: Array<AssetProductsInput>;
};

export type MutationAssetsImportArgs = {
  input: AssetsImportInput;
};

export type MutationCloseDirectConnectionArgs = {
  input: CloseDirectConnectionInput;
};

export type MutationComputerGroupCreateArgs = {
  input: ComputerGroupCreateInput;
};

export type MutationComputerGroupDeleteArgs = {
  ref: NamedRefInput;
};

export type MutationCreateBlobCategoryArgs = {
  input: CreateBlobCategoryInput;
};

export type MutationDeleteConfigurationItemElementArgs = {
  input: DeleteConfigurationItemElementInput;
};

export type MutationDeleteRelationshipArgs = {
  relationships?: InputMaybe<DeleteRelationshipInput>;
};

export type MutationDownloadBlobUrlArgs = {
  input: DownloadBlobUrlInput;
};

export type MutationImportConfigurationItemEntitiesArgs = {
  input: Array<EntityInput>;
};

export type MutationKillProcessArgs = {
  input: KillProcessInput;
};

export type MutationManageSoftwareArgs = {
  description?: InputMaybe<Scalars['String']>;
  end: Scalars['Time'];
  operation: SoftwareOperation;
  softwarePackageID: Scalars['ID'];
  start: Scalars['Time'];
  target?: InputMaybe<SoftwareTarget>;
};

export type MutationMergeConfigurationItemElementsArgs = {
  input: MergeConfigurationItemElementsInput;
};

export type MutationOpenDirectConnectionArgs = {
  input: OpenDirectConnectionInput;
};

export type MutationPingDirectConnectionArgs = {
  input: PingDirectConnectionInput;
};

export type MutationRemoveBlobArgs = {
  input: RemoveBlobInput;
};

export type MutationReportImportArgs = {
  input: ReportImportInput;
};

export type MutationScheduledActionApproveArgs = {
  ref: IdRefInput;
};

export type MutationScheduledActionCreateArgs = {
  input: ScheduledActionCreateInput;
};

export type MutationScheduledActionDeleteArgs = {
  ref: IdRefInput;
};

export type MutationSensorHarvestArgs = {
  input: SensorHarvestInput;
};

export type MutationThreatResponseAlertResolveArgs = {
  ref: ThreatResponseAlertRef;
};

export type MutationUpdateConfigurationItemPropertiesArgs = {
  input: UpdateConfigurationItemPropertiesInput;
};

export type MutationUploadBlobUrlArgs = {
  input: UploadBlobUrlInput;
};

export type MutationUpsertRelationshipArgs = {
  payload: Array<InputMaybe<RelationshipPayload>>;
};

export type NamedRef = {
  __typename?: 'NamedRef';
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
};

export type NamedRefInput = {
  id?: InputMaybe<Scalars['ID']>;
  name?: InputMaybe<Scalars['String']>;
};

export type NetworkAdapter = {
  __typename?: 'NetworkAdapter';
  connectionId: Scalars['String'];
  macAddress: Scalars['String'];
  manufacturer: Scalars['String'];
  name: Scalars['String'];
  speed: Scalars['String'];
  type: Scalars['String'];
};

export type Networking = {
  __typename?: 'Networking';
  adapters: Array<Maybe<NetworkAdapter>>;
  dnsServers: Array<Maybe<Scalars['String']>>;
  wirelessAdapters: Array<Maybe<WirelessAdapter>>;
};

export type NumericIntervalOption = {
  __typename?: 'NumericIntervalOption';
  model: Scalars['ParameterDefinitionType'];
  name: Scalars['String'];
  parameterType: Scalars['ParameterDefinitionType'];
  value: Scalars['String'];
};

export type OpenDirectConnectionInput = {
  endpointID?: InputMaybe<Scalars['ID']>;
};

export type OpenDirectConnectionPayload = {
  __typename?: 'OpenDirectConnectionPayload';
  connectionID: Scalars['ID'];
};

export type Package = {
  __typename?: 'Package';
  command: Scalars['String'];
  commandTimeout: Scalars['Int'];
  contentSet?: Maybe<IdReference>;
  displayName: Scalars['String'];
  expireSeconds: Scalars['Int'];
  id: Scalars['ID'];
  metadata: Array<Metadata>;
  name: Scalars['String'];
  parameterDefinition?: Maybe<ParameterDefinitions>;
  parameters: Array<PackageParameter>;
  processGroupFlag: Scalars['Boolean'];
  rawParameterDefinition?: Maybe<Scalars['String']>;
  skipLockFlag: Scalars['Boolean'];
  sourceHash: Scalars['String'];
  sourceHashChangedFlag: Scalars['Boolean'];
  sourceID: Scalars['Int'];
  sourceName: Scalars['String'];
  verifyExpireSeconds: Scalars['Int'];
};

export type PackagePagination = {
  __typename?: 'PackagePagination';
  items: Array<Maybe<Package>>;
  pageInfo: PaginationInfoWithId;
};

export type PackageParam = {
  __typename?: 'PackageParam';
  name: Scalars['String'];
  value: Scalars['String'];
};

export type PackageParamInput = {
  name: Scalars['String'];
  value: Scalars['String'];
};

export type PackageParameter = {
  __typename?: 'PackageParameter';
  key?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

export type PackageRef = {
  __typename?: 'PackageRef';
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  params?: Maybe<Array<Scalars['String']>>;
  sensorSourcedParams?: Maybe<Array<PackageParam>>;
};

export type PackageRefInput = {
  id?: InputMaybe<Scalars['ID']>;
  name?: InputMaybe<Scalars['String']>;
  params?: InputMaybe<Array<Scalars['String']>>;
  sensorSourcedParams?: InputMaybe<Array<PackageParamInput>>;
};

export type PackageSpec = {
  __typename?: 'PackageSpec';
  command: Scalars['String'];
  commandTimeoutSeconds: Scalars['Int'];
  contentSetName: Scalars['String'];
  expireSeconds: Scalars['Int'];
  id: Scalars['ID'];
  name: Scalars['String'];
  params?: Maybe<Array<PackageSpecParam>>;
  sensorSourcedParams?: Maybe<Array<PackageSpecSensorSourcedParam>>;
};

export type PackageSpecConnection = Connection & {
  __typename?: 'PackageSpecConnection';
  edges: Array<PackageSpecEdge>;
  pageInfo: PageInfo;
  totalRecords: Scalars['Int'];
};

export type PackageSpecEdge = Edge & {
  __typename?: 'PackageSpecEdge';
  cursor: Scalars['Cursor'];
  node: PackageSpec;
};

export type PackageSpecParam = {
  __typename?: 'PackageSpecParam';
  defaultValue?: Maybe<Scalars['String']>;
  key: Scalars['String'];
  label: Scalars['String'];
};

export type PackageSpecSensorSourcedParam = {
  __typename?: 'PackageSpecSensorSourcedParam';
  name: Scalars['String'];
};

export type PageInfo = {
  __typename?: 'PageInfo';
  endCursor?: Maybe<Scalars['Cursor']>;
  hasNextPage: Scalars['Boolean'];
  hasPreviousPage: Scalars['Boolean'];
  startCursor?: Maybe<Scalars['Cursor']>;
};

export type PaginationInfo = {
  __typename?: 'PaginationInfo';
  page: Scalars['Int'];
  perPage: Scalars['Int'];
  totalItems: Scalars['Int'];
  totalPages: Scalars['Int'];
};

export type PaginationInfoWithId = {
  __typename?: 'PaginationInfoWithID';
  id: Scalars['ID'];
  page: Scalars['Int'];
  perPage: Scalars['Int'];
  totalItems: Scalars['Int'];
  totalPages: Scalars['Int'];
};

export type ParameterDefinition = {
  __typename?: 'ParameterDefinition';
  allowDisableEnd?: Maybe<Scalars['Boolean']>;
  allowEmptyList?: Maybe<Scalars['Boolean']>;
  componentType?: Maybe<Scalars['Int']>;
  defaultRangeEnd?: Maybe<DefaultRangeEnd>;
  defaultRangeStart?: Maybe<DefaultRangeEnd>;
  defaultValue?: Maybe<Scalars['String']>;
  dropdownOptions?: Maybe<Array<NumericIntervalOption>>;
  endDateRestriction?: Maybe<DefaultRangeEnd>;
  endTimeRestriction?: Maybe<DefaultRangeEnd>;
  heightInLines?: Maybe<Scalars['Int']>;
  helpString: Scalars['String'];
  key: Scalars['String'];
  label: Scalars['String'];
  maxChars?: Maybe<Scalars['Int']>;
  maximum?: Maybe<Scalars['Int']>;
  minimum?: Maybe<Scalars['Int']>;
  model: Scalars['ParameterDefinitionType'];
  parameterType: Scalars['ParameterDefinitionType'];
  promptText?: Maybe<Scalars['String']>;
  restrict?: Maybe<Scalars['String']>;
  separatorText?: Maybe<Scalars['String']>;
  snapInterval?: Maybe<Scalars['Int']>;
  startDateRestriction?: Maybe<DefaultRangeEnd>;
  startTimeRestriction?: Maybe<DefaultRangeEnd>;
  stepSize?: Maybe<Scalars['Int']>;
  validationExpressions?: Maybe<Array<ParameterDefinitionValidationExpression>>;
  value?: Maybe<Scalars['String']>;
  values: Array<Scalars['String']>;
};

export type ParameterDefinitionValidationExpression = {
  __typename?: 'ParameterDefinitionValidationExpression';
  expression?: Maybe<Scalars['String']>;
  helpString?: Maybe<Scalars['String']>;
  model: Scalars['ParameterDefinitionType'];
  parameterType: Scalars['ParameterDefinitionType'];
};

export type ParameterDefinitions = {
  __typename?: 'ParameterDefinitions';
  model: Scalars['ParameterDefinitionType'];
  parameterType: Scalars['ParameterDefinitionType'];
  parameters: Array<ParameterDefinition>;
};

export type PerfQuery = {
  from?: InputMaybe<Scalars['Time']>;
  query: Scalars['String'];
  step?: InputMaybe<Scalars['String']>;
  to?: InputMaybe<Scalars['Time']>;
  type: PerfQueryType;
};

export enum PerfQueryType {
  Query = 'QUERY',
  QueryRange = 'QUERY_RANGE',
}

export enum PermissionType {
  Shared = 'SHARED',
}

export type Persona = {
  __typename?: 'Persona';
  name: Scalars['String'];
};

export type PingDirectConnectionInput = {
  connectionID: Scalars['ID'];
};

export type PingDirectConnectionPayload = {
  __typename?: 'PingDirectConnectionPayload';
  result: Scalars['Boolean'];
};

export type Principal = {
  __typename?: 'Principal';
  persona?: Maybe<NamedRef>;
  user: NamedRef;
};

export type Process = {
  __typename?: 'Process';
  commandLine: Scalars['String'];
  cpuKernelTimeSeconds: Scalars['Float'];
  cpuUsagePercent: Scalars['Float'];
  cpuUserTimeSeconds: Scalars['Float'];
  groupName: Scalars['String'];
  memoryResidentBytes: Scalars['Int'];
  name: Scalars['String'];
  pid: Scalars['Int'];
  ppid: Scalars['Int'];
  userName: Scalars['String'];
};

export type Processor = {
  __typename?: 'Processor';
  architecture: Scalars['String'];
  cacheSize: Scalars['String'];
  consumption: Scalars['String'];
  cpu: Scalars['String'];
  family: Scalars['String'];
  highConsumption: Scalars['String'];
  logicalProcessors: Scalars['Int'];
  manufacturer: Scalars['String'];
  revision: Scalars['String'];
  speed: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  action?: Maybe<Action>;
  actionGroup?: Maybe<ActionGroup>;
  actionGroups?: Maybe<ActionGroupConnection>;
  assetProductEndpoints?: Maybe<AssetProductEndpointConnection>;
  assetProducts?: Maybe<AssetProductConnection>;
  blobs: Array<BlobMetadata>;
  computerGroup?: Maybe<ComputerGroup>;
  computerGroups?: Maybe<ComputerGroupConnection>;
  configurationItemEntities?: Maybe<ConfigurationItemEntityConnection>;
  configurationItemProperties?: Maybe<ConfigurationItemProperties>;
  configurationItemRelationships?: Maybe<ConfigurationItemRelationshipConnection>;
  directEndpoint?: Maybe<DirectConnect>;
  endpointIdChanges: EndpointIdChangesPayload;
  endpointLastSeen?: Maybe<Scalars['Map']>;
  endpoints?: Maybe<EndpointConnection>;
  myAPITokens: ApiTokenQueryPayload;
  now: Scalars['Time'];
  packageSpecs?: Maybe<PackageSpecConnection>;
  packages?: Maybe<PackagePagination>;
  relationshipTypes?: Maybe<RelationshipTypeResult>;
  report?: Maybe<Report>;
  reportExport: ReportExportPayload;
  reportResultData?: Maybe<ReportResultDataConnection>;
  reports?: Maybe<ReportConnection>;
  scheduledAction?: Maybe<ScheduledAction>;
  scheduledActions?: Maybe<ScheduledActionConnection>;
  sensors?: Maybe<SensorConnection>;
  softwareDeployment: Array<SoftwareDeploymentDetails>;
  softwarePackages?: Maybe<SoftwarePackageConnection>;
};

export type QueryActionArgs = {
  ref: IdRefInput;
};

export type QueryActionGroupArgs = {
  ref: NamedRefInput;
};

export type QueryActionGroupsArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};

export type QueryAssetProductEndpointsArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  filter?: InputMaybe<AssetProductEndpointsFilter>;
  first?: InputMaybe<Scalars['Int']>;
};

export type QueryAssetProductsArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  filter?: InputMaybe<AssetProductsFilter>;
  first?: InputMaybe<Scalars['Int']>;
};

export type QueryBlobsArgs = {
  category: Scalars['ID'];
  domain: Scalars['ID'];
  filter?: InputMaybe<ListBlobFilter>;
};

export type QueryComputerGroupArgs = {
  ref: NamedRefInput;
};

export type QueryComputerGroupsArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  filter?: InputMaybe<ComputerGroupsFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};

export type QueryConfigurationItemEntitiesArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  params?: InputMaybe<EntitiesQueryParams>;
  sort?: InputMaybe<Array<InputMaybe<EntitySortRequest>>>;
};

export type QueryConfigurationItemRelationshipsArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  params?: InputMaybe<RelationshipQueryParams>;
  sort?: InputMaybe<Array<InputMaybe<RelationshipSortRequest>>>;
};

export type QueryDirectEndpointArgs = {
  input: OpenDirectConnectionInput;
};

export type QueryEndpointIdChangesArgs = {
  after: Scalars['Time'];
  namespace?: InputMaybe<Scalars['String']>;
};

export type QueryEndpointLastSeenArgs = {
  eids: Array<Scalars['ID']>;
};

export type QueryEndpointsArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  filter?: InputMaybe<EndpointFieldFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  refresh?: InputMaybe<Scalars['Cursor']>;
  source?: InputMaybe<EndpointSource>;
};

export type QueryPackageSpecsArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  filter?: InputMaybe<FieldFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};

export type QueryPackagesArgs = {
  filterSet?: InputMaybe<Scalars['String']>;
  page?: InputMaybe<Scalars['Int']>;
  paginationId?: InputMaybe<Scalars['String']>;
  perPage?: InputMaybe<Scalars['Int']>;
};

export type QueryReportArgs = {
  ref: IdRefInput;
};

export type QueryReportExportArgs = {
  ref: IdRefInput;
};

export type QueryReportResultDataArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  first?: InputMaybe<Scalars['Int']>;
  id: Scalars['ID'];
  last?: InputMaybe<Scalars['Int']>;
  refresh?: InputMaybe<Scalars['Cursor']>;
};

export type QueryReportsArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  filter?: InputMaybe<ReportFieldFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};

export type QueryScheduledActionArgs = {
  ref: IdRefInput;
};

export type QueryScheduledActionsArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  filter?: InputMaybe<FieldFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};

export type QuerySensorsArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  filter?: InputMaybe<FieldFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};

export type QuerySoftwareDeploymentArgs = {
  id?: InputMaybe<Scalars['ID']>;
};

export type QuerySoftwarePackagesArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};

export type Relationship = {
  __typename?: 'Relationship';
  created: Scalars['Time'];
  details?: Maybe<Scalars['Map']>;
  entityA: Scalars['ID'];
  entityB: Scalars['ID'];
  id: Scalars['ID'];
  type: Scalars['String'];
  updated: Scalars['Time'];
};

export type RelationshipDetailsArgs = {
  schemaVersion?: InputMaybe<Scalars['String']>;
};

export type RelationshipPagination = {
  __typename?: 'RelationshipPagination';
  items: Array<Maybe<Relationship>>;
  pageInfo: PaginationInfo;
};

export type RelationshipPayload = {
  details?: InputMaybe<Scalars['Map']>;
  entityA: Scalars['ID'];
  entityB: Scalars['ID'];
  id?: InputMaybe<Scalars['ID']>;
  type: Scalars['String'];
};

export type RelationshipQueryParams = {
  entityEids?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  entityIds?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  type?: InputMaybe<Scalars['String']>;
};

export type RelationshipResult = {
  __typename?: 'RelationshipResult';
  items: Array<Maybe<Relationship>>;
};

export enum RelationshipSortField {
  ClassName = 'className',
  EntityA = 'entityA',
  EntityB = 'entityB',
  EntityName = 'entityName',
  Id = 'id',
  RelationshipType = 'relationshipType',
}

export type RelationshipSortRequest = {
  field: RelationshipSortField;
  order?: InputMaybe<SortOrder>;
};

export type RelationshipType = {
  __typename?: 'RelationshipType';
  edgeDirection: EdgeDirection;
  type: Scalars['String'];
};

export type RelationshipTypeResult = {
  __typename?: 'RelationshipTypeResult';
  items: Array<Maybe<RelationshipType>>;
};

export type RemoveBlobInput = {
  category: Scalars['ID'];
  domain: Scalars['ID'];
  key: Scalars['ID'];
};

export type RemoveBlobPayload = {
  __typename?: 'RemoveBlobPayload';
  category: Scalars['ID'];
  domain: Scalars['ID'];
  key: Scalars['ID'];
};

export type Report = {
  __typename?: 'Report';
  author: Principal;
  contentSet: NamedRef;
  createdTime: Scalars['Time'];
  description: Scalars['String'];
  favorite: Scalars['Boolean'];
  id: Scalars['ID'];
  labels?: Maybe<Array<Scalars['String']>>;
  lastModifiedBy: Principal;
  modifiedTime: Scalars['Time'];
  moduleName?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  viewDetails: ReportView;
};

export type ReportConnection = Connection & {
  __typename?: 'ReportConnection';
  edges: Array<ReportEdge>;
  pageInfo: PageInfo;
  totalRecords: Scalars['Int'];
};

export type ReportEdge = Edge & {
  __typename?: 'ReportEdge';
  cursor: Scalars['Cursor'];
  node: Report;
};

export type ReportExportPayload = {
  __typename?: 'ReportExportPayload';
  reportDefinition: Scalars['String'];
};

export type ReportFieldFilter = {
  authorNames?: InputMaybe<Array<Scalars['String']>>;
  contentSetNames?: InputMaybe<Array<Scalars['String']>>;
  createdAfter?: InputMaybe<Scalars['Time']>;
  createdBefore?: InputMaybe<Scalars['Time']>;
  labels?: InputMaybe<Array<Scalars['String']>>;
  moduleNames?: InputMaybe<Array<Scalars['String']>>;
  text?: InputMaybe<Scalars['String']>;
};

export type ReportImportInput = {
  allowDuplicate?: Scalars['Boolean'];
  reportDefinition: Scalars['String'];
};

export type ReportImportPayload = {
  __typename?: 'ReportImportPayload';
  error?: Maybe<SystemError>;
  report?: Maybe<Report>;
};

export type ReportResultDataCollectionInfo = {
  __typename?: 'ReportResultDataCollectionInfo';
  active: Scalars['Boolean'];
  startCursor?: Maybe<Scalars['Cursor']>;
};

export type ReportResultDataColumn = {
  __typename?: 'ReportResultDataColumn';
  values?: Maybe<Array<Scalars['String']>>;
};

export type ReportResultDataConnection = Connection & {
  __typename?: 'ReportResultDataConnection';
  collectionInfo: ReportResultDataCollectionInfo;
  edges: Array<ReportResultDataEdge>;
  pageInfo: PageInfo;
  totalRecords: Scalars['Int'];
  viewDetails: ReportView;
};

export type ReportResultDataEdge = Edge & {
  __typename?: 'ReportResultDataEdge';
  cursor: Scalars['Cursor'];
  node: ReportResultDataRow;
};

export type ReportResultDataRow = {
  __typename?: 'ReportResultDataRow';
  columns: Array<ReportResultDataColumn>;
};

export type ReportView = {
  __typename?: 'ReportView';
  columns: Array<ReportViewColumn>;
  sort: Array<ReportViewColumnSort>;
  sources: Array<ReportViewSource>;
};

export type ReportViewColumn = {
  __typename?: 'ReportViewColumn';
  name: Scalars['String'];
  sourceColumnName: Scalars['String'];
  sourceName: Scalars['String'];
};

export type ReportViewColumnSort = {
  __typename?: 'ReportViewColumnSort';
  descending: Scalars['Boolean'];
  index: Scalars['Int'];
  name: Scalars['String'];
};

export type ReportViewSource = {
  __typename?: 'ReportViewSource';
  flatten: Scalars['Boolean'];
  name: Scalars['String'];
};

export enum RetentionType {
  RetentionIndefinite = 'RETENTION_INDEFINITE',
  RetentionNinetyDays = 'RETENTION_NINETY_DAYS',
  RetentionOneDay = 'RETENTION_ONE_DAY',
}

export type ScheduledAction = {
  __typename?: 'ScheduledAction';
  approved: Scalars['Boolean'];
  approver?: Maybe<Principal>;
  comment: Scalars['String'];
  creator: Principal;
  distributeSeconds?: Maybe<Scalars['Int']>;
  endTime?: Maybe<Scalars['Time']>;
  expireSeconds?: Maybe<Scalars['Int']>;
  id: Scalars['ID'];
  issueCount: Scalars['Int'];
  issueSeconds?: Maybe<Scalars['Int']>;
  lastAction?: Maybe<Action>;
  lastStartTime?: Maybe<Scalars['Time']>;
  metadata: Array<Metadata>;
  name: Scalars['String'];
  nextStartTime?: Maybe<Scalars['Time']>;
  package: PackageRef;
  startTime?: Maybe<Scalars['Time']>;
  status?: Maybe<ScheduledActionStatus>;
  targets: ActionTargets;
};

export type ScheduledActionApprovePayload = {
  __typename?: 'ScheduledActionApprovePayload';
  approved?: Maybe<Scalars['Boolean']>;
  error?: Maybe<SystemError>;
  id?: Maybe<Scalars['ID']>;
};

export type ScheduledActionConnection = Connection & {
  __typename?: 'ScheduledActionConnection';
  edges: Array<ScheduledActionEdge>;
  pageInfo: PageInfo;
  totalRecords: Scalars['Int'];
};

export type ScheduledActionCreateInput = {
  comment?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  package: PackageRefInput;
  schedule: ScheduledActionScheduleInput;
  targets: ActionTargetsInput;
};

export type ScheduledActionCreatePayload = {
  __typename?: 'ScheduledActionCreatePayload';
  error?: Maybe<SystemError>;
  scheduledAction?: Maybe<ScheduledAction>;
};

export type ScheduledActionDeletePayload = {
  __typename?: 'ScheduledActionDeletePayload';
  error?: Maybe<SystemError>;
  id?: Maybe<Scalars['ID']>;
};

export type ScheduledActionEdge = Edge & {
  __typename?: 'ScheduledActionEdge';
  cursor: Scalars['Cursor'];
  node: ScheduledAction;
};

export type ScheduledActionScheduleInput = {
  distributeSeconds?: InputMaybe<Scalars['Int']>;
  endTime?: InputMaybe<Scalars['Time']>;
  expireSeconds?: InputMaybe<Scalars['Int']>;
  reissueSeconds: Scalars['Int'];
  startTime?: InputMaybe<Scalars['Time']>;
};

export enum ScheduledActionStatus {
  Deleted = 'DELETED',
  Disabled = 'DISABLED',
  Enabled = 'ENABLED',
}

export type Sensor = {
  __typename?: 'Sensor';
  category: Scalars['String'];
  columns?: Maybe<Array<SensorColumn>>;
  contentSetName: Scalars['String'];
  created?: Maybe<Scalars['Time']>;
  description: Scalars['String'];
  endpointQueryPaths: Array<Array<Scalars['String']>>;
  harvested: Scalars['Boolean'];
  ignoreCase: Scalars['Boolean'];
  keepDuplicatesFlag?: Maybe<Scalars['Boolean']>;
  maxAgeSeconds?: Maybe<Scalars['Int']>;
  name: Scalars['String'];
  parameterizations?: Maybe<Array<SensorParameterization>>;
  parameters?: Maybe<Array<SensorParameter>>;
  scripts?: Maybe<Array<SensorScript>>;
  updated?: Maybe<Scalars['Time']>;
  valueType: Scalars['String'];
  virtual: Scalars['Boolean'];
};

export type SensorColumn = {
  __typename?: 'SensorColumn';
  hidden: Scalars['Boolean'];
  ignoreCase: Scalars['Boolean'];
  name: Scalars['String'];
  valueType: Scalars['String'];
};

export type SensorConnection = Connection & {
  __typename?: 'SensorConnection';
  edges: Array<SensorEdge>;
  pageInfo: PageInfo;
  totalRecords: Scalars['Int'];
};

export type SensorEdge = Edge & {
  __typename?: 'SensorEdge';
  cursor: Scalars['Cursor'];
  node: Sensor;
};

export type SensorHarvestInput = {
  cursor?: InputMaybe<Scalars['Cursor']>;
  harvest: Scalars['Boolean'];
  integrationName: Scalars['String'];
  name: Scalars['String'];
  parameters?: InputMaybe<Array<EndpointSensorRefParam>>;
};

export type SensorHarvestPayload = {
  __typename?: 'SensorHarvestPayload';
  cursor?: Maybe<Scalars['Cursor']>;
  error?: Maybe<SystemError>;
  success?: Maybe<Scalars['Boolean']>;
};

export type SensorParameter = {
  __typename?: 'SensorParameter';
  defaultValue?: Maybe<Scalars['String']>;
  name: Scalars['String'];
};

export type SensorParameterValue = {
  __typename?: 'SensorParameterValue';
  name: Scalars['String'];
  value: Scalars['String'];
};

export type SensorParameterization = {
  __typename?: 'SensorParameterization';
  endpointQueryPaths: Array<Array<Scalars['String']>>;
  harvested: Scalars['Boolean'];
  values: Array<SensorParameterValue>;
};

export type SensorParameters = {
  category?: InputMaybe<Scalars['String']>;
  duration?: InputMaybe<Scalars['String']>;
};

export enum SensorResultValueType {
  BesDate = 'BESDate',
  DataSize = 'DataSize',
  IpAddress = 'IPAddress',
  Numeric = 'Numeric',
  NumericInteger = 'NumericInteger',
  String = 'String',
  TimeDiff = 'TimeDiff',
  Version = 'Version',
  WmiDate = 'WMIDate',
}

export type SensorScript = {
  __typename?: 'SensorScript';
  platform: EndpointPlatform;
  source: Scalars['String'];
  type: SensorScriptType;
};

export enum SensorScriptType {
  BesRelevance = 'BESRelevance',
  JScript = 'JScript',
  Powershell = 'Powershell',
  Python = 'Python',
  UnixShell = 'UnixShell',
  Unknown = 'Unknown',
  VbScript = 'VBScript',
  WmiQuery = 'WMIQuery',
}

export type SensorValueFilter = {
  column?: InputMaybe<Scalars['String']>;
  filters?: InputMaybe<Array<SensorValueFilter>>;
  op?: SensorValueFilterOp;
  restrictOwner?: Scalars['Boolean'];
  value?: InputMaybe<Scalars['String']>;
};

export enum SensorValueFilterOp {
  Contains = 'CONTAINS',
  EndsWith = 'ENDS_WITH',
  Eq = 'EQ',
  Matches = 'MATCHES',
  StartsWith = 'STARTS_WITH',
}

export enum SettingName {
  HotCachePercentage = 'HOT_CACHE_PERCENTAGE',
  LogVerbosityLevel = 'LOG_VERBOSITY_LEVEL',
  RandomSensorDelayInSeconds = 'RANDOM_SENSOR_DELAY_IN_SECONDS',
  StateProtectedFlag = 'STATE_PROTECTED_FLAG',
}

export enum Signal {
  Sigint = 'SIGINT',
  Sigkill = 'SIGKILL',
  Sigterm = 'SIGTERM',
}

export type SoftwareApplicabilityCounts = {
  __typename?: 'SoftwareApplicabilityCounts';
  installEligibleCount: Scalars['Int'];
  installedCount: Scalars['Int'];
  notApplicableCount: Scalars['Int'];
  updateEligibleCount: Scalars['Int'];
  updateIneligibleCount: Scalars['Int'];
};

export type SoftwareDeploymentDetails = {
  __typename?: 'SoftwareDeploymentDetails';
  ID: Scalars['ID'];
  errors?: Maybe<Array<SoftwareDeploymentErrorCount>>;
  name: Scalars['String'];
  status?: Maybe<SoftwareDeploymentStatus>;
};

export type SoftwareDeploymentErrorCount = {
  __typename?: 'SoftwareDeploymentErrorCount';
  count: Scalars['Int'];
  error: Scalars['String'];
};

export type SoftwareDeploymentStatus = {
  __typename?: 'SoftwareDeploymentStatus';
  completeCount: Scalars['Int'];
  downloadCompleteWaitingCount: Scalars['Int'];
  downloadingCount: Scalars['Int'];
  failedCount: Scalars['Int'];
  label: SoftwareDeploymentStatusLabel;
  notApplicableCount: Scalars['Int'];
  runningCount: Scalars['Int'];
  waitingCount: Scalars['Int'];
};

export enum SoftwareDeploymentStatusLabel {
  Active = 'ACTIVE',
  Finished = 'FINISHED',
  Scheduled = 'SCHEDULED',
  Stopped = 'STOPPED',
}

export enum SoftwareOperation {
  Install = 'INSTALL',
  InstallOrUpdate = 'INSTALL_OR_UPDATE',
  Remove = 'REMOVE',
  Update = 'UPDATE',
}

export type SoftwarePackage = {
  __typename?: 'SoftwarePackage';
  applicabilityCounts?: Maybe<SoftwareApplicabilityCounts>;
  id: Scalars['ID'];
  platform: EndpointPlatform;
  productName: Scalars['String'];
  productVendor: Scalars['String'];
  productVersion: Scalars['String'];
};

export type SoftwarePackageConnection = Connection & {
  __typename?: 'SoftwarePackageConnection';
  edges: Array<Maybe<SoftwarePackageEdge>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type SoftwarePackageEdge = Edge & {
  __typename?: 'SoftwarePackageEdge';
  cursor: Scalars['Cursor'];
  node: SoftwarePackage;
};

export type SoftwareTarget = {
  endpoints?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  targetGroup?: InputMaybe<Scalars['String']>;
};

export enum SortOrder {
  Asc = 'asc',
  Desc = 'desc',
}

export type SyncAssetResult = {
  __typename?: 'SyncAssetResult';
  success: Scalars['Boolean'];
};

export type SystemError = {
  __typename?: 'SystemError';
  message?: Maybe<Scalars['String']>;
  retryable?: Maybe<Scalars['Boolean']>;
  timedOut?: Maybe<Scalars['Boolean']>;
};

export type ThreatResponseAlertRef = {
  guid?: InputMaybe<Scalars['ID']>;
};

export type ThreatResponseAlertResolvePayload = {
  __typename?: 'ThreatResponseAlertResolvePayload';
  error?: Maybe<SystemError>;
  guid?: Maybe<Scalars['ID']>;
  resolved?: Maybe<Scalars['Boolean']>;
};

export type UpdateConfigurationItemPropertiesInput = {
  userSpecifiedAssetsMaxAge?: InputMaybe<Scalars['Int']>;
};

export type UpdateConfigurationItemPropertiesResult = {
  __typename?: 'UpdateConfigurationItemPropertiesResult';
  userSpecifiedAssetsMaxAge?: Maybe<Scalars['Int']>;
};

export type UploadBlobUrlInput = {
  category: Scalars['ID'];
  domain: Scalars['ID'];
  key: Scalars['ID'];
};

export type UploadBlobUrlPayload = {
  __typename?: 'UploadBlobURLPayload';
  exists: Scalars['Boolean'];
  url: Scalars['String'];
};

export type WirelessAdapter = {
  __typename?: 'WirelessAdapter';
  ssid: Scalars['String'];
  state: ConnectedState;
};
