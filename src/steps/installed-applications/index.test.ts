jest.setTimeout(10000);

import { executeStepWithDependencies } from '@jupiterone/integration-sdk-testing';
import { buildStepTestConfigForStep } from '../../../test/config';
import { Recording, setupProjectRecording } from '../../../test/recording';
import { Steps } from '../constants';

// See test/README.md for details
let recording: Recording;
afterEach(async () => {
  await recording.stop();
});

test('fetch-installed-applications', async () => {
  recording = setupProjectRecording({
    directory: __dirname,
    name: 'fetch-installed-applications',
  });

  const stepConfig = buildStepTestConfigForStep(Steps.INSTALLED_APPLICATIONS);
  const stepResult = await executeStepWithDependencies(stepConfig);
  expect(stepResult).toMatchSnapshot();
});
