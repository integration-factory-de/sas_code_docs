# LU_D_MA_LAG (Table)

## Table Description

_No description available_

## Lineage / Impact

```mermaid
%%{init: {'flowchart': { 'nodeSpacing': 10, 'rankSpacing': 40, 'rankdir': 'TB' }}}%%

flowchart LR

```

## References

The table LU_D_MA_LAG is used in the following SAS programs:

| Application | SAS Program |
|---|---|
## Table Schema

| Field Name | Datatype | Precision | Scale | Is Nullable | Constraint | Description |
|---|---|---|---|---|---|---|
| MA_LAG_ID | NUMBER | 10 | 0 | FALSE | PRIMARY KEY | Unique identifier for warehouse/store location |
| LAG_NR | VARCHAR | 3 | 0 | TRUE |   | Warehouse/store number |
| LAG_TYP_ID | VARCHAR | 2 | 0 | TRUE |   | Warehouse type identifier |
| LAG_GUELT_VON | DATE |  |  | TRUE |   | Valid from date for warehouse |
| LAG_GUELT_BIS | DATE |  |  | TRUE |   | Valid until date for warehouse |
| MA_TREG_LBER_ID | NUMBER | 10 | 0 | TRUE |   | Regional delivery area identifier |
| LAG_BEZEICHNUNG | VARCHAR | 50 | 0 | TRUE |   | Warehouse description/name |
| LAG_STATUS | VARCHAR | 1 | 0 | TRUE |   | Warehouse status indicator |