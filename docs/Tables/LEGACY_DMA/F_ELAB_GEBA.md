# F_ELAB_GEBA (Table)

## Table Description

**F_ELAB_GEBA** is a core data mart table within the **BDWH_ELABGEBA** application that stores consolidated warehouse unit data (Gebindeeinheit-Daten) for goods outbound processes. This table represents the modernized replacement for the legacy ELVS GEBA system.

The application performs **ELVS core migration** by merging traditional ELVS GEBA data with new data sources from ELISA article warehouse supply via XML messages. The table consolidates logistic factors and stockkeeping unit information from multiple sources including D_ELISA_ARTLAGSTOCKKEEPINGUNIT and D_ELISA_ARTLAGLOGISTFAKTOREN.

Key features include comprehensive product warehouse data with dimensions (length, width, height), weights (net/gross), packaging details, validity periods, and source tracking via HERKUNFT_BASIS field ('ELAB' for new ELISA sources, 'ELVS' for legacy data). The table maintains historical data integrity through companion table F_ELAB_GEBA_HIST and supports business continuity during the ELVS system migration.

Processed through a **three-stage ETL pipeline** (DW013803-805) that consolidates data sources, transfers to DMA schema, and maintains staging area cleanup for operational efficiency.

## Lineage / Impact

```mermaid
%%{init: {'flowchart': { 'nodeSpacing': 10, 'rankSpacing': 40, 'rankdir': 'TB' }}}%%

flowchart LR

  LEGACY_STAG.F_ELAB_GEBA_WORK["LEGACY_STAG<br/>F_ELAB_GEBA_WORK"] --> LEGACY_DMA.F_ELAB_GEBA["LEGACY_DMA<br/>F_ELAB_GEBA"]
  click LEGACY_STAG.F_ELAB_GEBA_WORK "../../tables/LEGACY_STAG/F_ELAB_GEBA_WORK"
  click LEGACY_DMA.F_ELAB_GEBA "../../tables/LEGACY_DMA/F_ELAB_GEBA"
```

## Statements

The following statements create/modify this table:

<Util>INSERT</Util> inside [BDWH_ELABGEBA/snow_elabgeba_200_nach_dma.sas](../../Applications/BDWH_ELABGEBA/snow_elabgeba_200_nach_dma.sas):
```sql:line-numbers
delete from PRODUCT_LSP_LEGACY_PROD.LEGACY_DMA.F_ELAB_GEBA
insert into PRODUCT_LSP_LEGACY_PROD.LEGACY_DMA.F_ELAB_GEBA
select MA_LAG_ID,LAGNR,NAN_ART_ID,AKT_KZ,WAEINH,LOKAL_KZ,ZUSATZTEXT,HKLASSE,
UPDKZ,GUEVDAT,GUEBDAT,GEFAHRENGUT_KZ,LAGSTRKZ,VPEINH,GEWICHT,UPDDAT,
LAENGE,BREITE,HOEHE,VOLUMEN,BRUTTO_GEWICHT,PAL_HOEHE,ERZ_LAND,TARA_KG,
TARA_PROZ,ANZ_JE_ROLLC,RAEUMDAT,ZUGANGSDAT,RESTLZ,VERFALLDAT,CHEM_BEH,
AENDDAT,LAG_ID, HERKUNFT_BASIS
from PRODUCT_LSP_LEGACY_PROD.LEGACY_STAG.F_ELAB_GEBA_WORK
```

## References

The table F_ELAB_GEBA is used in the following SAS programs:

| Application | SAS Program |
|---|---|
| [BDWH_ELABGEBA](../../Applications/BDWH_ELABGEBA) | [snow_elabgeba_200_nach_dma.sas](../../Applications/BDWH_ELABGEBA/snow_elabgeba_200_nach_dma.sas) |
## Table Schema

| Field Name | Datatype | Precision | Scale | Is Nullable | Constraint | Description |
|---|---|---|---|---|---|---|
| MA_LAG_ID | INTEGER |  |  | FALSE | PRIMARY KEY | Lager ID |
| LAGNR | VARCHAR | 3 |  | FALSE | PRIMARY KEY | Lagernummer |
| NAN_ART_ID | INTEGER |  |  | FALSE | PRIMARY KEY | Artikel ID |
| AKT_KZ | VARCHAR | 1 |  | FALSE | PRIMARY KEY | Aktionskennzeichen |
| WAEINH | VARCHAR |  |  | FALSE | PRIMARY KEY | Warenausgangseinheit |
| LOKAL_KZ | VARCHAR | 1 |  | TRUE |   | Lokalkennzeichen |
| ZUSATZTEXT | VARCHAR |  |  | TRUE |   | Zusatztext |
| HKLASSE | VARCHAR |  |  | TRUE |   | Handelsklasse |
| UPDKZ | VARCHAR | 1 |  | TRUE |   | Update Kennzeichen |
| GUEVDAT | DATE |  |  | TRUE |   | Gueltig von Datum |
| GUEBDAT | DATE |  |  | TRUE |   | Gueltig bis Datum |
| GEFAHRENGUT_KZ | VARCHAR | 1 |  | TRUE |   | Gefahrengut Kennzeichen |
| LAGSTRKZ | VARCHAR | 1 |  | TRUE |   | Lagerstruktur Kennzeichen |
| VPEINH | VARCHAR |  |  | TRUE |   | Verpackungseinheit |
| GEWICHT | FLOAT |  |  | TRUE |   | Gewicht |
| UPDDAT | DATE |  |  | TRUE |   | Update Datum |
| LAENGE | FLOAT |  |  | TRUE |   | Laenge |
| BREITE | FLOAT |  |  | TRUE |   | Breite |
| HOEHE | FLOAT |  |  | TRUE |   | Hoehe |
| VOLUMEN | FLOAT |  |  | TRUE |   | Volumen |
| BRUTTO_GEWICHT | FLOAT |  |  | TRUE |   | Bruttogewicht |
| PAL_HOEHE | FLOAT |  |  | TRUE |   | Palettenhoehe |
| ERZ_LAND | VARCHAR |  |  | TRUE |   | Erzeugerland |
| TARA_KG | FLOAT |  |  | TRUE |   | Tara in Kilogramm |
| TARA_PROZ | FLOAT |  |  | TRUE |   | Tara in Prozent |
| ANZ_JE_ROLLC | INTEGER |  |  | TRUE |   | Anzahl je Rollcontainer |
| RAEUMDAT | DATE |  |  | TRUE |   | Raeumungsdatum |
| ZUGANGSDAT | DATE |  |  | TRUE |   | Zugangsdatum |
| RESTLZ | INTEGER |  |  | TRUE |   | Restlaufzeit |
| VERFALLDAT | DATE |  |  | TRUE |   | Verfallsdatum |
| CHEM_BEH | VARCHAR |  |  | TRUE |   | Chemische Behandlung |
| AENDDAT | DATE |  |  | TRUE |   | Aenderungsdatum |
| LAG_ID | INTEGER |  |  | TRUE |   | Lager ID |
| HERKUNFT_BASIS | VARCHAR | 10 |  | TRUE |   | Herkunft Basis |