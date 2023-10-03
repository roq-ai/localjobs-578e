const mapping: Record<string, string> = {
  'job-applications': 'job_application',
  'job-categories': 'job_category',
  'job-listings': 'job_listing',
  organizations: 'organization',
  'organization-profiles': 'organization_profile',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
