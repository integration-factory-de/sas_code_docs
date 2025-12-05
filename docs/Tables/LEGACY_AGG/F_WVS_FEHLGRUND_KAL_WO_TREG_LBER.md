# F_WVS_FEHLGRUND_KAL_WO_TREG_LBER (Table)

## Table Description

_No description available_

## Lineage / Impact

```mermaid
%%{init: {'flowchart': { 'nodeSpacing': 10, 'rankSpacing': 40, 'rankdir': 'TB' }}}%%

flowchart LR

  LEGACY_AGG.F_WVS_FEHLGRUND_KAL_WO_TREG_LBER["LEGACY_AGG<br/>F_WVS_FEHLGRUND_KAL_WO_TREG_LBER"] --> LEGACY_AGG.F_WVS_FEHLGRUND_KAL_WO_TREG_LBER_WG4_MARKE["LEGACY_AGG<br/>F_WVS_FEHLGRUND_KAL_WO_TREG_LBER_WG4_MARKE"]
  click LEGACY_AGG.F_WVS_FEHLGRUND_KAL_WO_TREG_LBER "../../tables/LEGACY_AGG/F_WVS_FEHLGRUND_KAL_WO_TREG_LBER"
  click LEGACY_AGG.F_WVS_FEHLGRUND_KAL_WO_TREG_LBER_WG4_MARKE "../../tables/LEGACY_AGG/F_WVS_FEHLGRUND_KAL_WO_TREG_LBER_WG4_MARKE"
```

## References

The table F_WVS_FEHLGRUND_KAL_WO_TREG_LBER is used in the following SAS programs:

| Application | SAS Program |
|---|---|
| [BDWH_SCCWVS](../../Applications/BDWH_SCCWVS) | [sccwvs_500_wvs_aggregate.sas](../../Applications/BDWH_SCCWVS/sccwvs_500_wvs_aggregate.sas) |
## Table Schema

| Field Name | Datatype | Precision | Scale | Is Nullable | Constraint | Description |
|---|---|---|---|---|---|---|
| NAN_ART_ID | NUMBER | 9 | 0 | TRUE |   | Artikel-ID |
| MA_TREG_LBER_ID | NUMBER | 10 | 0 | TRUE |   | Markt-Traditionsregion-Lieferbereich-ID |
| KAL_WO_ID | NUMBER | 8 | 0 | TRUE |   | Kalender-Wochen-ID |
| MA_LAG_ID | NUMBER | 10 | 0 | TRUE |   | Markt-Lager-ID |
| LIEF_ID | VARCHAR | 6 | 0 | TRUE |   | Lieferanten-ID |
| AKT_KZ | VARCHAR | 1 | 0 | TRUE |   | Aktions-Kennzeichen |
| WAEINH | NUMBER | 6 | 0 | TRUE |   | Wareneinheit |
| FEHL_ART_GRUND_ID | NUMBER | 7 | 0 | TRUE |   | Fehlgrund-ID |
| BEST_MG | NUMBER | 12 | 3 | TRUE |   | Bestellmenge |
| BEST_W_EK_BTO | NUMBER | 12 | 3 | TRUE |   | Bestellwert Einkauf brutto |
| BEST_W_WG_BTO | NUMBER | 12 | 3 | TRUE |   | Bestellwert Warengruppe brutto |
| BEST_W_VK_BTO | NUMBER | 12 | 3 | TRUE |   | Bestellwert Verkauf brutto |
| FEHL_GRUND_MG | NUMBER | 12 | 3 | TRUE |   | Fehlgrund-Menge |
| FEHL_GRUND_W_EK_BTO | NUMBER | 12 | 3 | TRUE |   | Fehlgrund-Wert Einkauf brutto |
| FEHL_GRUND_W_WG_BTO | NUMBER | 12 | 3 | TRUE |   | Fehlgrund-Wert Warengruppe brutto |
| FEHL_GRUND_W_VK_BTO | NUMBER | 12 | 3 | TRUE |   | Fehlgrund-Wert Verkauf brutto |
| WVS_RELEVANT | NUMBER | 2 | 0 | TRUE |   | WVS-Relevanz-Kennzeichen |
| LIEFMG_ANGEPASST | NUMBER | 2 | 0 | TRUE |   | Liefermenge-angepasst-Kennzeichen |