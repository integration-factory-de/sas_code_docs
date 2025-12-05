# PROT_F_ELISA_AUFTRAGSABSCHLUSS (Table)

## Table Description

_No description available_

## Lineage / Impact

```mermaid
%%{init: {'flowchart': { 'nodeSpacing': 10, 'rankSpacing': 40, 'rankdir': 'TB' }}}%%

flowchart LR

  WK_AUFAB.PROT_F_ELISA_AUFTRAGSABSCHLUSS["WK_AUFAB<br/>PROT_F_ELISA_AUFTRAGSABSCHLUSS"] --> METADATN.PROT_F_ELISA_AUFTRAGSABSCHLUSS["METADATN<br/>PROT_F_ELISA_AUFTRAGSABSCHLUSS"]
  click WK_AUFAB.PROT_F_ELISA_AUFTRAGSABSCHLUSS "../../tables/WK_AUFAB/PROT_F_ELISA_AUFTRAGSABSCHLUSS"
  click METADATN.PROT_F_ELISA_AUFTRAGSABSCHLUSS "../../tables/METADATN/PROT_F_ELISA_AUFTRAGSABSCHLUSS"
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