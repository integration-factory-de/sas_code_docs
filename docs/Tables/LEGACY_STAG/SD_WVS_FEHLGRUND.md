# SD_WVS_FEHLGRUND (Table)

## Table Description

The **BDWH_SCCWVS** application implements the **WVS (WarenVersorgungsStatistik)** - Goods Supply Statistics system, which is a parallel environment to LEGACY_DWH built for replacement purposes. This staging table **SD_WVS_FEHLGRUND** stores shortage reason master data as part of the WVS processing pipeline.

The application processes supply chain shortage analysis by calculating delivery shortages, determining suppliers, and categorizing shortage reasons. The system handles data from ELAB (post-ELVS core replacement) sources and processes commission pool data, warehouse receipts, and delivery tracking information.

Key processing includes: determining delivery dates from the last 28 days, calculating WVS shortage reasons with line-by-line resolution, supplier identification through multi-stage procedures, and generating aggregated shortage statistics. The application runs daily with a 2-week retrospective calculation window and maintains relevance flags for WVS reporting.

This staging table supports the broader WVS workflow that ultimately feeds into DWH fact tables for supply chain analytics and shortage grund classification used in retail supply chain management.

## Lineage / Impact

```mermaid
%%{init: {'flowchart': { 'nodeSpacing': 10, 'rankSpacing': 40, 'rankdir': 'TB' }}}%%

flowchart LR

  LEGACY_STAG.F_WVS_ABLADE_DATUM["LEGACY_STAG<br/>F_WVS_ABLADE_DATUM"] --> LEGACY_STAG.SD_WVS_FEHLGRUND["LEGACY_STAG<br/>SD_WVS_FEHLGRUND"]
  LEGACY_DWH.F_ELVS_FEHL_ART["LEGACY_DWH<br/>F_ELVS_FEHL_ART"] --> LEGACY_STAG.SD_WVS_FEHLGRUND["LEGACY_STAG<br/>SD_WVS_FEHLGRUND"]
  EDW.F_ELISA_KDAUFTRAG["EDW<br/>F_ELISA_KDAUFTRAG"] --> LEGACY_STAG.SD_WVS_FEHLGRUND["LEGACY_STAG<br/>SD_WVS_FEHLGRUND"]
  DWH.LU_D_NAN_ART["DWH<br/>LU_D_NAN_ART"] --> LEGACY_STAG.SD_WVS_FEHLGRUND["LEGACY_STAG<br/>SD_WVS_FEHLGRUND"]
  LEGACY_DWH.F_WVS_FEHLGRUND["LEGACY_DWH<br/>F_WVS_FEHLGRUND"] --> LEGACY_STAG.SD_WVS_FEHLGRUND["LEGACY_STAG<br/>SD_WVS_FEHLGRUND"]
  EDW.F_ELISA_KDAUFTRAGAEND["EDW<br/>F_ELISA_KDAUFTRAGAEND"] --> LEGACY_STAG.SD_WVS_FEHLGRUND["LEGACY_STAG<br/>SD_WVS_FEHLGRUND"]
  click LEGACY_STAG.F_WVS_ABLADE_DATUM "../../tables/LEGACY_STAG/F_WVS_ABLADE_DATUM"
  click LEGACY_DWH.F_ELVS_FEHL_ART "../../tables/LEGACY_DWH/F_ELVS_FEHL_ART"
  click EDW.F_ELISA_KDAUFTRAG "../../tables/EDW/F_ELISA_KDAUFTRAG"
  click DWH.LU_D_NAN_ART "../../tables/DWH/LU_D_NAN_ART"
  click LEGACY_DWH.F_WVS_FEHLGRUND "../../tables/LEGACY_DWH/F_WVS_FEHLGRUND"
  click EDW.F_ELISA_KDAUFTRAGAEND "../../tables/EDW/F_ELISA_KDAUFTRAGAEND"
  click LEGACY_STAG.SD_WVS_FEHLGRUND "../../tables/LEGACY_STAG/SD_WVS_FEHLGRUND"
  click LEGACY_STAG.SD_WVS_FEHLGRUND "../../tables/LEGACY_STAG/SD_WVS_FEHLGRUND"
  click LEGACY_STAG.SD_WVS_FEHLGRUND "../../tables/LEGACY_STAG/SD_WVS_FEHLGRUND"
  click LEGACY_STAG.SD_WVS_FEHLGRUND "../../tables/LEGACY_STAG/SD_WVS_FEHLGRUND"
  click LEGACY_STAG.SD_WVS_FEHLGRUND "../../tables/LEGACY_STAG/SD_WVS_FEHLGRUND"
  click LEGACY_STAG.SD_WVS_FEHLGRUND "../../tables/LEGACY_STAG/SD_WVS_FEHLGRUND"
```

## Statements

The following statements create/modify this table:

<Util>DELETE</Util> inside [BDWH_SCCWVS/sccwvs_600_cleandb.sas](../../Applications/BDWH_SCCWVS/sccwvs_600_cleandb.sas):
```sql:line-numbers
DELETE FROM PRODUCT_SCC_PROD.LEGACY_STAG.SD_WVS_FEHLGRUND
```

## References

The table SD_WVS_FEHLGRUND is used in the following SAS programs:

| Application | SAS Program |
|---|---|
| [BDWH_SCCWVS](../../Applications/BDWH_SCCWVS) | [sccwvs_400_fakt_n_dwh.sas](../../Applications/BDWH_SCCWVS/sccwvs_400_fakt_n_dwh.sas) |
| [BDWH_SCCWVS](../../Applications/BDWH_SCCWVS) | [sccwvs_020_wvs_berechnen_elab.sas](../../Applications/BDWH_SCCWVS/sccwvs_020_wvs_berechnen_elab.sas) |
## Table Schema

| Field Name | Datatype | Precision | Scale | Is Nullable | Constraint | Description |
|---|---|---|---|---|---|---|
| FEHL_ART_GRUND_ID | NUMBER | 7 | 0 | FALSE | PRIMARY KEY | Unique identifier for failure reason type |
| FEHL_ART_GRUND_TXT | VARCHAR | 100 | 0 | TRUE |   | Description text for failure reason type |
| FEHL_ART_GRUND_UGRP_ID | NUMBER | 5 | 0 | TRUE | FOREIGN KEY | Foreign key to failure reason subgroup |
| FEHL_ART_GRUND_AUSW_KZ | VARCHAR | 1 | 0 | TRUE |   | Selection indicator for failure reason |
| ERSTELL_DATUM | DATE |  |  | TRUE |   | Record creation date |
| AENDER_DATUM | DATE |  |  | TRUE |   | Record modification date |