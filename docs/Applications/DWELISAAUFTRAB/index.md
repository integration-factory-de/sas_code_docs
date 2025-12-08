# DWELISAAUFTRAB (Application)

:::danger Complexity Score
 **XL**
:::

## Application Description

**DWELISAAUFTRAB** is a comprehensive data processing application that handles **order completion messages** (Auftragsabschlussmeldung) from the ELISA system. This application processes XML-based messages containing detailed information about completed orders from the pL-Store warehouse management system.

The application manages the complete data flow from **raw XML file ingestion** to **final data warehouse storage**. It processes order completion notifications that include commissioned quantities, order details, and article information across multiple hierarchical levels (orders containing 1-n WaNVE, each WaNVE containing 1-n articles).

**Key Processing Steps:**
- **Data Movement**: Transfers XML files from DFUE directories to processing areas
- **XML Parsing**: Reads and transforms complex XML structures using specialized mapping files
- **Data Transformation**: Applies business logic including master data lookups, price calculations (both purchase and sales prices), and format conversions
- **Quality Control**: Handles error records, duplicate detection, and data validation
- **Database Loading**: Loads processed data into staging and enterprise data warehouse tables
- **Archival**: Secures raw data files and maintains processing metadata

The application supports **multiple XML message versions** and includes sophisticated **substitute article handling** logic. It processes data through a **sequential job chain** (DWDW6449 ¿ DWDW6451 ¿ DWDW6456 ¿ DW002029 ¿ DW002099 ¿ DW013907-DW013912) ensuring data consistency and enabling restart capabilities.

**Target Systems**: The processed data feeds into both legacy ELVS structures and modern Snowflake-based data warehouse environments, supporting supply chain analytics and business intelligence reporting.

## List of SAS programs

| SAS Program | Description |
|---|---|
| [auftragsabschlussmeldung_ekp.sas](./auftragsabschlussmeldung_ekp.sas.md) | tbd |
| [snow_auftragsabschlussmeldung_fa_n_edw.sas](./snow_auftragsabschlussmeldung_fa_n_edw.sas.md) | tbd |
| [snow_auftragsabschlussmeldung_fa_mapping.sas](./snow_auftragsabschlussmeldung_fa_mapping.sas.md) | tbd |
| [auftragsabschlussmeldung_einlesen.sas](./auftragsabschlussmeldung_einlesen.sas.md) | tbd |
| [auftragsabschlussmeldung_transfrm.sas](./auftragsabschlussmeldung_transfrm.sas.md) | tbd |
| [auftragsabschlussmeldung_metadaten.sas](./auftragsabschlussmeldung_metadaten.sas.md) | tbd |
| [auftragsabschlussmeldung_vkp.sas](./auftragsabschlussmeldung_vkp.sas.md) | tbd |
| [snow_auftragsabschlussmeldung_laden.sas](./snow_auftragsabschlussmeldung_laden.sas.md) | tbd |


## Table Lineage

