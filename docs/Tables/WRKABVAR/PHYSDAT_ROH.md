# PHYSDAT_ROH (Table)

## Table Description

**DWABVARAL** is a data warehouse application that processes **Aral fuel station sales data** from raw file transfers into structured datasets for business intelligence and reporting purposes.

This table serves as an **initial inventory dataset** that identifies and catalogs raw Aral sales data files received from external file transfer processes. The table is created during the first step of the ETL pipeline to **scan and validate** incoming data files before processing.

The application handles the complete **end-to-end processing workflow** including: file movement from staging directories, data extraction and transformation, sales transaction processing with pricing and tax calculations, article and market ID mapping, and final preparation for data warehouse loading. It includes comprehensive **error handling and validation** mechanisms to ensure data quality and process reliability.

The table specifically contains metadata about **physical data files** including file names, identification codes, and file counts, enabling the system to track and process multiple data deliveries systematically. This supports the application's ability to handle **sequential file processing** and maintain data lineage throughout the ETL process.

## Lineage / Impact

```mermaid
%%{init: {'flowchart': { 'nodeSpacing': 10, 'rankSpacing': 40, 'rankdir': 'TB' }}}%%

flowchart LR

```

## Statements

The following statements create/modify this table:

<Util>CREATE TABLE</Util> inside [DWABVARAL/abv_aral_move_beweg.sas](../../Applications/DWABVARAL/abv_aral_move_beweg.sas):
```sql:line-numbers
data WRKABVAR.physdat_roh (keep=physname kennsatz anz);
LENGTH physname $50
anz 8
kennsatz $8;
anz = 0;
did=dopen('abvverz');
do i = 1 to dnum(did);
physname=dread(did,i);
kennsatz=COMPRESS(SCAN(physname,1,4));
if kennsatz eq 'ARAL_ABV' then do;
anz = anz + 1; output; end;
end;
did=dclose(did);
run;
```

## References

The table PHYSDAT_ROH is used in the following SAS programs:

| Application | SAS Program |
|---|---|
| [DWABVARAL](../../Applications/DWABVARAL) | [abv_aral_move_beweg.sas](../../Applications/DWABVARAL/abv_aral_move_beweg.sas) |
## Table Schema

| Field Name | Datatype | Precision | Scale | Is Nullable | Constraint | Description |
|---|---|---|---|---|---|---|
| physname | VARCHAR | 50 | 0 | TRUE |   | Physical file name from directory listing |
| kennsatz | VARCHAR | 8 | 0 | TRUE |   | File identifier extracted from filename |
| anz | INTEGER | 8 | 0 | TRUE |   | Counter for matching files |