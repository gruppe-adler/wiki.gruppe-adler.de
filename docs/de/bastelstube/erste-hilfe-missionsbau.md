# Erste Hilfe Missionsbau

Die ganze &§$%%! klappt nicht?
Hier findest Du Lösungen auf die häufigsten Probleme, die beim Missionsbau auftreten – geordnet nach Typ.




## GRAD-Loadout
### … greift nicht

:bulb: **Syntaxfehler beim Deklarieren? (Scriptfehler anschalten bzw. RPT prüfen):**
* Klammer zuviel/zu wenig
* Semikolon vergessen
* Klasse der Einheit muss mit Loadoutklasse übereinstimmen
* `B_` bzw. `O_` muss aus Loadoutklasse gekürzt werden, d.h. `Medic_F` statt `B_Medic_F`

:bulb: **Weste/Rucksack überfüllt?**  
:bulb: **Keine Vanilla NATO/CSAT Fraktion benutzt beim Setzen?**


### … soll nicht greifen

:bulb: **in `USER/loadouts.hpp` darf keine Faction eingetragen sein (CO_Template)**  
  


## Nackte Einheiten
::: grad-danger Kein GRAD-Loadout Bug
Nackte Einheiten entstehen seit einigen ARMA-Versionen beim Ownerwechsel von Zeus-Client auf Dedicated Server/Headless. Workaround dafür 🔜 im Template, dann keine weitere Aktion nötig.
:::
#### :bulb: Ggf. Uniformen-Classnames im Loadout checken. 
Es gibt in Project Opfor Uniformen-Classname-Lücken (bspw. `LOP_Bla_1`, `LOP_Bla_3` aber kein `LOP_Bla_2`)


## Respawn
### … greift nicht
:bulb: Respawn Marker alle vorhanden? (müssen heißen: respawn_east, respawn_west, respawn_guerrila, respawn_civilian)

### … soll nicht greifen
:bulb: CBA Settings korrekt? ACE-medical: Prevent-Insta-Death sollte dort AN sein


## Medicsettings
:bulb: siehe CBA Settings

## CBA Settings
:bulb: CO_Template bringt alle nötigen Settings mit Advanced Medical   
:bulb: CBA-Settings müssen – **sofern die Mission nicht im Template erstellt wurde** – manuell im CO Template gespeichert und in der neuen Missionsdatei geladen werden: 
1. CO_Template laden, Addon Settings öffnen, Speichern
2. Zielmission laden, Addon Settings öffnen, eben gespeichertes laden
3. Kurz prüfen ob Advanced Medical eingestellt ist (Stichprobe)

## Ganz generell
::: grad-warn Testen bleibt das A und O
Wer seine Mission nicht auf dem Dedicated Server (!) testet, der hat auch keine Chance Probleme rechtzeitig zu entdecken.
:::