import { accountSteps } from './account';
import { applicationSteps } from './applications';
import { endpointSteps } from './endpoints';
import { userSteps } from './users';

const integrationSteps = [
  ...accountSteps,
  ...endpointSteps,
  ...userSteps,
  ...applicationSteps,
];

export { integrationSteps };
