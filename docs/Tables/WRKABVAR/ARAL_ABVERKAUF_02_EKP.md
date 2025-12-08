# ARAL_ABVERKAUF_02_EKP (Table)

## Table Description

**DWABVARAL** is a data warehouse application that processes **Aral fuel station sales data** (Abverkaufsdaten) within a comprehensive ETL pipeline.

The application handles the complete lifecycle of Aral sales transactions, from raw data ingestion to final data warehouse storage. It processes sales files containing transaction details like EAN codes, quantities, prices, VAT information, and station identifiers. The system includes **data validation**, **EK pricing evaluation** (purchase price valuation), **article mapping** via NAN/EAN lookups, and **market assignment** through GLN matching.

Key processing steps include file movement from staging areas, data decompression, transaction parsing with control record validation, **purchase price calculations** using the bewertg_wgpek macro, and preparation for downstream systems. The application maintains comprehensive **audit trails** and **error handling** with specific contact points for data quality issues.

This table represents the **EK-evaluated sales data** after purchase price valuation has been applied, containing enriched transaction records ready for final staging and data warehouse loading into Snowflake EDW tables.

## Lineage / Impact

```mermaid
%%{init: {'flowchart': { 'nodeSpacing': 10, 'rankSpacing': 40, 'rankdir': 'TB' }}}%%

flowchart LR

  WRKABVAR.ARAL_ABVERKAUF_02_EKP["WRKABVAR<br/>ARAL_ABVERKAUF_02_EKP"] --> WRKABVAR.ARAL_ABVERKAUF_01["WRKABVAR<br/>ARAL_ABVERKAUF_01"]
  WRKABVAR.ARAL_ABVERKAUF_02_EKP["WRKABVAR<br/>ARAL_ABVERKAUF_02_EKP"] --> WRKABVAR.ARAL_ABVERKAUF_02_EKP["WRKABVAR<br/>ARAL_ABVERKAUF_02_EKP"]
  WRKABVAR.ARAL_ABVERKAUF_02_EKP["WRKABVAR<br/>ARAL_ABVERKAUF_02_EKP"] --> WRKABVAR.ARAL_ABVERKAUF_02["WRKABVAR<br/>ARAL_ABVERKAUF_02"]
  WRKABVAR.ARAL_ABVERKAUF_02_EKP["WRKABVAR<br/>ARAL_ABVERKAUF_02_EKP"] --> WKBONARA.F_SC_ABV_ARAL["WKBONARA<br/>F_SC_ABV_ARAL"]
  WRKABVAR.ARAL_ABVERKAUF_02_EKP["WRKABVAR<br/>ARAL_ABVERKAUF_02_EKP"] --> WRKABVAR.ARAL_ABVERKAUF_FEHLER["WRKABVAR<br/>ARAL_ABVERKAUF_FEHLER"]
  WRKABVAR.ARAL_ABVERKAUF_02_EKP["WRKABVAR<br/>ARAL_ABVERKAUF_02_EKP"] --> WRKABVAR.PROT_ARAL_ABVERKAUF["WRKABVAR<br/>PROT_ARAL_ABVERKAUF"]
  WRKABVAR.ARAL_ABVERKAUF_02_EKP["WRKABVAR<br/>ARAL_ABVERKAUF_02_EKP"] --> WRKABVAR.ARAL_ABVERKAUF["WRKABVAR<br/>ARAL_ABVERKAUF"]
  WRKABVAR.ARAL_ABVERKAUF_02_EKP["WRKABVAR<br/>ARAL_ABVERKAUF_02_EKP"] --> BEREIT_F.F_SC_ABV_ARAL["BEREIT_F<br/>F_SC_ABV_ARAL"]
  click WRKABVAR.ARAL_ABVERKAUF_02_EKP "../../tables/WRKABVAR/ARAL_ABVERKAUF_02_EKP"
  click WRKABVAR.ARAL_ABVERKAUF_02_EKP "../../tables/WRKABVAR/ARAL_ABVERKAUF_02_EKP"
  click WRKABVAR.ARAL_ABVERKAUF_02_EKP "../../tables/WRKABVAR/ARAL_ABVERKAUF_02_EKP"
  click WRKABVAR.ARAL_ABVERKAUF_02_EKP "../../tables/WRKABVAR/ARAL_ABVERKAUF_02_EKP"
  click WRKABVAR.ARAL_ABVERKAUF_02_EKP "../../tables/WRKABVAR/ARAL_ABVERKAUF_02_EKP"
  click WRKABVAR.ARAL_ABVERKAUF_02_EKP "../../tables/WRKABVAR/ARAL_ABVERKAUF_02_EKP"
  click WRKABVAR.ARAL_ABVERKAUF_02_EKP "../../tables/WRKABVAR/ARAL_ABVERKAUF_02_EKP"
  click WRKABVAR.ARAL_ABVERKAUF_02_EKP "../../tables/WRKABVAR/ARAL_ABVERKAUF_02_EKP"
  click WRKABVAR.ARAL_ABVERKAUF_01 "../../tables/WRKABVAR/ARAL_ABVERKAUF_01"
  click WRKABVAR.ARAL_ABVERKAUF_02_EKP "../../tables/WRKABVAR/ARAL_ABVERKAUF_02_EKP"
  click WRKABVAR.ARAL_ABVERKAUF_02 "../../tables/WRKABVAR/ARAL_ABVERKAUF_02"
  click WKBONARA.F_SC_ABV_ARAL "../../tables/WKBONARA/F_SC_ABV_ARAL"
  click WRKABVAR.ARAL_ABVERKAUF_FEHLER "../../tables/WRKABVAR/ARAL_ABVERKAUF_FEHLER"
  click WRKABVAR.PROT_ARAL_ABVERKAUF "../../tables/WRKABVAR/PROT_ARAL_ABVERKAUF"
  click WRKABVAR.ARAL_ABVERKAUF "../../tables/WRKABVAR/ARAL_ABVERKAUF"
  click BEREIT_F.F_SC_ABV_ARAL "../../tables/BEREIT_F/F_SC_ABV_ARAL"
```

