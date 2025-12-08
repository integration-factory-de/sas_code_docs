# F_ELVS_BO (Table)

## Table Description

**F_ELVS_BO** is a core fact table within the **BDWH_SCCWVS** application that supports the **WVS (WarenVersorgungsStatistik)** - Goods Supply Statistics system. This application is part of a parallel environment setup in PRODUCT_SCC_PROD designed to replace the legacy LEGACY_DWH system.

The table serves as a critical data source for supply chain analytics and goods movement tracking. It contains detailed information about goods deliveries, order processing, and inventory movements across various warehouse locations. The table is primarily used in the **sccwvs_030_wvs_erst_lief_aus_stkl20.sas** script to determine suppliers for WVS calculations by analyzing delivery data from the last 30 days.

Key usage includes tracking **NVE (Nummer der Versandeinheit)** delivery units, processing delivery quantities and values, and supporting supplier identification processes for articles with specific bill-of-materials configurations (Stückliste 20). The table integrates with warehouse management systems and provides essential data for calculating supply statistics, delivery performance metrics, and inventory analysis across the retail supply chain network.

This table is essential for the WVS calculation pipeline, particularly in jobs that process goods receipt data and determine optimal supplier relationships for future deliveries.

## Lineage / Impact

```mermaid
%%{init: {'flowchart': { 'nodeSpacing': 10, 'rankSpacing': 40, 'rankdir': 'TB' }}}%%

flowchart LR

```

## Statements

The following statements create/modify this table:


## References

The table F_ELVS_BO is used in the following SAS programs:

| Application | SAS Program |
|---|---|
## Table Schema

| Field Name | Datatype | Precision | Scale | Is Nullable | Constraint | Description |
|---|---|---|---|---|---|---|