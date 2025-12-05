# F_ELVS_BCH_VGS001 (Table)

## Table Description

_No description available_

## Lineage / Impact

```mermaid
%%{init: {'flowchart': { 'nodeSpacing': 10, 'rankSpacing': 40, 'rankdir': 'TB' }}}%%

flowchart LR

  DWH.F_STUECKLISTE["DWH<br/>F_STUECKLISTE"] --> LEGACY_DWH.F_ELVS_BCH_VGS001["LEGACY_DWH<br/>F_ELVS_BCH_VGS001"]
  DWH.LU_D_MA_HPT_ABT["DWH<br/>LU_D_MA_HPT_ABT"] --> LEGACY_DWH.F_ELVS_BCH_VGS001["LEGACY_DWH<br/>F_ELVS_BCH_VGS001"]
  DWH.F_ELVS_FEHL_ART["DWH<br/>F_ELVS_FEHL_ART"] --> LEGACY_DWH.F_ELVS_BCH_VGS001["LEGACY_DWH<br/>F_ELVS_BCH_VGS001"]
  LEGACY_STAG.F_WVS_FEHLGRUND["LEGACY_STAG<br/>F_WVS_FEHLGRUND"] --> LEGACY_DWH.F_ELVS_BCH_VGS001["LEGACY_DWH<br/>F_ELVS_BCH_VGS001"]
  click DWH.F_STUECKLISTE "../../tables/DWH/F_STUECKLISTE"
  click DWH.LU_D_MA_HPT_ABT "../../tables/DWH/LU_D_MA_HPT_ABT"
  click DWH.F_ELVS_FEHL_ART "../../tables/DWH/F_ELVS_FEHL_ART"
  click LEGACY_STAG.F_WVS_FEHLGRUND "../../tables/LEGACY_STAG/F_WVS_FEHLGRUND"
  click LEGACY_DWH.F_ELVS_BCH_VGS001 "../../tables/LEGACY_DWH/F_ELVS_BCH_VGS001"
  click LEGACY_DWH.F_ELVS_BCH_VGS001 "../../tables/LEGACY_DWH/F_ELVS_BCH_VGS001"
  click LEGACY_DWH.F_ELVS_BCH_VGS001 "../../tables/LEGACY_DWH/F_ELVS_BCH_VGS001"
  click LEGACY_DWH.F_ELVS_BCH_VGS001 "../../tables/LEGACY_DWH/F_ELVS_BCH_VGS001"
```

## References

The table F_ELVS_BCH_VGS001 is used in the following SAS programs:

| Application | SAS Program |
|---|---|
| [BDWH_SCCWVS](../../Applications/BDWH_SCCWVS) | [sccwvs_400_fakt_n_dwh.sas](../../Applications/BDWH_SCCWVS/sccwvs_400_fakt_n_dwh.sas) |
## Table Schema

| Field Name | Datatype | Precision | Scale | Is Nullable | Constraint | Description |
|---|---|---|---|---|---|---|
| MA_LAG_ID | NUMBER | 10 | 0 | TRUE |   | Market Lager ID - Identifier for the market warehouse |
| NAN_ART_ID | NUMBER | 9 | 0 | TRUE |   | NAN Article ID - Identifier for the article |
| KAL_TAG_ID | DATE |  |  | TRUE |   | Calendar Day ID - Date identifier for the calendar day |
| BCH_MENGE | NUMBER | 12 | 3 | TRUE |   | BCH Quantity - Quantity amount for BCH processing |