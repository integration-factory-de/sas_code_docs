# sccwvs_400_fakt_n_dwh.sas (SAS Program)

:::info Complexity Score
 **S**
| Category | Measure | Value |
|---|---|---|
| Code Size | NBR_CODE_LINES | 78 |
| Code Size | NBR_DATA_STEPS | 0 |
| Code Size | NBR_PROC_STEPS | 1 |
| Dependencies and Flow Complexity | LEN_OF_COND_CLAUSES | 567 |
| Dependencies and Flow Complexity | NBR_INTERM_TABLES | 2 |
| Dependencies and Flow Complexity | NBR_PROC_STEP_SERIES | 1 |
| SQL Specifics | NBR_ANALYT_FUNCS | 2 |
| SQL Specifics | NBR_NESTED_QUERIES | 0 |
| SQL Specifics | NBR_SQL_STATEMENTS | 1 |
| Technical Complexity | NBR_DYNM_CODE_GEN | 0 |
| Technical Complexity | NBR_EXTERNAL_SYS | 2 |
| Technical Complexity | NBR_MAPPING_FORMATS | 0 |
| Technical Complexity | NBR_USED_MACROS | 2 |
| Transformation Complexity | NBR_COND_LOGIC | 8 |
| Transformation Complexity | NBR_JOINS | 0 |
| Transformation Complexity | NBR_TABLE_INP | 2 |
| Transformation Complexity | NBR_TABLE_OUTP | 2 |
| Transformation Complexity | NBR_TRANSF_TYPES | 2 |
:::

## Program Description

This SAS script is part of the **BDWH_SCCWVS** application and handles the transfer of **WVS (WarenVersorgungsStatistik)** fact table data from staging (STAG) to the data warehouse (DWH). The script processes goods supply statistics and manages error reason data for inventory management.

The main functionality includes:
- **Data Processing**: Transfers F_WVS_FEHLGRUND (error reason) data from staging to production DWH tables
- **Date Range Management**: Determines processing boundaries for ELAB data sources (ELVS sources are commented out due to warehouse migration)
- **Data Cleanup**: Deletes existing records within the determined date range before inserting updated data
- **Error Handling**: Implements special logic for predecessor-successor relationship issues (DWHCRO-209)
- **Data Validation**: Includes complex joins with multiple dimension tables to validate and enrich the data

The script uses **Snowflake** as the target database platform and includes warehouse sizing parameters. It features a macro-based approach for conditional processing and handles both deletion and insertion operations within transactions. The job is designed to be **restartable** and includes comprehensive error documentation for known failure scenarios.

*Created: 2024-03-06, Job: BDWH_DWDW3334*

## Table Lineage

