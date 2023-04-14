import {
  RelationshipClass,
  StepEntityMetadata,
  StepRelationshipMetadata,
} from '@jupiterone/integration-sdk-core';

export const Steps = {
  ACCOUNT: 'fetch-account',
  ENDPOINTS: 'fetch-endpoints',
};

export const Entities: Record<'ACCOUNT' | 'ENDPOINT', StepEntityMetadata> = {
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
};
export const Relationships: Record<
  'ACCOUNT_HAS_ENDPOINT',
  StepRelationshipMetadata
> = {
  ACCOUNT_HAS_ENDPOINT: {
    sourceType: Entities.ACCOUNT._type,
    targetType: Entities.ENDPOINT._type,
    _type: 'tanium_account_has_endpoint',
    _class: RelationshipClass.HAS,
  },
};
