import { executeStepWithDependencies } from '@jupiterone/integration-sdk-testing';
import { buildStepTestConfigForStep } from '../../../test/config';
import { Recording, setupProjectRecording } from '../../../test/recording';
import { Steps } from '../constants';

let recording: Recording;
afterEach(async () => {
  await recording.stop();
});

test('fetch-applicable-patches', async () => {
  recording = setupProjectRecording({
    directory: __dirname,
    name: 'fetch-applicable-patches',
  });

  const stepConfig = buildStepTestConfigForStep(Steps.AVAILABLE_PATCHES);
  const stepResult = await executeStepWithDependencies(stepConfig);
  expect(stepResult).toMatchSnapshot();
});