```mermaid
%%{init: {'flowchart': { 'nodeSpacing': 10, 'rankSpacing': 40, 'rankdir': 'TB' }}}%%

flowchart LR

  LEGACY_STAG.F_WVS_FEHLGRUND["LEGACY_STAG<br/><b>F_WVS_FEHLGRUND</b>"] --> LEGACY_STAG.F_WVS_FEHLGRUND_TAGE["LEGACY_STAG<br/><b>F_WVS_FEHLGRUND_TAGE</b>"]
  DWH.SD_WVS_FEHLGRUND_KLASSE["DWH<br/><b>SD_WVS_FEHLGRUND_KLASSE</b>"] --> LEGACY_DWH.DWH["LEGACY_DWH<br/><b>DWH</b>"]
  DWH.SD_ELVS_FEHL_ART_BER_MA_KZ["DWH<br/><b>SD_ELVS_FEHL_ART_BER_MA_KZ</b>"] --> LEGACY_DWH.SD_WVS_FEHLGRUND_UGRP["LEGACY_DWH<br/><b>SD_WVS_FEHLGRUND_UGRP</b>"]
  WRKWVS.F_WVS_FEHLGRUND_V2["WRKWVS<br/><b>F_WVS_FEHLGRUND_V2</b>"] --> LEGACY_DWH.DWH["LEGACY_DWH<br/><b>DWH</b>"]
  DWH.SD_WVS_FEHLGRUND["DWH<br/><b>SD_WVS_FEHLGRUND</b>"] --> LEGACY_DWH.DWH["LEGACY_DWH<br/><b>DWH</b>"]
  DWH.SD_WVS_FEHLGRUND_UGRP["DWH<br/><b>SD_WVS_FEHLGRUND_UGRP</b>"] --> LEGACY_DWH.DWH["LEGACY_DWH<br/><b>DWH</b>"]
  LEGACY_DWH.SD_WVS_FEHLGRUND["LEGACY_DWH<br/><b>SD_WVS_FEHLGRUND</b>"] --> LEGACY_STAG.SD_ELVS_FEHL_ART_BER_MA_KZ["LEGACY_STAG<br/><b>SD_ELVS_FEHL_ART_BER_MA_KZ</b>"]
  DWH.SD_WVS_FEHLGRUND_UGRP["DWH<br/><b>SD_WVS_FEHLGRUND_UGRP</b>"] --> LEGACY_DWH.SD_WVS_FEHLGRUND_UGRP["LEGACY_DWH<br/><b>SD_WVS_FEHLGRUND_UGRP</b>"]
  DWH.SD_WVS_FEHLGRUND["DWH<br/><b>SD_WVS_FEHLGRUND</b>"] --> LEGACY_DWH.SD_WVS_FEHLGRUND_UGRP["LEGACY_DWH<br/><b>SD_WVS_FEHLGRUND_UGRP</b>"]
  LEGACY_STAG.F_WVS_FEHLGRUND["LEGACY_STAG<br/><b>F_WVS_FEHLGRUND</b>"] --> LEGACY_DWH.F_ELVS_BCH_VGS001["LEGACY_DWH<br/><b>F_ELVS_BCH_VGS001</b>"]
  DWH.LU_D_MA_HPT_ABT["DWH<br/><b>LU_D_MA_HPT_ABT</b>"] --> LEGACY_DWH.F_ELVS_BCH_VGS001["LEGACY_DWH<br/><b>F_ELVS_BCH_VGS001</b>"]
  LEGACY_STAG.F_WVS_FEHLGRUND["LEGACY_STAG<br/><b>F_WVS_FEHLGRUND</b>"] --> LEGACY_DWH.SD_WVS_FEHLGRUND["LEGACY_DWH<br/><b>SD_WVS_FEHLGRUND</b>"]
  LEGACY_STAG.F_WVS_FEHLGRUND["LEGACY_STAG<br/><b>F_WVS_FEHLGRUND</b>"] --> LEGACY_DWH.F_WVS_FEHLGRUND["LEGACY_DWH<br/><b>F_WVS_FEHLGRUND</b>"]
  DWH.SD_WVS_FEHLGRUND["DWH<br/><b>SD_WVS_FEHLGRUND</b>"] --> LEGACY_DWH.SD_ELVS_FEHL_ART_BER_MA_KZ["LEGACY_DWH<br/><b>SD_ELVS_FEHL_ART_BER_MA_KZ</b>"]
  DWH.SD_WVS_FEHLGRUND_UGRP["DWH<br/><b>SD_WVS_FEHLGRUND_UGRP</b>"] --> LEGACY_DWH.SD_ELVS_FEHL_ART_BER_MA_KZ["LEGACY_DWH<br/><b>SD_ELVS_FEHL_ART_BER_MA_KZ</b>"]
  DWH.SD_WVS_FEHLGRUND_KLASSE["DWH<br/><b>SD_WVS_FEHLGRUND_KLASSE</b>"] --> LEGACY_DWH.SD_ELVS_FEHL_ART_BER_MA_KZ["LEGACY_DWH<br/><b>SD_ELVS_FEHL_ART_BER_MA_KZ</b>"]
  DWH.F_ELVS_FEHL_ART["DWH<br/><b>F_ELVS_FEHL_ART</b>"] --> LEGACY_DWH.F_ELVS_BCH_VGS001["LEGACY_DWH<br/><b>F_ELVS_BCH_VGS001</b>"]
  DWH.F_STUECKLISTE["DWH<br/><b>F_STUECKLISTE</b>"] --> LEGACY_DWH.F_ELVS_BCH_VGS001["LEGACY_DWH<br/><b>F_ELVS_BCH_VGS001</b>"]
  DWH.SD_WVS_FEHLGRUND_GRP["DWH<br/><b>SD_WVS_FEHLGRUND_GRP</b>"] --> LEGACY_DWH.SD_WVS_FEHLGRUND_UGRP["LEGACY_DWH<br/><b>SD_WVS_FEHLGRUND_UGRP</b>"]
  DWH.SD_WVS_FEHLGRUND_KLASSE["DWH<br/><b>SD_WVS_FEHLGRUND_KLASSE</b>"] --> LEGACY_DWH.SD_WVS_FEHLGRUND_UGRP["LEGACY_DWH<br/><b>SD_WVS_FEHLGRUND_UGRP</b>"]
  LEGACY_STAG.F_WVS_FEHLGRUND["LEGACY_STAG<br/><b>F_WVS_FEHLGRUND</b>"] --> LEGACY_STAG.SD_WVS_FEHLGRUND_GRP["LEGACY_STAG<br/><b>SD_WVS_FEHLGRUND_GRP</b>"]
  DWH.SD_WVS_FEHLGRUND_GRP["DWH<br/><b>SD_WVS_FEHLGRUND_GRP</b>"] --> LEGACY_DWH.DWH["LEGACY_DWH<br/><b>DWH</b>"]
  LEGACY_DWH.F_WVS_FEHLGRUND["LEGACY_DWH<br/><b>F_WVS_FEHLGRUND</b>"] --> LEGACY_STAG.SD_WVS_FEHLGRUND_GRP["LEGACY_STAG<br/><b>SD_WVS_FEHLGRUND_GRP</b>"]
  DWH.SD_WVS_FEHLGRUND_GRP["DWH<br/><b>SD_WVS_FEHLGRUND_GRP</b>"] --> LEGACY_DWH.SD_ELVS_FEHL_ART_BER_MA_KZ["LEGACY_DWH<br/><b>SD_ELVS_FEHL_ART_BER_MA_KZ</b>"]
  LEGACY_DWH.F_WVS_FEHLGRUND["LEGACY_DWH<br/><b>F_WVS_FEHLGRUND</b>"] --> LEGACY_STAG.SD_WVS_FEHLGRUND["LEGACY_STAG<br/><b>SD_WVS_FEHLGRUND</b>"]
  LEGACY_STAG.F_WVS_FEHLGRUND["LEGACY_STAG<br/><b>F_WVS_FEHLGRUND</b>"] --> LEGACY_DWH.DWH["LEGACY_DWH<br/><b>DWH</b>"]
  click LEGACY_STAG.F_WVS_FEHLGRUND "../../tables/LEGACY_STAG/F_WVS_FEHLGRUND"
  click DWH.SD_WVS_FEHLGRUND_KLASSE "../../tables/DWH/SD_WVS_FEHLGRUND_KLASSE"
  click DWH.SD_ELVS_FEHL_ART_BER_MA_KZ "../../tables/DWH/SD_ELVS_FEHL_ART_BER_MA_KZ"
  click WRKWVS.F_WVS_FEHLGRUND_V2 "../../tables/WRKWVS/F_WVS_FEHLGRUND_V2"
  click DWH.SD_WVS_FEHLGRUND "../../tables/DWH/SD_WVS_FEHLGRUND"
  click DWH.SD_WVS_FEHLGRUND_UGRP "../../tables/DWH/SD_WVS_FEHLGRUND_UGRP"
  click LEGACY_DWH.SD_WVS_FEHLGRUND "../../tables/LEGACY_DWH/SD_WVS_FEHLGRUND"
  click DWH.LU_D_MA_HPT_ABT "../../tables/DWH/LU_D_MA_HPT_ABT"
  click DWH.F_ELVS_FEHL_ART "../../tables/DWH/F_ELVS_FEHL_ART"
  click DWH.F_STUECKLISTE "../../tables/DWH/F_STUECKLISTE"
  click DWH.SD_WVS_FEHLGRUND_GRP "../../tables/DWH/SD_WVS_FEHLGRUND_GRP"
  click LEGACY_DWH.F_WVS_FEHLGRUND "../../tables/LEGACY_DWH/F_WVS_FEHLGRUND"
  click LEGACY_STAG.F_WVS_FEHLGRUND_TAGE "../../tables/LEGACY_STAG/F_WVS_FEHLGRUND_TAGE"
  click LEGACY_DWH.DWH "../../tables/LEGACY_DWH/DWH"
  click LEGACY_DWH.SD_WVS_FEHLGRUND_UGRP "../../tables/LEGACY_DWH/SD_WVS_FEHLGRUND_UGRP"
  click LEGACY_STAG.SD_ELVS_FEHL_ART_BER_MA_KZ "../../tables/LEGACY_STAG/SD_ELVS_FEHL_ART_BER_MA_KZ"
  click LEGACY_DWH.F_ELVS_BCH_VGS001 "../../tables/LEGACY_DWH/F_ELVS_BCH_VGS001"
  click LEGACY_DWH.SD_WVS_FEHLGRUND "../../tables/LEGACY_DWH/SD_WVS_FEHLGRUND"
  click LEGACY_DWH.F_WVS_FEHLGRUND "../../tables/LEGACY_DWH/F_WVS_FEHLGRUND"
  click LEGACY_DWH.SD_ELVS_FEHL_ART_BER_MA_KZ "../../tables/LEGACY_DWH/SD_ELVS_FEHL_ART_BER_MA_KZ"
  click LEGACY_STAG.SD_WVS_FEHLGRUND_GRP "../../tables/LEGACY_STAG/SD_WVS_FEHLGRUND_GRP"
  click LEGACY_STAG.SD_WVS_FEHLGRUND "../../tables/LEGACY_STAG/SD_WVS_FEHLGRUND"
```
