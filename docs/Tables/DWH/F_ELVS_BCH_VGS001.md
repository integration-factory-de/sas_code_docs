# F_ELVS_BCH_VGS001 (Table)

## Table Description

The **BDWH_SCCWVS** application is a comprehensive **Waren-Versorgungs-Statistik (WVS)** system that processes supply chain statistics for retail operations. This application builds a parallel environment to replace the legacy LEGACY_DWH system in PRODUCT_SCC_PROD.

The system processes **ELVS-free warehouse data** (HERKUNFT_BASIS = 'ELAB') and performs complex supply shortage analysis by calculating delivery shortages, supplier identification, and relevance determination. Key functionalities include determining delivery dates from the last 28 days, calculating shortage reasons line-by-line from commissioning data, and identifying suppliers through multi-stage procedures using purchase price tables.

The application runs daily with a **2-week retrospective calculation** and processes data through multiple stages: data extraction, shortage calculation, supplier determination, relevance marking, and aggregate generation. It handles various delivery scenarios including action weeks, delivery date changes, and quantity adjustments while maintaining data quality through comprehensive validation processes.

This table specifically contains **BCH VGS001 data** used in the predecessor-successor validation process (DWHCRO-209) to identify articles with positive BCH quantities that should be reclassified with failure reason 1002061 when certain supply chain conditions are met.

## Lineage / Impact

```mermaid
%%{init: {'flowchart': { 'nodeSpacing': 10, 'rankSpacing': 40, 'rankdir': 'TB' }}}%%

flowchart LR

```

## Statements

The following statements create/modify this table:

<Util>UPDATE</Util> inside [BDWH_SCCWVS/sccwvs_400_fakt_n_dwh.sas](../../Applications/BDWH_SCCWVS/sccwvs_400_fakt_n_dwh.sas):
```sql:line-numbers
update LEGACY_DWH.DWH.F_WVS_FEHLGRUND e
from LEGACY_STAG.F_WVS_FEHLGRUND s
set FEHL_ART_GRUND_ID = 1002061
where
e.MA_HPT_ABT_ID = s.MA_HPT_ABT_ID
AND e.KAL_TAG_ID = s.KAL_TAG_ID
AND e.MA_LAG_ID = s.MA_LAG_ID
AND e.NAN_ART_ID = s.NAN_ART_ID
AND e.AKT_KZ = s.AKT_KZ
AND e.WAEINH = s.WAEINH
AND e.REFNR = s.REFNR
AND e.POS_REFNR_LFDNR = s.POS_REFNR_LFDNR
AND e.FEHL_ART_GRUND_ID = s.FEHL_ART_GRUND_ID
AND e.FEHL_GRUND_MG = s.FEHL_GRUND_MG
AND e.WVS_RELEVANT = s.WVS_RELEVANT
AND e.KAL_TAG_ID BETWEEN min_kal_tag AND max_kal_tag
```

## References

The table F_ELVS_BCH_VGS001 is used in the following SAS programs:

| Application | SAS Program |
|---|---|
## Table Schema

| Field Name | Datatype | Precision | Scale | Is Nullable | Constraint | Description |
|---|---|---|---|---|---|---|