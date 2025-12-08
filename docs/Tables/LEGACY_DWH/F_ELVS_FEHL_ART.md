# F_ELVS_FEHL_ART (Table)

## Table Description

**BDWH_SCCWVS** is a **WVS (WarenVersorgungsStatistik)** application that builds a parallel environment to LEGACY_DWH in PRODUCT_SCC_PROD for system replacement purposes.

This table serves as the **primary data source** for supply chain statistics processing in ELVS-free warehouses. It contains detailed order and delivery information including article data, quantities, values, and error classifications. The table stores records with **HERKUNFT_BASIS = 'ELAB'** indicating data from the new ELAB system after ELVS core replacement.

The application processes this data through multiple stages: calculating delivery dates from the last 28 days, determining suppliers, identifying shortage reasons, and generating comprehensive supply statistics. Key processing includes **supplier determination** from various sources, **shortage classification** using error codes, and **WVS relevance marking** based on delivery type indicators.

The table supports **daily processing** covering the last 21 days retrospectively, enabling **error correction** and **data consistency** maintenance. It integrates with tracking systems for delivery status monitoring and provides the foundation for **aggregated supply chain reporting** at various organizational levels.

## Lineage / Impact

```mermaid
%%{init: {'flowchart': { 'nodeSpacing': 10, 'rankSpacing': 40, 'rankdir': 'TB' }}}%%

flowchart LR

  LEGACY_DWH.F_ELVS_FEHL_ART["LEGACY_DWH<br/>F_ELVS_FEHL_ART"] --> LEGACY_DWH.F_ELVS_FEHL_ART["LEGACY_DWH<br/>F_ELVS_FEHL_ART"]
  LEGACY_DWH.F_ELVS_FEHL_ART["LEGACY_DWH<br/>F_ELVS_FEHL_ART"] --> DWH.F_LHM_SV_TOUR_NVE_STAMM["DWH<br/>F_LHM_SV_TOUR_NVE_STAMM"]
  LEGACY_DWH.F_ELVS_FEHL_ART["LEGACY_DWH<br/>F_ELVS_FEHL_ART"] --> LEGACY_DWH.SD_WVS_FEHLGRUND_UGRP["LEGACY_DWH<br/>SD_WVS_FEHLGRUND_UGRP"]
  LEGACY_DWH.F_ELVS_FEHL_ART["LEGACY_DWH<br/>F_ELVS_FEHL_ART"] --> LEGACY_STAG.F_WVS_FEHLGRUND_TAGE["LEGACY_STAG<br/>F_WVS_FEHLGRUND_TAGE"]
  LEGACY_DWH.F_ELVS_FEHL_ART["LEGACY_DWH<br/>F_ELVS_FEHL_ART"] --> LEGACY_STAG.F_WVS_FEHLGRUND["LEGACY_STAG<br/>F_WVS_FEHLGRUND"]
  LEGACY_DWH.F_ELVS_FEHL_ART["LEGACY_DWH<br/>F_ELVS_FEHL_ART"] --> LEGACY_DWH.SD_ELVS_FEHL_ART_BER_MA_KZ["LEGACY_DWH<br/>SD_ELVS_FEHL_ART_BER_MA_KZ"]
  LEGACY_DWH.F_ELVS_FEHL_ART["LEGACY_DWH<br/>F_ELVS_FEHL_ART"] --> LEGACY_DWH.F_ELVS_BO["LEGACY_DWH<br/>F_ELVS_BO"]
  LEGACY_DWH.F_ELVS_FEHL_ART["LEGACY_DWH<br/>F_ELVS_FEHL_ART"] --> LEGACY_DWH.F_WVS_FEHLGRUND["LEGACY_DWH<br/>F_WVS_FEHLGRUND"]
  LEGACY_DWH.F_ELVS_FEHL_ART["LEGACY_DWH<br/>F_ELVS_FEHL_ART"] --> LEGACY_STAG.SD_WVS_FEHLGRUND_GRP["LEGACY_STAG<br/>SD_WVS_FEHLGRUND_GRP"]
  LEGACY_DWH.F_ELVS_FEHL_ART["LEGACY_DWH<br/>F_ELVS_FEHL_ART"] --> LEGACY_STAG.F_WVS_ABLADE_DATUM["LEGACY_STAG<br/>F_WVS_ABLADE_DATUM"]
  LEGACY_DWH.F_ELVS_FEHL_ART["LEGACY_DWH<br/>F_ELVS_FEHL_ART"] --> LEGACY_DWH.DWH["LEGACY_DWH<br/>DWH"]
  LEGACY_DWH.F_ELVS_FEHL_ART["LEGACY_DWH<br/>F_ELVS_FEHL_ART"] --> LEGACY_STAG.SD_WVS_FEHLGRUND["LEGACY_STAG<br/>SD_WVS_FEHLGRUND"]
  LEGACY_DWH.F_ELVS_FEHL_ART["LEGACY_DWH<br/>F_ELVS_FEHL_ART"] --> LEGACY_DWH.LU_D_MA_HPT_ABT["LEGACY_DWH<br/>LU_D_MA_HPT_ABT"]
  click LEGACY_DWH.F_ELVS_FEHL_ART "../../tables/LEGACY_DWH/F_ELVS_FEHL_ART"
  click LEGACY_DWH.F_ELVS_FEHL_ART "../../tables/LEGACY_DWH/F_ELVS_FEHL_ART"
  click LEGACY_DWH.F_ELVS_FEHL_ART "../../tables/LEGACY_DWH/F_ELVS_FEHL_ART"
  click LEGACY_DWH.F_ELVS_FEHL_ART "../../tables/LEGACY_DWH/F_ELVS_FEHL_ART"
  click LEGACY_DWH.F_ELVS_FEHL_ART "../../tables/LEGACY_DWH/F_ELVS_FEHL_ART"
  click LEGACY_DWH.F_ELVS_FEHL_ART "../../tables/LEGACY_DWH/F_ELVS_FEHL_ART"
  click LEGACY_DWH.F_ELVS_FEHL_ART "../../tables/LEGACY_DWH/F_ELVS_FEHL_ART"
  click LEGACY_DWH.F_ELVS_FEHL_ART "../../tables/LEGACY_DWH/F_ELVS_FEHL_ART"
  click LEGACY_DWH.F_ELVS_FEHL_ART "../../tables/LEGACY_DWH/F_ELVS_FEHL_ART"
  click LEGACY_DWH.F_ELVS_FEHL_ART "../../tables/LEGACY_DWH/F_ELVS_FEHL_ART"
  click LEGACY_DWH.F_ELVS_FEHL_ART "../../tables/LEGACY_DWH/F_ELVS_FEHL_ART"
  click LEGACY_DWH.F_ELVS_FEHL_ART "../../tables/LEGACY_DWH/F_ELVS_FEHL_ART"
  click LEGACY_DWH.F_ELVS_FEHL_ART "../../tables/LEGACY_DWH/F_ELVS_FEHL_ART"
  click LEGACY_DWH.F_ELVS_FEHL_ART "../../tables/LEGACY_DWH/F_ELVS_FEHL_ART"
  click DWH.F_LHM_SV_TOUR_NVE_STAMM "../../tables/DWH/F_LHM_SV_TOUR_NVE_STAMM"
  click LEGACY_DWH.SD_WVS_FEHLGRUND_UGRP "../../tables/LEGACY_DWH/SD_WVS_FEHLGRUND_UGRP"
  click LEGACY_STAG.F_WVS_FEHLGRUND_TAGE "../../tables/LEGACY_STAG/F_WVS_FEHLGRUND_TAGE"
  click LEGACY_STAG.F_WVS_FEHLGRUND "../../tables/LEGACY_STAG/F_WVS_FEHLGRUND"
  click LEGACY_DWH.SD_ELVS_FEHL_ART_BER_MA_KZ "../../tables/LEGACY_DWH/SD_ELVS_FEHL_ART_BER_MA_KZ"
  click LEGACY_DWH.F_ELVS_BO "../../tables/LEGACY_DWH/F_ELVS_BO"
  click LEGACY_DWH.F_WVS_FEHLGRUND "../../tables/LEGACY_DWH/F_WVS_FEHLGRUND"
  click LEGACY_STAG.SD_WVS_FEHLGRUND_GRP "../../tables/LEGACY_STAG/SD_WVS_FEHLGRUND_GRP"
  click LEGACY_STAG.F_WVS_ABLADE_DATUM "../../tables/LEGACY_STAG/F_WVS_ABLADE_DATUM"
  click LEGACY_DWH.DWH "../../tables/LEGACY_DWH/DWH"
  click LEGACY_STAG.SD_WVS_FEHLGRUND "../../tables/LEGACY_STAG/SD_WVS_FEHLGRUND"
  click LEGACY_DWH.LU_D_MA_HPT_ABT "../../tables/LEGACY_DWH/LU_D_MA_HPT_ABT"
```

