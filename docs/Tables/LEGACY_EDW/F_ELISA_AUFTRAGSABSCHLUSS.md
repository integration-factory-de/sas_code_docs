# F_ELISA_AUFTRAGSABSCHLUSS (Table)

## Table Description

The **DWELISAAUFTRAB** application processes order completion messages from the ELISA system, handling XML data from pL-Store warehouse management. This fact table stores detailed order completion data including commissioned quantities, article information, and delivery details.

The application runs a **sequential job chain** (DWDW6449 through DW013912) that moves XML files from raw data directories, parses them using XML maps, transforms the data with master data lookups, and loads it into staging and EDW tables. Key transformations include mapping warehouse numbers to MA_LAG_ID, article numbers to NAN_ART_ID, and supplier numbers to LIEF_ID using format catalogs.

The table captures **order completion events** with both header and position-level data, supporting a 2-level position structure where orders contain 1-n WaNVEs (outbound containers) and each WaNVE contains 1-n articles. It handles **replacement article scenarios** where original articles are substituted, **cancellation positions** for cancelled items, and includes **pricing information** (purchase and sales prices) added through separate enrichment steps.

Data processing includes **duplicate handling** using sequential numbering, **error record management** for transformation failures, and **archival of raw XML files**. The application supports **multiple daily runs** and includes automated email notifications when no data files are present, making it suitable for high-frequency supply chain data processing.

## Lineage / Impact

```mermaid
%%{init: {'flowchart': { 'nodeSpacing': 10, 'rankSpacing': 40, 'rankdir': 'TB' }}}%%

flowchart LR

  LEGACY_STAG.F_ELISA_FEHL_ART["LEGACY_STAG<br/>F_ELISA_FEHL_ART"] --> LEGACY_EDW.F_ELISA_AUFTRAGSABSCHLUSS["LEGACY_EDW<br/>F_ELISA_AUFTRAGSABSCHLUSS"]
  click LEGACY_STAG.F_ELISA_FEHL_ART "../../tables/LEGACY_STAG/F_ELISA_FEHL_ART"
  click LEGACY_EDW.F_ELISA_AUFTRAGSABSCHLUSS "../../tables/LEGACY_EDW/F_ELISA_AUFTRAGSABSCHLUSS"
```

## Statements

The following statements create/modify this table:

