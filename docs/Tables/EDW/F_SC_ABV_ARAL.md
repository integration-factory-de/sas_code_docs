# F_SC_ABV_ARAL (Table)

## Table Description

The **DWABVARAL** application processes **Aral sales transaction data** for the enterprise data warehouse. This fact table stores detailed point-of-sale transactions from Aral gas stations, capturing comprehensive sales information including product details, quantities, prices, and customer payment methods.

The application handles the complete **ETL pipeline** for Aral sales data: moving raw files from staging directories, unzipping compressed data files, reading and validating transaction records, performing data quality checks, and enriching records with master data references. Key processing includes mapping EAN codes to internal article IDs, associating transactions with market locations, and calculating various pricing metrics.

The table supports **retail analytics and reporting** by providing granular transaction-level data with standardized formats and enriched attributes. It includes both original Aral-specific fields and harmonized enterprise fields for integration with broader retail data models. The data flows through staging areas before final loading into the enterprise data warehouse, with comprehensive error handling and data validation throughout the process.

## Lineage / Impact

```mermaid
%%{init: {'flowchart': { 'nodeSpacing': 10, 'rankSpacing': 40, 'rankdir': 'TB' }}}%%

flowchart LR

  STAG.F_SC_ABV_ARAL["STAG<br/>F_SC_ABV_ARAL"] --> EDW.F_SC_ABV_ARAL["EDW<br/>F_SC_ABV_ARAL"]
  EDW.F_SC_ABV_ARAL["EDW<br/>F_SC_ABV_ARAL"] --> DMA.LU_D_ARAL_EAN["DMA<br/>LU_D_ARAL_EAN"]
  EDW.F_SC_ABV_ARAL["EDW<br/>F_SC_ABV_ARAL"] --> DMA.H_ARAL_EAN_NAN["DMA<br/>H_ARAL_EAN_NAN"]
  BEREIT_F.F_SC_ABV_ARAL["BEREIT_F<br/>F_SC_ABV_ARAL"] --> EDW.F_SC_ABV_ARAL["EDW<br/>F_SC_ABV_ARAL"]
  EDW.F_SC_ABV_ARAL["EDW<br/>F_SC_ABV_ARAL"] --> DMA.S_SC_ABV_ARAL_BASIS["DMA<br/>S_SC_ABV_ARAL_BASIS"]
  click STAG.F_SC_ABV_ARAL "../../tables/STAG/F_SC_ABV_ARAL"
  click EDW.F_SC_ABV_ARAL "../../tables/EDW/F_SC_ABV_ARAL"
  click EDW.F_SC_ABV_ARAL "../../tables/EDW/F_SC_ABV_ARAL"
  click BEREIT_F.F_SC_ABV_ARAL "../../tables/BEREIT_F/F_SC_ABV_ARAL"
  click EDW.F_SC_ABV_ARAL "../../tables/EDW/F_SC_ABV_ARAL"
  click EDW.F_SC_ABV_ARAL "../../tables/EDW/F_SC_ABV_ARAL"
  click DMA.LU_D_ARAL_EAN "../../tables/DMA/LU_D_ARAL_EAN"
  click DMA.H_ARAL_EAN_NAN "../../tables/DMA/H_ARAL_EAN_NAN"
  click EDW.F_SC_ABV_ARAL "../../tables/EDW/F_SC_ABV_ARAL"
  click DMA.S_SC_ABV_ARAL_BASIS "../../tables/DMA/S_SC_ABV_ARAL_BASIS"
```

## Statements

The following statements create/modify this table:

<Util>INSERT</Util> inside [DWABVARAL/snow_abv_aral_nach_dwh.sas](../../Applications/DWABVARAL/snow_abv_aral_nach_dwh.sas):
```sql:line-numbers
insert into EDW.F_SC_ABV_ARAL select * from STAG.F_SC_ABV_ARAL
```

## References

The table F_SC_ABV_ARAL is used in the following SAS programs:

