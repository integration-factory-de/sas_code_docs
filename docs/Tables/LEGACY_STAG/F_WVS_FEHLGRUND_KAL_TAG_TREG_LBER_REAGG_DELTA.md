# F_WVS_FEHLGRUND_KAL_TAG_TREG_LBER_REAGG_DELTA (Table)

## Table Description

_No description available_

## Lineage / Impact

```mermaid
%%{init: {'flowchart': { 'nodeSpacing': 10, 'rankSpacing': 40, 'rankdir': 'TB' }}}%%

flowchart LR

```

## References

The table F_WVS_FEHLGRUND_KAL_TAG_TREG_LBER_REAGG_DELTA is used in the following SAS programs:

| Application | SAS Program |
|---|---|
## Table Schema

| Field Name | Datatype | Precision | Scale | Is Nullable | Constraint | Description |
|---|---|---|---|---|---|---|
| NAN_ART_ID | NUMBER | 38 | 0 | TRUE |   | Artikel-ID |
| MA_TREG_LBER_ID | NUMBER | 38 | 0 | TRUE |   | Markt Teilregion Lieferbereich ID |
| KAL_TAG_ID | DATE |  |  | TRUE |   | Kalendertag ID |
| MA_LAG_ID | NUMBER | 38 | 0 | TRUE |   | Markt Lager ID |
| LIEF_ID | VARCHAR | 6 |  | TRUE |   | Lieferanten ID |
| AKT_KZ | VARCHAR | 1 |  | TRUE |   | Aktionskennzeichen |
| WAEINH | NUMBER | 38 | 0 | TRUE |   | Wareneinheit |
| FEHL_ART_GRUND_ID | NUMBER | 38 | 0 | TRUE |   | Fehlgrund Art ID |
| BEST_MG | NUMBER | 32 | 10 | TRUE |   | Bestellmenge |
| BEST_W_EK_BTO | NUMBER | 32 | 10 | TRUE |   | Bestellwert Einkauf brutto |
| BEST_W_WG_BTO | NUMBER | 32 | 10 | TRUE |   | Bestellwert Warengruppe brutto |
| BEST_W_VK_BTO | NUMBER | 32 | 10 | TRUE |   | Bestellwert Verkauf brutto |
| FEHL_GRUND_MG | NUMBER | 32 | 10 | TRUE |   | Fehlgrundmenge |
| FEHL_GRUND_W_EK_BTO | NUMBER | 32 | 10 | TRUE |   | Fehlgrundwert Einkauf brutto |
| FEHL_GRUND_W_WG_BTO | NUMBER | 32 | 10 | TRUE |   | Fehlgrundwert Warengruppe brutto |
| FEHL_GRUND_W_VK_BTO | NUMBER | 32 | 10 | TRUE |   | Fehlgrundwert Verkauf brutto |
| WVS_RELEVANT | NUMBER | 38 | 0 | TRUE |   | WVS Relevanz Kennzeichen |
| LIEFMG_ANGEPASST | NUMBER | 38 | 0 | TRUE |   | Liefermenge angepasst Kennzeichen |