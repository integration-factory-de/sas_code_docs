# LU_D_ARAL_MNG_EINH (Table)

## Table Description

_No description available_

## Lineage / Impact

```mermaid
%%{init: {'flowchart': { 'nodeSpacing': 10, 'rankSpacing': 40, 'rankdir': 'TB' }}}%%

flowchart LR

  STAG.LU_D_ARAL_MNG_EINH["STAG<br/>LU_D_ARAL_MNG_EINH"] --> DMA.LU_D_ARAL_EAN["DMA<br/>LU_D_ARAL_EAN"]
  MANUELL.LU_D_ARAL_MNG_EINH["MANUELL<br/>LU_D_ARAL_MNG_EINH"] --> STAG.LU_D_ARAL_MNG_EINH["STAG<br/>LU_D_ARAL_MNG_EINH"]
  click STAG.LU_D_ARAL_MNG_EINH "../../tables/STAG/LU_D_ARAL_MNG_EINH"
  click MANUELL.LU_D_ARAL_MNG_EINH "../../tables/MANUELL/LU_D_ARAL_MNG_EINH"
  click DMA.LU_D_ARAL_EAN "../../tables/DMA/LU_D_ARAL_EAN"
  click STAG.LU_D_ARAL_MNG_EINH "../../tables/STAG/LU_D_ARAL_MNG_EINH"
```

## Statements

The following statements create/modify this table:


## References

The table LU_D_ARAL_MNG_EINH is used in the following SAS programs:

| Application | SAS Program |
|---|---|
| [DWABVARAL](../../Applications/DWABVARAL) | [snow_abv_aral_verdichtungen.sas](../../Applications/DWABVARAL/snow_abv_aral_verdichtungen.sas) |
| [DWABVARAL](../../Applications/DWABVARAL) | [dw010992.sas](../../Applications/DWABVARAL/dw010992.sas) |
## Table Schema

| Field Name | Datatype | Precision | Scale | Is Nullable | Constraint | Description |
|---|---|---|---|---|---|---|
| ARAL_MNG_ID | INTEGER | 5 | 0 | FALSE |   | Aral Mengeneinheit ID - Verkaufsmengeneinheit als 1 |
| ARAL_VK_MNG_EINH | VARCHAR | 1 | 0 | TRUE |   | Aral Verkaufsmengeneinheit - Original Wert aus Rohdaten |
| ARAL_MNG_EINH | VARCHAR | 3 | 0 | TRUE |   | Aral Basismengeneinheit - Mengeneinheit Bezeichnung |
| ARAL_MNG_EINH_BEZ | VARCHAR | 50 | 0 | TRUE |   | Aral Mengeneinheit Bezeichnung - Beschreibung der Mengeneinheit |