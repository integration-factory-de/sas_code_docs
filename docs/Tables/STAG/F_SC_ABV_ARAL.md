# F_SC_ABV_ARAL (Table)

## Table Description

The **DWABVARAL** application processes **Aral sales data** (Abverkaufsdaten) through a comprehensive ETL pipeline. This staging table contains detailed point-of-sale transaction data from Aral gas stations.

The application handles the complete data flow from raw file processing to data warehouse integration. It **moves and unzips** raw data files from DFUE directories, **validates file sequences** and record counts, and **reads semicolon-delimited sales records** with comprehensive error handling.

Key processing includes **EAN-to-NAN article mapping**, **market ID resolution** via ILN codes, **purchase price evaluation** through specialized macros, and **VAT classification**. The system performs **data quality checks** comparing control records against actual transaction counts.

Processed data flows through multiple stages: **STAG** (staging), **EDW** (enterprise data warehouse), and various **aggregated views** for reporting. The application supports **restart capability** and includes comprehensive **error handling** with specific contact information for data issues.

This table serves as the primary staging area before data moves to production tables, supporting downstream **sales analysis**, **inventory management**, and **financial reporting** across the Aral retail network.

## Lineage / Impact

```mermaid
%%{init: {'flowchart': { 'nodeSpacing': 10, 'rankSpacing': 40, 'rankdir': 'TB' }}}%%

flowchart LR

  BEREIT_F.F_SC_ABV_ARAL["BEREIT_F<br/>F_SC_ABV_ARAL"] --> STAG.F_SC_ABV_ARAL["STAG<br/>F_SC_ABV_ARAL"]
  STAG.F_SC_ABV_ARAL["STAG<br/>F_SC_ABV_ARAL"] --> STAG.F_SC_ABV_KONZERN_DELTA["STAG<br/>F_SC_ABV_KONZERN_DELTA"]
  STAG.F_SC_ABV_ARAL["STAG<br/>F_SC_ABV_ARAL"] --> EDW.F_SC_ABV_ARAL["EDW<br/>F_SC_ABV_ARAL"]
  click BEREIT_F.F_SC_ABV_ARAL "../../tables/BEREIT_F/F_SC_ABV_ARAL"
  click STAG.F_SC_ABV_ARAL "../../tables/STAG/F_SC_ABV_ARAL"
  click STAG.F_SC_ABV_ARAL "../../tables/STAG/F_SC_ABV_ARAL"
  click STAG.F_SC_ABV_ARAL "../../tables/STAG/F_SC_ABV_ARAL"
  click STAG.F_SC_ABV_KONZERN_DELTA "../../tables/STAG/F_SC_ABV_KONZERN_DELTA"
  click EDW.F_SC_ABV_ARAL "../../tables/EDW/F_SC_ABV_ARAL"
```

## Statements

The following statements create/modify this table:

<Util>INSERT</Util> inside [DWABVARAL/dw010990.sas](../../Applications/DWABVARAL/dw010990.sas):
```sql:line-numbers
INSERT INTO STAG.F_SC_ABV_ARAL SELECT * FROM BEREIT_F.F_SC_ABV_ARAL
```

## References

The table F_SC_ABV_ARAL is used in the following SAS programs:

| Application | SAS Program |
|---|---|
| [DWABVARAL](../../Applications/DWABVARAL) | [snow_abv_aral_insert_sca_delta.sas](../../Applications/DWABVARAL/snow_abv_aral_insert_sca_delta.sas) |
| [DWABVARAL](../../Applications/DWABVARAL) | [snow_abv_aral_nach_dwh.sas](../../Applications/DWABVARAL/snow_abv_aral_nach_dwh.sas) |
| [DWABVARAL](../../Applications/DWABVARAL) | [dw010990.sas](../../Applications/DWABVARAL/dw010990.sas) |
## Table Schema

| Field Name | Datatype | Precision | Scale | Is Nullable | Constraint | Description |
|---|---|---|---|---|---|---|
| ARAL_SATZ_ART | VARCHAR | 1 | 0 | TRUE |   | Satzart I = bewegungssatz T = Kontrollsatz |
| ARAL_PART_NR | VARCHAR | 13 | 0 | TRUE |   | Tankstellen GLN mit zwei führenden Nummern |
| ARAL_WAEHRUNG | VARCHAR | 5 | 0 | TRUE |   | Währungskennzeichen |
| ARAL_VERKAUF_DATUM | DATE |  |  | TRUE |   | Verkaufsdatum JJJJMMTT |
| ARAL_VERKAUF_ZEIT | TIME |  |  | TRUE |   | Verkaufszeit |
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
| KAL_TAG_ID | DATE |  |  | TRUE |   | Kalender Tag ID |
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
| ABV_W_WGP_EK | DECIMAL | 13 | 2 | TRUE |   | Abverkaufswert WGP Einkauf |
| ABV_W_MARKT_EK | DECIMAL | 13 | 2 | TRUE |   | Abverkaufswert Markt Einkauf |
| ABV_W_RKP_EK | DECIMAL | 13 | 2 | TRUE |   | Abverkaufswert RKP Einkauf |
| ABV_W_NTO | DECIMAL | 13 | 2 | TRUE |   | Abverkaufswert Netto |
| ABV_W_BTO | DECIMAL | 13 | 2 | TRUE |   | Abverkaufswert Brutto |
| ABV_W_BTO_VR | DECIMAL | 13 | 2 | TRUE |   | Abverkaufswert Brutto Vorjahr |
| ABV_W_BTO_FW | DECIMAL | 13 | 2 | TRUE |   | Abverkaufswert Brutto Fremdwährung |
| ABV_MG | DECIMAL | 13 | 2 | TRUE |   | Abverkaufsmenge |
| QUELLE_ID | INTEGER | 5 | 0 | TRUE |   | Quellen ID |
| ABV_BEWERT_ID | INTEGER | 5 | 0 | TRUE |   | Abverkauf Bewertung ID |
| MF_FLAG | VARCHAR | 3 | 0 | TRUE |   | MF Flag |
| HIST_FOKUS_GRP | INTEGER | 5 | 0 | TRUE |   | Historische Fokus Gruppe |
| HIST_FOKUS_SORT | INTEGER | 5 | 0 | TRUE |   | Historische Fokus Sortierung |
| HIST_ABT_GRP | INTEGER | 5 | 0 | TRUE |   | Historische Abteilungsgruppe |
| HIST_ABT_NR | INTEGER | 5 | 0 | TRUE |   | Historische Abteilungsnummer |
| AKTION_NR | INTEGER | 11 | 0 | TRUE |   | Aktionsnummer |
| HIST_MWST_ID | INTEGER | 5 | 0 | TRUE |   | Historische MWST ID |
| ABV_W_NN_DEK | DECIMAL | 13 | 2 | TRUE |   | Abverkaufswert Netto Deckung |
| ABV_W_WGP_DEK | DECIMAL | 13 | 2 | TRUE |   | Abverkaufswert WGP Deckung |
| ABV_W_NN_DEK_KORR | DECIMAL | 13 | 2 | TRUE |   | Abverkaufswert Netto Deckung Korrektur |
| ABV_W_WGP_DEK_KORR | DECIMAL | 13 | 2 | TRUE |   | Abverkaufswert WGP Deckung Korrektur |