# :file_folder: Gruppe Adler Modset
## Einleitung
Die Gruppe Adler benutzt ein Repository (Repo) aus verschiedenen Mods um die Spielerfahrung auf unsere Bedürfnisse anzupassen.

[Für die Aktualisierung verwenden wir Arma3Sync (A3S)](#repository-anlegen-und-konfigurieren)

## Übersicht

Die Gruppe Adler benutzt im Wesentlichen folgende Mods:

* Advanced Combat Environment 3 (ACE3)
* Community Upgrade Project Terrains (CUP)
* Red Hammer Studios Mods (RHS)
* Task Force Arrowhead Radio (TFAR)

Eine vollständige und detaillierte Übersicht mit allen Mods einschließlich Versionsnummern und Quellenlinks ist im Forum zu finden: [Gruppe Adler Mod-Paket Forenlink](https://forum.gruppe-adler.de/topic/361)

## Aufteilung des Repository

Unser Repository beinhalten insgesamt drei Events (oder auch im folgenden Modsets genannt). Abhängig davon, bei welchen Spieltagen teilgenommen werden soll, werden nicht alle Mods benötigt.

* **Gruppe Adler Main**: Dieses Modset enthält alle Mods, welche für normale Spieltage gebraucht werden.
* **Gruppe Adler Event**: Dieses Modset ist eine Teilmenge des _Gruppe Adler Main_, enthält aber nur die absolut nötigsten Mods. Wir benutzen dieses Modsets wenn Partnerclans bei uns zu Gast sind.
* **Gruppe Adler Optionals**: Hier findest du alle optionalen Addons die du mitladen darfst, aber nicht musst. Hierbei handelt es sich ausschließlich um Addons die nur lokale Auswirkungen haben (Sound, Userinterface etc.)

## Repository anlegen und konfigurieren

### Installation Arma3Sync
Für das Herunterladen und die Synchronisation der Mods wird Arma3Sync benötigt. Die aktuelle Version ist [hier zu finden](http://www.armaholic.com/page.php?id=22199). Diese einfach herunterladen und installieren.

### Anlegen eines neuen Profils
Es ist zwar nicht unbedingt notwenig, aber empfehlenswert für jedes neues Repository ein neues Profil zu erstellen um Fehler vorzubeugen.  

Ein neues Profil lässt sich unter `Profiles` → `Edit` → `New` erstellen.  
::: warning
Nachdem das neue Profil erstellt wurde sollte Arma3Sync neu gestartet werden.
:::

![create_profile](~@assets/gruppe-adler-modset/create-profile.jpg)

### Grundlegende Einstellungen

Im Tab `Launcher Options` sind die grundlegenden Einstellungen zu finden.
Hier kann alles vom Arma 3 Installations Pfad bis zu Startup Parameter konfiguriert werden.
Die Einstellungen die vorgenommen werden müssen sind:
* `Profile` - Hier das Arma-Profil mit dem gewünschten Nickname auswählen
* `Enable Battleye` - Da Battleye manchmal zu Problemen führt, da es teilweise Komponenten von Mods blockiert, kann es bei uns auf den Servern ausgeschaltet werden.
* `ArmA III Executable Location (game/server)` - Hier den Pfad zur _arma3_x64.exe_ angeben. Diese lässt sich im Arma Installations Verzeichnis zu finden.
::: tip
Das Arma Installations Verzeichnis lässt sich folgendermaßen finden:  
Steam öffnen → Rechtsklick auf Arma 3 → _Eigenschaften_ → _Lokale Dateien_ → _Lokale Dateien durchsuchen_
:::

![launcher-options](~@assets/gruppe-adler-modset/launcher-options.jpg)

Im Tab `Addon Options` muss nun noch ein Ordner eingestellt werden, in welchem nachher die Mods gespeichert werden. Dazu einfach rechts auf das blaue Kreuz klicken und den gewünschten Pfad auswählen.
::: warning
Um Fehler zu vermeiden sollte als Verzeichnis nicht das Arma-Verzeichnis gewählt werden, da sonst Probleme mit Workshop-Mods aus Steam entstehen könnten, bei denen A3S nicht eindeutig bestimmen kann, welche Variante des Mods gepatcht bzw. geladen werden soll.

Falls die Mods dennoch im Arma-Verzeichnis liegen sollen, sollte mindestens ein Ordner _"Gruppe Adler Mods"_ im Arma-Verzeichnis erstellt und gewählt werden.
:::

![addon-options](~@assets/gruppe-adler-modset/addon-options.jpg)

### Anlegen des Repository
Ein neues Repository lässt sich im `Repository` Tab anlegen.  
Hierzu - auf der rechten Seite - auf das blaue Kreuz klicken. Im neu geöffnetem Fenster das Folgende in das Feld `Public auto-config url` eintragen:  
<span class="grad--color-fuehrung">`http://gruppe-adler.de/arma3sync/.a3s/autoconfig`</span>  
Danach auf `Import` drücken. Die Verbindung war erfolgreich wenn über dem Eingabefeld <span class="grad--color-gastspieler">_Connection success!_</span> steht.

![new-repository](~@assets/gruppe-adler-modset/new-repository.jpg)

::: tip
A3S bietet im Tab `Repositories` für alle Repositories noch folgende hilfreiche Einstellungen:
* **Notify:** A3S zeigt beim Starten an, wenn dieses Repo ein Update erhalten hat.
* **Auto:** A3S aktualisiert das Repo automatisch, sobald ein Update verfügbar ist. (Hierzu muss A3S natürlich laufen)
:::

## Repository aktualisieren

Jedes mal wenn Mods geupdatet werden müssen folgende Schritte befolgt werden um beim nächsten Spieltag ohne Probleme spielen zu können.

### Mit Repository verbinden
In der Liste der Events **(untere Liste!)** das gewünschte Event auswählen und rechts neben der Liste auf den Knopf mit dem blauen Pfeil klicken.

![connect-to-repository](~@assets/gruppe-adler-modset/connect-to-repository.jpg)

Ein neuer Tab mit dem gewählten Event erscheint. Hier muss unter `Default destination folder` das Verzeichnis, welches unter [Grundlegende Einstellungen](#grundlegende-einstellungen) erstellt wurde, gewählt werden.  
Mit dem Knopf mit dem grünen Haken kann die Aktualität der Mods überprüft werden. Dieser Prozess kann - gerade beim aller ersten Mal - einige Minuten dauern.

![sync-mods](~@assets/gruppe-adler-modset/sync-mods.jpg)

### Mods aktualisieren
Alle Mods, die mit einem gelben Warnzeichen versehen sind, müssen aktualisiert werden.  
* **Rot** - neue Mod  
* **Blau** - Mod wird gelöscht  
* **Schwarz (mit gelben Warnzeichen)** - Mod wird aktualisiert

Der Download wird mit dem schwarzen Play Knopf gestartet.

::: tip
Um eine höchst mögliche Downloadgeschwindigkeit zu gewährleisten sollte die Anzahl der maximal aktiven Verbindungen auf den maximalen Wert gestellt werden `Settings` → `Maximum number of connections`
:::

![max-connections](~@assets/gruppe-adler-modset/max-connections.jpg)

### Anlegen einer Addon Group

Als letzten Schritt muss eine sog. _Addon Group_ erstellt werden. Diese befinden sich im ersten Tab `Addons`. Mit Addon Groups lässt sich bestimmen welchen Mods mit Arma gestartet werden. Alle angehakten Mods werden mit gestartet.  
Um eine Addon Group aus einem Modset zu erstellen auf den Knopf `Modsets` drücken. In dem erschienen Fenster das gewünschte Event auswählen und mit `OK` bestätigen.

::: warning
Sobald Mods zum Repository hinzukommen oder rausfliegen sollte auf jeden Fall die Addon Group neu erstellt werden. Dazu erst die alte Addon Group per Rechtsklick löschen und danach den Schritten unter [Anlegen einer Addon Group](#anlegen-einer-addon-group) folgen.
:::

![create-addon-group](~@assets/gruppe-adler-modset/create-addon-group.jpg)

### Testconnect auf Server

Ein kurzer Testconnect auf den Server, um zu überprüfen ob alles korrekt läuft, ist immer empfehlenswert. Auf unserem Standardserver ist die Adlerbase rund um die Uhr erreichbar und stets auf dem neusten Stand.

## Installation TFAR

Die Gruppe Adler benutzt Task Force Arrowhead Radio (TFAR) um eine ausreichend gute Kommunikation zu gewährleisten.  
TFAR benötigt ein Teamspeak (TS) Plugin um korrekt zu funktionieren, welches separat in TS installiert werden muss. Dazu ins Mod-Verzeichnis, welches unter [Grundlegende Einstellungen](#grundlegende-einstellungen) erstellt wurde wechseln. Im Unterverzeichnis `@tfar\teamspeak` befindet sich die Datei `task_force_radio.ts3_plugin`. Ein einfacher Doppelklick auf die Datei installiert das Plugin.

::: tip
Um das Plugin zu installieren darf keine Instanz des Teamspeak 3 Clients laufen.
:::

Im TS sollte nun, wenn man den eigenen Nutzer auswählt, rechts ein Abschnitt _Task Force Radio Status_ vorhanden sein.

![teamspeak](~@assets/gruppe-adler-modset/teamspeak.jpg)



## GM
**GM wird immer mitgeladen - sofern nichts anderes im Einsatz-Thread steht**

Für Nichtbesitzer des CDLC gibt es einen kostenlosen [**Compat-Mod** ]( https://steamcommunity.com/sharedfiles/filedetails/?id=1776428269 )
Dafür muss folgender Startup Parameter in das unten gezeigte A3S Inputfeld: 
`"-mod=s:\...\arma 3\arma3sync_MyMods\@GM;"`
**Die Anführungszeichen sind wichtig!**
:::
![gm.PNG](https://i.imgur.com/SmAD9es.png) 
:::

Für Besitzer des **DLC** :
GM im Reiter "DLC" unter _Addons_ in selber neu erstellte Addon Group rechts ziehen und mit dem jeweiligen Event-Repo zusätzlich anhaken.

##  [🗃](https://emojipedia.org/card-file-box/) Repos

### Main/Joint Op

| Name                                                         | Version        | Anmerkung |
| ------------------------------------------------------------ | -------------- | --------- |
| [ACE3]( https://armaworld.de/index.php?thread/492-ace3-release) | 3.12.6         |           |
| [ace_compat_rhs_afrf3]( https://armaworld.de/index.php?thread/492-ace3-release) | 3.12.6         |           |
| [ace_compat_rhs_gref3]( https://armaworld.de/index.php?thread/492-ace3-release) | 3.12.6         |           |
| [ace_compat_rhs_usf3 ]( https://armaworld.de/index.php?thread/492-ace3-release) | 3.12.6         |           |
| [ace_optionals]()                                            | 3.12.6         |           |
| [ACEX](http://www.armaholic.com/page.php?id=31252)           | 3.4.2          |           |
| [Advanced Sling Loading](https://steamcommunity.com/sharedfiles/filedetails/?id=615007497) | 2.1.1          |           |
| [Advanced Sling Loading](https://steamcommunity.com/sharedfiles/filedetails/?id=615007497) | 2.1.1          |           |
| [BackpackOnChest ](http://www.armaholic.com/page.php?id=28838) | 1.2.0          |           |
| [CBA Community Base addons A3](https://github.com/CBATeam/CBA_A3/releases/tag/v3.12.0.190708) | v3.12.2.190909 |           |
| [CUP Terrains Core](https://steamcommunity.com/workshop/filedetails/?id=583496184) | 1.13.0         |           |
| [CUP Terrains Maps](https://steamcommunity.com/sharedfiles/filedetails/?id=583544987) | 1.13.0         |           |
| [cup_wheeledvehicles_suv ]()                                 | 1.0            |           |
| [Dismount where you look](https://steamcommunity.com/sharedfiles/filedetails/?id=1841553455) | 1.03           |           |
| [DUI Squad Radar ](https://github.com/diwako/diwako_dui/)    | 1.5.6          |           |
| [FHQ Accessories pack](http://www.armaholic.com/page.php?id=20393) | 1.7.1          |           |
| [Enhanced Movement](https://steamcommunity.com/sharedfiles/filedetails/?l=german&id=333310405) | 0.8.4.15       |           |
| [Grad_slinghelmet ](https://github.com/DerZade/grad_slinghelmet/releases) | 1.2            |           |
| [Grad_trenches](https://github.com/gruppe-adler/grad_trenches/releases) | 1.5.8          |           |
| [Gruppe_Adler_Mod](https://github.com/gruppe-adler/gruppe_adler_mod/releases ) | 2.13.6         |           |
| [Gruppe_Adler_Additionals](https://github.com/gruppe-adler/gruppe_adler_mod/releases ) | 2.4            |           |
| [GM Demo Vehicle](https://steamcommunity.com/sharedfiles/filedetails/?id=1284731930) | 1.37           |           |
| [GlobMob Tweaks](https://steamcommunity.com/sharedfiles/filedetails/?id=1749842400) | 1.02           |           |
| [JBAD Buildings](https://steamcommunity.com/workshop/filedetails/?id=520618345) | 0.7.0917       |           |
| [Lythium Map ](https://steamcommunity.com/sharedfiles/filedetails/?id=909547724) | 1.09           |           |
| [MBG Buildings 3](https://steamcommunity.com/workshop/filedetails/?id=962932583) | 1.0            |           |
| [NIArsenal](http://www.armaholic.com/page.php?id=28329)      | 12             |           |
| [Prei Khmaoch Luong](http://steamcommunity.com/sharedfiles/filedetails/?id=950966660 ) | 0.8            |           |
| [Project OPFOR](http://steamcommunity.com/sharedfiles/filedetails/?id=735566597 ) | 0.3.0          |           |
| [Redd'n'Tank Vehicles](http://steamcommunity.com/sharedfiles/filedetails/?id=1128145626) | 1.11.157.03    |           |
| [RHS Rus -RHSAFRF](https://steamcommunity.com/sharedfiles/filedetails/?id=843425103) | 0.4.9          |           |
| [RHS USA - RHSUSAF](https://steamcommunity.com/sharedfiles/filedetails/?id=843577117) | 0.4.9          |           |
| [RHS Ind - RHSGREF](https://steamcommunity.com/sharedfiles/filedetails/?id=843593391) | 0.4.9          |           |
| [RHS Ser - RHSSAF](https://steamcommunity.com/sharedfiles/filedetails/?id=843632231) | 0.4.9          |           |
| [RDS A2 Civilian Pack](http://www.armaholic.com/page.php?id=26188) | 1.3.1          |           |
| [Rosche Map](https://steamcommunity.com/sharedfiles/filedetails/?id=1527410521) | 1.12           |           |
| [Ruha Map](https://steamcommunity.com/sharedfiles/filedetails/?id=1368857262) | 0.11           |           |
| [SMM German Uniforms ]()                                     | 0.98           |           |
| [Splendid Smoke](http://steamcommunity.com/sharedfiles/filedetails/?id=770418577&searchtext=splendid) | 1.1            |           |
| [TFAR](https://github.com/michail-nikolaev/task-force-arma-3-radio/releases/tag/1.0-PreRelease ) | 1.-1.0.325     |           |
| [Tembelan Island ](https://steamcommunity.com/sharedfiles/filedetails/?id=1252091296) | 1.2            |           |
| [Vinjesvingen ]()                                            | 1.21           |           |
| [Vet Unflipping](https://steamcommunity.com/sharedfiles/filedetails/?id=1703187116) | 1.30           |           |
| [ZEN ](https://github.com/zen-mod/ZEN/releases )             | 1.5.0          |           |

### Optionals

| Name                                                         | Version | Anmerkung                                                    |
| ------------------------------------------------------------ | ------- | ------------------------------------------------------------ |
| [Blastcore edited standalone](http://steamcommunity.com/sharedfiles/filedetails/?id=767380317) | 1.7     | [⚠️](https://emojipedia.org/warning-sign/) ggf. Performance-intensiv, verändert FX |
| [DynaSound2](http://www.armaholic.com/page.php?id=29810)     | 2.21.01 | Verändert Sounds, teilweise Reichweite der Sounds            |
| [Enhanced Arma3 Inventory](https://steamcommunity.com/sharedfiles/filedetails/?id=809527168) | 1.2     | Zeigt Armor-Werte im Inventar                                |
| [GRAD MinUI ](https://github.com/DerZade/grad_minui/releases) | v0.6.3  | [⚠️](https://emojipedia.org/warning-sign/) Entfernt große Teile des UI |
| [Enhanced Video Settings](https://steamcommunity.com/sharedfiles/filedetails/?id=1223309664) | 0.9     | [⚠️](https://emojipedia.org/warning-sign/) Performance-intensiv, verändert FX, **verändert Video Settings vom Spiel** |
| [Enhanced Soundscape](https://steamcommunity.com/sharedfiles/filedetails/?id=825179978) | 1.23    | Verändert Sounds, teilweise Reichweite der Sounds, Echos     |
| [Head Range Plus - TrackIR Mod](https://steamcommunity.com/sharedfiles/filedetails/?id=630737877) | v2.9.1  | Erlaubt größeren Spielraum für FreeLook                      |
| [Immerse ](https://steamcommunity.com/sharedfiles/filedetails/?id=825174634) | V 2.04  | Verändert FX, u.a. Camshake, Twitches bei Schüssen/Explosionen |
| [Suppress](https://steamcommunity.com/sharedfiles/filedetails/?id=825174634) | 2.04    | Verändert FX, erlaubt Unterdrückung                          |
| [Tao Folding Map ](http://forums.bistudio.com/showthread.php?148517-Tao-Folding-Map) | 2.70    | Fügt eine halbbildschirmgroße Karte hinzu                    |
| [UISounds 2 ](https://steamcommunity.com/sharedfiles/filedetails/?id=790393813) | 2.0     | Fügt Inventar u.a. Sounds hinzu                              |



<style>
img {
    max-height: 300px;
}
</style>