import { StepEntityMetadata } from '@jupiterone/integration-sdk-core';

export const Steps = {
  ACCOUNT: 'fetch-account',
};

export const Entities: Record<'ACCOUNT', StepEntityMetadata> = {
  ACCOUNT: {
    resourceName: 'Account',
    _type: 'tanium_account',
    _class: ['Account'],
    schema: {
      properties: {},
    },
  },
};
