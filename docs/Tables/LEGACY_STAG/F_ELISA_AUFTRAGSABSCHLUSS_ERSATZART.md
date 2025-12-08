# F_ELISA_AUFTRAGSABSCHLUSS_ERSATZART (Table)

## Table Description

**DWELISAAUFTRAB** is a comprehensive data processing application that handles order completion messages from the ELISA system. The application processes XML messages containing order completion data from pL-Store to ELISA, which are generated during commissioning when the last NVE (shipping unit) for an order is processed.

This specific table serves as an **intermediate staging table for replacement article processing** within the order completion workflow. It handles cases where original articles are replaced with substitute articles during order fulfillment. The table processes two main scenarios: complete article replacement (where original NAN is fully replaced) and partial replacement (where original article is partially served and partially substituted).

The application runs **four times daily** and follows a sequential job processing chain (DWDW6449 through DW013912) that includes XML file movement, data reading, transformation, price enrichment (both purchase and sales prices), database loading, and cleanup operations. The table specifically supports the **replacement article logic** by mapping reference NANs to original articles and adjusting order quantities accordingly to maintain data consistency with legacy ELVS provisioning systems.

Key features include **multi-level price evaluation**, **error handling with dedicated error datasets**, **metadata tracking**, and **comprehensive data validation**. The system processes commissioning quantities, handles cancellation positions, and maintains detailed audit trails for data lineage and troubleshooting purposes.

## Lineage / Impact

```mermaid
%%{init: {'flowchart': { 'nodeSpacing': 10, 'rankSpacing': 40, 'rankdir': 'TB' }}}%%

flowchart LR

  PRODUCT_SCC_PROD.LEGACY_STAG.F_ELISA_FEHL_ART["PRODUCT_SCC_PROD<br/>LEGACY_STAG.F_ELISA_FEHL_ART"] --> LEGACY_STAG.F_ELISA_AUFTRAGSABSCHLUSS_ERSATZART["LEGACY_STAG<br/>F_ELISA_AUFTRAGSABSCHLUSS_ERSATZART"]
  LEGACY_STAG.F_ELISA_AUFTRAGSABSCHLUSS_ERSATZART["LEGACY_STAG<br/>F_ELISA_AUFTRAGSABSCHLUSS_ERSATZART"] --> WK_AUFAB.F_ELISA_AUFTRAGSABSCHLUSS["WK_AUFAB<br/>F_ELISA_AUFTRAGSABSCHLUSS"]
  click PRODUCT_SCC_PROD.LEGACY_STAG.F_ELISA_FEHL_ART "../../tables/PRODUCT_SCC_PROD/LEGACY_STAG.F_ELISA_FEHL_ART"
  click LEGACY_STAG.F_ELISA_AUFTRAGSABSCHLUSS_ERSATZART "../../tables/LEGACY_STAG/F_ELISA_AUFTRAGSABSCHLUSS_ERSATZART"
  click LEGACY_STAG.F_ELISA_AUFTRAGSABSCHLUSS_ERSATZART "../../tables/LEGACY_STAG/F_ELISA_AUFTRAGSABSCHLUSS_ERSATZART"
  click WK_AUFAB.F_ELISA_AUFTRAGSABSCHLUSS "../../tables/WK_AUFAB/F_ELISA_AUFTRAGSABSCHLUSS"
```

## Statements

The following statements create/modify this table:

