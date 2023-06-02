# v0.3.0 (Fri Jun 02 2023)

#### 🚀 Enhancement

- INT-7999 - Endpoint query updates [#13](https://github.com/JupiterOne/graph-tanium/pull/13) ([@adam-in-ict](https://github.com/adam-in-ict))

#### 🐛 Bug Fix

- Update integration-deployment.yml [#10](https://github.com/JupiterOne/graph-tanium/pull/10) ([@Nick-NCSU](https://github.com/Nick-NCSU))

#### Authors: 2

- Adam Pierson ([@adam-in-ict](https://github.com/adam-in-ict))
- Nick Thompson ([@Nick-NCSU](https://github.com/Nick-NCSU))

---

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
