# F_ELISA_AUFTRAGSABSCHLUSS0EKP (Table)

## Table Description

_No description available_

## Lineage / Impact

```mermaid
%%{init: {'flowchart': { 'nodeSpacing': 10, 'rankSpacing': 40, 'rankdir': 'TB' }}}%%

flowchart LR

  WK_AUFAB.F_ELISA_AUFTRAGSABSCHLUSS["WK_AUFAB<br/>F_ELISA_AUFTRAGSABSCHLUSS"] --> WK_AUFAB.F_ELISA_AUFTRAGSABSCHLUSS0EKP["WK_AUFAB<br/>F_ELISA_AUFTRAGSABSCHLUSS0EKP"]
  WK_AUFAB.F_ELISA_AUFTRAGSABSCHLUSS0EKP["WK_AUFAB<br/>F_ELISA_AUFTRAGSABSCHLUSS0EKP"] --> WK_AUFAB.F_ELISA_AUFTRAGSABSCHLUSS["WK_AUFAB<br/>F_ELISA_AUFTRAGSABSCHLUSS"]
  WK_AUFAB.F_ELISA_AUFTRAGSABSCHLUSS0["WK_AUFAB<br/>F_ELISA_AUFTRAGSABSCHLUSS0"] --> WK_AUFAB.F_ELISA_AUFTRAGSABSCHLUSS0EKP["WK_AUFAB<br/>F_ELISA_AUFTRAGSABSCHLUSS0EKP"]
  click WK_AUFAB.F_ELISA_AUFTRAGSABSCHLUSS "../../tables/WK_AUFAB/F_ELISA_AUFTRAGSABSCHLUSS"
  click WK_AUFAB.F_ELISA_AUFTRAGSABSCHLUSS0EKP "../../tables/WK_AUFAB/F_ELISA_AUFTRAGSABSCHLUSS0EKP"
  click WK_AUFAB.F_ELISA_AUFTRAGSABSCHLUSS0 "../../tables/WK_AUFAB/F_ELISA_AUFTRAGSABSCHLUSS0"
  click WK_AUFAB.F_ELISA_AUFTRAGSABSCHLUSS0EKP "../../tables/WK_AUFAB/F_ELISA_AUFTRAGSABSCHLUSS0EKP"
  click WK_AUFAB.F_ELISA_AUFTRAGSABSCHLUSS "../../tables/WK_AUFAB/F_ELISA_AUFTRAGSABSCHLUSS"
  click WK_AUFAB.F_ELISA_AUFTRAGSABSCHLUSS0EKP "../../tables/WK_AUFAB/F_ELISA_AUFTRAGSABSCHLUSS0EKP"
```

## References

The table F_ELISA_AUFTRAGSABSCHLUSS0EKP is used in the following SAS programs:

| Application | SAS Program |
|---|---|
| [DWELISAAUFTRAB](../../Applications/DWELISAAUFTRAB) | [auftragsabschlussmeldung_vkp.sas](../../Applications/DWELISAAUFTRAB/auftragsabschlussmeldung_vkp.sas) |
| [DWELISAAUFTRAB](../../Applications/DWELISAAUFTRAB) | [auftragsabschlussmeldung_ekp.sas](../../Applications/DWELISAAUFTRAB/auftragsabschlussmeldung_ekp.sas) |
## Table Schema