## Statements

The following statements create/modify this table:

<Util>CREATE TABLE</Util> inside [DWABVARAL/abv_aral_bew_ekp.sas](../../Applications/DWABVARAL/abv_aral_bew_ekp.sas):
```sql:line-numbers
CREATE TABLE WRKABVAR.ARAL_ABVERKAUF_02_EKP AS
SELECT A.*, COALESCE(B.MA_ID,1000000000) AS MA_ID
FROM WRKABVAR.ARAL_ABVERKAUF A
LEFT JOIN bereit_d.D_MA B
ON A.ARAL_PART_NR = B.ILN_WARE
AND A.KAL_TAG_ID between B.MA_GUELT_VON and B.MA_GUELT_BIS
```

## References

The table ARAL_ABVERKAUF_02_EKP is used in the following SAS programs:

| Application | SAS Program |
|---|---|
| [DWABVARAL](../../Applications/DWABVARAL/) | [abv_aral_bew_ekp.sas](../../Applications/DWABVARAL/abv_aral_bew_ekp.sas) |
| [DWABVARAL](../../Applications/DWABVARAL/) | [abv_aral_bereit.sas](../../Applications/DWABVARAL/abv_aral_bereit.sas) |
| [DWABVARAL](../../Applications/DWABVARAL/) | [snow_abv_aral_einlesen.sas](../../Applications/DWABVARAL/snow_abv_aral_einlesen.sas) |
## Table Schema

