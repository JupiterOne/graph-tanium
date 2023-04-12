import {
  setupRecording,
  Recording,
  SetupRecordingInput,
  mutations,
} from '@jupiterone/integration-sdk-testing';

export { Recording };

export function setupProjectRecording(
  input: Omit<SetupRecordingInput, 'mutateEntry'>,
): Recording {
  return setupRecording({
    options: {
      mode: process.env.LOAD_ENV ? 'record' : 'replay',
      recordIfMissing: false,
      matchRequestsBy: {
        url: {
          hostname: false,
        },
      },
    },
    ...input,
    redactedRequestHeaders: ['Authorization', 'session', 'host'],
    redactedResponseHeaders: ['set-cookie'],
    mutateEntry: (entry) => {
      redact(entry);
    },
  });
}

// a more sophisticated redaction example below:
function getRedactedTokenValidationResponse() {
  return {
    session: '[REDACTED]',
  };
}

function redact(entry): void {
  if (entry.request.postData) {
    entry.request.postData.text = '[REDACTED]';
  }

  if (!entry.response.content.text) {
    return;
  }

  //let's unzip the entry so we can modify it
  mutations.unzipGzippedRecordingEntry(entry);

  const requestUrl = entry.request.url;
  if (requestUrl.match(/api\/v2\/session\/validate/)) {
    entry.response.content.text = JSON.stringify(
      getRedactedTokenValidationResponse(),
    );
    return;
  }
}
