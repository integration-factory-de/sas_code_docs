# abv_aral_bereit.sas (SAS Program)

:::info Complexity Score
 **S**
| Category | Measure | Value |
|---|---|---|
| Code Size | NBR_CODE_LINES | 67 |
| Code Size | NBR_DATA_STEPS | 1 |
| Code Size | NBR_PROC_STEPS | 1 |
| Dependencies and Flow Complexity | LEN_OF_COND_CLAUSES | 0 |
| Dependencies and Flow Complexity | NBR_INTERM_TABLES | 0 |
| Dependencies and Flow Complexity | NBR_PROC_STEP_SERIES | 2 |
| SQL Specifics | NBR_ANALYT_FUNCS | 0 |
| SQL Specifics | NBR_NESTED_QUERIES | 0 |
| SQL Specifics | NBR_SQL_STATEMENTS | 0 |
| Technical Complexity | NBR_DYNM_CODE_GEN | 0 |
| Technical Complexity | NBR_EXTERNAL_SYS | 0 |
| Technical Complexity | NBR_MAPPING_FORMATS | 67 |
| Technical Complexity | NBR_USED_MACROS | 0 |
| Transformation Complexity | NBR_COND_LOGIC | 7 |
| Transformation Complexity | NBR_JOINS | 0 |
| Transformation Complexity | NBR_TABLE_INP | 1 |
| Transformation Complexity | NBR_TABLE_OUTP | 2 |
| Transformation Complexity | NBR_TRANSF_TYPES | 2 |
:::

## Program Description

This SAS script is part of the **DWABVARAL** application and serves as a data preparation module for Aral sales data (**Aral Abverkaufsdaten**). The script processes and standardizes sales transaction data from Aral gas stations for integration into the data warehouse.

The primary function creates a structured dataset `F_SC_ABV_ARAL` containing comprehensive sales information including transaction details, pricing data, and various business metrics. Key data elements include **EAN codes**, **sales amounts**, **quantities**, **pricing information**, and **station identifiers**. The script handles both movement records (I) and control records (T) as indicated by the record type field.

The script performs **data cleansing operations** by setting null values to zero for critical financial fields such as purchase prices, net amounts, and gross amounts. This ensures data consistency for downstream analytical processes.

Additionally, the script creates a **copy of the processed dataset** for the BON application (`DW##BONARALFAKT`), enabling cross-system data sharing and reporting capabilities.

*Version History*: Initial version created March 2016, with updates in December 2016 adding new columns for enhanced data capture and analysis requirements.

## Table Lineage

```mermaid
%%{init: {'flowchart': { 'nodeSpacing': 10, 'rankSpacing': 40, 'rankdir': 'TB' }}}%%

flowchart LR

  WRKABVAR.ARAL_ABVERKAUF_02_EKP["WRKABVAR<br/><b>ARAL_ABVERKAUF_02_EKP</b>"] --> WRKABVAR.ARAL_ABVERKAUF["WRKABVAR<br/><b>ARAL_ABVERKAUF</b>"]
  WRKABVAR.ARAL_ABVERKAUF_02_EKP["WRKABVAR<br/><b>ARAL_ABVERKAUF_02_EKP</b>"] --> WRKABVAR.ARAL_ABVERKAUF_02["WRKABVAR<br/><b>ARAL_ABVERKAUF_02</b>"]
  WRKABVAR.ARAL_ABVERKAUF_02_EKP["WRKABVAR<br/><b>ARAL_ABVERKAUF_02_EKP</b>"] --> WRKABVAR.PROT_ARAL_ABVERKAUF["WRKABVAR<br/><b>PROT_ARAL_ABVERKAUF</b>"]
  WRKABVAR.ARAL_ABVERKAUF_02_EKP["WRKABVAR<br/><b>ARAL_ABVERKAUF_02_EKP</b>"] --> BEREIT_F.F_SC_ABV_ARAL["BEREIT_F<br/><b>F_SC_ABV_ARAL</b>"]
  WRKABVAR.ARAL_ABVERKAUF_02_EKP["WRKABVAR<br/><b>ARAL_ABVERKAUF_02_EKP</b>"] --> WKBONARA.F_SC_ABV_ARAL["WKBONARA<br/><b>F_SC_ABV_ARAL</b>"]
  WRKABVAR.ARAL_ABVERKAUF_02_EKP["WRKABVAR<br/><b>ARAL_ABVERKAUF_02_EKP</b>"] --> WRKABVAR.ARAL_ABVERKAUF_01["WRKABVAR<br/><b>ARAL_ABVERKAUF_01</b>"]
  click WRKABVAR.ARAL_ABVERKAUF_02_EKP "../../tables/WRKABVAR/ARAL_ABVERKAUF_02_EKP"
  click WRKABVAR.ARAL_ABVERKAUF "../../tables/WRKABVAR/ARAL_ABVERKAUF"
  click WRKABVAR.ARAL_ABVERKAUF_02 "../../tables/WRKABVAR/ARAL_ABVERKAUF_02"
  click WRKABVAR.PROT_ARAL_ABVERKAUF "../../tables/WRKABVAR/PROT_ARAL_ABVERKAUF"
  click BEREIT_F.F_SC_ABV_ARAL "../../tables/BEREIT_F/F_SC_ABV_ARAL"
  click WKBONARA.F_SC_ABV_ARAL "../../tables/WKBONARA/F_SC_ABV_ARAL"
  click WRKABVAR.ARAL_ABVERKAUF_01 "../../tables/WRKABVAR/ARAL_ABVERKAUF_01"
```