| Field Name | Datatype | Precision | Scale | Is Nullable | Constraint | Description |
|---|---|---|---|---|---|---|
| ARAL_SATZ_ART | VARCHAR | 1 | 0 | TRUE |   | Satzart I = bewegungssatz T = Kontrollsatz |
| ARAL_PART_NR | VARCHAR | 13 | 0 | TRUE |   | Tankstellen GLN mit zwei führenden Nummern |
| ARAL_WAEHRUNG | VARCHAR | 5 | 0 | TRUE |   | Währungskennzeichen |
| ARAL_VERKAUF_DATUM | DATE | 0 | 0 | TRUE |   | Verkaufsdatum JJJJMMTT |
| ARAL_VERKAUF_ZEIT | TIME | 0 | 0 | TRUE |   | Verkaufszeit |
| ARAL_VERKAUF_ORT | INTEGER | 2 | 0 | TRUE |   | Verkaufsort |
| ARAL_BELEG | INTEGER | 6 | 0 | TRUE |   | Kassen-Belegnummer |
| ARAL_MWST_TYP | INTEGER | 1 | 0 | TRUE |   | MWST_TYP 1=Normal 2=Ermäßigt |
| ARAL_EAN | VARCHAR | 18 | 0 | TRUE |   | EAN |
| ARAL_MENGE | DECIMAL | 9 | 2 | TRUE |   | Menge |
| ARAL_VK_MNG_EINH | VARCHAR | 1 | 0 | TRUE |   | Verkaufsmengeneinheit als 1 |
| ARAL_BMENGE | DECIMAL | 9 | 2 | TRUE |   | Menge in SAP-Basismengeneinheit |
| ARAL_MNG_EINH | VARCHAR | 3 | 0 | TRUE |   | Basismengeneinheit |
| ARAL_MATNR | VARCHAR | 18 | 0 | TRUE |   | Artikelnummer in SAP |
| ARAL_NAN | VARCHAR | 7 | 0 | TRUE |   | REWE-Artikelnummer |
| ARAL_BETRAG | DECIMAL | 11 | 2 | TRUE |   | Verkaufsbetrag |
| ARAL_EK_PREIS | DECIMAL | 11 | 3 | TRUE |   | Einkaufspreis |
| ARAL_VK_PREIS | DECIMAL | 11 | 3 | TRUE |   | Verkaufspreis |
| ARAL_GES_BETRAG | DECIMAL | 11 | 2 | TRUE |   | Gesamtbetrag |
| ARAL_KRED_KL | VARCHAR | 4 | 0 | TRUE |   | Kreditklasse - Tabelle Kartenart |
| ARAL_VK_BETRAG_NTO | DECIMAL | 11 | 2 | TRUE |   | Verkaufsbetrag ohne MWST |
| ARAL_GES_BETRAG_NTO | DECIMAL | 11 | 2 | TRUE |   | Gesamtbetrag ohne Steuern |
| LFD_NR_ROHDATEI | INTEGER | 10 | 0 | TRUE |   | Laufende Nummer der Rohdatei |
| MA_ID | INTEGER | 10 | 0 | TRUE |   | Markt ID |
| KAL_TAG_ID | DATE | 0 | 0 | TRUE |   | Kalender Tag ID |
| LFD_NR_LOAD | INTEGER | 10 | 0 | TRUE |   | Laufende Nummer des Ladevorgangs |
| EAN_ART_ID | INTEGER | 14 | 0 | TRUE |   | EAN Artikel ID |
| NAN_ART_ID | INTEGER | 9 | 0 | TRUE |   | NAN Artikel ID |
| AKT_KZ | VARCHAR | 1 | 0 | TRUE |   | Aktualitätskennzeichen |
| STAT_KZ_ID | INTEGER | 5 | 0 | TRUE |   | Status Kennzeichen ID |
| UMS_ART_ID | INTEGER | 5 | 0 | TRUE |   | Umsatz Art ID |
| FREMD_ARTIKEL_TYP_ID | INTEGER | 5 | 0 | TRUE |   | Fremd Artikel Typ ID |
| FREMD_ARTIKEL_NR | VARCHAR | 20 | 0 | TRUE |   | Fremd Artikel Nummer |
| FREMD_MARKT_TYP_ID | INTEGER | 5 | 0 | TRUE |   | Fremd Markt Typ ID |
| FREMD_MARKT_NR | VARCHAR | 14 | 0 | TRUE |   | Fremd Markt Nummer |
| KONZ_NR | INTEGER | 9 | 0 | TRUE |   | Konzern Nummer |
| VLT_ID | VARCHAR | 3 | 0 | TRUE |   | Valuta ID |
| ABV_EAN | VARCHAR | 14 | 0 | TRUE |   | Abverkauf EAN |
| ANZ_BON | INTEGER | 9 | 0 | TRUE |   | Anzahl Bons |
| ANZ_KUNDEN | INTEGER | 9 | 0 | TRUE |   | Anzahl Kunden |
| QUELLE_ID | INTEGER | 5 | 0 | TRUE |   | Quelle ID |
| ABV_BEWERT_ID | INTEGER | 5 | 0 | TRUE |   | Abverkauf Bewertung ID |
| ABT_NR | INTEGER | 5 | 0 | TRUE |   | Abteilung Nummer |
| HIST_FOKUS_GRP | INTEGER | 5 | 0 | TRUE |   | Historische Fokus Gruppe |
| HIST_FOKUS_SORT | INTEGER | 5 | 0 | TRUE |   | Historische Fokus Sortierung |
| HIST_ABT_GRP | INTEGER | 5 | 0 | TRUE |   | Historische Abteilung Gruppe |
| HIST_ABT_NR | INTEGER | 5 | 0 | TRUE |   | Historische Abteilung Nummer |
| AKTION_NR | INTEGER | 11 | 0 | TRUE |   | Aktion Nummer |
| ARAL_MWST_KZ | VARCHAR | 1 | 0 | TRUE |   | ARAL MWST Kennzeichen |
| HIST_MWST_ID | INTEGER | 5 | 0 | TRUE |   | Historische MWST ID |
| ABV_W_NN_DEK | DECIMAL | 13 | 2 | TRUE |   | Abverkauf Wert NN Deckung |
| ABV_W_WGP_DEK | DECIMAL | 13 | 2 | TRUE |   | Abverkauf Wert WGP Deckung |
| ABV_W_NN_DEK_KORR | DECIMAL | 13 | 2 | TRUE |   | Abverkauf Wert NN Deckung Korrektur |
| ABV_W_WGP_DEK_KORR | DECIMAL | 13 | 2 | TRUE |   | Abverkauf Wert WGP Deckung Korrektur |
| ABV_W_BTO_VR | DECIMAL | 13 | 2 | TRUE |   | Abverkauf Wert Brutto Verkauf |
| ABV_W_BTO_FW | DECIMAL | 13 | 2 | TRUE |   | Abverkauf Wert Brutto Fremdwährung |
| ABV_MG | DECIMAL | 16 | 4 | TRUE |   | Abverkauf Menge |
| MF_FLAG | VARCHAR | 3 | 0 | TRUE |   | MF Flag |
| ABV_W_RKP_EK | DECIMAL | 13 | 2 | TRUE |   | Abverkauf Wert RKP Einkauf |
| ABV_W_NN_EK | DECIMAL | 13 | 2 | TRUE |   | Abverkauf Wert NN Einkauf |
| ABV_W_BEW_EK | DECIMAL | 13 | 2 | TRUE |   | Abverkauf Wert Bewertung Einkauf |
| ABV_W_WGP_EK | DECIMAL | 13 | 2 | TRUE |   | Abverkauf Wert WGP Einkauf |
| ABV_W_MARKT_EK | DECIMAL | 13 | 2 | TRUE |   | Abverkauf Wert Markt Einkauf |
| ABV_W_NTO | DECIMAL | 13 | 2 | TRUE |   | Abverkauf Wert Netto |
| ABV_W_BTO | DECIMAL | 13 | 2 | TRUE |   | Abverkauf Wert Brutto |