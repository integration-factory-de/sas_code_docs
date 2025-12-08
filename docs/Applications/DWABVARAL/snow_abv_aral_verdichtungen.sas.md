# snow_abv_aral_verdichtungen.sas (SAS Program)

:::info Complexity Score
 **S**
| Category | Measure | Value |
|---|---|---|
| Code Size | NBR_CODE_LINES | 75 |
| Code Size | NBR_DATA_STEPS | 0 |
| Code Size | NBR_PROC_STEPS | 0 |
| Dependencies and Flow Complexity | LEN_OF_COND_CLAUSES | 0 |
| Dependencies and Flow Complexity | NBR_INTERM_TABLES | 0 |
| Dependencies and Flow Complexity | NBR_PROC_STEP_SERIES | 1 |
| SQL Specifics | NBR_ANALYT_FUNCS | 2 |
| SQL Specifics | NBR_NESTED_QUERIES | 0 |
| SQL Specifics | NBR_SQL_STATEMENTS | 5 |
| Technical Complexity | NBR_DYNM_CODE_GEN | 0 |
| Technical Complexity | NBR_EXTERNAL_SYS | 0 |
| Technical Complexity | NBR_MAPPING_FORMATS | 0 |
| Technical Complexity | NBR_USED_MACROS | 1 |
| Transformation Complexity | NBR_COND_LOGIC | 0 |
| Transformation Complexity | NBR_JOINS | 0 |
| Transformation Complexity | NBR_TABLE_INP | 4 |
| Transformation Complexity | NBR_TABLE_OUTP | 4 |
| Transformation Complexity | NBR_TRANSF_TYPES | 2 |
:::

## Program Description

This SAS script processes **Aral sales data aggregations** for the DWABVARAL application (Job DW010993). The script performs data consolidation operations by extracting sales information from staging tables and creating multiple aggregated views in the data mart.

The script executes several **data processing steps**: it manages lookup tables for Aral quantity units and EAN codes, creates a basis sales table with calculated fields including EAN IDs and position numbers, generates helper tables for EAN-to-product mappings, and produces final aggregated sales summaries grouped by store, date, and product type.

**Key operations** include data deletion and insertion cycles, EAN code standardization with ID generation, duplicate handling through row numbering, and sales metrics calculation including quantities, position counts, and receipt numbers. The script uses Snowflake connections with variable warehouse sizing and includes proper transaction management with commits.

This is a **restartable job** designed for regular execution in the data warehouse environment, processing retail sales data from Aral gas stations into structured analytical formats for downstream reporting and analysis.

## Table Lineage

```mermaid
%%{init: {'flowchart': { 'nodeSpacing': 10, 'rankSpacing': 40, 'rankdir': 'TB' }}}%%

flowchart LR

  EDW.F_SC_ABV_ARAL["EDW<br/><b>F_SC_ABV_ARAL</b>"] --> DMA.H_ARAL_EAN_NAN["DMA<br/><b>H_ARAL_EAN_NAN</b>"]
  DMA.S_SC_ABV_ARAL_BASIS["DMA<br/><b>S_SC_ABV_ARAL_BASIS</b>"] --> DMA.S_SC_ABV_ARAL_1210["DMA<br/><b>S_SC_ABV_ARAL_1210</b>"]
  MANUELL.LU_D_ARAL_MNG_EINH["MANUELL<br/><b>LU_D_ARAL_MNG_EINH</b>"] --> DMA.LU_D_ARAL_MNG_EINH["DMA<br/><b>LU_D_ARAL_MNG_EINH</b>"]
  EDW.F_SC_ABV_ARAL["EDW<br/><b>F_SC_ABV_ARAL</b>"] --> DMA.S_SC_ABV_ARAL_BASIS["DMA<br/><b>S_SC_ABV_ARAL_BASIS</b>"]
  STAG.LU_D_ARAL_MNG_EINH["STAG<br/><b>LU_D_ARAL_MNG_EINH</b>"] --> DMA.LU_D_ARAL_EAN["DMA<br/><b>LU_D_ARAL_EAN</b>"]
  EDW.F_SC_ABV_ARAL["EDW<br/><b>F_SC_ABV_ARAL</b>"] --> DMA.LU_D_ARAL_EAN["DMA<br/><b>LU_D_ARAL_EAN</b>"]
  click EDW.F_SC_ABV_ARAL "../../tables/EDW/F_SC_ABV_ARAL"
  click DMA.S_SC_ABV_ARAL_BASIS "../../tables/DMA/S_SC_ABV_ARAL_BASIS"
  click MANUELL.LU_D_ARAL_MNG_EINH "../../tables/MANUELL/LU_D_ARAL_MNG_EINH"
  click STAG.LU_D_ARAL_MNG_EINH "../../tables/STAG/LU_D_ARAL_MNG_EINH"
  click DMA.H_ARAL_EAN_NAN "../../tables/DMA/H_ARAL_EAN_NAN"
  click DMA.S_SC_ABV_ARAL_1210 "../../tables/DMA/S_SC_ABV_ARAL_1210"
  click DMA.LU_D_ARAL_MNG_EINH "../../tables/DMA/LU_D_ARAL_MNG_EINH"
  click DMA.S_SC_ABV_ARAL_BASIS "../../tables/DMA/S_SC_ABV_ARAL_BASIS"
  click DMA.LU_D_ARAL_EAN "../../tables/DMA/LU_D_ARAL_EAN"
```
