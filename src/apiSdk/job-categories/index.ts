import queryString from 'query-string';
import { JobCategoryInterface, JobCategoryGetQueryInterface } from 'interfaces/job-category';
import { fetcher } from 'lib/api-fetcher';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getJobCategories = async (
  query?: JobCategoryGetQueryInterface,
): Promise<PaginatedInterface<JobCategoryInterface>> => {
  return fetcher('/api/job-categories', {}, query);
};

export const createJobCategory = async (jobCategory: JobCategoryInterface) => {
  return fetcher('/api/job-categories', { method: 'POST', body: JSON.stringify(jobCategory) });
};

export const updateJobCategoryById = async (id: string, jobCategory: JobCategoryInterface) => {
  return fetcher(`/api/job-categories/${id}`, { method: 'PUT', body: JSON.stringify(jobCategory) });
};

export const getJobCategoryById = async (id: string, query?: GetQueryInterface) => {
  return fetcher(`/api/job-categories/${id}${query ? `?${queryString.stringify(query)}` : ''}`, {});
};

export const deleteJobCategoryById = async (id: string) => {
  return fetcher(`/api/job-categories/${id}`, { method: 'DELETE' });
};
