import queryString from 'query-string';
import { OrganizationProfileInterface, OrganizationProfileGetQueryInterface } from 'interfaces/organization-profile';
import { fetcher } from 'lib/api-fetcher';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getOrganizationProfiles = async (
  query?: OrganizationProfileGetQueryInterface,
): Promise<PaginatedInterface<OrganizationProfileInterface>> => {
  return fetcher('/api/organization-profiles', {}, query);
};

export const createOrganizationProfile = async (organizationProfile: OrganizationProfileInterface) => {
  return fetcher('/api/organization-profiles', { method: 'POST', body: JSON.stringify(organizationProfile) });
};

export const updateOrganizationProfileById = async (id: string, organizationProfile: OrganizationProfileInterface) => {
  return fetcher(`/api/organization-profiles/${id}`, { method: 'PUT', body: JSON.stringify(organizationProfile) });
};

export const getOrganizationProfileById = async (id: string, query?: GetQueryInterface) => {
  return fetcher(`/api/organization-profiles/${id}${query ? `?${queryString.stringify(query)}` : ''}`, {});
};

export const deleteOrganizationProfileById = async (id: string) => {
  return fetcher(`/api/organization-profiles/${id}`, { method: 'DELETE' });
};
