import queryString from 'query-string';
import { JobListingInterface, JobListingGetQueryInterface } from 'interfaces/job-listing';
import { fetcher } from 'lib/api-fetcher';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getJobListings = async (
  query?: JobListingGetQueryInterface,
): Promise<PaginatedInterface<JobListingInterface>> => {
  return fetcher('/api/job-listings', {}, query);
};

export const createJobListing = async (jobListing: JobListingInterface) => {
  return fetcher('/api/job-listings', { method: 'POST', body: JSON.stringify(jobListing) });
};

export const updateJobListingById = async (id: string, jobListing: JobListingInterface) => {
  return fetcher(`/api/job-listings/${id}`, { method: 'PUT', body: JSON.stringify(jobListing) });
};

export const getJobListingById = async (id: string, query?: GetQueryInterface) => {
  return fetcher(`/api/job-listings/${id}${query ? `?${queryString.stringify(query)}` : ''}`, {});
};

export const deleteJobListingById = async (id: string) => {
  return fetcher(`/api/job-listings/${id}`, { method: 'DELETE' });
};
