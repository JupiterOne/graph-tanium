import { accountSteps } from './account';
import { endpointSteps } from './endpoints';
import { userSteps } from './users';

const integrationSteps = [...accountSteps, ...endpointSteps, ...userSteps];

export { integrationSteps };
