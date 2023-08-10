import {
  IntegrationError,
  IntegrationProviderAPIError,
  IntegrationProviderAuthenticationError,
  IntegrationProviderAuthorizationError,
} from '@jupiterone/integration-sdk-core';
import { GaxiosError, GaxiosOptions, request } from 'gaxios';
import { IntegrationConfig } from '../config';
import {
  AssetProduct,
  AssetProductConnection,
  AssetProductEndpoint,
  AssetProductEndpointConnection,
  EndpointConnection,
  EndpointInstalledApplication,
} from './gql-types';
import { Queries } from './queries';
import { TaniumUser } from './rest-types';

export type ResourceIteratee<T> = (each: T) => Promise<void> | void;

const MAX_LIMIT = 100;

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

  public async iterateUsers(iteratee: ResourceIteratee<TaniumUser>) {
    const response = await this.makeRequest<{ data: TaniumUser[] }>({
      url: '/api/v2/users',
    });
    for (const user of response.data.data) {
      await iteratee(user);
    }
  }

  public async iterateEndpoints(
    iteratee: ResourceIteratee<AssetProductEndpoint>,
  ): Promise<void> {
    let hasNextPage = false;
    let cursor = undefined;
    do {
      const response = await this.makeRequest<{
        data: { assetProductEndpoints: AssetProductEndpointConnection };
      }>({
        url: '/plugin/products/gateway/graphql',
        method: 'POST',
        data: {
          query: Queries.ASSET_PRODUCT_ENDPOINTS_QUERY,
          variables: {
            after: cursor,
            first: MAX_LIMIT,
          },
        },
      });

      const endpointsData = response.data?.data?.assetProductEndpoints;
      cursor = endpointsData?.pageInfo?.endCursor;
      hasNextPage = endpointsData?.pageInfo?.hasNextPage;
      for (const edge of endpointsData?.edges || []) {
        if (edge) {
          await iteratee(edge.node);
        }
      }
    } while (hasNextPage);
  }

  public async iterateApplications(
    iteratee: ResourceIteratee<AssetProduct>,
  ): Promise<void> {
    let hasNextPage = false;
    let cursor = undefined;
    do {
      const response = await this.makeRequest<{
        data: { assetProducts: AssetProductConnection };
      }>({
        url: '/plugin/products/gateway/graphql',
        method: 'POST',
        data: {
          query: Queries.APPLICATION_QUERY,
          variables: {
            after: cursor,
            first: MAX_LIMIT,
          },
        },
      });

      const assetProductsData = response.data?.data?.assetProducts;
      cursor = assetProductsData?.pageInfo?.endCursor;
      hasNextPage = assetProductsData?.pageInfo?.hasNextPage;
      for (const edge of assetProductsData?.edges || []) {
        if (edge) {
          await iteratee(edge.node);
        }
      }
    } while (hasNextPage);
  }

  public async iterateInstalledApplications(
    computerId: string,
    iteratee: ResourceIteratee<EndpointInstalledApplication>,
  ): Promise<void> {
    const response = await this.makeRequest<{
      data: { endpoints: EndpointConnection };
    }>({
      url: '/plugin/products/gateway/graphql',
      method: 'POST',
      data: {
        query: Queries.INSTALLED_APPLICATIONS_QUERY,
        variables: {
          filter: { path: 'computerID', value: computerId },
        },
      },
    });

    const installedApplications =
      response.data?.data?.endpoints.edges[0]?.node.installedApplications;
    for (const installedApplication of installedApplications || []) {
      await iteratee(installedApplication);
    }
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
      const response = await request<
        T & { errors: Array<Record<string, unknown>> }
      >({
        baseUrl: this.config.baseUrl,
        headers: {
          'Content-Type': 'application/json',
          session: this.config.token,
        },
        retry: true,
        ...opts,
      });
      if (response.data.errors) {
        const collectErrors = response.data.errors.map((error) =>
          JSON.stringify(error),
        );
        throw new Error(`API Gateway Errors: ${collectErrors.join(' | ')}`);
      }
      return response;
    } catch (err) {
      if (err instanceof GaxiosError) {
        const status = err.response?.status ?? 404;
        const statusText = err.response?.statusText ?? 'No Response Received';
        const endpoint = err.response?.config?.url ?? this.config.baseUrl;

        if (err.response?.status === 401) {
          throw new IntegrationProviderAuthenticationError({
            cause: err,
            status,
            statusText,
            endpoint,
          });
        } else if (err.response?.status == 403) {
          throw new IntegrationProviderAuthorizationError({
            cause: err,
            status,
            statusText,
            endpoint,
          });
        } else {
          throw new IntegrationProviderAPIError({
            cause: err,
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
