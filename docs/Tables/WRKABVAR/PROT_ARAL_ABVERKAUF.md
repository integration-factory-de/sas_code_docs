# PROT_ARAL_ABVERKAUF (Table)

## Table Description

_No description available_

## Lineage / Impact

```mermaid
%%{init: {'flowchart': { 'nodeSpacing': 10, 'rankSpacing': 40, 'rankdir': 'TB' }}}%%

flowchart LR

  WRKABVAR.ARAL_ABVERKAUF_02_EKP["WRKABVAR<br/>ARAL_ABVERKAUF_02_EKP"] --> WRKABVAR.PROT_ARAL_ABVERKAUF["WRKABVAR<br/>PROT_ARAL_ABVERKAUF"]
  WRKABVAR.PROT_ARAL_ABVERKAUF["WRKABVAR<br/>PROT_ARAL_ABVERKAUF"] --> METADATN.PROT_ARAL_ABVERKAUF["METADATN<br/>PROT_ARAL_ABVERKAUF"]
  click WRKABVAR.ARAL_ABVERKAUF_02_EKP "../../tables/WRKABVAR/ARAL_ABVERKAUF_02_EKP"
  click WRKABVAR.PROT_ARAL_ABVERKAUF "../../tables/WRKABVAR/PROT_ARAL_ABVERKAUF"
  click WRKABVAR.PROT_ARAL_ABVERKAUF "../../tables/WRKABVAR/PROT_ARAL_ABVERKAUF"
  click METADATN.PROT_ARAL_ABVERKAUF "../../tables/METADATN/PROT_ARAL_ABVERKAUF"
```

## References

The table PROT_ARAL_ABVERKAUF is used in the following SAS programs:

| Application | SAS Program |
|---|---|
| [DWABVARAL](../../Applications/DWABVARAL) | [abv_aral_meta.sas](../../Applications/DWABVARAL/abv_aral_meta.sas) |
| [DWABVARAL](../../Applications/DWABVARAL) | [abv_aral_bereit.sas](../../Applications/DWABVARAL/abv_aral_bereit.sas) |
## Table Schema

| Field Name | Datatype | Precision | Scale | Is Nullable | Constraint | Description |
|---|---|---|---|---|---|---|
| DATUM | DATE |  |  |  |   | Datum der Verarbeitung |
| ZEIT | TIME |  |  |  |   | Zeit der Verarbeitung |
| ROHDATEI | VARCHAR | 19 |  | TRUE |   | Name der Rohdatei |
| LFD_NR_ROHDATEI | INTEGER | 10 |  | TRUE |   | Laufende Nummer der Rohdatei |
| LFD_NR_LOAD | INTEGER | 10 |  | TRUE |   | Laufende Nummer der Ladedatei |
| GELESENE_SAETZE | INTEGER | 10 |  | TRUE |   | Anzahl gelesener Sätze |
| GELADENE_SAETZE | INTEGER | 10 |  | TRUE |   | Anzahl geladener Sätze |