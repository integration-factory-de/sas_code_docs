# F_ELISA_AUFTRAGSABSCHLUSS (Table)

## Table Description

_No description available_

## Lineage / Impact

```mermaid
%%{init: {'flowchart': { 'nodeSpacing': 10, 'rankSpacing': 40, 'rankdir': 'TB' }}}%%

flowchart LR

  LEGACY_STAG.F_ELISA_FEHL_ART["LEGACY_STAG<br/>F_ELISA_FEHL_ART"] --> LEGACY_EDW.F_ELISA_AUFTRAGSABSCHLUSS["LEGACY_EDW<br/>F_ELISA_AUFTRAGSABSCHLUSS"]
  click LEGACY_STAG.F_ELISA_FEHL_ART "../../tables/LEGACY_STAG/F_ELISA_FEHL_ART"
  click LEGACY_EDW.F_ELISA_AUFTRAGSABSCHLUSS "../../tables/LEGACY_EDW/F_ELISA_AUFTRAGSABSCHLUSS"
```

## References

The table F_ELISA_AUFTRAGSABSCHLUSS is used in the following SAS programs:

| Application | SAS Program |
|---|---|
| [DWELISAAUFTRAB](../../Applications/DWELISAAUFTRAB) | [snow_auftragsabschlussmeldung_fa_n_edw.sas](../../Applications/DWELISAAUFTRAB/snow_auftragsabschlussmeldung_fa_n_edw.sas) |
## Table Schema

