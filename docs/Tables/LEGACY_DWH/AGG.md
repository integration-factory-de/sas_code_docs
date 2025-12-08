# AGG (Table)

## Table Description

_No description available_

## Lineage / Impact

```mermaid
%%{init: {'flowchart': { 'nodeSpacing': 10, 'rankSpacing': 40, 'rankdir': 'TB' }}}%%

flowchart LR

```

## Statements

The following statements create/modify this table:


## References

The table AGG is used in the following SAS programs:

| Application | SAS Program |
|---|---|
## Table Schema

| Field Name | Datatype | Precision | Scale | Is Nullable | Constraint | Description |
|---|---|---|---|---|---|---|
| MA_HPT_ABT_ID | BIGINT | 19 | 0 | FALSE | PRIMARY KEY | Market headquarters department identifier |
| MA_TREG_LBER_ID | BIGINT | 19 | 0 | FALSE | PRIMARY KEY | Market trading region delivery area identifier |
| RICHTUNG | INTEGER | 10 | 0 | TRUE |   | Direction indicator for flow mapping |