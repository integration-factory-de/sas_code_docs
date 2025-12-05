# PHYSDAT (Table)

## Table Description

_No description available_

## Lineage / Impact

```mermaid
%%{init: {'flowchart': { 'nodeSpacing': 10, 'rankSpacing': 40, 'rankdir': 'TB' }}}%%

flowchart LR

  WRKABVAR.PHYSDAT["WRKABVAR<br/>PHYSDAT"] --> WRKABVAR.ARAL_TEST_FOLGEDATEI["WRKABVAR<br/>ARAL_TEST_FOLGEDATEI"]
  click WRKABVAR.PHYSDAT "../../tables/WRKABVAR/PHYSDAT"
  click WRKABVAR.ARAL_TEST_FOLGEDATEI "../../tables/WRKABVAR/ARAL_TEST_FOLGEDATEI"
```

## References

The table PHYSDAT is used in the following SAS programs:

| Application | SAS Program |
|---|---|
| [DWABVARAL](../../Applications/DWABVARAL) | [snow_abv_aral_einlesen.sas](../../Applications/DWABVARAL/snow_abv_aral_einlesen.sas) |
| [DWABVARAL](../../Applications/DWABVARAL) | [abv_aral_move_beweg.sas](../../Applications/DWABVARAL/abv_aral_move_beweg.sas) |
| [DWABVARAL](../../Applications/DWABVARAL) | [abv_aral_unzip.sas](../../Applications/DWABVARAL/abv_aral_unzip.sas) |
## Table Schema

| Field Name | Datatype | Precision | Scale | Is Nullable | Constraint | Description |
|---|---|---|---|---|---|---|
| PHYSNAME | VARCHAR | 19 | 0 | TRUE |   | Physical file name containing ARAL sales data |
| KENNSATZ | VARCHAR | 8 | 0 | TRUE |   | Identifier key extracted from filename |
| LFD_NR_ROHDATEI | INTEGER | 10 | 0 | TRUE |   | Sequential number of raw data file |