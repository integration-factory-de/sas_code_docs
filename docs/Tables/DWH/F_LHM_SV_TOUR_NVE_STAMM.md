# F_LHM_SV_TOUR_NVE_STAMM (Table)

## Table Description

_No description available_

## Lineage / Impact

```mermaid
%%{init: {'flowchart': { 'nodeSpacing': 10, 'rankSpacing': 40, 'rankdir': 'TB' }}}%%

flowchart LR

  LEGACY_DWH.F_ELVS_FEHL_ART["LEGACY_DWH<br/>F_ELVS_FEHL_ART"] --> DWH.F_LHM_SV_TOUR_NVE_STAMM["DWH<br/>F_LHM_SV_TOUR_NVE_STAMM"]
  DWH.F_LHM_SV_TOUR_NVE_TRACK["DWH<br/>F_LHM_SV_TOUR_NVE_TRACK"] --> DWH.F_LHM_SV_TOUR_NVE_STAMM["DWH<br/>F_LHM_SV_TOUR_NVE_STAMM"]
  DWH.LU_D_MA_HPT_ABT["DWH<br/>LU_D_MA_HPT_ABT"] --> DWH.F_LHM_SV_TOUR_NVE_STAMM["DWH<br/>F_LHM_SV_TOUR_NVE_STAMM"]
  DWH.F_LHM_SV_TOUR_NVE_STAMM["DWH<br/>F_LHM_SV_TOUR_NVE_STAMM"] --> LEGACY_STAG.F_WVS_ABLADE_DATUM["LEGACY_STAG<br/>F_WVS_ABLADE_DATUM"]
  click LEGACY_DWH.F_ELVS_FEHL_ART "../../tables/LEGACY_DWH/F_ELVS_FEHL_ART"
  click DWH.F_LHM_SV_TOUR_NVE_TRACK "../../tables/DWH/F_LHM_SV_TOUR_NVE_TRACK"
  click DWH.LU_D_MA_HPT_ABT "../../tables/DWH/LU_D_MA_HPT_ABT"
  click DWH.F_LHM_SV_TOUR_NVE_STAMM "../../tables/DWH/F_LHM_SV_TOUR_NVE_STAMM"
  click DWH.F_LHM_SV_TOUR_NVE_STAMM "../../tables/DWH/F_LHM_SV_TOUR_NVE_STAMM"
  click DWH.F_LHM_SV_TOUR_NVE_STAMM "../../tables/DWH/F_LHM_SV_TOUR_NVE_STAMM"
  click DWH.F_LHM_SV_TOUR_NVE_STAMM "../../tables/DWH/F_LHM_SV_TOUR_NVE_STAMM"
  click LEGACY_STAG.F_WVS_ABLADE_DATUM "../../tables/LEGACY_STAG/F_WVS_ABLADE_DATUM"
```

## References

The table F_LHM_SV_TOUR_NVE_STAMM is used in the following SAS programs:

| Application | SAS Program |
|---|---|
| [BDWH_SCCWVS](../../Applications/BDWH_SCCWVS) | [sccwvs_005_wvs_ablade_tag.sas](../../Applications/BDWH_SCCWVS/sccwvs_005_wvs_ablade_tag.sas) |
| [BDWH_SCCWVS](../../Applications/BDWH_SCCWVS) | [sccwvs_020_wvs_berechnen_elab.sas](../../Applications/BDWH_SCCWVS/sccwvs_020_wvs_berechnen_elab.sas) |
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