## Statements

The following statements create/modify this table:

<Util>INSERT</Util> inside [BDWH_SCCWVS/sccwvs_005_wvs_ablade_tag.sas](../../Applications/BDWH_SCCWVS/sccwvs_005_wvs_ablade_tag.sas):
```sql:line-numbers
INSERT INTO PRODUCT_SCC_PROD.LEGACY_STAG.F_WVS_ABLADE_DATUM
select
a.ma_hpt_abt_id, a.ma_lag_id, a.lagnr, a.refnr, a.pos_refnr_lfdnr, a.kal_tag_id,
NULL as ablade_tag,
case when max(track.nve_status) in (250) then max(cast(track.track_ts as date))
when max(track.nve_status) in (255) and max(track.nve_status) not in (245) then max(cast(a.kal_tag_id +1 as date))
when max(track.nve_status) in (245) and max(track.nve_status) not in (250) then max(cast(a.kal_tag_id +1 as date))
when max(track.nve_status) in (246) and max(track.nve_status) not in (245) then max(cast(a.kal_tag_id +1 as date))
else max(cast(a.kal_tag_id +1 as date))
end as ablade_tag_sv,
case when max(track.nve_status) in (250) then 1
when max(track.nve_status) in (255) and max(track.nve_status) not in (245) then 2
when max(track.nve_status) in (245) and max(track.nve_status) not in (250) then 3
when max(track.nve_status) in (246) and max(track.nve_status) not in (245) then 4
else 5
end as ablade_tag_kz
from (select ma_hpt_abt_id, ma_lag_id, lagnr, refnr, pos_refnr_lfdnr, kal_tag_id, lif_nve,
pos_leergutkz, kopf_storno_kz from PRODUCT_SCC_PROD.LEGACY_DWH.F_ELVS_FEHL_ART
where herkunft_basis='ELAB'
and kal_tag_id >= dateadd(day,-21,CURRENT_DATE) )a
left join LEGACY_DWH.DWH.LU_D_MA_HPT_ABT c
on a.ma_hpt_abt_id = c.ma_hpt_abt_id
left join (
select * from LEGACY_DWH.DWH.F_LHM_SV_TOUR_NVE_STAMM
where erstell_datum >=dateadd(day,-28,CURRENT_DATE)
) d
on a.lif_nve = d.nve
and c.ma_id = d.ma_id
left join (
select nve_id, nve_status, transport_stufe, track_ts, verdichtet_auf_nve_id
from PRODUCT_SCC_PROD.LEGACY_STAG.TMP_F_LHM_SV_TOUR_NVE_TRACK_2
union all
select nve_id, nve_status, transport_stufe, track_ts, verdichtet_auf_nve_id
from LEGACY_DWH.DWH.F_LHM_SV_TOUR_NVE_TRACK
where nve_status_fail <> 'f'
and nve_status in (245,246,250,255)
and cast(track_ts as date) >= dateadd(day,-28,CURRENT_DATE)
) track
on d.nve_id = track.nve_id
where a.kal_tag_id >= dateadd(day,-21,CURRENT_DATE)
and a.lif_nve <> 0
and a.pos_leergutkz <> 'l'
and a.kopf_storno_kz not in ('s', 'x', 'y')
AND NOT EXISTS
( SELECT * FROM PRODUCT_SCC_PROD.LEGACY_STAG.F_WVS_ABLADE_DATUM t1
WHERE
a.kal_tag_id = t1.kal_tag_id
AND a.ma_hpt_abt_id = t1.ma_hpt_abt_id
AND a.ma_lag_id = t1.ma_lag_id
AND a.lagnr = t1.lagnr
AND a.refnr = t1.refnr
AND a.pos_refnr_lfdnr = t1.pos_refnr_lfdnr
)
group by a.ma_hpt_abt_id, a.ma_lag_id, a.lagnr, a.refnr, a.pos_refnr_lfdnr, a.kal_tag_id
```

