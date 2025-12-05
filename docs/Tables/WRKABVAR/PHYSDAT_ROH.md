# PHYSDAT_ROH (Table)

## Table Description

_No description available_

## Lineage / Impact

```mermaid
%%{init: {'flowchart': { 'nodeSpacing': 10, 'rankSpacing': 40, 'rankdir': 'TB' }}}%%

flowchart LR

```

## References

The table PHYSDAT_ROH is used in the following SAS programs:

| Application | SAS Program |
|---|---|
| [DWABVARAL](../../Applications/DWABVARAL) | [abv_aral_move_beweg.sas](../../Applications/DWABVARAL/abv_aral_move_beweg.sas) |
## Table Schema

| Field Name | Datatype | Precision | Scale | Is Nullable | Constraint | Description |
|---|---|---|---|---|---|---|
| physname | VARCHAR | 50 | 0 | TRUE |   | Physical file name from directory listing |
| kennsatz | VARCHAR | 8 | 0 | TRUE |   | File identifier extracted from filename |
| anz | INTEGER | 8 | 0 | TRUE |   | Counter for matching files |