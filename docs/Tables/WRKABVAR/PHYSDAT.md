# PHYSDAT (Table)

## Table Description

**DWABVARAL** is a data warehouse application that processes **Aral fuel station sales data** from raw file transfers into structured datasets for business intelligence and reporting purposes.

The application handles the complete **ETL pipeline** for Aral point-of-sale transactions, including file movement, decompression, data validation, and transformation. It processes daily sales files containing transaction details such as EAN codes, quantities, prices, VAT information, and station identifiers.

The **PHYSDAT table** serves as a **file inventory registry** that catalogs incoming raw data files during the initial processing stages. It contains metadata about physical data files including filenames, identification codes, and sequential numbering to ensure proper file sequencing and completeness validation.

This table supports **data lineage tracking** and **audit requirements** by maintaining a record of all processed files. The application includes comprehensive error handling for missing files, incorrect sequences, and data quality issues, with automated notifications to Aral business contacts when problems occur.

The processed data ultimately feeds into enterprise data warehouse tables and supports various **retail analytics**, **sales reporting**, and **business intelligence** use cases across the organization.

## Lineage / Impact

```mermaid
%%{init: {'flowchart': { 'nodeSpacing': 10, 'rankSpacing': 40, 'rankdir': 'TB' }}}%%

flowchart LR

  WRKABVAR.PHYSDAT["WRKABVAR<br/>PHYSDAT"] --> WRKABVAR.ARAL_TEST_FOLGEDATEI["WRKABVAR<br/>ARAL_TEST_FOLGEDATEI"]
  click WRKABVAR.PHYSDAT "../../tables/WRKABVAR/PHYSDAT"
  click WRKABVAR.ARAL_TEST_FOLGEDATEI "../../tables/WRKABVAR/ARAL_TEST_FOLGEDATEI"
```

## Statements

The following statements create/modify this table:

<Util>CREATE TABLE</Util> inside [DWABVARAL/abv_aral_unzip.sas](../../Applications/DWABVARAL/abv_aral_unzip.sas):
```sql:line-numbers
DATA WRKABVAR.PHYSDAT (keep=PHYSNAME KENNSATZ LFD_NR_ROHDATEI);
LENGTH PHYSNAME $25 KENNSATZ $8 LFD_NR_ROHDATEI 8.;
did=dopen('abvverz');
do i = 1 to dnum(did);
PHYSNAME=dread(did,i);
LFD_NR_ROHDATEI = input(SUBSTR(PHYSNAME,10,10),10.);
KENNSATZ=COMPRESS(SCAN(PHYSNAME,1,8));
if KENNSATZ eq 'ARAL_ABV' then output;
end;
did=dclose(did);
run;
```

## References

The table PHYSDAT is used in the following SAS programs:

| Application | SAS Program |
|---|---|
| [DWABVARAL](../../Applications/DWABVARAL) | [snow_abv_aral_einlesen.sas](../../Applications/DWABVARAL/snow_abv_aral_einlesen.sas) |
| [DWABVARAL](../../Applications/DWABVARAL) | [abv_aral_move_beweg.sas](../../Applications/DWABVARAL/abv_aral_move_beweg.sas) |
| [DWABVARAL](../../Applications/DWABVARAL) | [abv_aral_unzip.sas](../../Applications/DWABVARAL/abv_aral_unzip.sas) |
## Table Schema

| Field Name | Datatype | Precision | Scale | Is Nullable | Constraint | Description |
|---|---|---|---|---|---|---|
| PHYSNAME | VARCHAR | 19 | 0 | TRUE |   | Physical file name containing ARAL sales data |
| KENNSATZ | VARCHAR | 8 | 0 | TRUE |   | Identifier key extracted from filename |
| LFD_NR_ROHDATEI | INTEGER | 10 | 0 | TRUE |   | Sequential number of raw data file |