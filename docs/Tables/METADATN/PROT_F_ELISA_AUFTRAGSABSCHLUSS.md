# PROT_F_ELISA_AUFTRAGSABSCHLUSS (Table)

## Table Description

The **DWELISAAUFTRAB** application processes order completion messages from the ELISA system, handling XML data from pL-Store warehouse management. This metadata table tracks the processing of **Auftragsabschlussmeldung** (order completion notifications) that contain commissioned quantities for all positions of completed orders.

The application operates through a **sequential job chain** (DWDW6449 through DW013912) that moves raw XML files from DFUE directories, reads and transforms the data, enriches it with purchase and sales prices, and loads it into Snowflake staging and EDW tables. The process includes **data validation**, **replacement article handling**, and **aggregation** to match F_ELVS_FEHL_ART structure.

Key features include **XML parsing** with configurable maps, **multi-level position structures** (orders containing 1-n WaNVE, each containing 1-n articles), **price evaluation** through multiple fallback stages, and **error handling** with comprehensive logging. The system supports **version management** for evolving XML message formats and includes **automatic email notifications** for missing data scenarios.

This table serves as the **central metadata repository** tracking processing statistics, file counts, error rates, and backup information for audit and monitoring purposes across the entire ELISA order completion data pipeline.

## Lineage / Impact

```mermaid
%%{init: {'flowchart': { 'nodeSpacing': 10, 'rankSpacing': 40, 'rankdir': 'TB' }}}%%

flowchart LR

  WK_AUFAB.PROT_F_ELISA_AUFTRAGSABSCHLUSS["WK_AUFAB<br/>PROT_F_ELISA_AUFTRAGSABSCHLUSS"] --> METADATN.PROT_F_ELISA_AUFTRAGSABSCHLUSS["METADATN<br/>PROT_F_ELISA_AUFTRAGSABSCHLUSS"]
  click WK_AUFAB.PROT_F_ELISA_AUFTRAGSABSCHLUSS "../../tables/WK_AUFAB/PROT_F_ELISA_AUFTRAGSABSCHLUSS"
  click METADATN.PROT_F_ELISA_AUFTRAGSABSCHLUSS "../../tables/METADATN/PROT_F_ELISA_AUFTRAGSABSCHLUSS"
```

## Statements

The following statements create/modify this table:

<Util>INSERT</Util> inside [DWELISAAUFTRAB/auftragsabschlussmeldung_metadaten.sas](../../Applications/DWELISAAUFTRAB/auftragsabschlussmeldung_metadaten.sas):
```sql:line-numbers
proc append base = metadatn.prot_f_elisa_auftragsabschluss
data = wk_aufab.prot_f_elisa_auftragsabschluss
;
quit;
```

## References

The table PROT_F_ELISA_AUFTRAGSABSCHLUSS is used in the following SAS programs:

| Application | SAS Program |
|---|---|
| [DWELISAAUFTRAB](../../Applications/DWELISAAUFTRAB) | [auftragsabschlussmeldung_metadaten.sas](../../Applications/DWELISAAUFTRAB/auftragsabschlussmeldung_metadaten.sas) |
## Table Schema

| Field Name | Datatype | Precision | Scale | Is Nullable | Constraint | Description |
|---|---|---|---|---|---|---|
| datum | DATE |  |  | FALSE | PRIMARY KEY | Date when the processing occurred |
| zeit | TIME |  |  | FALSE | PRIMARY KEY | Time when the processing occurred |
| anzahl_rohdateien | INTEGER |  |  | TRUE |   | Number of raw data files processed |
| gelesene_saetze | INTEGER |  |  | TRUE |   | Number of records read from raw data files |
| lfd_nr_rohdat | INTEGER |  |  | TRUE |   | Sequential number for raw data processing |
| anz_err_in | INTEGER |  |  | TRUE |   | Number of error records input |
| anz_err_out | INTEGER |  |  | TRUE |   | Number of error records output |
| geladene_saetze | INTEGER |  |  | TRUE |   | Number of records loaded to target system |
| sicherungsdatei | VARCHAR | 255 |  | TRUE |   | Name of the backup file containing archived raw data |