```mermaid
%%{init: {'flowchart': { 'nodeSpacing': 10, 'rankSpacing': 40, 'rankdir': 'TB' }}}%%

flowchart LR

  PRODUCT_SCC_PROD.LEGACY_STAG.F_ELISA_FEHL_ART["PRODUCT_SCC_PROD<br/>LEGACY_STAG.F_ELISA_FEHL_ART"] --> LEGACY_STAG.F_ELISA_AUFTRAGSABSCHLUSS_ERSATZART["LEGACY_STAG<br/>F_ELISA_AUFTRAGSABSCHLUSS_ERSATZART"]
  WK_AUFAB.AUFAB_01["WK_AUFAB<br/>AUFAB_01"] --> WK_AUFAB.AUFAB_02["WK_AUFAB<br/>AUFAB_02"]
  WK_AUFAB.AUFAB_01["WK_AUFAB<br/>AUFAB_01"] --> WK_AUFAB.F_ELISA_AUFTRAGSABSCHLUSS0["WK_AUFAB<br/>F_ELISA_AUFTRAGSABSCHLUSS0"]
  EDW.F_ELISA_KDAUFTRAGAEND["EDW<br/>F_ELISA_KDAUFTRAGAEND"] --> WK_AUFAB.F_ELISA_AUFTRAGSABSCHLUSS["WK_AUFAB<br/>F_ELISA_AUFTRAGSABSCHLUSS"]
  ERROR.F_ELISA_AUFTRAGSABSCHLUSS_ERR["ERROR<br/>F_ELISA_AUFTRAGSABSCHLUSS_ERR"] --> WK_AUFAB.AUFAB_02["WK_AUFAB<br/>AUFAB_02"]
  WK_AUFAB.F_ELISA_AUFTRAGSABSCHLUSS0EKP["WK_AUFAB<br/>F_ELISA_AUFTRAGSABSCHLUSS0EKP"] --> WK_AUFAB.F_ELISA_AUFTRAGSABSCHLUSS["WK_AUFAB<br/>F_ELISA_AUFTRAGSABSCHLUSS"]
  WK_AUFAB.AUFAB_02["WK_AUFAB<br/>AUFAB_02"] --> WK_AUFAB.AUFAB_ERR["WK_AUFAB<br/>AUFAB_ERR"]
  DWH.LU_D_NAN_ART["DWH<br/>LU_D_NAN_ART"] --> WK_AUFAB.F_ELISA_AUFTRAGSABSCHLUSS["WK_AUFAB<br/>F_ELISA_AUFTRAGSABSCHLUSS"]
  WK_AUFAB.AUFAB_02A["WK_AUFAB<br/>AUFAB_02A"] --> ERROR.F_ELISA_AUFTRAGSABSCHLUSS_ERR["ERROR<br/>F_ELISA_AUFTRAGSABSCHLUSS_ERR"]
  LEGACY_STAG.F_ELISA_FEHL_ART["LEGACY_STAG<br/>F_ELISA_FEHL_ART"] --> LEGACY_STAG.F_ELISA_FEHL_ART["LEGACY_STAG<br/>F_ELISA_FEHL_ART"]
  LEGACY_STAG.F_ELISA_FEHL_ART["LEGACY_STAG<br/>F_ELISA_FEHL_ART"] --> LEGACY_DMA.F_ELISA_FEHL_ART["LEGACY_DMA<br/>F_ELISA_FEHL_ART"]
  LEGACY_STAG.F_ELISA_AUFTRAGSABSCHLUSS_ERSATZART["LEGACY_STAG<br/>F_ELISA_AUFTRAGSABSCHLUSS_ERSATZART"] --> WK_AUFAB.F_ELISA_AUFTRAGSABSCHLUSS["WK_AUFAB<br/>F_ELISA_AUFTRAGSABSCHLUSS"]
  WK_AUFAB.XML_DIRLIST["WK_AUFAB<br/>XML_DIRLIST"] --> WK_AUFAB.AUFAB_01["WK_AUFAB<br/>AUFAB_01"]
  WK_AUFAB.AUFAB_01["WK_AUFAB<br/>AUFAB_01"] --> WK_AUFAB.PROT_F_ELISA_AUFTRAGSABSCHLUSS["WK_AUFAB<br/>PROT_F_ELISA_AUFTRAGSABSCHLUSS"]
  ERROR.F_ELISA_AUFTRAGSABSCHLUSS_ERR["ERROR<br/>F_ELISA_AUFTRAGSABSCHLUSS_ERR"] --> WK_AUFAB.AUFAB_02A["WK_AUFAB<br/>AUFAB_02A"]
  WK_AUFAB.PROT_F_ELISA_AUFTRAGSABSCHLUSS["WK_AUFAB<br/>PROT_F_ELISA_AUFTRAGSABSCHLUSS"] --> METADATN.PROT_F_ELISA_AUFTRAGSABSCHLUSS["METADATN<br/>PROT_F_ELISA_AUFTRAGSABSCHLUSS"]
  WK_AUFAB.F_ELISA_AUFTRAGSABSCHLUSS["WK_AUFAB<br/>F_ELISA_AUFTRAGSABSCHLUSS"] --> LEGACY_STAG.F_ELISA_AUFTRAGSABSCHLUSS["LEGACY_STAG<br/>F_ELISA_AUFTRAGSABSCHLUSS"]
  ERROR.F_ELISA_AUFTRAGSABSCHLUSS_ERR["ERROR<br/>F_ELISA_AUFTRAGSABSCHLUSS_ERR"] --> WK_AUFAB.F_ELISA_AUFTRAGSABSCHLUSS0["WK_AUFAB<br/>F_ELISA_AUFTRAGSABSCHLUSS0"]
  LEGACY_STAG.F_ELISA_FEHL_ART["LEGACY_STAG<br/>F_ELISA_FEHL_ART"] --> LEGACY_EDW.F_ELISA_AUFTRAGSABSCHLUSS["LEGACY_EDW<br/>F_ELISA_AUFTRAGSABSCHLUSS"]
  WK_AUFAB.AUFAB_01["WK_AUFAB<br/>AUFAB_01"] --> WK_AUFAB.AUFAB_02A["WK_AUFAB<br/>AUFAB_02A"]
  WK_AUFAB.F_ELISA_AUFTRAGSABSCHLUSS["WK_AUFAB<br/>F_ELISA_AUFTRAGSABSCHLUSS"] --> WK_AUFAB.F_ELISA_AUFTRAGSABSCHLUSS0EKP["WK_AUFAB<br/>F_ELISA_AUFTRAGSABSCHLUSS0EKP"]
  DWH.LU_D_MA_HPT_ABT["DWH<br/>LU_D_MA_HPT_ABT"] --> WK_AUFAB.F_ELISA_AUFTRAGSABSCHLUSS["WK_AUFAB<br/>F_ELISA_AUFTRAGSABSCHLUSS"]
  WK_AUFAB.F_ELISA_AUFTRAGSABSCHLUSS["WK_AUFAB<br/>F_ELISA_AUFTRAGSABSCHLUSS"] --> WK_AUFAB.PROT_F_ELISA_AUFTRAGSABSCHLUSS["WK_AUFAB<br/>PROT_F_ELISA_AUFTRAGSABSCHLUSS"]
  WK_AUFAB.F_ELISA_AUFTRAGSABSCHLUSS0["WK_AUFAB<br/>F_ELISA_AUFTRAGSABSCHLUSS0"] --> WK_AUFAB.F_ELISA_AUFTRAGSABSCHLUSS0EKP["WK_AUFAB<br/>F_ELISA_AUFTRAGSABSCHLUSS0EKP"]
  click PRODUCT_SCC_PROD.LEGACY_STAG.F_ELISA_FEHL_ART "../../tables/PRODUCT_SCC_PROD/LEGACY_STAG.F_ELISA_FEHL_ART"
  click WK_AUFAB.AUFAB_01 "../../tables/WK_AUFAB/AUFAB_01"
  click WK_AUFAB.AUFAB_01 "../../tables/WK_AUFAB/AUFAB_01"
  click EDW.F_ELISA_KDAUFTRAGAEND "../../tables/EDW/F_ELISA_KDAUFTRAGAEND"
  click ERROR.F_ELISA_AUFTRAGSABSCHLUSS_ERR "../../tables/ERROR/F_ELISA_AUFTRAGSABSCHLUSS_ERR"
  click WK_AUFAB.F_ELISA_AUFTRAGSABSCHLUSS0EKP "../../tables/WK_AUFAB/F_ELISA_AUFTRAGSABSCHLUSS0EKP"
  click WK_AUFAB.AUFAB_02 "../../tables/WK_AUFAB/AUFAB_02"
  click DWH.LU_D_NAN_ART "../../tables/DWH/LU_D_NAN_ART"
  click WK_AUFAB.AUFAB_02A "../../tables/WK_AUFAB/AUFAB_02A"
  click LEGACY_STAG.F_ELISA_FEHL_ART "../../tables/LEGACY_STAG/F_ELISA_FEHL_ART"
  click LEGACY_STAG.F_ELISA_FEHL_ART "../../tables/LEGACY_STAG/F_ELISA_FEHL_ART"
  click LEGACY_STAG.F_ELISA_AUFTRAGSABSCHLUSS_ERSATZART "../../tables/LEGACY_STAG/F_ELISA_AUFTRAGSABSCHLUSS_ERSATZART"
  click WK_AUFAB.XML_DIRLIST "../../tables/WK_AUFAB/XML_DIRLIST"
  click WK_AUFAB.AUFAB_01 "../../tables/WK_AUFAB/AUFAB_01"
  click ERROR.F_ELISA_AUFTRAGSABSCHLUSS_ERR "../../tables/ERROR/F_ELISA_AUFTRAGSABSCHLUSS_ERR"
  click WK_AUFAB.PROT_F_ELISA_AUFTRAGSABSCHLUSS "../../tables/WK_AUFAB/PROT_F_ELISA_AUFTRAGSABSCHLUSS"
  click WK_AUFAB.F_ELISA_AUFTRAGSABSCHLUSS "../../tables/WK_AUFAB/F_ELISA_AUFTRAGSABSCHLUSS"
  click ERROR.F_ELISA_AUFTRAGSABSCHLUSS_ERR "../../tables/ERROR/F_ELISA_AUFTRAGSABSCHLUSS_ERR"
  click LEGACY_STAG.F_ELISA_FEHL_ART "../../tables/LEGACY_STAG/F_ELISA_FEHL_ART"
  click WK_AUFAB.AUFAB_01 "../../tables/WK_AUFAB/AUFAB_01"
  click WK_AUFAB.F_ELISA_AUFTRAGSABSCHLUSS "../../tables/WK_AUFAB/F_ELISA_AUFTRAGSABSCHLUSS"
  click DWH.LU_D_MA_HPT_ABT "../../tables/DWH/LU_D_MA_HPT_ABT"
  click WK_AUFAB.F_ELISA_AUFTRAGSABSCHLUSS "../../tables/WK_AUFAB/F_ELISA_AUFTRAGSABSCHLUSS"
  click WK_AUFAB.F_ELISA_AUFTRAGSABSCHLUSS0 "../../tables/WK_AUFAB/F_ELISA_AUFTRAGSABSCHLUSS0"
  click LEGACY_STAG.F_ELISA_AUFTRAGSABSCHLUSS_ERSATZART "../../tables/LEGACY_STAG/F_ELISA_AUFTRAGSABSCHLUSS_ERSATZART"
  click WK_AUFAB.AUFAB_02 "../../tables/WK_AUFAB/AUFAB_02"
  click WK_AUFAB.F_ELISA_AUFTRAGSABSCHLUSS0 "../../tables/WK_AUFAB/F_ELISA_AUFTRAGSABSCHLUSS0"
  click WK_AUFAB.F_ELISA_AUFTRAGSABSCHLUSS "../../tables/WK_AUFAB/F_ELISA_AUFTRAGSABSCHLUSS"
  click WK_AUFAB.AUFAB_02 "../../tables/WK_AUFAB/AUFAB_02"
  click WK_AUFAB.F_ELISA_AUFTRAGSABSCHLUSS "../../tables/WK_AUFAB/F_ELISA_AUFTRAGSABSCHLUSS"
  click WK_AUFAB.AUFAB_ERR "../../tables/WK_AUFAB/AUFAB_ERR"
  click WK_AUFAB.F_ELISA_AUFTRAGSABSCHLUSS "../../tables/WK_AUFAB/F_ELISA_AUFTRAGSABSCHLUSS"
  click ERROR.F_ELISA_AUFTRAGSABSCHLUSS_ERR "../../tables/ERROR/F_ELISA_AUFTRAGSABSCHLUSS_ERR"
  click LEGACY_STAG.F_ELISA_FEHL_ART "../../tables/LEGACY_STAG/F_ELISA_FEHL_ART"
  click LEGACY_DMA.F_ELISA_FEHL_ART "../../tables/LEGACY_DMA/F_ELISA_FEHL_ART"
  click WK_AUFAB.F_ELISA_AUFTRAGSABSCHLUSS "../../tables/WK_AUFAB/F_ELISA_AUFTRAGSABSCHLUSS"
  click WK_AUFAB.AUFAB_01 "../../tables/WK_AUFAB/AUFAB_01"
  click WK_AUFAB.PROT_F_ELISA_AUFTRAGSABSCHLUSS "../../tables/WK_AUFAB/PROT_F_ELISA_AUFTRAGSABSCHLUSS"
  click WK_AUFAB.AUFAB_02A "../../tables/WK_AUFAB/AUFAB_02A"
  click WK_AUFAB.F_ELISA_AUFTRAGSABSCHLUSS "../../tables/WK_AUFAB/F_ELISA_AUFTRAGSABSCHLUSS"
  click METADATN.PROT_F_ELISA_AUFTRAGSABSCHLUSS "../../tables/METADATN/PROT_F_ELISA_AUFTRAGSABSCHLUSS"
  click LEGACY_STAG.F_ELISA_AUFTRAGSABSCHLUSS "../../tables/LEGACY_STAG/F_ELISA_AUFTRAGSABSCHLUSS"
  click WK_AUFAB.XML_DIRLIST "../../tables/WK_AUFAB/XML_DIRLIST"
  click WK_AUFAB.F_ELISA_AUFTRAGSABSCHLUSS0 "../../tables/WK_AUFAB/F_ELISA_AUFTRAGSABSCHLUSS0"
  click WK_AUFAB.PROT_F_ELISA_AUFTRAGSABSCHLUSS "../../tables/WK_AUFAB/PROT_F_ELISA_AUFTRAGSABSCHLUSS"
  click LEGACY_EDW.F_ELISA_AUFTRAGSABSCHLUSS "../../tables/LEGACY_EDW/F_ELISA_AUFTRAGSABSCHLUSS"
  click WK_AUFAB.AUFAB_01 "../../tables/WK_AUFAB/AUFAB_01"
  click WK_AUFAB.AUFAB_02A "../../tables/WK_AUFAB/AUFAB_02A"
  click WK_AUFAB.F_ELISA_AUFTRAGSABSCHLUSS0EKP "../../tables/WK_AUFAB/F_ELISA_AUFTRAGSABSCHLUSS0EKP"
  click WK_AUFAB.F_ELISA_AUFTRAGSABSCHLUSS "../../tables/WK_AUFAB/F_ELISA_AUFTRAGSABSCHLUSS"
  click WK_AUFAB.PROT_F_ELISA_AUFTRAGSABSCHLUSS "../../tables/WK_AUFAB/PROT_F_ELISA_AUFTRAGSABSCHLUSS"
  click WK_AUFAB.F_ELISA_AUFTRAGSABSCHLUSS0EKP "../../tables/WK_AUFAB/F_ELISA_AUFTRAGSABSCHLUSS0EKP"
```
