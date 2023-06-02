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
  Cursor: any;
  Date: any;
  Map: any;
  Time: any;
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

export type Connection = {
  edges: Array<Maybe<Edge>>;
  pageInfo: PageInfo;
};

export type Edge = {
  cursor: Scalars['Cursor'];
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

export type IdRefInput = {
  id: Scalars['ID'];
};

export type Mutation = {
  __typename?: 'Mutation';
  assetProducts?: Maybe<AssetProductsPayload>;
  assetsImport: AssetsImportPayload;
};

export type MutationAssetProductsArgs = {
  input: Array<AssetProductsInput>;
};

export type MutationAssetsImportArgs = {
  input: AssetsImportInput;
};

export type NameOnlyRefInput = {
  name: Scalars['String'];
};

export type NamedRefInput = {
  id?: InputMaybe<Scalars['ID']>;
  name?: InputMaybe<Scalars['String']>;
};

export type PageInfo = {
  __typename?: 'PageInfo';
  endCursor?: Maybe<Scalars['Cursor']>;
  hasNextPage: Scalars['Boolean'];
  hasPreviousPage: Scalars['Boolean'];
  startCursor?: Maybe<Scalars['Cursor']>;
};

export type Query = {
  __typename?: 'Query';
  assetProductEndpoints?: Maybe<AssetProductEndpointConnection>;
  assetProducts?: Maybe<AssetProductConnection>;
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

export type SystemError = {
  __typename?: 'SystemError';
  message?: Maybe<Scalars['String']>;
  retryable?: Maybe<Scalars['Boolean']>;
  timedOut?: Maybe<Scalars['Boolean']>;
};
