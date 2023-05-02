# Tanium

## Integration Benefits

- Visualize Tanium assets, users, and evaluations in the JupiterOne graph.
- Monitor changes to Tanium endpoints using JupiterOne alerts.

## How it Works

- JupiterOne periodically fetches users and endpoints from Tanium to update the
  graph.
- Write JupiterOne queries to review and monitor updates to the graph or
  leverage existing queries.
- Configure alerts to take action when JupiterOne graph changes or leverage
  existing alerts.

## Prerequisites

- You must have access to the Administration module in Tanium to create API
  keys.
- The user who creates the API Key must have the `API Gateway User` role.
- You must have permission in JupiterOne to install new integrations.

## Support

If you need help with this integration, contact
[JupiterOne Support](https://support.jupiterone.io).

## How to Use This Integration

### In Tanium

1. In your Tanium console, at the top bar, navigate to **Administration** >
   **Permissions** > **API Tokens**
2. Click **New API Token**
3. Set the number of days until your token expires.
4. If you are running the integration in JupiterOne then add the following IPs
   to the Trusted IP list.
   - Running in US Region:
     - 18.219.33.157
     - 18.218.86.86
     - 52.14.136.234
   - Running in Cisco US Region:
     - 34.233.148.77
     - 44.199.84.191
     - 52.21.5.206
   - Running in EU Region:
     - 3.67.240.226
     - 52.28.3.30
     - 3.121.249.173
5. Copy your API Token for use in JupiterOne.

### In JupiterOne

1. From the top navigation of the J1 Search homepage, select **Integrations**.
2. Scroll down to **Tanium** and click it.
3. Click **Add Configuration** and configure the following settings:

- Enter the account name by which you want to identify this Tanium account in
  JupiterOne. Select **Tag with Account Name** to store this value in
  `tag.AccountName` of the ingested assets.
- Enter a description to help your team identify the integration.
- Select a polling interval that is sufficient for your monitoring requirements.
  You can leave this as `DISABLED` and manually execute the integration.
- Enter the **API Token** generated for use by JupiterOne.
- Enter the base URL for your Tanium instance's API. The endpoint will look like
  `https://<customerName>-api.cloud.tanium.com`

4. Click **Create** after you have entered all the values.

## How to Uninstall

1. From the top navigation of the J1 Search homepage, select **Integrations**.
2. Scroll down to **Tanium** and click it.
3. Identify and click the **instance to delete**.
4. Click the trash can icon.
5. Click **Delete** to delete the integration.

<!-- {J1_DOCUMENTATION_MARKER_START} -->
<!--
********************************************************************************
NOTE: ALL OF THE FOLLOWING DOCUMENTATION IS GENERATED USING THE
"j1-integration document" COMMAND. DO NOT EDIT BY HAND! PLEASE SEE THE DEVELOPER
DOCUMENTATION FOR USAGE INFORMATION:

https://github.com/JupiterOne/sdk/blob/main/docs/integrations/development.md
********************************************************************************
-->

## Data Model

### Entities

The following entities are created:

| Resources | Entity `_type`    | Entity `_class` |
| --------- | ----------------- | --------------- |
| Account   | `tanium_account`  | `Account`       |
| Endpoint  | `tanium_endpoint` | `Host`          |
| User      | `tanium_user`     | `User`          |

### Relationships

The following relationships are created:

| Source Entity `_type` | Relationship `_class` | Target Entity `_type` |
| --------------------- | --------------------- | --------------------- |
| `tanium_account`      | **HAS**               | `tanium_endpoint`     |
| `tanium_account`      | **HAS**               | `tanium_user`         |

<!--
********************************************************************************
END OF GENERATED DOCUMENTATION AFTER BELOW MARKER
********************************************************************************
-->
<!-- {J1_DOCUMENTATION_MARKER_END} -->
