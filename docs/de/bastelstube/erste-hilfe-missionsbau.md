# :ambulance: Erste Hilfe Missionsbau

Die ganze :poop: klappt nicht?
Hier findest Du Lösungen auf die häufigsten Probleme, die beim Missionsbau auftreten – geordnet nach Typ.

::: grad-tip Disclaimer
Es empfiehlt sich, die Anleitung von McDiod einmal komplett gelesen und einmal komplett verstanden zu haben. So eine gute [Dokumentation](https://github.com/gruppe-adler/co_template.vr/wiki) findet man sonst selten.  
:::

## GRAD-Loadout
### _… greift nicht_

:bulb: **Syntaxfehler beim Deklarieren? (Scriptfehler anschalten bzw. RPT prüfen):**
* Klammer zuviel/zu wenig
* Semikolon vergessen
* Klasse der Einheit muss mit Loadoutklasse übereinstimmen
* `B_` bzw. `O_` muss aus Loadoutklasse gekürzt werden, d.h. `Medic_F` statt `B_Medic_F`

:bulb: **Weste/Rucksack überfüllt?**  
:bulb: **Keine Vanilla NATO/CSAT Fraktion benutzt beim Setzen?**


### _… soll nicht greifen_

:bulb: **in `USER/loadouts.hpp` darf keine Faction eingetragen sein**  
  


## Nackte Einheiten
::: grad-danger Kein GRAD-Loadout Bug
Nackte Einheiten entstehen seit einigen ARMA-Versionen beim Ownerwechsel von Zeus-Client auf Dedicated Server/Headless. Workaround dafür 🔜 im Template, dann keine weitere Aktion nötig.
:::
#### :bulb: Ggf. Uniformen-Classnames im Loadout checken. 
Es gibt in Project Opfor Uniformen-Classname-Lücken (bspw. `LOP_Bla_1`, `LOP_Bla_3` aber kein `LOP_Bla_2`)


## Respawn
### _… greift nicht_
:bulb: Respawn Marker alle vorhanden? (müssen heißen: respawn_east, respawn_west, respawn_guerrila, respawn_civilian)

### _… soll nicht greifen_
:bulb: CBA Settings korrekt? ACE-medical: Prevent-Insta-Death sollte dort AN sein


## Medicsettings
:bulb: siehe CBA Settings

## CBA Settings
::: grad-warn Wenn die CBA-Settings nicht greifen, ist etwas grundsätzlich schief
Denn diese sind im CO_Template enthalten und brauchen nicht angefasst werden.
:::
:bulb: CO_Template bringt alle nötigen Settings mit Advanced Medical  
:bulb: **Sofern die Mission nicht im Template erstellt wurde** – manuell im CO_Template speichern und in der neuen Missionsdatei laden: 
1. CO_Template laden, Addon Settings öffnen, Speichern
2. Zielmission laden, Addon Settings öffnen, eben gespeichertes laden
3. Kurz prüfen ob Advanced Medical eingestellt ist (Stichprobe)

## Ganz generell
::: grad-warn Testen bleibt das A und O
Wer seine Mission nicht auf dem Dedicated Server (!) testet, der hat auch keine Chance Probleme rechtzeitig zu entdecken.
:::