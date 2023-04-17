import {
  createIntegrationEntity,
  parseTimePropertyValue,
} from '@jupiterone/integration-sdk-core';
import { Entities } from '../constants';
import { TaniumUser } from '../../tanium/rest-types';

export function createUserKey(id: number) {
  return `tanium_user:${id}`;
}

export function createUserEntity(user: TaniumUser) {
  return createIntegrationEntity({
    entityData: {
      source: {
        ...user,
        // This property can be _very very large_.
        // Trimming it to prevent it from breaking uploads.
        effective_content_set_privileges: user.effective_content_set_privileges
          .length
          ? 'TRIMMED'
          : user.effective_content_set_privileges,
      },
      assign: {
        _key: createUserKey(user.id),
        _class: Entities.USER._class,
        _type: Entities.USER._type,
        id: String(user.id),
        displayName: user.display_name || user.name,
        name: user.name,
        createdOn: parseTimePropertyValue(user.creation_time),
        updatedOn: parseTimePropertyValue(user.modification_time),
        lastLoginAt: parseTimePropertyValue(user.last_login),
        deleted: user.deleted_flag,
        domain: user.domain,
        lockedOut: user.locked_out !== 0,
        external: user.external_flag !== 0,
      },
    },
  });
}
