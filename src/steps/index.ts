import { accountSteps } from './account';
import { availablePatchesSteps } from './applicable-patches';
import { applicationSteps } from './applications';
import { endpointSteps } from './endpoints';
import { installedApplicationsSteps } from './installed-applications';
import { installedPatchesSteps } from './installed-patches';
import { userSteps } from './users';

const integrationSteps = [
  ...accountSteps,
  ...endpointSteps,
  ...userSteps,
  ...applicationSteps,
  ...installedApplicationsSteps,
  ...installedPatchesSteps,
  ...availablePatchesSteps,
];

export { integrationSteps };
