import {
  IntegrationError,
  IntegrationProviderAPIError,
  IntegrationProviderAuthenticationError,
  IntegrationProviderAuthorizationError,
} from '@jupiterone/integration-sdk-core';
import { GaxiosError, GaxiosOptions, request } from 'gaxios';
import { IntegrationConfig } from '../config';
import { Endpoint, EndpointConnection } from './types';

export type ResourceIteratee<T> = (each: T) => Promise<void> | void;

/**
 * An APIClient maintains authentication state and provides an interface to
 * third party data APIs.
 *
 * It is recommended that integrations wrap provider data APIs to provide a
 * place to handle error responses and implement common patterns for iterating
 * resources.
 */
export class APIClient {
  constructor(readonly config: IntegrationConfig) {}

  public async iterateEndpoints(
    iteratee: ResourceIteratee<Endpoint>,
  ): Promise<void> {
    let hasNextPage = false;
    let cursor = undefined;
    do {
      const response = await this.makeRequest<{
        data: { endpoints: EndpointConnection };
      }>({
        url: '/plugin/products/gateway/graphql',
        method: 'POST',
        data: {
          query: Queries.ENDPOINT_QUERY,
          variables: {
            after: cursor,
          },
        },
      });

      cursor = response.data?.data?.endpoints.pageInfo.endCursor;
      hasNextPage = response.data?.data?.endpoints.pageInfo.hasNextPage;
      for (const edge of response.data?.data?.endpoints?.edges || []) {
        await iteratee(edge.node);
      }
    } while (hasNextPage);
  }

  public async verifyAuthentication(): Promise<void> {
    const url = '/api/v2/session/validate';
    try {
      await this.makeRequest({
        url,
        method: 'POST',
        data: {
          session: this.config.token,
        },
      });
    } catch (err) {
      throw new IntegrationProviderAuthenticationError({
        cause: err,
        endpoint: err.endpoint ?? '',
        status: err.status ?? '',
        statusText: err.statusText ?? '',
      });
    }
  }

  private async makeRequest<T>(
    opts: Pick<GaxiosOptions, 'url' | 'method' | 'data' | 'headers' | 'params'>,
  ) {
    try {
      return await request<T>({
        baseUrl: this.config.baseUrl,
        headers: {
          'Content-Type': 'application/json',
          session: this.config.token,
        },
        ...opts,
      });
    } catch (err) {
      if (err instanceof GaxiosError) {
        const status = err.response?.status ?? 404;
        const statusText = err.response?.statusText ?? 'No Response Received';
        const endpoint = err.response?.config?.url ?? this.config.baseUrl;

        if (err.response?.status === 401) {
          throw new IntegrationProviderAuthenticationError({
            status,
            statusText,
            endpoint,
          });
        } else if (err.response?.status == 403) {
          throw new IntegrationProviderAuthorizationError({
            status,
            statusText,
            endpoint,
          });
        } else {
          throw new IntegrationProviderAPIError({
            status,
            statusText,
            endpoint,
          });
        }
      } else {
        throw new IntegrationError({
          message: err.message,
          code: (err as Error).name,
        });
      }
    }
  }
}

export function createAPIClient(config: IntegrationConfig): APIClient {
  return new APIClient(config);
}
