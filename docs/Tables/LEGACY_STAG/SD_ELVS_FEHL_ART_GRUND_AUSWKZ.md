# SD_ELVS_FEHL_ART_GRUND_AUSWKZ (Table)

## Table Description

_No description available_

## Lineage / Impact

```mermaid
%%{init: {'flowchart': { 'nodeSpacing': 10, 'rankSpacing': 40, 'rankdir': 'TB' }}}%%

flowchart LR

  LEGACY_DWH.SD_ELVS_FEHL_ART_GRUND_AUSWKZ["LEGACY_DWH<br/>SD_ELVS_FEHL_ART_GRUND_AUSWKZ"] --> LEGACY_STAG.SD_ELVS_FEHL_ART_GRUND_AUSWKZ["LEGACY_STAG<br/>SD_ELVS_FEHL_ART_GRUND_AUSWKZ"]
  click LEGACY_DWH.SD_ELVS_FEHL_ART_GRUND_AUSWKZ "../../tables/LEGACY_DWH/SD_ELVS_FEHL_ART_GRUND_AUSWKZ"
  click LEGACY_STAG.SD_ELVS_FEHL_ART_GRUND_AUSWKZ "../../tables/LEGACY_STAG/SD_ELVS_FEHL_ART_GRUND_AUSWKZ"
```

## References

The table SD_ELVS_FEHL_ART_GRUND_AUSWKZ is used in the following SAS programs:

| Application | SAS Program |
|---|---|
| [BDWH_SCCWVS](../../Applications/BDWH_SCCWVS) | [sccwvs_600_cleandb.sas](../../Applications/BDWH_SCCWVS/sccwvs_600_cleandb.sas) |
## Table Schema

| Field Name | Datatype | Precision | Scale | Is Nullable | Constraint | Description |
|---|---|---|---|---|---|---|
| FEHL_ART_GRUND_ID | NUMBER | 7 | 0 | TRUE |   | Fehlart Grund ID - Identifier for failure reason |
| FEHL_ART_GRUND_AUSWKZ | VARCHAR | 1 | 0 | TRUE |   | Fehlart Grund Auswertungskennzeichen - Evaluation indicator for failure reason |
| FEHL_ART_GRUND_TXT | VARCHAR | 100 | 0 | TRUE |   | Fehlart Grund Text - Description text for failure reason |
| FEHL_ART_GRUND_UGRP_ID | NUMBER | 7 | 0 | TRUE |   | Fehlart Grund Untergruppe ID - Failure reason subgroup identifier |
| BERECHTIGT_MARKT_KZ | VARCHAR | 2 | 0 | TRUE |   | Berechtigt Markt Kennzeichen - Authorized market indicator |
| ERSTELL_DATUM | DATE |  |  | TRUE |   | Erstellungsdatum - Creation date |
| AEND_DATUM | DATE |  |  | TRUE |   | Änderungsdatum - Modification date |
| SATZ_STATUS | VARCHAR | 1 | 0 | TRUE |   | Satzstatus - Record status indicator |