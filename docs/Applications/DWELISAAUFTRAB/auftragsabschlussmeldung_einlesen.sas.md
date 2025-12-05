# auftragsabschlussmeldung_einlesen.sas (SAS Program)

## Program Description

_No description available_

## Table Lineage

```mermaid
%%{init: {'flowchart': { 'nodeSpacing': 10, 'rankSpacing': 40, 'rankdir': 'TB' }}}%%

flowchart LR

  WK_AUFAB.XML_DIRLIST["WK_AUFAB<br/><b>XML_DIRLIST</b>"] --> WK_AUFAB.AUFAB_01["WK_AUFAB<br/><b>AUFAB_01</b>"]
  WK_AUFAB.AUFAB_01["WK_AUFAB<br/><b>AUFAB_01</b>"] --> WK_AUFAB.PROT_F_ELISA_AUFTRAGSABSCHLUSS["WK_AUFAB<br/><b>PROT_F_ELISA_AUFTRAGSABSCHLUSS</b>"]
  click WK_AUFAB.XML_DIRLIST "../../tables/WK_AUFAB/XML_DIRLIST"
  click WK_AUFAB.AUFAB_01 "../../tables/WK_AUFAB/AUFAB_01"
  click WK_AUFAB.PROT_F_ELISA_AUFTRAGSABSCHLUSS "../../tables/WK_AUFAB/PROT_F_ELISA_AUFTRAGSABSCHLUSS"
  click WK_AUFAB.AUFAB_01 "../../tables/WK_AUFAB/AUFAB_01"
  click WK_AUFAB.XML_DIRLIST "../../tables/WK_AUFAB/XML_DIRLIST"
```
