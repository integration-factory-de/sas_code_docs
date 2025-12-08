# auftragsabschlussmeldung_vkp.sas (SAS Program)

:::warning Complexity Score
 **M**
| Category | Measure | Value |
|---|---|---|
| Code Size | NBR_CODE_LINES | 165 |
| Code Size | NBR_DATA_STEPS | 8 |
| Code Size | NBR_PROC_STEPS | 3 |
| Dependencies and Flow Complexity | LEN_OF_COND_CLAUSES | 325 |
| Dependencies and Flow Complexity | NBR_INTERM_TABLES | 7 |
| Dependencies and Flow Complexity | NBR_PROC_STEP_SERIES | 11 |
| SQL Specifics | NBR_ANALYT_FUNCS | 2 |
| SQL Specifics | NBR_NESTED_QUERIES | 0 |
| SQL Specifics | NBR_SQL_STATEMENTS | 7 |
| Technical Complexity | NBR_DYNM_CODE_GEN | 0 |
| Technical Complexity | NBR_EXTERNAL_SYS | 1 |
| Technical Complexity | NBR_MAPPING_FORMATS | 0 |
| Technical Complexity | NBR_USED_MACROS | 0 |
| Transformation Complexity | NBR_COND_LOGIC | 12 |
| Transformation Complexity | NBR_JOINS | 7 |
| Transformation Complexity | NBR_TABLE_INP | 1 |
| Transformation Complexity | NBR_TABLE_OUTP | 8 |
| Transformation Complexity | NBR_TRANSF_TYPES | 2 |
:::

## Program Description

This SAS script processes **order completion messages** from pL-Store to ELISA by adding **sales prices (VK-Preise)** that were previously available in the ELVS-KOP table but are missing in the new data source after ELVS replacement.

The script implements a **multi-stage pricing hierarchy** to ensure comprehensive price coverage:
- **Stage 1.0**: Individual store prices (IVKPs)
- **Stage 1.1**: Detailed action prices by store and article
- **Stage 1.2**: Regional area prices
- **Stage 1.3**: Area-specific prices
- **Stage 1.4**: Standard prices as fallback

Key processing steps include:
- **Display article identification** using bill-of-materials data with specific type IDs (14,24)
- **Data separation** between display and regular articles using hash table lookups
- **Sequential price matching** through multiple pricing tables with left joins
- **Price validation** separating successfully priced records from those requiring further processing
- **Data integrity checks** ensuring input and output record counts match

The script creates gross (vk_bto) and net (vk_nto) sales prices with corresponding evaluation flags (vk_bewert_kz) indicating the pricing level used. **Temporary datasets are cleaned up** at completion to maintain workspace efficiency.

*Part of BDWH_ELISAAUFTRAB application, Job BDWH_DW002099, created 2020-03-04*

## Table Lineage

```mermaid
%%{init: {'flowchart': { 'nodeSpacing': 10, 'rankSpacing': 40, 'rankdir': 'TB' }}}%%

flowchart LR

  WK_AUFAB.F_ELISA_AUFTRAGSABSCHLUSS0EKP["WK_AUFAB<br/><b>F_ELISA_AUFTRAGSABSCHLUSS0EKP</b>"] --> WK_AUFAB.F_ELISA_AUFTRAGSABSCHLUSS["WK_AUFAB<br/><b>F_ELISA_AUFTRAGSABSCHLUSS</b>"]
  click WK_AUFAB.F_ELISA_AUFTRAGSABSCHLUSS0EKP "../../tables/WK_AUFAB/F_ELISA_AUFTRAGSABSCHLUSS0EKP"
  click WK_AUFAB.F_ELISA_AUFTRAGSABSCHLUSS "../../tables/WK_AUFAB/F_ELISA_AUFTRAGSABSCHLUSS"
```
