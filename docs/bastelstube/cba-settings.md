# :gear: CBA Settings

## Wo finde ich die aktuellen Settings
:bulb: [CO_Template](https://github.com/gruppe-adler/CO_Template.VR/releases)/[TvT_Template](https://github.com/gruppe-adler/TvT_Template.VR/releases) öffnen und unter **Settings** - **ADDON OPTIONS** schauen.

## Anpassen der Settings
::: tip
Das CO_Template bzw. das TvT_Template bringen alle nötigen CBA-Settings mit. Eine Anpassung ist also nur nötig, wenn an bestimmten Punkten vom Standard abgewichen werden soll. **Dann genügt es, das einzelne Setting anzupassen und die Mission zu speichern.** Nicht vergessen, beim nächsten Mal wieder ein "frisches" Template zu nehmen.
:::

## Settings auf dem Server
Es gibt eine einfache Möglichkeit zu prüfen, welches Setting greift (Settingsmenü erreichbar auf dem Server über ESC - Addon-Options). 
* Grüner Haken: Setting ist aktiv. 
* Rotes Kreuz: Setting wird von der höheren Instanz (SERVER > MISSION > CLIENT) überschrieben **oder** ist sowohl bei MISSION als auch SERVER auf ACE Default, d.h. identisch

::: warning Faustregel
**Vom ACE Default abweichende Settings überschreiben den Server.**
* Setting in MISSION ist auf ACE Default: Serversetting greift (nicht zwingend abweichend)
* Setting in MISSION ist auf ACE Default, aber soll Server überschreiben: Haken setzen bei *Overwrite Clients*
* Setting in MISSION abweichend vom ACE Default: Missionssetting greift
:::


## Was wird vom Server geforced?
"Richtig" forcen, d.h. `force force` ohne Möglichkeit seitens MISSION zu überschreiben machen wir nur bei sehr wenigen, nicht gameplayrelevanten Settings, Stand 05.08.2018:

```sqf
force force grad_versionCheck_setting_dontKickAdmin = true;
force force grad_versionCheck_setting_kickOnMissingClient = true;
force force grad_versionCheck_setting_kickOnMissingServer = true;
force force grad_versionCheck_setting_kickOnTimeout = false;
force force grad_versionCheck_setting_kickOnVersionMismatch = true;

force force STHud_Settings_Occlusion = true;
force force STHud_Settings_RemoveDeadViaProximity = true;
force force STHud_Settings_SquadBar = true;

force force ace_common_checkPBOsAction = 0;
force force ace_common_checkPBOsCheckAll = false;

force force ace_common_checkPBOsWhitelist = [...];
```


> **Obige Einstellungen können im laufenden Spiel nicht geändert werden und sind für alle Server gültig.**