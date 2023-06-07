import {
  RelationshipClass,
  StepEntityMetadata,
  StepRelationshipMetadata,
} from '@jupiterone/integration-sdk-core';

export const Steps = {
  ACCOUNT: 'fetch-account',
  ENDPOINTS: 'fetch-endpoints',
  USERS: 'fetch-users',
  APPLICATIONS: 'fetch-applications',
};

export const Entities: Record<
  'ACCOUNT' | 'ENDPOINT' | 'USER' | 'APPLICATION' | 'VERSION',
  StepEntityMetadata
> = {
  ACCOUNT: {
    resourceName: 'Account',
    _type: 'tanium_account',
    _class: ['Account'],
    schema: {
      properties: {},
    },
  },
  ENDPOINT: {
    resourceName: 'Endpoint',
    _type: 'tanium_endpoint',
    _class: ['Host'],
  },
  USER: {
    resourceName: 'User',
    _type: 'tanium_user',
    _class: ['User'],
  },
  APPLICATION: {
    resourceName: 'Application',
    _type: 'tanium_application',
    _class: ['Application'],
  },
  VERSION: {
    resourceName: 'Application Version',
    _type: 'tanium_application_version',
    _class: ['Record'],
  },
};
export const Relationships: Record<
  | 'ACCOUNT_HAS_ENDPOINT'
  | 'ACCOUNT_HAS_USER'
  | 'ACCOUNT_HAS_APPLICATION'
  | 'APPLICATION_HAS_VERISON',
  StepRelationshipMetadata
> = {
  ACCOUNT_HAS_ENDPOINT: {
    sourceType: Entities.ACCOUNT._type,
    targetType: Entities.ENDPOINT._type,
    _type: 'tanium_account_has_endpoint',
    _class: RelationshipClass.HAS,
  },
  ACCOUNT_HAS_USER: {
    sourceType: Entities.ACCOUNT._type,
    targetType: Entities.USER._type,
    _type: 'tanium_account_has_user',
    _class: RelationshipClass.HAS,
  },
  ACCOUNT_HAS_APPLICATION: {
    sourceType: Entities.ACCOUNT._type,
    targetType: Entities.APPLICATION._type,
    _type: 'tanium_account_has_application',
    _class: RelationshipClass.HAS,
  },
  APPLICATION_HAS_VERISON: {
    sourceType: Entities.APPLICATION._type,
    targetType: Entities.VERSION._type,
    _type: 'tanium_application_has_version',
    _class: RelationshipClass.HAS,
  },
};
