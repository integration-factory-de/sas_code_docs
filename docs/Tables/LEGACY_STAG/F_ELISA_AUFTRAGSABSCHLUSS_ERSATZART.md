# F_ELISA_AUFTRAGSABSCHLUSS_ERSATZART (Table)

## Table Description

_No description available_

## Lineage / Impact

```mermaid
%%{init: {'flowchart': { 'nodeSpacing': 10, 'rankSpacing': 40, 'rankdir': 'TB' }}}%%

flowchart LR

  LEGACY_STAG.F_ELISA_AUFTRAGSABSCHLUSS_ERSATZART["LEGACY_STAG<br/>F_ELISA_AUFTRAGSABSCHLUSS_ERSATZART"] --> WK_AUFAB.F_ELISA_AUFTRAGSABSCHLUSS["WK_AUFAB<br/>F_ELISA_AUFTRAGSABSCHLUSS"]
  PRODUCT_SCC_PROD.LEGACY_STAG.F_ELISA_FEHL_ART["PRODUCT_SCC_PROD<br/>LEGACY_STAG.F_ELISA_FEHL_ART"] --> LEGACY_STAG.F_ELISA_AUFTRAGSABSCHLUSS_ERSATZART["LEGACY_STAG<br/>F_ELISA_AUFTRAGSABSCHLUSS_ERSATZART"]
  click LEGACY_STAG.F_ELISA_AUFTRAGSABSCHLUSS_ERSATZART "../../tables/LEGACY_STAG/F_ELISA_AUFTRAGSABSCHLUSS_ERSATZART"
  click PRODUCT_SCC_PROD.LEGACY_STAG.F_ELISA_FEHL_ART "../../tables/PRODUCT_SCC_PROD/LEGACY_STAG.F_ELISA_FEHL_ART"
  click WK_AUFAB.F_ELISA_AUFTRAGSABSCHLUSS "../../tables/WK_AUFAB/F_ELISA_AUFTRAGSABSCHLUSS"
  click LEGACY_STAG.F_ELISA_AUFTRAGSABSCHLUSS_ERSATZART "../../tables/LEGACY_STAG/F_ELISA_AUFTRAGSABSCHLUSS_ERSATZART"
```

## References

The table F_ELISA_AUFTRAGSABSCHLUSS_ERSATZART is used in the following SAS programs:

| Application | SAS Program |
|---|---|
| [DWELISAAUFTRAB](../../Applications/DWELISAAUFTRAB) | [snow_auftragsabschlussmeldung_fa_mapping.sas](../../Applications/DWELISAAUFTRAB/snow_auftragsabschlussmeldung_fa_mapping.sas) |
## Table Schema