<Util>CREATE TABLE</Util> inside [DWELISAAUFTRAB/snow_auftragsabschlussmeldung_fa_mapping.sas](../../Applications/DWELISAAUFTRAB/snow_auftragsabschlussmeldung_fa_mapping.sas):
```sql:line-numbers
insert into PRODUCT_LSP_LEGACY_PROD.LEGACY_STAG.F_ELISA_AUFTRAGSABSCHLUSS_ERSATZART
select
t1.MA_LAG_ID,
t1.LAG_ID,
case when t1.REFERENZ_NAN is not null then t1.REFERENZ_NAN_ART_ID else t1.NAN_ART_ID end,
t1.AKT_KZ,
t1.LIEF_ID,
t1.MA_ID,
t1.KAL_TAG_ID,
t1.BUCHUNGSDATUM,
t1.MHDATUM,
t1.AUFTRAGSABSCHLUSSMELDUNGV2_FULLC,
t1.LAGERNUMMER,
t1.BELEGNUMMER,
t1.VORGANGSSCHLUESSEL,
t1.WWIDENT_BILANZSTELLE,
t1.WWIDENT_VERTRIEBSBEREICH,
t1.WWIDENT_FILIALNUMMER,
t1.MARKTNUMMER_BEREICH,
t1.MARKTNUMMER_REGION,
t1.MARKTNUMMER_ZAEHLNUMMER,
t1.KOMMISSIONIERLAUFNUMMER,
t1.KST8AUFTRAGNUMMER,
t1.PLSTOREAUFTRAGSNUMMER,
t1.LIEFERART,
t1.BUCHUNGSDATUM_DAY,
t1.BUCHUNGSDATUM_MONTH,
t1.BUCHUNGSDATUM_YEAR,
t1.BELEGDATUM_DAY,
t1.BELEGDATUM_MONTH,
t1.BELEGDATUM_YEAR,
t1.WANVE_ERWEITERUNGSZIFFER,
t1.WANVE_FORTLAUFENDENUMMER,
t1.WANVE_GLOBALCOMPANYPREFIX,
t1.WANVE_PRUEFZIFFER,
t1.LHMKUERZEL,
t1.LHMARTIKELNUMMER,
t1.LHM_NAN_ART_ID,
t1.NAN,
coalesce(t1.REFERENZ_WAEINHEIT, t1.WAEINHEIT),
t1.WENVE_ERWEITERUNGSZIFFER,
t1.WENVE_FORTLAUFENDENUMMER,
t1.WENVE_GLOBALCOMPANYPREFIX,
t1.WENVE_PRUEFZIFFER,
coalesce(t1.AUFTRAGSMENGEINSTUECK - t2.AUFTRAGSMENGEINSTUECK, t1.AUFTRAGSMENGEINSTUECK),
t1.ISTKOMMMENGEINSTUECK,
coalesce(t1.SOLLKOMMMENGEINSTUECK - t2.SOLLKOMMMENGEINSTUECK, t1.SOLLKOMMMENGEINSTUECK),
t1.MENGEINGRAMM,
t1.KVGRUND,
t1.MHD_DAY,
t1.MHD_MONTH,
t1.MHD_YEAR,
t1.URSPRUNGSLAND,
t1.CHARGE,
t1.LIEFERANTENNR,
t1.ZUSATZPOSITION,
t1.SCHNITTGEWICHTINGRAMM,
t1.EINKAUFSPREIS,
t1.DATEINAME,
t1.LFD_NR_ROHDAT,
t1.GEBINDEKZ,
t1.FORTLAUFENDENUMMER,
t1.GANGNUMMER,
t1.PLATZ,
t1.FAKTNR,
t1.TEILKOMMID,
t1.REFERENZEN,
t1.BETRIEBE,
t1.MHD_TYPE,
t1.LAND_TYP,
t1.GRAI,
t1.FEHLERSCHLUESSEL,
t1.RUECKMELDUNGID,
t1.CHARGEID,
t1.STORNO_KENNZ,
t1.REFERENZ_NAN,
t1.REFERENZ_WAEINHEIT,
t1.REFERENZ_NAN_ART_ID,
t2.auftragsmengeinstueck,
t2.sollkommmengeinstueck,
t1.VK_BTO,
t1.VK_NTO
from PRODUCT_LSP_LEGACY_PROD.LEGACY_EDW.F_ELISA_AUFTRAGSABSCHLUSS t1
left join PRODUCT_LSP_LEGACY_PROD.LEGACY_EDW.F_ELISA_AUFTRAGSABSCHLUSS t2
on t1.ma_lag_id=t2.ma_lag_id
and t1.ma_id=t2.ma_id
and t1.kal_tag_id=t2.kal_tag_id
and t1.belegnummer=t2.belegnummer
and t1.nan_art_id=t2.referenz_nan_art_id
where t1.kal_tag_id >= dateadd('DAY', -21, current_date)
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