interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Admin'],
  customerRoles: ['Customer'],
  tenantRoles: ['Recruiter', 'Admin'],
  tenantName: 'Organization',
  applicationName: 'LocalJobs',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [
    'Create job applications',
    'Read job listings',
    'Read job categories',
    'Read organization profiles',
  ],
  ownerAbilities: [
    'Manage organization profiles',
    'Manage job categories',
    'Manage job applications',
    'Manage job listings',
    'Manage users',
    'Manage organizations',
  ],
  getQuoteUrl: 'https://app.roq.ai/proposal/bc205f9e-2225-46f4-a52f-bff9b847735a',
};
