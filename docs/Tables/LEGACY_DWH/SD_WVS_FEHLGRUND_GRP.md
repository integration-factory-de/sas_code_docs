# SD_WVS_FEHLGRUND_GRP (Table)

## Table Description

_No description available_

## Lineage / Impact

```mermaid
%%{init: {'flowchart': { 'nodeSpacing': 10, 'rankSpacing': 40, 'rankdir': 'TB' }}}%%

flowchart LR

```

## References

The table SD_WVS_FEHLGRUND_GRP is used in the following SAS programs:

| Application | SAS Program |
|---|---|
## Table Schema

| Field Name | Datatype | Precision | Scale | Is Nullable | Constraint | Description |
|---|---|---|---|---|---|---|
| FEHL_ART_GRUND_GRP_ID | NUMBER | 7 | 0 | FALSE | PRIMARY KEY | Unique identifier for the failure reason group |
| FEHL_ART_GRUND_GRP_TXT | VARCHAR | 100 | 0 | TRUE |   | Description text for the failure reason group |
| FEHL_ART_GRUND_KLASSE_ID | NUMBER | 7 | 0 | TRUE | FOREIGN KEY | Foreign key reference to failure reason class |
| ERSTELL_DATUM | DATE | 0 | 0 | TRUE |   | Record creation date |
| AENDER_DATUM | DATE | 0 | 0 | TRUE |   | Record modification date |
| SATZ_STATUS | VARCHAR | 1 | 0 | TRUE |   | Record status indicator |