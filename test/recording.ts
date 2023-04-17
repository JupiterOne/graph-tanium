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

  const requestUrl = entry.request.url;
  if (!entry.response.content.text) {
    return;
  }

  //let's unzip the entry so we can modify it
  mutations.unzipGzippedRecordingEntry(entry);

  if (requestUrl.includes('api/v2/users')) {
    const body = JSON.parse(entry.response.content.text);
    for (let i = 0; i < body.data.length; i++) {
      const data = body.data[i];
      if (data.name.includes('@')) {
        data.name = 'first.last@example.com';
      }
      body.data[i] = data;
    }
    entry.response.content.text = JSON.stringify(body);
  }

  if (requestUrl.match(/api\/v2\/session\/validate/)) {
    entry.response.content.text = JSON.stringify(
      getRedactedTokenValidationResponse(),
    );
    return;
  }
}
