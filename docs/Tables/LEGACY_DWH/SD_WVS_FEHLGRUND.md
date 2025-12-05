# SD_WVS_FEHLGRUND (Table)

## Table Description

_No description available_

## Lineage / Impact

```mermaid
%%{init: {'flowchart': { 'nodeSpacing': 10, 'rankSpacing': 40, 'rankdir': 'TB' }}}%%

flowchart LR

  LEGACY_STAG.F_WVS_FEHLGRUND["LEGACY_STAG<br/>F_WVS_FEHLGRUND"] --> LEGACY_DWH.SD_WVS_FEHLGRUND["LEGACY_DWH<br/>SD_WVS_FEHLGRUND"]
  LEGACY_DWH.SD_WVS_FEHLGRUND["LEGACY_DWH<br/>SD_WVS_FEHLGRUND"] --> LEGACY_STAG.SD_ELVS_FEHL_ART_BER_MA_KZ["LEGACY_STAG<br/>SD_ELVS_FEHL_ART_BER_MA_KZ"]
  LEGACY_DWH.SD_WVS_FEHLGRUND["LEGACY_DWH<br/>SD_WVS_FEHLGRUND"] --> LEGACY_STAG.SD_WVS_FEHLGRUND_UGRP["LEGACY_STAG<br/>SD_WVS_FEHLGRUND_UGRP"]
  click LEGACY_STAG.F_WVS_FEHLGRUND "../../tables/LEGACY_STAG/F_WVS_FEHLGRUND"
  click LEGACY_DWH.SD_WVS_FEHLGRUND "../../tables/LEGACY_DWH/SD_WVS_FEHLGRUND"
  click LEGACY_DWH.SD_WVS_FEHLGRUND "../../tables/LEGACY_DWH/SD_WVS_FEHLGRUND"
  click LEGACY_DWH.SD_WVS_FEHLGRUND "../../tables/LEGACY_DWH/SD_WVS_FEHLGRUND"
  click LEGACY_STAG.SD_ELVS_FEHL_ART_BER_MA_KZ "../../tables/LEGACY_STAG/SD_ELVS_FEHL_ART_BER_MA_KZ"
  click LEGACY_STAG.SD_WVS_FEHLGRUND_UGRP "../../tables/LEGACY_STAG/SD_WVS_FEHLGRUND_UGRP"
```

## References

The table SD_WVS_FEHLGRUND is used in the following SAS programs:

| Application | SAS Program |
|---|---|
| [BDWH_SCCWVS](../../Applications/BDWH_SCCWVS) | [sccwvs_250_wvs_relevant.sas](../../Applications/BDWH_SCCWVS/sccwvs_250_wvs_relevant.sas) |
| [BDWH_SCCWVS](../../Applications/BDWH_SCCWVS) | [sccwvs_400_fakt_n_dwh.sas](../../Applications/BDWH_SCCWVS/sccwvs_400_fakt_n_dwh.sas) |
## Table Schema

| Field Name | Datatype | Precision | Scale | Is Nullable | Constraint | Description |
|---|---|---|---|---|---|---|
| FEHL_ART_GRUND_ID | NUMBER | 7 | 0 | FALSE | PRIMARY KEY | Unique identifier for failure reason type |
| FEHL_ART_GRUND_TXT | VARCHAR | 100 | 0 | TRUE |   | Description text for failure reason type |
| FEHL_ART_GRUND_UGRP_ID | NUMBER | 7 | 0 | TRUE | FOREIGN KEY | Foreign key to failure reason subgroup |
| FEHL_ART_GRUND_AUSW_KZ | VARCHAR | 1 | 0 | TRUE |   | Selection indicator for failure reason |
| SATZ_STATUS | VARCHAR | 1 | 0 | TRUE |   | Record status indicator |
| ERSTELL_DATUM | DATE | 0 | 0 | TRUE |   | Record creation date |
| AENDER_DATUM | DATE | 0 | 0 | TRUE |   | Record modification date |