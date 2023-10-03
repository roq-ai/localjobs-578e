import queryString from 'query-string';
import { JobApplicationInterface, JobApplicationGetQueryInterface } from 'interfaces/job-application';
import { fetcher } from 'lib/api-fetcher';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getJobApplications = async (
  query?: JobApplicationGetQueryInterface,
): Promise<PaginatedInterface<JobApplicationInterface>> => {
  return fetcher('/api/job-applications', {}, query);
};

export const createJobApplication = async (jobApplication: JobApplicationInterface) => {
  return fetcher('/api/job-applications', { method: 'POST', body: JSON.stringify(jobApplication) });
};

export const updateJobApplicationById = async (id: string, jobApplication: JobApplicationInterface) => {
  return fetcher(`/api/job-applications/${id}`, { method: 'PUT', body: JSON.stringify(jobApplication) });
};

export const getJobApplicationById = async (id: string, query?: GetQueryInterface) => {
  return fetcher(`/api/job-applications/${id}${query ? `?${queryString.stringify(query)}` : ''}`, {});
};

export const deleteJobApplicationById = async (id: string) => {
  return fetcher(`/api/job-applications/${id}`, { method: 'DELETE' });
};
