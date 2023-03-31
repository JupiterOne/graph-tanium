import {
  createIntegrationEntity,
  Entity,
} from '@jupiterone/integration-sdk-core';

import { Entities } from '../constants';

export function createAccountEntity(): Entity {
  return createIntegrationEntity({
    entityData: {
      source: {},
      assign: {
        _key: 'tanium-account-id',
        _type: Entities.ACCOUNT._type,
        _class: Entities.ACCOUNT._class,
        name: 'Tanium Account',
        displayName: 'Tanium Account',
      },
    },
  });
}
