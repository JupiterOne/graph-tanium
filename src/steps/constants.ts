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
  INSTALLED_APPLICATIONS: 'fetch-installed-applications',
  AVAILABLE_PATCHES: 'fetch-available-patches',
  INSTALLED_PATCHES: 'fetch-installed-patches',
};

export const Entities: Record<
  | 'ACCOUNT'
  | 'ENDPOINT'
  | 'USER'
  | 'APPLICATION'
  | 'VERSION'
  | 'INSTALLED_APPLICATION'
  | 'AVAILABLE_PATCH'
  | 'INSTALLED_PATCH',
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
  INSTALLED_APPLICATION: {
    resourceName: 'Installed Application',
    _type: 'tanium_installed_application',
    _class: ['Record'],
  },
  AVAILABLE_PATCH: {
    resourceName: 'Available Patch',
    _type: 'tanium_available_patch',
    _class: ['Record'],
  },
  INSTALLED_PATCH: {
    resourceName: 'Installed Patch',
    _type: 'tanium_installed_patch',
    _class: ['Record'],
  },
};
export const Relationships: Record<
  | 'ACCOUNT_HAS_ENDPOINT'
  | 'ACCOUNT_HAS_USER'
  | 'ACCOUNT_HAS_APPLICATION'
  | 'APPLICATION_HAS_VERSION'
  | 'ENDPOINT_HAS_INSTALLED_APPLICATION'
  | 'ENDPOINT_HAS_AVAILABLE_PATCH'
  | 'ENDPOINT_HAS_INSTALLED_PATCH'
  | 'INSTALLED_APPLICATION_IS_VERSION',
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
  APPLICATION_HAS_VERSION: {
    sourceType: Entities.APPLICATION._type,
    targetType: Entities.VERSION._type,
    _type: 'tanium_application_has_version',
    _class: RelationshipClass.HAS,
  },
  ENDPOINT_HAS_INSTALLED_APPLICATION: {
    sourceType: Entities.ENDPOINT._type,
    targetType: Entities.INSTALLED_APPLICATION._type,
    _type: 'tanium_endpoint_has_installed_application',
    _class: RelationshipClass.HAS,
  },
  ENDPOINT_HAS_AVAILABLE_PATCH: {
    sourceType: Entities.ENDPOINT._type,
    targetType: Entities.AVAILABLE_PATCH._type,
    _type: 'tanium_endpoint_has_available_patch',
    _class: RelationshipClass.HAS,
  },
  ENDPOINT_HAS_INSTALLED_PATCH: {
    sourceType: Entities.ENDPOINT._type,
    targetType: Entities.INSTALLED_PATCH._type,
    _type: 'tanium_endpoint_has_installed_patch',
    _class: RelationshipClass.HAS,
  },
  INSTALLED_APPLICATION_IS_VERSION: {
    sourceType: Entities.INSTALLED_APPLICATION._type,
    targetType: Entities.VERSION._type,
    _type: 'tanium_installed_application_is_version',
    _class: RelationshipClass.IS,
  },
};
