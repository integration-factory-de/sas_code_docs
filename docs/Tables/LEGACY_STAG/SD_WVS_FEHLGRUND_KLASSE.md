# SD_WVS_FEHLGRUND_KLASSE (Table)

## Table Description

**BDWH_SCCWVS** is a **Waren-Versorgungs-Statistik (WVS)** application that builds a parallel environment to LEGACY_DWH in PRODUCT_SCC_PROD for system replacement purposes.

This staging table stores **WVS error reason classifications** as part of the supply chain statistics processing workflow. The table serves as an intermediate storage layer during the **multi-step WVS calculation process** that analyzes delivery shortages and their underlying causes.

The application processes data from ELAB (post-ELVS core replacement) sources and performs **line-by-line resolution of shortage quantities and values by reasons**. The workflow includes supplier determination, relevance identification, and aggregation calculations. Key processing steps involve determining delivery dates from the last 28 days, calculating WVS metrics, and generating various aggregated views for reporting.

The table is populated during the staging phase and subsequently cleaned up as part of the **daily WVS processing cycle** that runs retrospectively for approximately 2 weeks to ensure data accuracy and completeness.

## Lineage / Impact

```mermaid
%%{init: {'flowchart': { 'nodeSpacing': 10, 'rankSpacing': 40, 'rankdir': 'TB' }}}%%

flowchart LR

```

## Statements

The following statements create/modify this table:

<Util>DELETE</Util> inside [BDWH_SCCWVS/sccwvs_600_cleandb.sas](../../Applications/BDWH_SCCWVS/sccwvs_600_cleandb.sas):
```sql:line-numbers
DELETE FROM PRODUCT_SCC_PROD.LEGACY_STAG.SD_WVS_FEHLGRUND_KLASSE
```

## References

The table SD_WVS_FEHLGRUND_KLASSE is used in the following SAS programs:

| Application | SAS Program |
|---|---|
## Table Schema

| Field Name | Datatype | Precision | Scale | Is Nullable | Constraint | Description |
|---|---|---|---|---|---|---|
| FEHL_ART_GRUND_KLASSE_ID | INTEGER | 10 | 0 | FALSE | PRIMARY KEY | Unique identifier for error reason class |
| FEHL_ART_GRUND_KLASSE_TXT | VARCHAR | 100 | 0 | TRUE |   | Description text for error reason class |
| BERECHTIGT_MARKT_KZ | VARCHAR | 10 | 0 | TRUE |   | Market authorization indicator |
| ERSTELL_DATUM | DATE | 0 | 0 | TRUE |   | Record creation date |
| AEND_DATUM | DATE | 0 | 0 | TRUE |   | Record modification date |