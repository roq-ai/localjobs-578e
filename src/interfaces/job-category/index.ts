import { GetQueryInterface } from 'interfaces';

export interface JobCategoryInterface {
  id?: string;
  created_at?: any;
  updated_at?: any;

  _count?: {};
}

export interface JobCategoryGetQueryInterface extends GetQueryInterface {
  id?: string;
}
