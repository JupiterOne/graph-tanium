import {
  RelationshipClass,
  StepEntityMetadata,
  StepRelationshipMetadata,
} from '@jupiterone/integration-sdk-core';

export const Steps = {
  ACCOUNT: 'fetch-account',
  ENDPOINTS: 'fetch-endpoints',
  USERS: 'fetch-users',
};

export const Entities: Record<
  'ACCOUNT' | 'ENDPOINT' | 'USER',
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
};
export const Relationships: Record<
  'ACCOUNT_HAS_ENDPOINT' | 'ACCOUNT_HAS_USER',
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
    targetType: Entities.ENDPOINT._type,
    _type: 'tanium_account_has_user',
    _class: RelationshipClass.HAS,
  },
};
