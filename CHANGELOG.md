## [0.1.0] - 2023-04-26

### Added

Initial release of Tanium integration.

The following entities are created:

| Resources | Entity `_type`    | Entity `_class` |
| --------- | ----------------- | --------------- |
| Account   | `tanium_account`  | `Account`       |
| Endpoint  | `tanium_endpoint` | `Host`          |
| User      | `tanium_user`     | `User`          |

The following relationships are created:

| Source Entity `_type` | Relationship `_class` | Target Entity `_type` |
| --------------------- | --------------------- | --------------------- |
| `tanium_account`      | **HAS**               | `tanium_endpoint`     |
| `tanium_account`      | **HAS**               | `tanium_user`         |
