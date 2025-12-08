# F_WVS_FEHLGRUND_KAL_TAG_TREG_LBER_REAGG_DELTA (Table)

## Table Description

**BDWH_SCCWVS** is a **Waren-Versorgungs-Statistik (WVS)** application that builds a parallel environment to LEGACY_DWH in PRODUCT_SCC_PROD for system replacement purposes.

This table serves as a **delta reaggregation staging table** for WVS failure reason data aggregated by calendar day and trading region. It contains delta changes that are merged into the main aggregation table F_WVS_FEHLGRUND_KAL_TAG_TREG_LBER using a **hybrid reaggregation mechanism**.

The table is populated through complex SQL operations that:
- Calculate delta changes from the detailed F_WVS_FEHLGRUND fact table
- Apply directional mapping transformations via H_REAGG_FLOWDIRECTIONMAP_MAHPTABT_2_TREGLBER
- Support both **incremental updates** for historical data and **full refresh** for future periods

Key aggregation dimensions include article ID, trading region, calendar day, warehouse, supplier, and failure reason. The reaggregation process ensures **data consistency** between detail and summary levels, particularly important for future-dated supply chain planning scenarios.

This staging approach enables **efficient processing** of large WVS datasets while maintaining referential integrity across the supply chain analytics ecosystem.

## Lineage / Impact

```mermaid
%%{init: {'flowchart': { 'nodeSpacing': 10, 'rankSpacing': 40, 'rankdir': 'TB' }}}%%

flowchart LR

```

## Statements

The following statements create/modify this table:

<Util>INSERT</Util> inside [BDWH_SCCWVS/sccwvs_500_wvs_aggregate.sas](../../Applications/BDWH_SCCWVS/sccwvs_500_wvs_aggregate.sas):
```sql:line-numbers
INSERT INTO PRODUCT_SCC_PROD.LEGACY_STAG.F_WVS_FEHLGRUND_KAL_TAG_TREG_LBER_REAGG_DELTA
SELECT
NAN_ART_ID,
m.MA_TREG_LBER_ID,
KAL_TAG_ID,
MA_LAG_ID,
LIEF_ID,
AKT_KZ,
WAEINH,
FEHL_ART_GRUND_ID,
Sum(m.RICHTUNG * Cast(BEST_MG AS DECIMAL(32,10))) AS BEST_MG,
Sum(m.RICHTUNG * Cast(BEST_W_EK_BTO AS DECIMAL(32,10))) AS BEST_W_EK_BTO,
Sum(m.RICHTUNG * Cast(BEST_W_WG_BTO AS DECIMAL(32,10))) AS BEST_W_WG_BTO,
Sum(m.RICHTUNG * Cast(BEST_W_VK_BTO AS DECIMAL(32,10))) AS BEST_W_VK_BTO,
Sum(m.RICHTUNG * Cast(FEHL_GRUND_MG AS DECIMAL(32,10))) AS FEHL_GRUND_MG,
Sum(m.RICHTUNG * Cast(FEHL_GRUND_W_EK_BTO AS DECIMAL(32,10))) AS FEHL_GRUND_W_EK_BTO,
Sum(m.RICHTUNG * Cast(FEHL_GRUND_W_WG_BTO AS DECIMAL(32,10))) AS FEHL_GRUND_W_WG_BTO,
Sum(m.RICHTUNG * Cast(FEHL_GRUND_W_VK_BTO AS DECIMAL(32,10))) AS FEHL_GRUND_W_VK_BTO,
WVS_RELEVANT,
LIEFMG_ANGEPASST
FROM PRODUCT_SCC_PROD.LEGACY_DWH.F_WVS_FEHLGRUND f
JOIN LEGACY_DWH.AGG.H_REAGG_FLOWDIRECTIONMAP_MAHPTABT_2_TREGLBER m
ON f.MA_HPT_ABT_ID = m.MA_HPT_ABT_ID
WHERE f.KAL_TAG_ID <= current_date
GROUP BY
NAN_ART_ID,
m.MA_TREG_LBER_ID,
KAL_TAG_ID,
MA_LAG_ID,
LIEF_ID,
AKT_KZ,
WAEINH,
FEHL_ART_GRUND_ID,
WVS_RELEVANT,
LIEFMG_ANGEPASST
```

## References

The table F_WVS_FEHLGRUND_KAL_TAG_TREG_LBER_REAGG_DELTA is used in the following SAS programs:

| Application | SAS Program |
|---|---|
## Table Schema

| Field Name | Datatype | Precision | Scale | Is Nullable | Constraint | Description |
|---|---|---|---|---|---|---|
| NAN_ART_ID | NUMBER | 38 | 0 | TRUE |   | Artikel-ID |
| MA_TREG_LBER_ID | NUMBER | 38 | 0 | TRUE |   | Markt Teilregion Lieferbereich ID |
| KAL_TAG_ID | DATE |  |  | TRUE |   | Kalendertag ID |
| MA_LAG_ID | NUMBER | 38 | 0 | TRUE |   | Markt Lager ID |
| LIEF_ID | VARCHAR | 6 |  | TRUE |   | Lieferanten ID |
| AKT_KZ | VARCHAR | 1 |  | TRUE |   | Aktionskennzeichen |
| WAEINH | NUMBER | 38 | 0 | TRUE |   | Wareneinheit |
| FEHL_ART_GRUND_ID | NUMBER | 38 | 0 | TRUE |   | Fehlgrund Art ID |
| BEST_MG | NUMBER | 32 | 10 | TRUE |   | Bestellmenge |
| BEST_W_EK_BTO | NUMBER | 32 | 10 | TRUE |   | Bestellwert Einkauf brutto |
| BEST_W_WG_BTO | NUMBER | 32 | 10 | TRUE |   | Bestellwert Warengruppe brutto |
| BEST_W_VK_BTO | NUMBER | 32 | 10 | TRUE |   | Bestellwert Verkauf brutto |
| FEHL_GRUND_MG | NUMBER | 32 | 10 | TRUE |   | Fehlgrundmenge |
| FEHL_GRUND_W_EK_BTO | NUMBER | 32 | 10 | TRUE |   | Fehlgrundwert Einkauf brutto |
| FEHL_GRUND_W_WG_BTO | NUMBER | 32 | 10 | TRUE |   | Fehlgrundwert Warengruppe brutto |
| FEHL_GRUND_W_VK_BTO | NUMBER | 32 | 10 | TRUE |   | Fehlgrundwert Verkauf brutto |
| WVS_RELEVANT | NUMBER | 38 | 0 | TRUE |   | WVS Relevanz Kennzeichen |
| LIEFMG_ANGEPASST | NUMBER | 38 | 0 | TRUE |   | Liefermenge angepasst Kennzeichen |