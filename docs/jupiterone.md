# Tanium

## Support

If you need help with this integration, contact
[JupiterOne Support](https://support.jupiterone.io).

## Prerequisites

- You must have permission in JupiterOne to install new integrations.

## How to Use This Integration

### In Tanium

1. [Generate a REST API key](https://example.com/docs/generating-api-keys)

### In JupiterOne

TODO: List specific actions that the user must take in JupiterOne. Many of the
following steps will be reusable; take care to be sure they remain accurate.

1. From the top navigation of the J1 Search homepage, select **Integrations**.
2. Scroll down to **{{provider}}** and click it.
3. Click **Add Configuration** and configure the following settings:

- Enter the account name by which you want to identify this {{provider}} account
  in JupiterOne. Select **Tag with Account Name** to store this value in
  `tag.AccountName` of the ingested assets.
- Enter a description to help your team identify the integration.
- Select a polling interval that is sufficient for your monitoring requirements.
  You can leave this as `DISABLED` and manually execute the integration.
- {{additional provider-specific settings}} Enter the {{provider}} API key
  generated for use by JupiterOne.

4. Click **Create Configuration** after you have entered all the values.

## How to Uninstall

TODO: List specific actions that must be taken to uninstall the integration.
Many of the following steps will be reusable; take care to be sure they remain
accurate.

1. From the top navigation of the J1 Search homepage, select **Integrations**.
2. Scroll down to **{{provider}}** and click it.
3. Identify and click the **integration to delete**.
4. Click the trash can icon.
5. Click **Remove** to delete the integration.

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
