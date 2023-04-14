import { accountSteps } from './account';
import { endpointSteps } from './endpoints';

const integrationSteps = [...accountSteps, ...endpointSteps];

export { integrationSteps };
