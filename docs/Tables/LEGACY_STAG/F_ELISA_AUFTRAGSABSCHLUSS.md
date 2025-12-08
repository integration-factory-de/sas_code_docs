# F_ELISA_AUFTRAGSABSCHLUSS (Table)

## Table Description

The **DWELISAAUFTRAB** application processes order completion messages from the ELISA system, specifically handling XML-based order completion notifications (AuftragsabschlussmeldungV2) from pL-Store to ELISA.

This staging table serves as an intermediate storage layer for order completion data during the ETL pipeline. The application follows a **sequential job workflow** that moves XML files from raw data directories, parses them using XML maps, transforms the data with pricing information (both purchase and sales prices), and loads it into various database layers.

Key processing steps include:
- **XML file ingestion** from MQS transfer jobs
- **Data transformation** with master data lookups for warehouses, articles, suppliers, and markets
- **Price enrichment** through multiple pricing hierarchies (IVKP, detail, region/area, standard prices)
- **Replacement article handling** for substituted items
- **Data aggregation** to match F_ELVS_FEHL_ART structure

The application handles **commissioning completion messages** containing all picked quantities for order positions, including warehouse NVE (shipping unit) and article-level details. It processes both regular orders and cancellation positions, with support for multi-level position structures (orders can contain 1-n WaNVE, each containing 1-n articles).

The system runs **four times daily** and includes comprehensive error handling, data validation, and automated notifications for missing files or processing issues.

## Lineage / Impact

```mermaid
%%{init: {'flowchart': { 'nodeSpacing': 10, 'rankSpacing': 40, 'rankdir': 'TB' }}}%%

flowchart LR

  WK_AUFAB.F_ELISA_AUFTRAGSABSCHLUSS["WK_AUFAB<br/>F_ELISA_AUFTRAGSABSCHLUSS"] --> LEGACY_STAG.F_ELISA_AUFTRAGSABSCHLUSS["LEGACY_STAG<br/>F_ELISA_AUFTRAGSABSCHLUSS"]
  click WK_AUFAB.F_ELISA_AUFTRAGSABSCHLUSS "../../tables/WK_AUFAB/F_ELISA_AUFTRAGSABSCHLUSS"
  click LEGACY_STAG.F_ELISA_AUFTRAGSABSCHLUSS "../../tables/LEGACY_STAG/F_ELISA_AUFTRAGSABSCHLUSS"
```

## Statements

The following statements create/modify this table:

<Util>INSERT</Util> inside [DWELISAAUFTRAB/snow_auftragsabschlussmeldung_laden.sas](../../Applications/DWELISAAUFTRAB/snow_auftragsabschlussmeldung_laden.sas):
```sql:line-numbers
INSERT INTO PRODUCT_LSP_LEGACY_PROD.LEGACY_STAG.F_ELISA_AUFTRAGSABSCHLUSS SELECT * FROM wk_aufab.f_elisa_auftragsabschluss
```

## References

The table F_ELISA_AUFTRAGSABSCHLUSS is used in the following SAS programs:

| Application | SAS Program |
|---|---|
| [DWELISAAUFTRAB](../../Applications/DWELISAAUFTRAB) | [snow_auftragsabschlussmeldung_laden.sas](../../Applications/DWELISAAUFTRAB/snow_auftragsabschlussmeldung_laden.sas) |
## Table Schema

