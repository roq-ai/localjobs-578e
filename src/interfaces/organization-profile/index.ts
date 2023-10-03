import { GetQueryInterface } from 'interfaces';

export interface OrganizationProfileInterface {
  id?: string;
  created_at?: any;
  updated_at?: any;

  _count?: {};
}

export interface OrganizationProfileGetQueryInterface extends GetQueryInterface {
  id?: string;
}
