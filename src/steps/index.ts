import { accountSteps } from './account';
import { applicationSteps } from './applications';
import { endpointSteps } from './endpoints';
import { installedApplicationsSteps } from './installed-applications';
import { userSteps } from './users';

const integrationSteps = [
  ...accountSteps,
  ...endpointSteps,
  ...userSteps,
  ...applicationSteps,
  ...installedApplicationsSteps,
];

export { integrationSteps };