| Field Name | Datatype | Precision | Scale | Is Nullable | Constraint | Description |
|---|---|---|---|---|---|---|
| MA_LAG_ID | INTEGER | 8 | 0 | FALSE | PRIMARY KEY | Market-Warehouse ID combining warehouse number and calendar date |
| LAG_ID | INTEGER | 4 | 0 | FALSE | PRIMARY KEY | Warehouse ID derived from warehouse number and calendar date |
| NAN_ART_ID | INTEGER | 9 | 0 | FALSE | PRIMARY KEY | Article ID derived from NAN and calendar date |
| AKT_KZ | VARCHAR | 1 | 0 | FALSE | PRIMARY KEY | Action indicator flag |
| LIEF_ID | VARCHAR | 6 | 0 | FALSE | PRIMARY KEY | Supplier ID derived from supplier number and calendar date |
| MA_ID | INTEGER | 10 | 0 | FALSE | PRIMARY KEY | Market ID derived from WWIdent components and calendar date |
| KAL_TAG_ID | DATE | 0 | 0 | FALSE | PRIMARY KEY | Calendar date ID from document date |
| BUCHUNGSDATUM | DATE | 0 | 0 | TRUE |   | Booking date from booking date components |
| MHDATUM | DATE | 0 | 0 | TRUE |   | Best before date from MHD components |
| AUFTRAGSABSCHLUSSMELDUNGV2_FULLC | VARCHAR | 79 | 0 | TRUE |   | Full order completion message V2 identifier |
| LAGERNUMMER | INTEGER | 8 | 0 | FALSE |   | Warehouse number from source system |
| BELEGNUMMER | INTEGER | 8 | 0 | FALSE |   | Document number from source system |
| VORGANGSSCHLUESSEL | INTEGER | 8 | 0 | FALSE |   | Process key identifier |
| WWIDENT_BILANZSTELLE | INTEGER | 8 | 0 | FALSE |   | WWIdent balance point component |
| WWIDENT_VERTRIEBSBEREICH | INTEGER | 8 | 0 | FALSE |   | WWIdent sales area component |
| WWIDENT_FILIALNUMMER | INTEGER | 8 | 0 | FALSE |   | WWIdent branch number component |
| MARKTNUMMER_BEREICH | INTEGER | 8 | 0 | TRUE |   | Market number area component |
| MARKTNUMMER_REGION | INTEGER | 8 | 0 | TRUE |   | Market number region component |
| MARKTNUMMER_ZAEHLNUMMER | INTEGER | 8 | 0 | TRUE |   | Market number counting number component |
| KOMMISSIONIERLAUFNUMMER | INTEGER | 8 | 0 | TRUE |   | Commissioning run number |
| KST8AUFTRAGNUMMER | INTEGER | 8 | 0 | TRUE |   | Cost center 8 order number |
| PLSTOREAUFTRAGSNUMMER | INTEGER | 8 | 0 | TRUE |   | PL-Store order number |
| LIEFERART | INTEGER | 8 | 0 | TRUE |   | Delivery type identifier |
| BUCHUNGSDATUM_DAY | INTEGER | 8 | 0 | TRUE |   | Booking date day component |
| BUCHUNGSDATUM_MONTH | INTEGER | 8 | 0 | TRUE |   | Booking date month component |
| BUCHUNGSDATUM_YEAR | INTEGER | 8 | 0 | TRUE |   | Booking date year component |
| BELEGDATUM_DAY | INTEGER | 8 | 0 | FALSE |   | Document date day component |
| BELEGDATUM_MONTH | INTEGER | 8 | 0 | FALSE |   | Document date month component |
| BELEGDATUM_YEAR | INTEGER | 8 | 0 | FALSE |   | Document date year component |
| WANVE_ERWEITERUNGSZIFFER | INTEGER | 8 | 0 | FALSE |   | WA-NVE extension digit |
| WANVE_FORTLAUFENDENUMMER | INTEGER | 8 | 0 | FALSE |   | WA-NVE sequential number |
| WANVE_GLOBALCOMPANYPREFIX | INTEGER | 8 | 0 | FALSE |   | WA-NVE global company prefix |
| WANVE_PRUEFZIFFER | INTEGER | 8 | 0 | FALSE |   | WA-NVE check digit |
| LHMKUERZEL | VARCHAR | 20 | 0 | TRUE |   | LHM abbreviation identifier |
| LHMARTIKELNUMMER | VARCHAR | 20 | 0 | TRUE |   | LHM article number |
| LHM_NAN_ART_ID | INTEGER | 9 | 0 | TRUE |   | LHM NAN article ID |
| NAN | INTEGER | 8 | 0 | FALSE |   | National article number |
| WAEINHEIT | INTEGER | 8 | 0 | FALSE |   | Goods unit identifier |
| WENVE_ERWEITERUNGSZIFFER | INTEGER | 8 | 0 | FALSE |   | WE-NVE extension digit |
| WENVE_FORTLAUFENDENUMMER | INTEGER | 8 | 0 | FALSE |   | WE-NVE sequential number |
| WENVE_GLOBALCOMPANYPREFIX | INTEGER | 8 | 0 | FALSE |   | WE-NVE global company prefix |
| WENVE_PRUEFZIFFER | INTEGER | 8 | 0 | FALSE |   | WE-NVE check digit |
| AUFTRAGSMENGEINSTUECK | INTEGER | 8 | 0 | FALSE |   | Order quantity in pieces |
| ISTKOMMMENGEINSTUECK | INTEGER | 8 | 0 | FALSE |   | Actual commissioned quantity in pieces |
| SOLLKOMMMENGEINSTUECK | INTEGER | 8 | 0 | FALSE |   | Target commissioned quantity in pieces |
| MENGEINGRAMM | INTEGER | 8 | 0 | TRUE |   | Quantity in grams |
| KVGRUND | VARCHAR | 20 | 0 | TRUE |   | Shortage reason code |
| MHD_DAY | INTEGER | 8 | 0 | TRUE |   | Best before date day component |
| MHD_MONTH | INTEGER | 8 | 0 | TRUE |   | Best before date month component |
| MHD_YEAR | INTEGER | 8 | 0 | TRUE |   | Best before date year component |
| URSPRUNGSLAND | VARCHAR | 30 | 0 | TRUE |   | Country of origin |
| CHARGE | VARCHAR | 40 | 0 | TRUE |   | Batch identifier |
| LIEFERANTENNR | VARCHAR | 5 | 0 | TRUE |   | Supplier number |
| ZUSATZPOSITION | VARCHAR | 20 | 0 | TRUE |   | Additional position identifier |
| SCHNITTGEWICHTINGRAMM | INTEGER | 8 | 0 | TRUE |   | Average weight in grams |
| EINKAUFSPREIS | DECIMAL | 10 | 2 | TRUE |   | Purchase price |
| DATEINAME | VARCHAR | 100 | 0 | FALSE |   | Source file name |
| LFD_NR_ROHDAT | INTEGER | 8 | 0 | FALSE |   | Sequential number for raw data |
| GEBINDEKZ | VARCHAR | 20 | 0 | TRUE |   | Container indicator |
| FORTLAUFENDENUMMER | INTEGER | 8 | 0 | TRUE |   | Sequential number |
| GANGNUMMER | VARCHAR | 20 | 0 | TRUE |   | Aisle number |
| PLATZ | VARCHAR | 20 | 0 | TRUE |   | Storage location |
| FAKTNR | INTEGER | 8 | 0 | TRUE |   | Invoice number |
| TEILKOMMID | INTEGER | 8 | 0 | TRUE |   | Partial commissioning ID |
| REFERENZEN | VARCHAR | 32 | 0 | TRUE |   | Reference information |
| BETRIEBE | VARCHAR | 32 | 0 | TRUE |   | Operations information |
| MHD_TYPE | VARCHAR | 8 | 0 | TRUE |   | Best before date type |
| LAND_TYP | VARCHAR | 24 | 0 | TRUE |   | Country type |
| GRAI | VARCHAR | 32 | 0 | TRUE |   | Global Returnable Asset Identifier |
| FEHLERSCHLUESSEL | VARCHAR | 4 | 0 | TRUE |   | Error key |
| RUECKMELDUNGID | INTEGER | 8 | 0 | TRUE |   | Feedback ID |
| CHARGEID | VARCHAR | 30 | 0 | TRUE |   | Batch ID |
| STORNO_KENNZ | INTEGER | 8 | 0 | TRUE |   | Cancellation indicator |
| REFERENZ_NAN | INTEGER | 8 | 0 | TRUE |   | Reference NAN |
| REFERENZ_WAEINHEIT | INTEGER | 8 | 0 | TRUE |   | Reference goods unit |
| REFERENZ_NAN_ART_ID | INTEGER | 8 | 0 | TRUE |   | Reference NAN article ID |
| FMGRUND_STORNO | VARCHAR | 20 | 0 | TRUE |   | FM reason for cancellation |
| PICKNAN | INTEGER | 8 | 0 | TRUE |   | Pick NAN |
| PICKEINHEIT | INTEGER | 8 | 0 | TRUE |   | Pick unit |
| BEWERTUNG_KZ | VARCHAR | 1 | 0 | TRUE |   | Valuation indicator for purchase price evaluation stage |