# PROT_ARAL_ABVERKAUF (Table)

## Table Description

The **DWABVARAL** application processes Aral gas station sales data through a comprehensive ETL pipeline. This metadata table serves as a **protocol and tracking repository** for Aral sales data processing operations.

The application handles the complete lifecycle of Aral sales data: moving raw files from DFUE directories, unzipping compressed data files, reading and parsing sales transactions, performing purchase price evaluations, and loading processed data into staging and production environments. The system processes daily sales files with sequential numbering validation to ensure data integrity.

**Key functionalities** include:
- File movement and decompression of ARAL_ABV* files
- Sales transaction parsing with detailed validation
- EAN and NAN article ID mapping
- Purchase price evaluation and margin calculations
- Market and store identification through GLN matching
- Data aggregation for various reporting dimensions

The protocol table tracks processing metadata such as file sequence numbers, processing timestamps, record counts, and load statistics. This enables **monitoring and auditing** of the daily data processing workflow, ensuring completeness and providing restart capabilities for failed jobs.

The application integrates with multiple downstream systems including BON data warehouse, Snowflake staging areas, and various analytical data marts for sales reporting and business intelligence purposes.

## Lineage / Impact

```mermaid
%%{init: {'flowchart': { 'nodeSpacing': 10, 'rankSpacing': 40, 'rankdir': 'TB' }}}%%

flowchart LR

  WRKABVAR.PROT_ARAL_ABVERKAUF["WRKABVAR<br/>PROT_ARAL_ABVERKAUF"] --> METADATN.PROT_ARAL_ABVERKAUF["METADATN<br/>PROT_ARAL_ABVERKAUF"]
  click WRKABVAR.PROT_ARAL_ABVERKAUF "../../tables/WRKABVAR/PROT_ARAL_ABVERKAUF"
  click METADATN.PROT_ARAL_ABVERKAUF "../../tables/METADATN/PROT_ARAL_ABVERKAUF"
```

## Statements

The following statements create/modify this table:

<Util>INSERT</Util> inside [DWABVARAL/abv_aral_meta.sas](../../Applications/DWABVARAL/abv_aral_meta.sas):
```sql:line-numbers
PROC APPEND BASE=metadatn.PROT_ARAL_ABVERKAUF
DATA=WRKABVAR.PROT_ARAL_ABVERKAUF
RUN
```

## References

The table PROT_ARAL_ABVERKAUF is used in the following SAS programs:

| Application | SAS Program |
|---|---|
| [DWABVARAL](../../Applications/DWABVARAL) | [abv_aral_meta.sas](../../Applications/DWABVARAL/abv_aral_meta.sas) |
## Table Schema

| Field Name | Datatype | Precision | Scale | Is Nullable | Constraint | Description |
|---|---|---|---|---|---|---|
| DATUM | DATE |  |  |  |   | Datum der Verarbeitung |
| ZEIT | TIME |  |  |  |   | Zeit der Verarbeitung |
| ROHDATEI | VARCHAR | 19 |  | TRUE |   | Name der verarbeiteten Rohdatei |
| LFD_NR_ROHDATEI | INTEGER | 10 |  | TRUE |   | Laufende Nummer der Rohdatei |
| LFD_NR_LOAD | INTEGER | 10 |  | TRUE |   | Laufende Nummer des Ladevorgangs |
| GELESENE_SAETZE | INTEGER | 10 |  | TRUE |   | Anzahl gelesener Datensätze |
| GELADENE_SAETZE | INTEGER | 10 |  | TRUE |   | Anzahl erfolgreich geladener Datensätze |