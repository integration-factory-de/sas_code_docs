# abv_aral_unzip.sas (SAS Program)

:::info Complexity Score
 **S**
| Category | Measure | Value |
|---|---|---|
| Code Size | NBR_CODE_LINES | 25 |
| Code Size | NBR_DATA_STEPS | 1 |
| Code Size | NBR_PROC_STEPS | 2 |
| Dependencies and Flow Complexity | LEN_OF_COND_CLAUSES | 25 |
| Dependencies and Flow Complexity | NBR_INTERM_TABLES | 1 |
| Dependencies and Flow Complexity | NBR_PROC_STEP_SERIES | 3 |
| SQL Specifics | NBR_ANALYT_FUNCS | 0 |
| SQL Specifics | NBR_NESTED_QUERIES | 0 |
| SQL Specifics | NBR_SQL_STATEMENTS | 1 |
| Technical Complexity | NBR_DYNM_CODE_GEN | 0 |
| Technical Complexity | NBR_EXTERNAL_SYS | 1 |
| Technical Complexity | NBR_MAPPING_FORMATS | 0 |
| Technical Complexity | NBR_USED_MACROS | 3 |
| Transformation Complexity | NBR_COND_LOGIC | 1 |
| Transformation Complexity | NBR_JOINS | 0 |
| Transformation Complexity | NBR_TABLE_INP | 1 |
| Transformation Complexity | NBR_TABLE_OUTP | 1 |
| Transformation Complexity | NBR_TRANSF_TYPES | 3 |
:::

## Program Description

This SAS script is part of the **DWABVARAL** application and handles the **decompression of sales data files** received from Aral. The script operates in two main phases: first, it scans a directory to identify compressed Aral sales data files by filtering filenames containing the 'ARAL_ABV' identifier, then systematically decompresses each identified file.

The script creates a working dataset **WRKABVAR.PHYSDAT** that catalogs all relevant files with their physical names, identifiers, and sequence numbers extracted from the filename structure. It uses the **%decompress macro** within a loop to automatically decompress files from the source directory `/dwh/raw_data/abverkauf_aral` to the same target location, with overwrite capability enabled.

This is a **restartable job** (Job ID: DWDW3877) designed for reliable data processing in the data warehouse environment. The script includes comprehensive error documentation and logging mechanisms to handle known failure scenarios. Created on March 17, 2016, it serves as a critical component in the Aral sales data processing pipeline, ensuring compressed data files are properly extracted before further processing stages.

## Table Lineage

```mermaid
%%{init: {'flowchart': { 'nodeSpacing': 10, 'rankSpacing': 40, 'rankdir': 'TB' }}}%%

flowchart LR

  click WRKABVAR.PHYSDAT "../../tables/WRKABVAR/PHYSDAT"
```
