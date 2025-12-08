# F_LHM_SV_TOUR_NVE_STAMM (Table)

## Table Description

**BDWH_SCCWVS** is a data warehouse application for **WVS (WarenVersorgungsStatistik)** - Goods Supply Statistics. This application builds a parallel environment to LEGACY_DWH in PRODUCT_SCC_PROD for system replacement purposes.

The table F_LHM_SV_TOUR_NVE_STAMM is part of the **logistics and warehouse management system** that tracks NVE (Nummer der Versandeinheit - shipping unit numbers) and tour information. It serves as a master data table containing shipping unit details with creation dates, and is used in conjunction with tracking tables to determine delivery dates and statuses.

This table is specifically utilized in the **delivery date determination process** where it joins with F_LHM_SV_TOUR_NVE_TRACK to calculate unloading dates (ABLADE_TAG_SV) for the last 28 days. The application processes ELAB-sourced data (post-ELVS core replacement) and performs complex supply chain analytics including shortage reason analysis, supplier determination, and delivery tracking.

The WVS system processes daily calculations covering the last 21 days retrospectively, enabling **supply chain monitoring and failure analysis** for retail operations. Key processing includes commission pool data analysis, delivery status tracking (NVE_STATUS 210, 245, 246, 250, 255), and integration with customer order systems for comprehensive supply statistics.

## Lineage / Impact

```mermaid
%%{init: {'flowchart': { 'nodeSpacing': 10, 'rankSpacing': 40, 'rankdir': 'TB' }}}%%

flowchart LR

  DWH.F_LHM_SV_TOUR_NVE_TRACK["DWH<br/>F_LHM_SV_TOUR_NVE_TRACK"] --> DWH.F_LHM_SV_TOUR_NVE_STAMM["DWH<br/>F_LHM_SV_TOUR_NVE_STAMM"]
  DWH.LU_D_MA_HPT_ABT["DWH<br/>LU_D_MA_HPT_ABT"] --> DWH.F_LHM_SV_TOUR_NVE_STAMM["DWH<br/>F_LHM_SV_TOUR_NVE_STAMM"]
  DWH.F_LHM_SV_TOUR_NVE_STAMM["DWH<br/>F_LHM_SV_TOUR_NVE_STAMM"] --> LEGACY_STAG.F_WVS_ABLADE_DATUM["LEGACY_STAG<br/>F_WVS_ABLADE_DATUM"]
  LEGACY_DWH.F_ELVS_FEHL_ART["LEGACY_DWH<br/>F_ELVS_FEHL_ART"] --> DWH.F_LHM_SV_TOUR_NVE_STAMM["DWH<br/>F_LHM_SV_TOUR_NVE_STAMM"]
  click DWH.F_LHM_SV_TOUR_NVE_TRACK "../../tables/DWH/F_LHM_SV_TOUR_NVE_TRACK"
  click DWH.LU_D_MA_HPT_ABT "../../tables/DWH/LU_D_MA_HPT_ABT"
  click DWH.F_LHM_SV_TOUR_NVE_STAMM "../../tables/DWH/F_LHM_SV_TOUR_NVE_STAMM"
  click LEGACY_DWH.F_ELVS_FEHL_ART "../../tables/LEGACY_DWH/F_ELVS_FEHL_ART"
  click DWH.F_LHM_SV_TOUR_NVE_STAMM "../../tables/DWH/F_LHM_SV_TOUR_NVE_STAMM"
  click DWH.F_LHM_SV_TOUR_NVE_STAMM "../../tables/DWH/F_LHM_SV_TOUR_NVE_STAMM"
  click LEGACY_STAG.F_WVS_ABLADE_DATUM "../../tables/LEGACY_STAG/F_WVS_ABLADE_DATUM"
  click DWH.F_LHM_SV_TOUR_NVE_STAMM "../../tables/DWH/F_LHM_SV_TOUR_NVE_STAMM"
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

The table F_LHM_SV_TOUR_NVE_STAMM is used in the following SAS programs:

| Application | SAS Program |
|---|---|
| [BDWH_SCCWVS](../../Applications/BDWH_SCCWVS) | [sccwvs_020_wvs_berechnen_elab.sas](../../Applications/BDWH_SCCWVS/sccwvs_020_wvs_berechnen_elab.sas) |
| [BDWH_SCCWVS](../../Applications/BDWH_SCCWVS) | [sccwvs_005_wvs_ablade_tag.sas](../../Applications/BDWH_SCCWVS/sccwvs_005_wvs_ablade_tag.sas) |
## Table Schema

| Field Name | Datatype | Precision | Scale | Is Nullable | Constraint | Description |
|---|---|---|---|---|---|---|
| NVE_ID | BIGINT | 19 | 0 | FALSE | PRIMARY KEY | Unique identifier for NVE (Nummer der Versandeinheit) |
| NVE | BIGINT | 19 | 0 | TRUE |   | NVE number for shipment unit |
| MA_ID | BIGINT | 19 | 0 | TRUE |   | Market identifier |
| ERSTELL_DATUM | DATE | 10 | 0 | TRUE |   | Creation date of the NVE record |
| TRANSPORT_STUFE | INTEGER | 10 | 0 | TRUE |   | Transport stage level |
| NVE_STATUS | INTEGER | 10 | 0 | TRUE |   | Current status of the NVE |
| NVE_STATUS_FAIL | VARCHAR | 1 | 0 | TRUE |   | Failure status indicator for NVE |
| VERDICHTET_AUF_NVE_ID | BIGINT | 19 | 0 | TRUE |   | Reference to consolidated NVE ID |
| NVE_ID_ORG | BIGINT | 19 | 0 | TRUE |   | Original NVE ID before consolidation |