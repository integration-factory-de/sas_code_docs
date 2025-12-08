# sccwvs_250_wvs_relevant.sas (SAS Program)

:::info Complexity Score
 **XS**
| Category | Measure | Value |
|---|---|---|
| Code Size | NBR_CODE_LINES | 25 |
| Code Size | NBR_DATA_STEPS | 0 |
| Code Size | NBR_PROC_STEPS | 1 |
| Dependencies and Flow Complexity | LEN_OF_COND_CLAUSES | 156 |
| Dependencies and Flow Complexity | NBR_INTERM_TABLES | 1 |
| Dependencies and Flow Complexity | NBR_PROC_STEP_SERIES | 1 |
| SQL Specifics | NBR_ANALYT_FUNCS | 0 |
| SQL Specifics | NBR_NESTED_QUERIES | 0 |
| SQL Specifics | NBR_SQL_STATEMENTS | 1 |
| Technical Complexity | NBR_DYNM_CODE_GEN | 0 |
| Technical Complexity | NBR_EXTERNAL_SYS | 0 |
| Technical Complexity | NBR_MAPPING_FORMATS | 0 |
| Technical Complexity | NBR_USED_MACROS | 0 |
| Transformation Complexity | NBR_COND_LOGIC | 3 |
| Transformation Complexity | NBR_JOINS | 0 |
| Transformation Complexity | NBR_TABLE_INP | 1 |
| Transformation Complexity | NBR_TABLE_OUTP | 1 |
| Transformation Complexity | NBR_TRANSF_TYPES | 1 |
:::

## Program Description

This SAS script is part of the **BDWH_SCCWVS** application and handles the identification of WVS (WarenVersorgungsStatistik - Goods Supply Statistics) relevance within a parallel environment setup. The script processes data to replace the legacy data warehouse system.

The main functionality focuses on **marking WVS relevance** based on specific business rules:
- Records with KOPF_HERKUNFT 'L' (delivery date changes) are marked as not relevant (WVS_RELEVANT = 0)
- Records with KOPF_HERKUNFT 'I' (open orders) indicate adjusted delivery quantities (LIEFMG_ANGEPASST = 1)
- Records with KOPF_HERKUNFT 'P' are assigned value 2 for adjusted delivery quantities

The script creates a new table **f_wvs_fehlgrund_v2** by selecting and transforming data from the source table f_wvs_lief_neu, applying proper formatting to various fields including article IDs, quantities, monetary values, and delivery information. It specifically filters for records where herkunft_basis equals 'ELAB' and adds the calculated relevance indicators based on the origin type.

*Version: 2024-03-06, Job: BDWH_DWDW3327*

## Table Lineage

```mermaid
%%{init: {'flowchart': { 'nodeSpacing': 10, 'rankSpacing': 40, 'rankdir': 'TB' }}}%%

flowchart LR

  WRKWVS.F_WVS_LIEF_NEU["WRKWVS<br/><b>F_WVS_LIEF_NEU</b>"] --> LEGACY_STAG.F_WVS_FEHLGRUND_TAGE["LEGACY_STAG<br/><b>F_WVS_FEHLGRUND_TAGE</b>"]
  WRKWVS.WVS_02["WRKWVS<br/><b>WVS_02</b>"] --> LEGACY_DWH.DWH["LEGACY_DWH<br/><b>DWH</b>"]
  WRKWVS.F_WVS_FEHLGRUND_V2["WRKWVS<br/><b>F_WVS_FEHLGRUND_V2</b>"] --> LEGACY_STAG.SD_WVS_FEHLGRUND_GRP["LEGACY_STAG<br/><b>SD_WVS_FEHLGRUND_GRP</b>"]
  LEGACY_DWH.SD_WVS_FEHLGRUND["LEGACY_DWH<br/><b>SD_WVS_FEHLGRUND</b>"] --> LEGACY_STAG.SD_WVS_FEHLGRUND_UGRP["LEGACY_STAG<br/><b>SD_WVS_FEHLGRUND_UGRP</b>"]
  WRKWVS.F_WVS_LIEF_NEU["WRKWVS<br/><b>F_WVS_LIEF_NEU</b>"] --> LEGACY_STAG.F_WVS_FEHLGRUND["LEGACY_STAG<br/><b>F_WVS_FEHLGRUND</b>"]
  click WRKWVS.F_WVS_LIEF_NEU "../../tables/WRKWVS/F_WVS_LIEF_NEU"
  click WRKWVS.WVS_02 "../../tables/WRKWVS/WVS_02"
  click WRKWVS.F_WVS_FEHLGRUND_V2 "../../tables/WRKWVS/F_WVS_FEHLGRUND_V2"
  click LEGACY_DWH.SD_WVS_FEHLGRUND "../../tables/LEGACY_DWH/SD_WVS_FEHLGRUND"
  click LEGACY_STAG.F_WVS_FEHLGRUND_TAGE "../../tables/LEGACY_STAG/F_WVS_FEHLGRUND_TAGE"
  click LEGACY_DWH.DWH "../../tables/LEGACY_DWH/DWH"
  click LEGACY_STAG.SD_WVS_FEHLGRUND_GRP "../../tables/LEGACY_STAG/SD_WVS_FEHLGRUND_GRP"
  click LEGACY_STAG.SD_WVS_FEHLGRUND_UGRP "../../tables/LEGACY_STAG/SD_WVS_FEHLGRUND_UGRP"
  click LEGACY_STAG.F_WVS_FEHLGRUND "../../tables/LEGACY_STAG/F_WVS_FEHLGRUND"
```
