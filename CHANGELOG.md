# v0.5.1 (Wed Aug 30 2023)

#### 🐛 Bug Fix

- INT-9441 - add computerId in installed applications [#19](https://github.com/JupiterOne/graph-tanium/pull/19) (ronald.arias@contractor.jupiterone.com)

#### Authors: 1

- Ronald Arias ([@RonaldEAM](https://github.com/RonaldEAM))

---

# v0.5.0 (Fri Aug 11 2023)

#### 🚀 Enhancement

- INT-8744 - ingest installed applications [#18](https://github.com/JupiterOne/graph-tanium/pull/18) (ronald.arias@contractor.jupiterone.com)

#### Authors: 1

- Ronald Arias ([@RonaldEAM](https://github.com/RonaldEAM))

---

# v0.4.3 (Tue Jul 25 2023)

#### 🐛 Bug Fix

- INT-8744 - remove "eid" field from endpoints gql query [#17](https://github.com/JupiterOne/graph-tanium/pull/17) (ronald.arias@contractor.jupiterone.com)

#### Authors: 1

- Ronald Arias ([@RonaldEAM](https://github.com/RonaldEAM))

---

# v0.4.2 (Thu Jul 13 2023)

#### 🐛 Bug Fix

- INT-8675 - Add error handling from response data [#16](https://github.com/JupiterOne/graph-tanium/pull/16) (ronald.arias@contractor.jupiterone.com)

#### Authors: 1

- Ronald Arias ([@RonaldEAM](https://github.com/RonaldEAM))

---

# v0.4.1 (Wed Jul 12 2023)

#### 🐛 Bug Fix

- INT-8675 - add duplicate applications handling; add original error to report [#15](https://github.com/JupiterOne/graph-tanium/pull/15) (ronald.arias@contractor.jupiterone.com)

#### Authors: 1

- Ronald Arias ([@RonaldEAM](https://github.com/RonaldEAM))

---

# v0.4.0 (Thu Jun 08 2023)

#### 🚀 Enhancement

- INT-8491 - Adding application inventory step [#14](https://github.com/JupiterOne/graph-tanium/pull/14) ([@adam-in-ict](https://github.com/adam-in-ict))

#### Authors: 1

- Adam Pierson ([@adam-in-ict](https://github.com/adam-in-ict))

---

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
