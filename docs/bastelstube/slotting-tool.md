# ⭕ Slotting-Tool

::: warning
Das [Slotting-Tool](https://github.com/gruppe-adler/slotting.gruppe-adler.de) ermöglicht das Erstellen einer Slotliste fürs Forum oder externe Gäste
:::

:::danger Bekannte Einschränkungen

* Keine Mobilfähigkeit Slotliste-Editieren-Screen
* Reservierungen im Backend unsichtbar
* Keine uuids im Frontend, Duplizieren schlägt ggf fehl
* Kein Dialog mehr zum Slotkick, wenn man dazu ohnehin keine Rechte hat
* sowie [Issues auf Github](https://github.com/gruppe-adler/slotting.gruppe-adler.de/issues)
:::

### Beginn
In einem Thread im Einsätze-Forum mit korrekter Syntax im Titel (YYYY-MM-DD, ...) erscheint ein Slotliste-Hinzufügen-Button im ersten Beitrag:

![container-structure](~@assets/slotting/Slotbutton.jpg)

_Hinweis: Threaddatum muss in der Zukunft liegen (spätestens selber Tag 19.59 Uhr)_

### Struktur erstellen
Die Struktur kann mit Drag + Drop aus den Elementen rechts erstellt werden.

### Editieren und Löschen
Editieren und Löschen geht über das Kontextmenü oben rechts an einer Slotliste.
![container-structure](~@assets/slotting/Editbutton.jpg)

### UUIDs
Schaltet man auf XML-Ansicht, sieht man in jedem Slot auch eine uuid. Diese ist einmalig für diesen Slot, an ihr hängt der Spieler. Mehrere identische UUIDs führen zu Fehlern. Deshalb beim Duplizieren immer rauslöschen (nicht nötig beim erstmaligen Erstellen, da sie erst nach Absenden generiert werden).

### XML Attribute
Einzelne XML-Attribute können nicht im Interface gesetzt werden (momentane Limitation des Tools). Diese sind:

`side`
**beliebige Buchstaben/Zahlen, empfohlen BLUFOR/OPFOR/INDEPENDENT/CIVILIAN**
momentan färben nur Blufor und Opfor die Linie oben entsprechend ein

`callsign`
**beliebige Buchstaben/Zahlen**
wird automatisch in Versalien (Großbuchstaben) dargestellt

`frequency`
**Funkfrequenz**
beliebige Buchstaben/Zahlen, MHz wird automatisch ergänzt

`natosymbol`
**nicht bei Slot/Fireteam anwendbar**

`vehicletype`
**Fahrzeugtyp, Mouseover über Natosymbol, nicht bei Slot/Fireteam anwendbar**
beliebige Buchstaben/Zahlen