| Application | SAS Program |
|---|---|
| [DWABVARAL](../../Applications/DWABVARAL) | [snow_abv_aral_verdichtungen.sas](../../Applications/DWABVARAL/snow_abv_aral_verdichtungen.sas) |
| [DWABVARAL](../../Applications/DWABVARAL) | [snow_abv_aral_nach_dwh.sas](../../Applications/DWABVARAL/snow_abv_aral_nach_dwh.sas) |
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
| KAL_TAG_ID | DATE | 0 | 0 | TRUE |   | Kalendertag ID |
| LFD_NR_LOAD | INTEGER | 10 | 0 | TRUE |   | Laufende Nummer des Ladevorgangs |
| NAN_ART_ID | INTEGER | 9 | 0 | TRUE |   | NAN Artikel ID |
| AKT_KZ | VARCHAR | 1 | 0 | TRUE |   | Aktualitätskennzeichen |
| VLT_ID | VARCHAR | 3 | 0 | TRUE |   | Valuta ID |
| UMS_ART_ID | INTEGER | 5 | 0 | TRUE |   | Umsatzart ID |
| KOPF_ART_ID | INTEGER | 9 | 0 | TRUE |   | Kopfart ID |
| STAT_KZ_ID | INTEGER | 5 | 0 | TRUE |   | Status Kennzeichen ID |
| ABT_NR | INTEGER | 5 | 0 | TRUE |   | Abteilungsnummer |
| ABV_EAN | VARCHAR | 14 | 0 | TRUE |   | Abverkauf EAN |
| FREMD_ARTIKEL_TYP_ID | INTEGER | 5 | 0 | TRUE |   | Fremdartikel Typ ID |
| FREMD_ARTIKEL_NR | VARCHAR | 20 | 0 | TRUE |   | Fremdartikel Nummer |
| FREMD_MARKT_TYP_ID | INTEGER | 5 | 0 | TRUE |   | Fremdmarkt Typ ID |
| FREMD_MARKT_NR | VARCHAR | 14 | 0 | TRUE |   | Fremdmarkt Nummer |
| KONZ_NR | INTEGER | 9 | 0 | TRUE |   | Konzern Nummer |
| ABV_W_NN_EK | DECIMAL | 13 | 2 | TRUE |   | Abverkaufswert Netto Einkauf |
| ABV_W_BEW_EK | DECIMAL | 13 | 2 | TRUE |   | Abverkaufswert Bewertung Einkauf |
| ABV_W_WGP_EK | DECIMAL | 13 | 2 | TRUE |   | Abverkaufswert Warengruppe Einkauf |
| ABV_W_MARKT_EK | DECIMAL | 13 | 2 | TRUE |   | Abverkaufswert Markt Einkauf |
| ABV_W_RKP_EK | DECIMAL | 13 | 2 | TRUE |   | Abverkaufswert RKP Einkauf |
| ABV_W_NTO | DECIMAL | 13 | 2 | TRUE |   | Abverkaufswert Netto |
| ABV_W_BTO | DECIMAL | 13 | 2 | TRUE |   | Abverkaufswert Brutto |
| ABV_W_BTO_VR | DECIMAL | 13 | 2 | TRUE |   | Abverkaufswert Brutto Vorjahr |
| ABV_W_BTO_FW | DECIMAL | 13 | 2 | TRUE |   | Abverkaufswert Brutto Fremdwährung |
| ABV_MG | DECIMAL | 13 | 2 | TRUE |   | Abverkaufsmenge |
| QUELLE_ID | INTEGER | 5 | 0 | TRUE |   | Quellen ID |
| ABV_BEWERT_ID | INTEGER | 5 | 0 | TRUE |   | Abverkaufsbewertung ID |
| MF_FLAG | VARCHAR | 3 | 0 | TRUE |   | MF Flag |
| HIST_FOKUS_GRP | INTEGER | 5 | 0 | TRUE |   | Historische Fokusgruppe |
| HIST_FOKUS_SORT | INTEGER | 5 | 0 | TRUE |   | Historische Fokussortierung |
| HIST_ABT_GRP | INTEGER | 5 | 0 | TRUE |   | Historische Abteilungsgruppe |
| HIST_ABT_NR | INTEGER | 5 | 0 | TRUE |   | Historische Abteilungsnummer |
| AKTION_NR | INTEGER | 11 | 0 | TRUE |   | Aktionsnummer |
| HIST_MWST_ID | INTEGER | 5 | 0 | TRUE |   | Historische Mehrwertsteuer ID |
| ABV_W_NN_DEK | DECIMAL | 13 | 2 | TRUE |   | Abverkaufswert Netto Deckung |
| ABV_W_WGP_DEK | DECIMAL | 13 | 2 | TRUE |   | Abverkaufswert Warengruppe Deckung |
| ABV_W_NN_DEK_KORR | DECIMAL | 13 | 2 | TRUE |   | Abverkaufswert Netto Deckung Korrektur |
| ABV_W_WGP_DEK_KORR | DECIMAL | 13 | 2 | TRUE |   | Abverkaufswert Warengruppe Deckung Korrektur |