| Field Name | Datatype | Precision | Scale | Is Nullable | Constraint | Description |
|---|---|---|---|---|---|---|
| MA_LAG_ID | NUMBER | 38 | 0 | FALSE | PRIMARY KEY | Market-Warehouse ID combining market and warehouse information |
| LAG_ID | NUMBER | 38 | 0 | FALSE | PRIMARY KEY | Warehouse ID |
| NAN_ART_ID | NUMBER | 38 | 0 | FALSE | PRIMARY KEY | Article ID (NAN) - National Article Number |
| AKT_KZ | VARCHAR | 1 | 0 | FALSE | PRIMARY KEY | Action indicator for promotional articles |
| LIEF_ID | VARCHAR | 6 | 0 | FALSE | PRIMARY KEY | Supplier ID |
| MA_ID | NUMBER | 38 | 0 | FALSE | PRIMARY KEY | Market ID of receiving market/warehouse |
| KAL_TAG_ID | DATE | 0 | 0 | FALSE | PRIMARY KEY | Calendar day ID - planned delivery date from document |
| BUCHUNGSDATUM | DATE | 0 | 0 | TRUE |   | Booking date |
| MHDATUM | DATE | 0 | 0 | TRUE |   | Best before date (MHD) |
| AUFTRAGSABSCHLUSSMELDUNGV2_FULLC | VARCHAR | 79 | 0 | TRUE |   | Full message identifier for order completion message V2 |
| LAGERNUMMER | NUMBER | 38 | 0 | FALSE | PRIMARY KEY | Warehouse number |
| BELEGNUMMER | NUMBER | 38 | 0 | FALSE | PRIMARY KEY | Document number |
| VORGANGSSCHLUESSEL | NUMBER | 38 | 0 | TRUE |   | Process key |
| WWIDENT_BILANZSTELLE | NUMBER | 38 | 0 | FALSE | PRIMARY KEY | Goods management identifier - balance point |
| WWIDENT_VERTRIEBSBEREICH | NUMBER | 38 | 0 | FALSE | PRIMARY KEY | Goods management identifier - sales area |
| WWIDENT_FILIALNUMMER | NUMBER | 38 | 0 | FALSE | PRIMARY KEY | Goods management identifier - branch number |
| MARKTNUMMER_BEREICH | NUMBER | 38 | 0 | TRUE |   | Market number - area |
| MARKTNUMMER_REGION | NUMBER | 38 | 0 | TRUE |   | Market number - region |
| MARKTNUMMER_ZAEHLNUMMER | NUMBER | 38 | 0 | TRUE |   | Market number - counting number |
| KOMMISSIONIERLAUFNUMMER | NUMBER | 38 | 0 | TRUE |   | Picking run number |
| KST8AUFTRAGNUMMER | NUMBER | 38 | 0 | TRUE |   | Cost center 8 order number |
| PLSTOREAUFTRAGSNUMMER | NUMBER | 38 | 0 | TRUE |   | pL-Store order number |
| LIEFERART | NUMBER | 38 | 0 | TRUE |   | Delivery type |
| BUCHUNGSDATUM_DAY | NUMBER | 38 | 0 | TRUE |   | Booking date - day |
| BUCHUNGSDATUM_MONTH | NUMBER | 38 | 0 | TRUE |   | Booking date - month |
| BUCHUNGSDATUM_YEAR | NUMBER | 38 | 0 | TRUE |   | Booking date - year |
| BELEGDATUM_DAY | NUMBER | 38 | 0 | TRUE |   | Document date - day |
| BELEGDATUM_MONTH | NUMBER | 38 | 0 | TRUE |   | Document date - month |
| BELEGDATUM_YEAR | NUMBER | 38 | 0 | TRUE |   | Document date - year |
| WANVE_ERWEITERUNGSZIFFER | NUMBER | 38 | 0 | FALSE | PRIMARY KEY | Goods issue NVE - extension digit |
| WANVE_FORTLAUFENDENUMMER | NUMBER | 38 | 0 | FALSE | PRIMARY KEY | Goods issue NVE - sequential number |
| WANVE_GLOBALCOMPANYPREFIX | NUMBER | 38 | 0 | FALSE | PRIMARY KEY | Goods issue NVE - global company prefix |
| WANVE_PRUEFZIFFER | NUMBER | 38 | 0 | FALSE | PRIMARY KEY | Goods issue NVE - check digit |
| LHMKUERZEL | VARCHAR | 20 | 0 | TRUE |   | LHM abbreviation |
| LHMARTIKELNUMMER | VARCHAR | 20 | 0 | TRUE |   | LHM article number |
| LHM_NAN_ART_ID | NUMBER | 38 | 0 | TRUE |   | LHM NAN article ID |
| NAN | NUMBER | 38 | 0 | FALSE | PRIMARY KEY | National Article Number |
| WAEINHEIT | NUMBER | 38 | 0 | FALSE | PRIMARY KEY | Goods issue unit |
| WENVE_ERWEITERUNGSZIFFER | NUMBER | 38 | 0 | FALSE | PRIMARY KEY | Goods receipt NVE - extension digit |
| WENVE_FORTLAUFENDENUMMER | NUMBER | 38 | 0 | FALSE | PRIMARY KEY | Goods receipt NVE - sequential number |
| WENVE_GLOBALCOMPANYPREFIX | NUMBER | 38 | 0 | FALSE | PRIMARY KEY | Goods receipt NVE - global company prefix |
| WENVE_PRUEFZIFFER | NUMBER | 38 | 0 | FALSE | PRIMARY KEY | Goods receipt NVE - check digit |
| AUFTRAGSMENGEINSTUECK | NUMBER | 38 | 0 | TRUE |   | Order quantity in pieces |
| ISTKOMMMENGEINSTUECK | NUMBER | 38 | 0 | TRUE |   | Actual picked quantity in pieces |
| SOLLKOMMMENGEINSTUECK | NUMBER | 38 | 0 | TRUE |   | Target picking quantity in pieces |
| MENGEINGRAMM | NUMBER | 38 | 0 | TRUE |   | Quantity in grams |
| KVGRUND | VARCHAR | 20 | 0 | TRUE |   | Shortage reason code |
| MHD_DAY | NUMBER | 38 | 0 | TRUE |   | Best before date - day |
| MHD_MONTH | NUMBER | 38 | 0 | TRUE |   | Best before date - month |
| MHD_YEAR | NUMBER | 38 | 0 | TRUE |   | Best before date - year |
| URSPRUNGSLAND | VARCHAR | 30 | 0 | TRUE |   | Country of origin |
| CHARGE | VARCHAR | 40 | 0 | TRUE |   | Batch number |
| LIEFERANTENNR | VARCHAR | 5 | 0 | TRUE |   | Supplier number |
| ZUSATZPOSITION | VARCHAR | 20 | 0 | TRUE |   | Additional position |
| SCHNITTGEWICHTINGRAMM | NUMBER | 38 | 0 | TRUE |   | Average weight in grams |
| EINKAUFSPREIS | NUMBER | 38 | 2 | TRUE |   | Purchase price |
| DATEINAME | VARCHAR | 100 | 0 | TRUE |   | Source file name |
| LFD_NR_ROHDAT | NUMBER | 38 | 0 | TRUE |   | Sequential number for raw data |
| GEBINDEKZ | VARCHAR | 20 | 0 | TRUE |   | Container indicator |
| FORTLAUFENDENUMMER | NUMBER | 38 | 0 | TRUE |   | Sequential number |
| GANGNUMMER | VARCHAR | 20 | 0 | TRUE |   | Aisle number |
| PLATZ | VARCHAR | 20 | 0 | TRUE |   | Storage location |
| FAKTNR | NUMBER | 38 | 0 | TRUE |   | Invoice number |
| TEILKOMMID | NUMBER | 38 | 0 | TRUE |   | Partial picking ID |
| REFERENZEN | VARCHAR | 32 | 0 | TRUE |   | References |
| BETRIEBE | VARCHAR | 32 | 0 | TRUE |   | Operations |
| MHD_TYPE | VARCHAR | 8 | 0 | TRUE |   | Best before date type |
| LAND_TYP | VARCHAR | 24 | 0 | TRUE |   | Country type |
| GRAI | VARCHAR | 32 | 0 | TRUE |   | Global Returnable Asset Identifier |
| FEHLERSCHLUESSEL | VARCHAR | 4 | 0 | TRUE |   | Error key |
| RUECKMELDUNGID | NUMBER | 38 | 0 | TRUE |   | Feedback ID |
| CHARGEID | VARCHAR | 30 | 0 | TRUE |   | Batch ID |
| STORNO_KENNZ | NUMBER | 38 | 0 | TRUE |   | Cancellation indicator |
| REFERENZ_NAN | NUMBER | 38 | 0 | TRUE |   | Reference NAN for replacement articles |
| REFERENZ_WAEINHEIT | NUMBER | 38 | 0 | TRUE |   | Reference goods issue unit for replacement articles |
| REFERENZ_NAN_ART_ID | NUMBER | 38 | 0 | TRUE |   | Reference NAN article ID for replacement articles |
| AUFTRAGSMENGEINSTUECK_ERSETZEND | NUMBER | 38 | 0 | TRUE |   | Order quantity in pieces for replacing article |
| SOLLKOMMMENGEINSTUECK_ERSETZEND | NUMBER | 38 | 0 | TRUE |   | Target picking quantity in pieces for replacing article |
| VK_BTO | NUMBER | 38 | 2 | TRUE |   | Sales price gross |
| VK_NTO | NUMBER | 38 | 2 | TRUE |   | Sales price net |