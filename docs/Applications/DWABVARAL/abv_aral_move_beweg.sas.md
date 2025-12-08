# abv_aral_move_beweg.sas (SAS Program)

:::info Complexity Score
 **XS**
| Category | Measure | Value |
|---|---|---|
| Code Size | NBR_CODE_LINES | 35 |
| Code Size | NBR_DATA_STEPS | 2 |
| Code Size | NBR_PROC_STEPS | 0 |
| Dependencies and Flow Complexity | LEN_OF_COND_CLAUSES | 89 |
| Dependencies and Flow Complexity | NBR_INTERM_TABLES | 1 |
| Dependencies and Flow Complexity | NBR_PROC_STEP_SERIES | 2 |
| SQL Specifics | NBR_ANALYT_FUNCS | 0 |
| SQL Specifics | NBR_NESTED_QUERIES | 0 |
| SQL Specifics | NBR_SQL_STATEMENTS | 0 |
| Technical Complexity | NBR_DYNM_CODE_GEN | 0 |
| Technical Complexity | NBR_EXTERNAL_SYS | 2 |
| Technical Complexity | NBR_MAPPING_FORMATS | 0 |
| Technical Complexity | NBR_USED_MACROS | 0 |
| Transformation Complexity | NBR_COND_LOGIC | 4 |
| Transformation Complexity | NBR_JOINS | 0 |
| Transformation Complexity | NBR_TABLE_INP | 1 |
| Transformation Complexity | NBR_TABLE_OUTP | 1 |
| Transformation Complexity | NBR_TRANSF_TYPES | 2 |
:::

## Program Description

This SAS script is part of the **DWABVARAL** application and handles the movement of Aral sales data files within the data warehouse infrastructure. The script's primary function is to **relocate raw data files** from the initial staging directory `/dwh/raw_data/dfue/abverkauf_aral` to the processing directory `/dwh/raw_data/abverkauf_aral`.

The script performs **two main operations**: First, it scans the source directory to identify and validate Aral sales data files with the prefix 'ARAL_ABV'. It creates a dataset containing information about available files and performs a crucial **validation check** to ensure data files are present before processing. If no raw data files are found, the script generates detailed error messages and terminates with an abort condition, providing contact information for troubleshooting.

Second, upon successful validation, the script executes a **file movement operation** using system commands to transfer all matching ARAL_ABV files from the production staging area to the target processing directory. This automated data movement is essential for the data warehouse ETL pipeline, ensuring sales data is properly positioned for subsequent processing steps.

The script includes comprehensive **error handling** and logging capabilities, making it suitable for automated job scheduling environments. It was initially created in March 2016 and has undergone several revisions to improve data validation and source path management.

## Table Lineage

```mermaid
%%{init: {'flowchart': { 'nodeSpacing': 10, 'rankSpacing': 40, 'rankdir': 'TB' }}}%%

flowchart LR

  click WRKABVAR.PHYSDAT "../../tables/WRKABVAR/PHYSDAT"
  click WRKABVAR.PHYSDAT_ROH "../../tables/WRKABVAR/PHYSDAT_ROH"
```
