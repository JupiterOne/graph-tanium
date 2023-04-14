export interface TaniumUser {
  id: number;
  external_flag: number;
  name: string;
  domain: string;
  display_name: string;
  group_id: number;
  effective_group_id: number;
  deleted_flag: boolean;
  locked_out: number;
  creation_time: Date;
  modification_time: Date;
  last_login: Date;
  previous_login: Date;
  permissions: string[];
  effective_content_set_privileges: EffectiveContentSetPrivilege[];
  local_admin_flag: number;
  metadata: any[];
  content_set_roles: ContentSetRole[];
  roles: any[];
}

export interface ContentSetRole {
  id: number;
  name: string;
}

export interface EffectiveContentSetPrivilege {
  content_set: ContentSet;
  content_set_privilege_list: ContentSetPrivilegeList[];
}

export interface ContentSet {
  id: number;
}

export interface ContentSetPrivilegeList {
  name: string;
}