## References

The table F_ELVS_FEHL_ART is used in the following SAS programs:

| Application | SAS Program |
|---|---|
| [BDWH_SCCWVS](../../Applications/BDWH_SCCWVS) | [sccwvs_005_wvs_ablade_tag.sas](../../Applications/BDWH_SCCWVS/sccwvs_005_wvs_ablade_tag.sas) |
| [BDWH_SCCWVS](../../Applications/BDWH_SCCWVS) | [sccwvs_020_wvs_berechnen_elab.sas](../../Applications/BDWH_SCCWVS/sccwvs_020_wvs_berechnen_elab.sas) |
## Table Schema

| Field Name | Datatype | Precision | Scale | Is Nullable | Constraint | Description |
|---|---|---|---|---|---|---|
| MA_HPT_ABT_ID | NUMBER | 12 | 0 | TRUE |   | Market main department ID |
| MA_LAG_ID | NUMBER | 10 | 0 | TRUE |   | Market warehouse ID |
| LAGNR | VARCHAR | 3 | 0 | TRUE |   | Warehouse number |
| REFNR | NUMBER | 11 | 0 | TRUE |   | Reference number |
| POS_REFNR_LFDNR | NUMBER | 6 | 0 | TRUE |   | Position reference number sequence |
| KAL_TAG_ID | DATE |  |  | TRUE |   | Calendar day ID |
| NAN_ART_ID | NUMBER | 9 | 0 | TRUE |   | Article ID |
| AKT_KZ | VARCHAR | 1 | 0 | TRUE |   | Action indicator |
| POS_WAEINH | NUMBER | 6 | 0 | TRUE |   | Position goods unit |
| LIEF_ID | VARCHAR | 6 | 0 | TRUE |   | Supplier ID |
| POS_KUERZ_GLOBAL_KZ | VARCHAR | 1 | 0 | TRUE |   | Position shortening global indicator |
| POS_KUERZ_KST_KZ | VARCHAR | 1 | 0 | TRUE |   | Position shortening cost center indicator |
| POS_KV_URSACHE | VARCHAR | 2 | 0 | TRUE |   | Position cause code |
| POS_WA_IST | NUMBER | 12 | 3 | TRUE |   | Position actual goods |
| BEST_MG | NUMBER | 12 | 3 | TRUE |   | Order quantity |
| BEST_W_EK_BTO | NUMBER | 12 | 3 | TRUE |   | Order value purchase price gross |
| BEST_W_WG_BTO | NUMBER | 12 | 3 | TRUE |   | Order value goods price gross |
| BEST_W_VK_BTO | NUMBER | 12 | 3 | TRUE |   | Order value sales price gross |
| KOPF_LIFART | VARCHAR | 2 | 0 | TRUE |   | Header delivery type |
| ERS_LIEF_MG | NUMBER | 12 | 3 | TRUE |   | First delivery quantity |
| ERS_LIEF_W_EK_BTO | NUMBER | 12 | 3 | TRUE |   | First delivery value purchase price gross |
| ERS_LIEF_W_WG_BTO | NUMBER | 12 | 3 | TRUE |   | First delivery value goods price gross |
| ERS_LIEF_W_VK_BTO | NUMBER | 12 | 3 | TRUE |   | First delivery value sales price gross |
| POS_DIFFMNG | NUMBER | 12 | 3 | TRUE |   | Position difference quantity |
| KUERZ_MG | NUMBER | 12 | 3 | TRUE |   | Shortening quantity |
| KUERZ_MG_AKTION | NUMBER | 12 | 3 | TRUE |   | Shortening quantity action |
| POS_FEHLER_SCHL | NUMBER | 3 | 0 | TRUE |   | Position error key |
| POS_NACHLIEF_KZ | VARCHAR | 1 | 0 | TRUE |   | Position subsequent delivery indicator |
| POS_IFCO_TYP | VARCHAR | 10 | 0 | TRUE |   | Position IFCO type |
| KOPF_AUFTRAG | NUMBER | 11 | 0 | TRUE |   | Header order number |
| KOPF_KD_AUFTRAGS_NR | VARCHAR | 15 | 0 | TRUE |   | Header customer order number |
| KOPF_AENDDAT | DATE |  |  | TRUE |   | Header change date |
| HERKUNFT_BASIS | VARCHAR | 4 | 0 | TRUE |   | Origin basis |
| KOPF_HERKUNFT | VARCHAR | 1 | 0 | TRUE |   | Header origin |
| LIF_NVE | NUMBER | 11 | 0 | TRUE |   | Delivery NVE |
| POS_LEERGUTKZ | VARCHAR | 1 | 0 | TRUE |   | Position empty goods indicator |
| KOPF_STORNO_KZ | VARCHAR | 1 | 0 | TRUE |   | Header cancellation indicator |
| POS_REFNR_LFDNR_B | NUMBER | 6 | 0 | TRUE |   | Position reference number sequence B |
| KOPF_LIFSCHN_NR | NUMBER | 11 | 0 | TRUE |   | Header delivery section number |