<Util>MERGE</Util> inside [DWELISAAUFTRAB/snow_auftragsabschlussmeldung_n_edw.sas](../../Applications/DWELISAAUFTRAB/snow_auftragsabschlussmeldung_n_edw.sas):
```sql:line-numbers
update PRODUCT_LSP_LEGACY_PROD.LEGACY_EDW.F_ELISA_AUFTRAGSABSCHLUSS ziel
from PRODUCT_LSP_LEGACY_PROD.LEGACY_STAG.F_ELISA_AUFTRAGSABSCHLUSS quelle
set
ma_lag_id = quelle.ma_lag_id
, LAG_ID = quelle.LAG_ID
, nan_art_id = quelle.nan_art_id
, AKT_KZ = quelle.AKT_KZ
, LIEF_ID = quelle.LIEF_ID
, MA_ID = quelle.MA_ID
, BUCHUNGSDATUM = quelle.BUCHUNGSDATUM
, MHDATUM = quelle.MHDATUM
, AUFTRAGSABSCHLUSSMELDUNGV2_FULLC = quelle.AUFTRAGSABSCHLUSSMELDUNGV2_FULLC
, VORGANGSSCHLUESSEL = quelle.VORGANGSSCHLUESSEL
, MARKTNUMMER_BEREICH = quelle.MARKTNUMMER_BEREICH
, MARKTNUMMER_REGION = quelle.MARKTNUMMER_REGION
, MARKTNUMMER_ZAEHLNUMMER = quelle.MARKTNUMMER_ZAEHLNUMMER
, KOMMISSIONIERLAUFNUMMER = quelle.KOMMISSIONIERLAUFNUMMER
, KST8AUFTRAGNUMMER = quelle.KST8AUFTRAGNUMMER
, PLSTOREAUFTRAGSNUMMER = quelle.PLSTOREAUFTRAGSNUMMER
, LIEFERART = quelle.LIEFERART
, BUCHUNGSDATUM_DAY = quelle.BUCHUNGSDATUM_DAY
, BUCHUNGSDATUM_MONTH = quelle.BUCHUNGSDATUM_MONTH
, BUCHUNGSDATUM_YEAR = quelle.BUCHUNGSDATUM_YEAR
, BELEGDATUM_DAY = quelle.BELEGDATUM_DAY
, BELEGDATUM_MONTH = quelle.BELEGDATUM_MONTH
, BELEGDATUM_YEAR = quelle.BELEGDATUM_YEAR
, LHMKUERZEL = quelle.LHMKUERZEL
, LHMARTIKELNUMMER = quelle.LHMARTIKELNUMMER
, LHM_NAN_ART_ID = quelle.LHM_NAN_ART_ID
, AUFTRAGSMENGEINSTUECK = quelle.AUFTRAGSMENGEINSTUECK
, ISTKOMMMENGEINSTUECK = quelle.ISTKOMMMENGEINSTUECK
, SOLLKOMMMENGEINSTUECK = quelle.SOLLKOMMMENGEINSTUECK
, MENGEINGRAMM = quelle.MENGEINGRAMM
, KVGRUND = quelle.KVGRUND
, MHD_DAY = quelle.MHD_DAY
, MHD_MONTH = quelle.MHD_MONTH
, MHD_YEAR = quelle.MHD_YEAR
, URSPRUNGSLAND = quelle.URSPRUNGSLAND
, CHARGE = quelle.CHARGE
, LIEFERANTENNR = quelle.LIEFERANTENNR
, ZUSATZPOSITION = quelle.ZUSATZPOSITION
, SCHNITTGEWICHTINGRAMM = quelle.SCHNITTGEWICHTINGRAMM
, EINKAUFSPREIS = quelle.EINKAUFSPREIS
, DATEINAME = quelle.DATEINAME
, LFD_NR_ROHDAT = quelle.LFD_NR_ROHDAT
, GEBINDEKZ = quelle.GEBINDEKZ
, FORTLAUFENDENUMMER = quelle.FORTLAUFENDENUMMER
, GANGNUMMER = quelle.GANGNUMMER
, PLATZ = quelle.PLATZ
, FAKTNR = quelle.FAKTNR
, TEILKOMMID = quelle.TEILKOMMID
, REFERENZEN = quelle.REFERENZEN
, BETRIEBE = quelle.BETRIEBE
, MHD_TYPE = quelle.MHD_TYPE
, LAND_TYP = quelle.LAND_TYP
, GRAI = quelle.GRAI
, FEHLERSCHLUESSEL = quelle.FEHLERSCHLUESSEL
, RUECKMELDUNGID = QUELLE.RUECKMELDUNGID
, CHARGEID = QUELLE.CHARGEID
, STORNO_KENNZ = QUELLE.STORNO_KENNZ
, REFERENZ_NAN = QUELLE.REFERENZ_NAN
, REFERENZ_WAEINHEIT = QUELLE.REFERENZ_WAEINHEIT
, REFERENZ_NAN_ART_ID = QUELLE.REFERENZ_NAN_ART_ID
, VK_BTO = QUELLE.VK_BTO
, VK_NTO = QUELLE.VK_NTO
, VK_BEWERT_KZ = QUELLE.VK_BEWERT_KZ
, FMGRUND_STORNO = QUELLE.FMGRUND_STORNO
, PICKNAN = QUELLE.PICKNAN
, PICKEINHEIT = QUELLE.PICKEINHEIT
where
ziel.lagernummer = quelle.lagernummer and
ziel.belegnummer = quelle.belegnummer and
ziel.kal_tag_id = quelle.kal_tag_id and
ziel.wwident_bilanzstelle = quelle.wwident_bilanzstelle and
ziel.wwident_vertriebsbereich = quelle.wwident_vertriebsbereich and
ziel.wwident_filialnummer = quelle.wwident_filialnummer and
ziel.WANVE_ERWEITERUNGSZIFFER = quelle.WANVE_ERWEITERUNGSZIFFER and
ziel.WANVE_FORTLAUFENDENUMMER = quelle.WANVE_FORTLAUFENDENUMMER and
ziel.WANVE_GLOBALCOMPANYPREFIX = quelle.WANVE_GLOBALCOMPANYPREFIX and
ziel.WANVE_PRUEFZIFFER = quelle.WANVE_PRUEFZIFFER and
ziel.WENVE_ERWEITERUNGSZIFFER = quelle.WENVE_ERWEITERUNGSZIFFER and
ziel.WENVE_FORTLAUFENDENUMMER = quelle.WENVE_FORTLAUFENDENUMMER and
ziel.WENVE_GLOBALCOMPANYPREFIX = quelle.WENVE_GLOBALCOMPANYPREFIX and
ziel.WENVE_PRUEFZIFFER = quelle.WENVE_PRUEFZIFFER and
ziel.nan = quelle.nan and
ziel.WAEINHEIT = quelle.WAEINHEIT
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