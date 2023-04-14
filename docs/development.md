# Development

## Authentication

You can authenticate with the API by using a session token. To generate a
session token navigate to **Administration** > **API Tokens**.

## Generating Types

Run `tools/get_current_schema.bash` with the base url as the first argument and
a valid token as the second argument. Then run `yarn generate:types`.