| Field Name | Datatype | Precision | Scale | Is Nullable | Constraint | Description |
|---|---|---|---|---|---|---|
| MA_LAG_ID | NUMBER | 10 | 0 | FALSE | PRIMARY KEY | Market-Warehouse ID derived from warehouse number and calendar date |
| LAG_ID | NUMBER | 4 | 0 | FALSE | PRIMARY KEY | Warehouse ID derived from warehouse number and calendar date |
| NAN_ART_ID | NUMBER | 9 | 0 | FALSE | PRIMARY KEY | Article ID derived from NAN and calendar date |
| AKT_KZ | VARCHAR | 1 | 0 | FALSE | PRIMARY KEY | Action indicator flag |
| LIEF_ID | VARCHAR | 6 | 0 | FALSE | PRIMARY KEY | Supplier ID derived from supplier number and calendar date |
| MA_ID | NUMBER | 10 | 0 | FALSE | PRIMARY KEY | Market ID derived from market identifier and calendar date |
| KAL_TAG_ID | DATE | 0 | 0 | FALSE | PRIMARY KEY | Calendar date ID representing the planned delivery date from document |
| BUCHUNGSDATUM | DATE | 0 | 0 | FALSE | PRIMARY KEY | Booking date derived from booking date components |
| MHDATUM | DATE | 0 | 0 | FALSE | PRIMARY KEY | Best before date derived from MHD components or set to infinite |
| AUFTRAGSABSCHLUSSMELDUNGV2_FULLC | VARCHAR | 79 | 0 | FALSE | PRIMARY KEY | Full order completion message V2 identifier |
| LAGERNUMMER | NUMBER | 8 | 0 | FALSE | PRIMARY KEY | Warehouse number from source system |
| BELEGNUMMER | NUMBER | 8 | 0 | FALSE | PRIMARY KEY | Document number from source system |
| VORGANGSSCHLUESSEL | NUMBER | 8 | 0 | FALSE | PRIMARY KEY | Process key identifier (dummy value from V7 onwards) |
| WWIDENT_BILANZSTELLE | NUMBER | 8 | 0 | FALSE | PRIMARY KEY | Balance point identifier from market identifier |
| WWIDENT_VERTRIEBSBEREICH | NUMBER | 8 | 0 | FALSE | PRIMARY KEY | Sales area identifier from market identifier |
| WWIDENT_FILIALNUMMER | NUMBER | 8 | 0 | FALSE | PRIMARY KEY | Branch number from market identifier |
| MARKTNUMMER_BEREICH | NUMBER | 8 | 0 | FALSE | PRIMARY KEY | Market number area component |
| MARKTNUMMER_REGION | NUMBER | 8 | 0 | FALSE | PRIMARY KEY | Market number region component |
| MARKTNUMMER_ZAEHLNUMMER | NUMBER | 8 | 0 | FALSE | PRIMARY KEY | Market number counting number component |
| KOMMISSIONIERLAUFNUMMER | NUMBER | 8 | 0 | FALSE | PRIMARY KEY | Commissioning run number |
| KST8AUFTRAGNUMMER | NUMBER | 8 | 0 | FALSE | PRIMARY KEY | Cost center 8 order number |
| PLSTOREAUFTRAGSNUMMER | NUMBER | 8 | 0 | FALSE | PRIMARY KEY | pL-Store order number |
| LIEFERART | NUMBER | 8 | 0 | FALSE | PRIMARY KEY | Delivery type identifier |
| BUCHUNGSDATUM_DAY | NUMBER | 8 | 0 | FALSE | PRIMARY KEY | Booking date day component |
| BUCHUNGSDATUM_MONTH | NUMBER | 8 | 0 | FALSE | PRIMARY KEY | Booking date month component |
| BUCHUNGSDATUM_YEAR | NUMBER | 8 | 0 | FALSE | PRIMARY KEY | Booking date year component |
| BELEGDATUM_DAY | NUMBER | 8 | 0 | FALSE | PRIMARY KEY | Document date day component |
| BELEGDATUM_MONTH | NUMBER | 8 | 0 | FALSE | PRIMARY KEY | Document date month component |
| BELEGDATUM_YEAR | NUMBER | 8 | 0 | FALSE | PRIMARY KEY | Document date year component |
| WANVE_ERWEITERUNGSZIFFER | NUMBER | 8 | 0 | FALSE | PRIMARY KEY | WA-NVE extension digit |
| WANVE_FORTLAUFENDENUMMER | NUMBER | 8 | 0 | FALSE | PRIMARY KEY | WA-NVE sequential number |
| WANVE_GLOBALCOMPANYPREFIX | NUMBER | 8 | 0 | FALSE | PRIMARY KEY | WA-NVE global company prefix |
| WANVE_PRUEFZIFFER | NUMBER | 8 | 0 | FALSE | PRIMARY KEY | WA-NVE check digit |
| LHMKUERZEL | VARCHAR | 20 | 0 | FALSE | PRIMARY KEY | LHM abbreviation identifier |
| LHMARTIKELNUMMER | VARCHAR | 20 | 0 | FALSE | PRIMARY KEY | LHM article number |
| LHM_NAN_ART_ID | NUMBER | 9 | 0 | FALSE | PRIMARY KEY | LHM article ID derived from LHM article number and calendar date |
| NAN | NUMBER | 8 | 0 | FALSE | PRIMARY KEY | National article number |
| WAEINHEIT | NUMBER | 8 | 0 | FALSE | PRIMARY KEY | Goods unit identifier |
| WENVE_ERWEITERUNGSZIFFER | NUMBER | 8 | 0 | FALSE | PRIMARY KEY | WE-NVE extension digit |
| WENVE_FORTLAUFENDENUMMER | NUMBER | 8 | 0 | FALSE | PRIMARY KEY | WE-NVE sequential number |
| WENVE_GLOBALCOMPANYPREFIX | NUMBER | 8 | 0 | FALSE | PRIMARY KEY | WE-NVE global company prefix |
| WENVE_PRUEFZIFFER | NUMBER | 8 | 0 | FALSE | PRIMARY KEY | WE-NVE check digit |
| AUFTRAGSMENGEINSTUECK | NUMBER | 8 | 0 | FALSE |   | Order quantity in pieces |
| ISTKOMMMENGEINSTUECK | NUMBER | 8 | 0 | FALSE |   | Actual commissioned quantity in pieces |
| SOLLKOMMMENGEINSTUECK | NUMBER | 8 | 0 | FALSE |   | Target commissioned quantity in pieces |
| MENGEINGRAMM | NUMBER | 8 | 0 | FALSE |   | Quantity in grams |
| KVGRUND | VARCHAR | 20 | 0 | FALSE |   | Shortage reason code |
| MHD_DAY | NUMBER | 8 | 0 | FALSE |   | Best before date day component |
| MHD_MONTH | NUMBER | 8 | 0 | FALSE |   | Best before date month component |
| MHD_YEAR | NUMBER | 8 | 0 | FALSE |   | Best before date year component |
| URSPRUNGSLAND | VARCHAR | 30 | 0 | FALSE |   | Country of origin |
| CHARGE | VARCHAR | 40 | 0 | FALSE |   | Batch identifier |
| LIEFERANTENNR | VARCHAR | 5 | 0 | FALSE |   | Supplier number |
| ZUSATZPOSITION | VARCHAR | 20 | 0 | FALSE |   | Additional position identifier |
| SCHNITTGEWICHTINGRAMM | NUMBER | 8 | 0 | FALSE |   | Average weight in grams |
| EINKAUFSPREIS | NUMBER | 10 | 2 | FALSE |   | Purchase price (overwritten with calculated EK price) |
| DATEINAME | VARCHAR | 100 | 0 | FALSE |   | Source XML filename |
| LFD_NR_ROHDAT | NUMBER | 8 | 0 | FALSE |   | Sequential number for raw data processing |
| GEBINDEKZ | VARCHAR | 20 | 0 | FALSE |   | Container indicator |
| FORTLAUFENDENUMMER | NUMBER | 8 | 0 | FALSE |   | Sequential number |
| GANGNUMMER | VARCHAR | 20 | 0 | FALSE |   | Aisle number in warehouse |
| PLATZ | VARCHAR | 20 | 0 | FALSE |   | Storage location in warehouse |
| FAKTNR | NUMBER | 8 | 0 | FALSE |   | Invoice number |
| TEILKOMMID | NUMBER | 8 | 0 | FALSE |   | Partial commissioning ID (dummy value from V7 onwards) |
| REFERENZEN | VARCHAR | 32 | 0 | FALSE |   | Reference information |
| BETRIEBE | VARCHAR | 32 | 0 | FALSE |   | Operating facilities information |
| MHD_TYPE | VARCHAR | 8 | 0 | FALSE |   | Best before date type (e.g. INFINITE) |
| LAND_TYP | VARCHAR | 24 | 0 | FALSE |   | Country type classification |
| GRAI | VARCHAR | 32 | 0 | FALSE |   | Global Returnable Asset Identifier |
| FEHLERSCHLUESSEL | VARCHAR | 4 | 0 | FALSE |   | Error code identifier |
| RUECKMELDUNGID | NUMBER | 8 | 0 | FALSE |   | Feedback ID (from V7 onwards) |
| CHARGEID | VARCHAR | 30 | 0 | FALSE |   | Batch ID (from V7 onwards) |
| STORNO_KENNZ | NUMBER | 8 | 0 | FALSE |   | Cancellation indicator (0=normal |
| REFERENZ_NAN | NUMBER | 8 | 0 | FALSE |   | Reference NAN for replacement articles |
| REFERENZ_WAEINHEIT | NUMBER | 8 | 0 | FALSE |   | Reference goods unit for replacement articles |
| REFERENZ_NAN_ART_ID | NUMBER | 8 | 0 | FALSE |   | Reference article ID for replacement articles |
| VK_BTO | NUMBER | 10 | 2 | FALSE |   | Sales price gross amount |
| VK_NTO | NUMBER | 10 | 2 | FALSE |   | Sales price net amount |
| VK_BEWERT_KZ | NUMBER | 8 | 0 | FALSE |   | Sales price evaluation indicator |
| FMGRUND_STORNO | VARCHAR | 20 | 0 | FALSE |   | Cancellation reason code (from V8 onwards) |
| PICKNAN | NUMBER | 8 | 0 | FALSE |   | Pick NAN identifier (from V8 onwards) |
| PICKEINHEIT | NUMBER | 8 | 0 | FALSE |   | Pick unit identifier (from V8 onwards) |