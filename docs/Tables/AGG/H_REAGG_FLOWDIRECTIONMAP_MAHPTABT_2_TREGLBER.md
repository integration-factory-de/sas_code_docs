# H_REAGG_FLOWDIRECTIONMAP_MAHPTABT_2_TREGLBER (Table)

## Table Description

**BDWH_SCCWVS** is a **WarenVersorgungsStatistik (WVS)** application that builds a parallel environment to replace the legacy LEGACY_DWH system in PRODUCT_SCC_PROD. The application processes goods supply statistics and manages shortage reason analysis for retail operations.

This table serves as a **flow direction mapping table** that maps market headquarters departments (**MA_HPT_ABT**) to trading regions (**TREG_LBER**) for reaggregation processes. It contains directional flow indicators and mapping relationships used in the WVS reaggregation workflow, specifically in the delta re-aggregation of WVS shortage reasons at the daily TREG-LBER level.

The table is utilized in **sccwvs_500_wvs_aggregate.sas** during the reaggregate process where it joins with F_WVS_FEHLGRUND to calculate directional flows using the RICHTUNG field for proper aggregation of shortage statistics. This mapping ensures accurate consolidation of supply chain data across different organizational hierarchies and supports the transition from ELVS-based to ELAB-based data processing in the modern WVS infrastructure.

## Lineage / Impact

```mermaid
%%{init: {'flowchart': { 'nodeSpacing': 10, 'rankSpacing': 40, 'rankdir': 'TB' }}}%%

flowchart LR

```

## Statements

The following statements create/modify this table:

<Util>MERGE</Util> inside [BDWH_SCCWVS/sccwvs_500_wvs_aggregate.sas](../../Applications/BDWH_SCCWVS/sccwvs_500_wvs_aggregate.sas):
```sql:line-numbers
MERGE INTO PRODUCT_SCC_PROD.LEGACY_AGG.F_WVS_FEHLGRUND_KAL_TAG_TREG_LBER a
USING PRODUCT_SCC_PROD.LEGACY_STAG.F_WVS_FEHLGRUND_KAL_TAG_TREG_LBER_REAGG_DELTA b ON
a.NAN_ART_ID = b.NAN_ART_ID AND
a.MA_TREG_LBER_ID = b.MA_TREG_LBER_ID AND
a.KAL_TAG_ID = b.KAL_TAG_ID AND
a.MA_LAG_ID = b.MA_LAG_ID AND
a.LIEF_ID = b.LIEF_ID AND
a.AKT_KZ = b.AKT_KZ AND
a.WAEINH = b.WAEINH AND
a.FEHL_ART_GRUND_ID = b.FEHL_ART_GRUND_ID AND
a.WVS_RELEVANT = b.WVS_RELEVANT AND
a.LIEFMG_ANGEPASST = b.LIEFMG_ANGEPASST
WHEN MATCHED THEN UPDATE SET
BEST_MG = a.BEST_MG + b.BEST_MG,
BEST_W_EK_BTO = a.BEST_W_EK_BTO + b.BEST_W_EK_BTO,
BEST_W_WG_BTO = a.BEST_W_WG_BTO + b.BEST_W_WG_BTO,
BEST_W_VK_BTO = a.BEST_W_VK_BTO + b.BEST_W_VK_BTO,
FEHL_GRUND_MG = a.FEHL_GRUND_MG + b.FEHL_GRUND_MG,
FEHL_GRUND_W_EK_BTO = a.FEHL_GRUND_W_EK_BTO + b.FEHL_GRUND_W_EK_BTO,
FEHL_GRUND_W_WG_BTO = a.FEHL_GRUND_W_WG_BTO + b.FEHL_GRUND_W_WG_BTO,
FEHL_GRUND_W_VK_BTO = a.FEHL_GRUND_W_VK_BTO + b.FEHL_GRUND_W_VK_BTO
WHEN NOT MATCHED THEN INSERT VALUES
(
b.NAN_ART_ID,
b.MA_TREG_LBER_ID,
b.KAL_TAG_ID,
b.MA_LAG_ID,
b.LIEF_ID,
b.AKT_KZ,
b.WAEINH,
b.FEHL_ART_GRUND_ID,
b.BEST_MG,
b.BEST_W_EK_BTO,
b.BEST_W_WG_BTO,
b.BEST_W_VK_BTO,
b.FEHL_GRUND_MG,
b.FEHL_GRUND_W_EK_BTO,
b.FEHL_GRUND_W_WG_BTO,
b.FEHL_GRUND_W_VK_BTO,
b.WVS_RELEVANT,
b.LIEFMG_ANGEPASST
)
```

## References

The table H_REAGG_FLOWDIRECTIONMAP_MAHPTABT_2_TREGLBER is used in the following SAS programs:

| Application | SAS Program |
|---|---|
## Table Schema

| Field Name | Datatype | Precision | Scale | Is Nullable | Constraint | Description |
|---|---|---|---|---|---|---|