| Field Name | Datatype | Precision | Scale | Is Nullable | Constraint | Description |
|---|---|---|---|---|---|---|
| MA_LAG_ID | NUMBER | 10 | 0 | FALSE | PRIMARY KEY | Market-Warehouse ID derived from warehouse number and calendar date |
| LAG_ID | NUMBER | 4 | 0 | FALSE | PRIMARY KEY | Warehouse ID derived from warehouse number and calendar date |
| NAN_ART_ID | NUMBER | 9 | 0 | FALSE | PRIMARY KEY | Article ID derived from NAN and calendar date |
| AKT_KZ | VARCHAR | 1 | 0 | FALSE | PRIMARY KEY | Action indicator for article |
| LIEF_ID | VARCHAR | 6 | 0 | FALSE | PRIMARY KEY | Supplier ID derived from supplier number and calendar date |
| MA_ID | NUMBER | 10 | 0 | FALSE | PRIMARY KEY | Market ID derived from market identifier and calendar date |
| KAL_TAG_ID | DATE | 0 | 0 | FALSE | PRIMARY KEY | Calendar date ID from document date (planned delivery date) |
| BUCHUNGSDATUM | DATE | 0 | 0 | TRUE |   | Booking date from order completion message |
| MHDATUM | DATE | 0 | 0 | TRUE |   | Best before date (MHD) from order completion message |
| AUFTRAGSABSCHLUSSMELDUNGV2_FULLC | VARCHAR | 79 | 0 | TRUE |   | Full content identifier for order completion message V2 |
| LAGERNUMMER | NUMBER | 8 | 0 | FALSE | PRIMARY KEY | Warehouse number from order completion message |
| BELEGNUMMER | NUMBER | 8 | 0 | FALSE | PRIMARY KEY | Document number from order completion message |
| VORGANGSSCHLUESSEL | NUMBER | 8 | 0 | TRUE |   | Process key from order completion message |
| WWIDENT_BILANZSTELLE | NUMBER | 8 | 0 | FALSE | PRIMARY KEY | Balance center from market identifier |
| WWIDENT_VERTRIEBSBEREICH | NUMBER | 8 | 0 | FALSE | PRIMARY KEY | Sales area from market identifier |
| WWIDENT_FILIALNUMMER | NUMBER | 8 | 0 | FALSE | PRIMARY KEY | Branch number from market identifier |
| MARKTNUMMER_BEREICH | NUMBER | 8 | 0 | TRUE |   | Market number area |
| MARKTNUMMER_REGION | NUMBER | 8 | 0 | TRUE |   | Market number region |
| MARKTNUMMER_ZAEHLNUMMER | NUMBER | 8 | 0 | TRUE |   | Market number counting number |
| KOMMISSIONIERLAUFNUMMER | NUMBER | 8 | 0 | TRUE |   | Commissioning run number |
| KST8AUFTRAGNUMMER | NUMBER | 8 | 0 | TRUE |   | Cost center 8 order number |
| PLSTOREAUFTRAGSNUMMER | NUMBER | 8 | 0 | TRUE |   | pL-Store order number |
| LIEFERART | NUMBER | 8 | 0 | TRUE |   | Delivery type |
| BUCHUNGSDATUM_DAY | NUMBER | 8 | 0 | TRUE |   | Booking date day component |
| BUCHUNGSDATUM_MONTH | NUMBER | 8 | 0 | TRUE |   | Booking date month component |
| BUCHUNGSDATUM_YEAR | NUMBER | 8 | 0 | TRUE |   | Booking date year component |
| BELEGDATUM_DAY | NUMBER | 8 | 0 | TRUE |   | Document date day component |
| BELEGDATUM_MONTH | NUMBER | 8 | 0 | TRUE |   | Document date month component |
| BELEGDATUM_YEAR | NUMBER | 8 | 0 | TRUE |   | Document date year component |
| WANVE_ERWEITERUNGSZIFFER | NUMBER | 8 | 0 | FALSE | PRIMARY KEY | Goods issue NVE extension digit |
| WANVE_FORTLAUFENDENUMMER | NUMBER | 8 | 0 | FALSE | PRIMARY KEY | Goods issue NVE sequential number |
| WANVE_GLOBALCOMPANYPREFIX | NUMBER | 8 | 0 | FALSE | PRIMARY KEY | Goods issue NVE global company prefix |
| WANVE_PRUEFZIFFER | NUMBER | 8 | 0 | FALSE | PRIMARY KEY | Goods issue NVE check digit |
| LHMKUERZEL | VARCHAR | 20 | 0 | TRUE |   | LHM abbreviation |
| LHMARTIKELNUMMER | VARCHAR | 20 | 0 | TRUE |   | LHM article number |
| LHM_NAN_ART_ID | NUMBER | 9 | 0 | TRUE |   | LHM NAN article ID |
| NAN | NUMBER | 8 | 0 | FALSE | PRIMARY KEY | National article number |
| WAEINHEIT | NUMBER | 8 | 0 | FALSE | PRIMARY KEY | Goods issue unit |
| WENVE_ERWEITERUNGSZIFFER | NUMBER | 8 | 0 | FALSE | PRIMARY KEY | Goods receipt NVE extension digit |
| WENVE_FORTLAUFENDENUMMER | NUMBER | 8 | 0 | FALSE | PRIMARY KEY | Goods receipt NVE sequential number |
| WENVE_GLOBALCOMPANYPREFIX | NUMBER | 8 | 0 | FALSE | PRIMARY KEY | Goods receipt NVE global company prefix |
| WENVE_PRUEFZIFFER | NUMBER | 8 | 0 | FALSE | PRIMARY KEY | Goods receipt NVE check digit |
| AUFTRAGSMENGEINSTUECK | NUMBER | 8 | 0 | FALSE |   | Order quantity in pieces |
| ISTKOMMMENGEINSTUECK | NUMBER | 8 | 0 | FALSE |   | Actual commissioned quantity in pieces |
| SOLLKOMMMENGEINSTUECK | NUMBER | 8 | 0 | FALSE |   | Target commissioned quantity in pieces |
| MENGEINGRAMM | NUMBER | 8 | 0 | TRUE |   | Quantity in grams |
| KVGRUND | VARCHAR | 20 | 0 | TRUE |   | Shortage reason code |
| MHD_DAY | NUMBER | 8 | 0 | TRUE |   | Best before date day component |
| MHD_MONTH | NUMBER | 8 | 0 | TRUE |   | Best before date month component |
| MHD_YEAR | NUMBER | 8 | 0 | TRUE |   | Best before date year component |
| URSPRUNGSLAND | VARCHAR | 30 | 0 | TRUE |   | Country of origin |
| CHARGE | VARCHAR | 40 | 0 | TRUE |   | Batch number |
| LIEFERANTENNR | VARCHAR | 5 | 0 | TRUE |   | Supplier number |
| ZUSATZPOSITION | VARCHAR | 20 | 0 | TRUE |   | Additional position indicator |
| SCHNITTGEWICHTINGRAMM | NUMBER | 8 | 0 | TRUE |   | Average weight in grams |
| EINKAUFSPREIS | NUMBER | 8 | 2 | TRUE |   | Purchase price |
| DATEINAME | VARCHAR | 100 | 0 | TRUE |   | Source XML filename |
| LFD_NR_ROHDAT | NUMBER | 8 | 0 | TRUE |   | Sequential number for raw data processing |
| GEBINDEKZ | VARCHAR | 20 | 0 | TRUE |   | Container indicator |
| FORTLAUFENDENUMMER | NUMBER | 8 | 0 | TRUE |   | Sequential number |
| GANGNUMMER | VARCHAR | 20 | 0 | TRUE |   | Aisle number |
| PLATZ | VARCHAR | 20 | 0 | TRUE |   | Storage location |
| FAKTNR | NUMBER | 8 | 0 | TRUE |   | Invoice number |
| TEILKOMMID | NUMBER | 8 | 0 | TRUE |   | Partial commissioning ID |
| REFERENZEN | VARCHAR | 32 | 0 | TRUE |   | References |
| BETRIEBE | VARCHAR | 32 | 0 | TRUE |   | Operations |
| MHD_TYPE | VARCHAR | 8 | 0 | TRUE |   | Best before date type |
| LAND_TYP | VARCHAR | 24 | 0 | TRUE |   | Country type |
| GRAI | VARCHAR | 32 | 0 | TRUE |   | Global Returnable Asset Identifier |
| FEHLERSCHLUESSEL | VARCHAR | 4 | 0 | TRUE |   | Error code |
| RUECKMELDUNGID | NUMBER | 8 | 0 | TRUE |   | Feedback ID |
| CHARGEID | VARCHAR | 30 | 0 | TRUE |   | Batch ID |
| STORNO_KENNZ | NUMBER | 8 | 0 | TRUE |   | Cancellation indicator |
| REFERENZ_NAN | NUMBER | 8 | 0 | TRUE |   | Reference NAN for replacement articles |
| REFERENZ_WAEINHEIT | NUMBER | 8 | 0 | TRUE |   | Reference goods issue unit for replacement articles |
| REFERENZ_NAN_ART_ID | NUMBER | 8 | 0 | TRUE |   | Reference NAN article ID for replacement articles |
| VK_BTO | NUMBER | 8 | 2 | TRUE |   | Sales price gross |
| VK_NTO | NUMBER | 8 | 2 | TRUE |   | Sales price net |
| VK_BEWERT_KZ | NUMBER | 8 | 0 | TRUE |   | Sales price evaluation indicator |
| FMGRUND_STORNO | VARCHAR | 20 | 0 | TRUE |   | Shortage reason for cancellation |
| PICKNAN | NUMBER | 8 | 0 | TRUE |   | Pick NAN |
| PICKEINHEIT | NUMBER | 8 | 0 | TRUE |   | Pick unit |