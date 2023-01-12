import{_ as e,x as t,y as r,D as n}from"./framework-3f51f5be.js";const a="/assets/create-profile-0e4e3d4f.jpg",d="/assets/launcher-options-c24eeb31.jpg",i="/assets/addon-options-42745df1.jpg",s="/assets/new-repository-bc47dfe2.jpg",o="/assets/connect-to-repository-8142fc4f.jpg",l="/assets/sync-mods-1367c548.jpg",h="/assets/max-connections-5aedfb89.jpg",m="/assets/create-addon-group-29b00a0b.jpg",p="/assets/gm-66ccc9e3.jpg",c="/assets/teamspeak-dbc97f17.jpg";const u={},g=n('<h1 id="gruppe-adler-modset" tabindex="-1"><a class="header-anchor" href="#gruppe-adler-modset" aria-hidden="true">#</a> 📁 Gruppe Adler Modset</h1><h2 id="einleitung" tabindex="-1"><a class="header-anchor" href="#einleitung" aria-hidden="true">#</a> Einleitung</h2><p>Die Gruppe Adler benutzt ein Repository (Repo) aus verschiedenen Mods um die Spielerfahrung auf unsere Bedürfnisse anzupassen.</p><p><a href="#repository-anlegen-und-konfigurieren">Für die Aktualisierung verwenden wir Arma3Sync (A3S)</a></p><h2 id="ubersicht" tabindex="-1"><a class="header-anchor" href="#ubersicht" aria-hidden="true">#</a> Übersicht</h2><p>Die Gruppe Adler benutzt im Wesentlichen folgende Mods:</p><ul><li>Advanced Combat Environment 3 (ACE3)</li><li>Community Upgrade Project Terrains (CUP TP)</li><li>Red Hammer Studios Mods (RHS)</li><li>Task Force Arrowhead Radio (TFAR)</li></ul><p><a href="#modliste">Vollständige Übersicht aller Mods mit Versionsnummer und Quellenlink</a></p><h2 id="aufteilung-des-repository" tabindex="-1"><a class="header-anchor" href="#aufteilung-des-repository" aria-hidden="true">#</a> Aufteilung des Repository</h2><p>Unser Repository beinhalten insgesamt drei Events (oder auch im folgenden Modsets genannt). Abhängig davon, bei welchen Spieltagen teilgenommen werden soll, werden nicht alle Mods benötigt.</p><ul><li><strong>Gruppe Adler Main</strong>: Dieses Modset enthält alle Mods, welche für normale Spieltage gebraucht werden.</li><li><strong>Gruppe Adler Joint Ops</strong>: Dieses Modset ist eine Teilmenge des <em>Gruppe Adler Main</em>, enthält aber nur die absolut nötigsten Mods. Wir benutzen dieses Modsets wenn Partnerclans bei uns zu Gast sind.</li><li><strong>Gruppe Adler Optionals</strong>: Hier findest du alle optionalen Addons die du mitladen darfst, aber nicht musst. Hierbei handelt es sich ausschließlich um Addons die nur lokale Auswirkungen haben (Sound, Userinterface etc.). Bitte <a href="#optionals">Hinweise in der Tabelle</a> ganz unten beachten!</li></ul><h2 id="repository-anlegen-und-konfigurieren" tabindex="-1"><a class="header-anchor" href="#repository-anlegen-und-konfigurieren" aria-hidden="true">#</a> Repository anlegen und konfigurieren</h2><h3 id="installation-arma3sync" tabindex="-1"><a class="header-anchor" href="#installation-arma3sync" aria-hidden="true">#</a> Installation Arma3Sync</h3><p>Für das Herunterladen und die Synchronisation der Mods wird Arma3Sync benötigt. Die aktuelle Version ist <a href="https://hosted.anrop.se/arma3sync.exe" target="_blank" rel="noopener noreferrer">hier zu finden</a>. Diese einfach herunterladen und installieren.</p><h3 id="anlegen-eines-neuen-profils" tabindex="-1"><a class="header-anchor" href="#anlegen-eines-neuen-profils" aria-hidden="true">#</a> Anlegen eines neuen Profils</h3><p>Es ist zwar nicht unbedingt notwenig, aber empfehlenswert für jedes neues Repository ein neues Profil zu erstellen um Fehler vorzubeugen.</p><p>Ein neues Profil lässt sich unter <code>Profiles</code> → <code>Edit</code> → <code>New</code> erstellen.<br> ::: warning Nachdem das neue Profil erstellt wurde sollte Arma3Sync neu gestartet werden. :::</p><p><img src="'+a+'" alt="create_profile"></p><h3 id="grundlegende-einstellungen" tabindex="-1"><a class="header-anchor" href="#grundlegende-einstellungen" aria-hidden="true">#</a> Grundlegende Einstellungen</h3><p>Im Tab <code>Launcher Options</code> sind die grundlegenden Einstellungen zu finden. Hier kann alles vom Arma 3 Installations Pfad bis zu Startup Parameter konfiguriert werden. Die Einstellungen die vorgenommen werden müssen sind:</p><ul><li><code>Profile</code> - Hier das Arma-Profil mit dem gewünschten Nickname auswählen</li><li><code>Enable Battleye</code> - Da Battleye manchmal zu Problemen führt, da es teilweise Komponenten von Mods blockiert, kann es bei uns auf den Servern ausgeschaltet werden.</li><li><code>ArmA III Executable Location (game/server)</code> - Hier den Pfad zur <em>arma3_x64.exe</em> angeben. Diese lässt sich im Arma Installations Verzeichnis zu finden. ::: tip Das Arma Installations Verzeichnis lässt sich folgendermaßen finden:<br> Steam öffnen → Rechtsklick auf Arma 3 → <em>Eigenschaften</em> → <em>Lokale Dateien</em> → <em>Lokale Dateien durchsuchen</em> :::</li></ul><p><img src="'+d+'" alt="launcher-options"></p><p>Im Tab <code>Addon Options</code> muss nun noch ein Ordner eingestellt werden, in welchem nachher die Mods gespeichert werden. Dazu einfach rechts auf das blaue Kreuz klicken und den gewünschten Pfad auswählen. ::: warning Um Fehler zu vermeiden sollte als Verzeichnis nicht das Arma-Verzeichnis gewählt werden, da sonst Probleme mit Workshop-Mods aus Steam entstehen könnten, bei denen A3S nicht eindeutig bestimmen kann, welche Variante des Mods gepatcht bzw. geladen werden soll.</p><p>Falls die Mods dennoch im Arma-Verzeichnis liegen sollen, sollte mindestens ein Ordner <em>&quot;Gruppe Adler Mods&quot;</em> im Arma-Verzeichnis erstellt und gewählt werden. :::</p><p><img src="'+i+'" alt="addon-options"></p><h3 id="anlegen-des-repository" tabindex="-1"><a class="header-anchor" href="#anlegen-des-repository" aria-hidden="true">#</a> Anlegen des Repository</h3><p>Ein neues Repository lässt sich im <code>Repository</code> Tab anlegen.<br> Hierzu - auf der rechten Seite - auf das blaue Kreuz klicken. Im neu geöffnetem Fenster das Folgende in das Feld <code>Public auto-config url</code> eintragen:<br><strong><code>http://a3s.gruppe-adler.de/mods/.a3s/autoconfig</code></strong><br> Danach auf <code>Import</code> drücken. Die Verbindung war erfolgreich wenn über dem Eingabefeld <span style="color:var(--c-tip);"><em>Connection success!</em></span> steht.</p><p><img src="'+s+'" alt="new-repository"></p><p>::: tip A3S bietet im Tab <code>Repositories</code> für alle Repositories noch folgende hilfreiche Einstellungen:</p><ul><li><strong>Notify:</strong> A3S zeigt beim Starten an, wenn dieses Repo ein Update erhalten hat.</li><li><strong>Auto:</strong> A3S aktualisiert das Repo automatisch, sobald ein Update verfügbar ist. (Hierzu muss A3S natürlich laufen) :::</li></ul><h2 id="repository-aktualisieren" tabindex="-1"><a class="header-anchor" href="#repository-aktualisieren" aria-hidden="true">#</a> Repository aktualisieren</h2><p>Jedes mal wenn Mods geupdatet werden müssen folgende Schritte befolgt werden um beim nächsten Spieltag ohne Probleme spielen zu können.</p><h3 id="mit-repository-verbinden" tabindex="-1"><a class="header-anchor" href="#mit-repository-verbinden" aria-hidden="true">#</a> Mit Repository verbinden</h3><p>In der Liste der Events <strong>(untere Liste!)</strong> das gewünschte Event auswählen und rechts neben der Liste auf den Knopf mit dem blauen Pfeil klicken.</p><p><img src="'+o+'" alt="connect-to-repository"></p><p>Ein neuer Tab mit dem gewählten Event erscheint. Hier muss unter <code>Default destination folder</code> das Verzeichnis, welches unter <a href="#grundlegende-einstellungen">Grundlegende Einstellungen</a> erstellt wurde, gewählt werden.<br> Mit dem Knopf mit dem grünen Haken kann die Aktualität der Mods überprüft werden. Dieser Prozess kann - gerade beim aller ersten Mal - einige Minuten dauern.</p><p><img src="'+l+'" alt="sync-mods"></p><h3 id="mods-aktualisieren" tabindex="-1"><a class="header-anchor" href="#mods-aktualisieren" aria-hidden="true">#</a> Mods aktualisieren</h3><p>Alle Mods, die mit einem gelben Warnzeichen versehen sind, müssen aktualisiert werden.</p><ul><li><strong>Rot</strong> - neue Mod</li><li><strong>Blau</strong> - Mod wird gelöscht</li><li><strong>Schwarz (mit gelben Warnzeichen)</strong> - Mod wird aktualisiert</li></ul><p>Der Download wird mit dem schwarzen Play Knopf gestartet.</p><p>::: tip Um eine höchst mögliche Downloadgeschwindigkeit zu gewährleisten sollte die Anzahl der maximal aktiven Verbindungen auf den maximalen Wert gestellt werden <code>Settings</code> → <code>Maximum number of connections</code> :::</p><p><img src="'+h+'" alt="max-connections"></p><h3 id="anlegen-einer-addon-group" tabindex="-1"><a class="header-anchor" href="#anlegen-einer-addon-group" aria-hidden="true">#</a> Anlegen einer Addon Group</h3><p>Als letzten Schritt muss eine sog. <em>Addon Group</em> erstellt werden. Diese befinden sich im ersten Tab <code>Addons</code>. Mit Addon Groups lässt sich bestimmen welchen Mods mit Arma gestartet werden. Alle angehakten Mods werden mit gestartet.<br> Um eine Addon Group aus einem Modset zu erstellen auf den Knopf <code>Modsets</code> drücken. In dem erschienen Fenster das gewünschte Event auswählen und mit <code>OK</code> bestätigen.</p><p>::: warning Sobald Mods zum Repository hinzukommen oder rausfliegen sollte auf jeden Fall die Addon Group neu erstellt werden. Dazu erst die alte Addon Group per Rechtsklick löschen und danach den Schritten unter <a href="#anlegen-einer-addon-group">Anlegen einer Addon Group</a> folgen. :::</p><p><img src="'+m+'" alt="create-addon-group"></p><h3 id="gm" tabindex="-1"><a class="header-anchor" href="#gm" aria-hidden="true">#</a> GM</h3><p><strong>GM wird immer mitgeladen - sofern nichts anderes im Einsatz-Thread steht</strong></p><p>::: tip</p><p>Für Besitzer des <strong>DLC</strong> : GM im Reiter &quot;DLC&quot; unter <strong>Addons</strong> in selber neu erstellte Addon Group rechts ziehen und mit dem jeweiligen Event-Repo zusätzlich anhaken.</p><p>:::</p><p>::: warning</p><p>Für Nichtbesitzer des CDLC gibt es einen kostenlosen <a href="https://steamcommunity.com/sharedfiles/filedetails/?id=1776428269" target="_blank" rel="noopener noreferrer"><strong>Compat-Mod</strong></a> Dafür muss folgender Startup Parameter in das unten gezeigte A3S Inputfeld:</p><p><code>&quot;-mod=C:\\deinPfadZuArma\\deinModVerzeichnis\\@Global Mobilization - Cold War Germany- Compatibility Data for Non-Owners;&quot;</code></p><p><strong>Die Anführungszeichen sind wichtig!</strong></p><p><img src="'+p+'" alt="gm.PNG"></p><p>:::</p><h3 id="testconnect-auf-server" tabindex="-1"><a class="header-anchor" href="#testconnect-auf-server" aria-hidden="true">#</a> Testconnect auf Server</h3><p>Ein kurzer Testconnect auf den Server, um zu überprüfen ob alles korrekt läuft, ist immer empfehlenswert. Auf unserem Standardserver ist die Adlerbase rund um die Uhr erreichbar und stets auf dem neusten Stand.</p><h2 id="installation-tfar" tabindex="-1"><a class="header-anchor" href="#installation-tfar" aria-hidden="true">#</a> Installation TFAR</h2><p>Die Gruppe Adler benutzt Task Force Arrowhead Radio (TFAR) um eine ausreichend gute Kommunikation zu gewährleisten.<br> TFAR benötigt ein Teamspeak (TS) Plugin um korrekt zu funktionieren, welches separat in TS installiert werden muss. Dazu ins Mod-Verzeichnis, welches unter <a href="#grundlegende-einstellungen">Grundlegende Einstellungen</a> erstellt wurde wechseln. Im Unterverzeichnis <code>@tfar\\teamspeak</code> befindet sich die Datei <code>task_force_radio.ts3_plugin</code>. Ein einfacher Doppelklick auf die Datei installiert das Plugin.</p><p>::: tip Um das Plugin zu installieren darf keine Instanz des Teamspeak 3 Clients laufen. :::</p><p>Im TS sollte nun, wenn man den eigenen Nutzer auswählt, rechts ein Abschnitt <em>Task Force Radio Status</em> vorhanden sein.</p><p><img src="'+c+'" alt="teamspeak"></p><h2 id="modliste" tabindex="-1"><a class="header-anchor" href="#modliste" aria-hidden="true">#</a> Modliste</h2><h3 id="main-joint-op" tabindex="-1"><a class="header-anchor" href="#main-joint-op" aria-hidden="true">#</a> Main/Joint Op</h3><table><thead><tr><th>Name</th><th>Version</th><th>Anmerkung</th></tr></thead><tbody><tr><td><a href="https://github.com/acemod/ACE3/releases" target="_blank" rel="noopener noreferrer">ACE3</a></td><td>3.13.2</td><td></td></tr><tr><td><a href="https://github.com/acemod/ACE3/releases" target="_blank" rel="noopener noreferrer">ace_compat_rhs_afrf3</a></td><td>3.13.2</td><td></td></tr><tr><td><a href="https://github.com/acemod/ACE3/releases" target="_blank" rel="noopener noreferrer">ace_compat_rhs_gref3</a></td><td>3.13.2</td><td></td></tr><tr><td><a href="https://github.com/acemod/ACE3/releases" target="_blank" rel="noopener noreferrer">ace_compat_rhs_usf3 </a></td><td>3.13.2</td><td></td></tr><tr><td><a href="">ace_optionals</a></td><td>3.13.2</td><td></td></tr><tr><td><a href="https://github.com/acemod/ACEX/releases" target="_blank" rel="noopener noreferrer">ACEX</a></td><td>3.5.2</td><td></td></tr><tr><td><a href="https://steamcommunity.com/sharedfiles/filedetails/?id=615007497" target="_blank" rel="noopener noreferrer">Advanced Sling Loading</a></td><td>2.1.1</td><td></td></tr><tr><td><a href="https://steamcommunity.com/sharedfiles/filedetails/?id=615007497" target="_blank" rel="noopener noreferrer">Advanced Sling Loading</a></td><td>2.1.1</td><td></td></tr><tr><td><a href="http://www.armaholic.com/page.php?id=28838" target="_blank" rel="noopener noreferrer">BackpackOnChest </a></td><td>1.2.0</td><td></td></tr><tr><td><a href="http://www.armaholic.com/page.php?id=35241" target="_blank" rel="noopener noreferrer">Cham</a></td><td>0.04</td><td></td></tr><tr><td><a href="https://github.com/CBATeam/CBA_A3/releases/tag/v3.12.0.190708" target="_blank" rel="noopener noreferrer">CBA Community Base addons A3</a></td><td>v3.14</td><td></td></tr><tr><td><a href="https://steamcommunity.com/workshop/filedetails/?id=583496184" target="_blank" rel="noopener noreferrer">CUP Terrains Core</a></td><td>1.15.0</td><td></td></tr><tr><td><a href="https://steamcommunity.com/sharedfiles/filedetails/?id=583544987" target="_blank" rel="noopener noreferrer">CUP Terrains Maps</a></td><td>1.15.0</td><td></td></tr><tr><td><a href="">cup_wheeledvehicles_suv </a></td><td>1.0</td><td></td></tr><tr><td><a href="https://steamcommunity.com/sharedfiles/filedetails/?id=1841553455" target="_blank" rel="noopener noreferrer">Dismount where you look</a></td><td>1.03</td><td></td></tr><tr><td><a href="https://github.com/diwako/diwako_dui/" target="_blank" rel="noopener noreferrer">DUI Squad Radar </a></td><td>1.7.0</td><td></td></tr><tr><td><a href="http://www.armaholic.com/page.php?id=20393" target="_blank" rel="noopener noreferrer">FHQ Accessories pack</a></td><td>1.7.1</td><td></td></tr><tr><td><a href="https://steamcommunity.com/sharedfiles/filedetails/?l=german&amp;id=333310405" target="_blank" rel="noopener noreferrer">Enhanced Movement</a></td><td>0.8.4.15</td><td></td></tr><tr><td><a href="https://github.com/DerZade/grad_slinghelmet/releases" target="_blank" rel="noopener noreferrer">grad_slinghelmet </a></td><td>1.2</td><td></td></tr><tr><td><a href="https://github.com/gruppe-adler/grad_trenches/releases" target="_blank" rel="noopener noreferrer">Gruppe Adler Trenches</a></td><td>1.6.0.0</td><td></td></tr><tr><td><a href="https://github.com/gruppe-adler/gruppe_adler_mod/releases" target="_blank" rel="noopener noreferrer">Gruppe_Adler_Mod</a></td><td>2.15.3</td><td></td></tr><tr><td><a href="https://github.com/gruppe-adler/gruppe_adler_mod/releases" target="_blank" rel="noopener noreferrer">Gruppe_Adler_Additionals</a></td><td>2.4</td><td></td></tr><tr><td><a href="https://steamcommunity.com/sharedfiles/filedetails/?id=1284731930" target="_blank" rel="noopener noreferrer">GM Demo Vehicle</a></td><td>1.37</td><td></td></tr><tr><td><a href="https://steamcommunity.com/workshop/filedetails/?id=520618345" target="_blank" rel="noopener noreferrer">JBAD Buildings</a></td><td>0.7.0917</td><td></td></tr><tr><td><a href="https://steamcommunity.com/sharedfiles/filedetails/?id=909547724" target="_blank" rel="noopener noreferrer">Lythium Map </a></td><td>1.09</td><td></td></tr><tr><td><a href="https://steamcommunity.com/workshop/filedetails/?id=962932583" target="_blank" rel="noopener noreferrer">MBG Buildings 3</a></td><td>1.0</td><td></td></tr><tr><td><a href="http://www.armaholic.com/page.php?id=28329" target="_blank" rel="noopener noreferrer">NIArsenal</a></td><td>12</td><td></td></tr><tr><td><a href="http://steamcommunity.com/sharedfiles/filedetails/?id=950966660" target="_blank" rel="noopener noreferrer">Prei Khmaoch Luong</a></td><td>0.8</td><td></td></tr><tr><td><a href="http://steamcommunity.com/sharedfiles/filedetails/?id=735566597" target="_blank" rel="noopener noreferrer">Project OPFOR</a></td><td>0.3.0</td><td></td></tr><tr><td><a href="http://steamcommunity.com/sharedfiles/filedetails/?id=1128145626" target="_blank" rel="noopener noreferrer">Redd&#39;n&#39;Tank Vehicles</a></td><td>1.12.171</td><td></td></tr><tr><td><a href="https://steamcommunity.com/sharedfiles/filedetails/?id=843425103" target="_blank" rel="noopener noreferrer">RHS Rus -RHSAFRF</a></td><td>0.5.0</td><td></td></tr><tr><td><a href="https://steamcommunity.com/sharedfiles/filedetails/?id=843577117" target="_blank" rel="noopener noreferrer">RHS USA - RHSUSAF</a></td><td>0.5.0</td><td></td></tr><tr><td><a href="https://steamcommunity.com/sharedfiles/filedetails/?id=843593391" target="_blank" rel="noopener noreferrer">RHS Ind - RHSGREF</a></td><td>0.5.0</td><td></td></tr><tr><td><a href="https://steamcommunity.com/sharedfiles/filedetails/?id=843632231" target="_blank" rel="noopener noreferrer">RHS Ser - RHSSAF</a></td><td>0.5.0</td><td></td></tr><tr><td><a href="http://www.armaholic.com/page.php?id=26188" target="_blank" rel="noopener noreferrer">RDS A2 Civilian Pack</a></td><td>1.3.1</td><td></td></tr><tr><td><a href="https://steamcommunity.com/sharedfiles/filedetails/?id=1527410521" target="_blank" rel="noopener noreferrer">Rosche Map</a></td><td>2.0</td><td></td></tr><tr><td><a href="https://steamcommunity.com/sharedfiles/filedetails/?id=1368857262" target="_blank" rel="noopener noreferrer">Ruha Map</a></td><td>0.11</td><td></td></tr><tr><td><a href="">SMM German Uniforms </a></td><td>0.98</td><td></td></tr><tr><td><a href="http://steamcommunity.com/sharedfiles/filedetails/?id=770418577&amp;searchtext=splendid" target="_blank" rel="noopener noreferrer">Splendid Smoke</a></td><td>1.1</td><td></td></tr><tr><td><a href="https://github.com/michail-nikolaev/task-force-arma-3-radio/releases/tag/1.0-PreRelease" target="_blank" rel="noopener noreferrer">TFAR</a></td><td>1.-1.0.325</td><td></td></tr><tr><td><a href="https://steamcommunity.com/sharedfiles/filedetails/?id=1252091296" target="_blank" rel="noopener noreferrer">Tembelan Island </a></td><td>1.2</td><td></td></tr><tr><td>virolahti - valtatie 7</td><td>1.01</td><td></td></tr><tr><td><a href="">Vinjesvingen </a></td><td>1.21</td><td></td></tr><tr><td><a href="https://steamcommunity.com/sharedfiles/filedetails/?id=1703187116" target="_blank" rel="noopener noreferrer">Vet Unflipping</a></td><td>1.3.1.02</td><td></td></tr><tr><td><a href="https://github.com/zen-mod/ZEN/releases" target="_blank" rel="noopener noreferrer">ZEN </a></td><td>1.8.0</td><td></td></tr><tr><td><a href="">SFP temporär</a></td><td>x.xx</td><td></td></tr><tr><td><a href="">SFP JSRS</a></td><td>x.xx</td><td></td></tr><tr><td><a href="https://steamcommunity.com/sharedfiles/filedetails/changelog/861133494" target="_blank" rel="noopener noreferrer">JSRS</a></td><td>CE.20.0423B</td><td></td></tr><tr><td><a href="">JSRS RHS comp</a></td><td>x.xx</td><td></td></tr><tr><td><a href="">JSRS GM comp</a></td><td>x.xx</td><td></td></tr><tr><td><a href="steamcommunity.com/sharedfiles/filedetails/?id=639837898">Advanced Towing</a></td><td>v1.5</td><td></td></tr></tbody></table><h3 id="optionals" tabindex="-1"><a class="header-anchor" href="#optionals" aria-hidden="true">#</a> Optionals</h3><table><thead><tr><th>Name</th><th>Version</th><th>Anmerkung</th></tr></thead><tbody><tr><td><a href="http://steamcommunity.com/sharedfiles/filedetails/?id=767380317" target="_blank" rel="noopener noreferrer">Blastcore edited standalone</a></td><td>1.7</td><td><a href="https://emojipedia.org/warning-sign/" target="_blank" rel="noopener noreferrer">⚠️</a> ggf. Performance-intensiv, verändert FX</td></tr><tr><td><a href="https://steamcommunity.com/sharedfiles/filedetails/?id=809527168" target="_blank" rel="noopener noreferrer">Enhanced Arma3 Inventory</a></td><td>1.2</td><td>Zeigt Armor-Werte im Inventar</td></tr><tr><td><a href="https://github.com/DerZade/grad_minui/releases" target="_blank" rel="noopener noreferrer">GRAD MinUI </a></td><td>v0.6.3</td><td><a href="https://emojipedia.org/warning-sign/" target="_blank" rel="noopener noreferrer">⚠️</a> Entfernt große Teile des UI</td></tr><tr><td><a href="https://steamcommunity.com/sharedfiles/filedetails/?id=1223309664" target="_blank" rel="noopener noreferrer">Enhanced Video Settings</a></td><td>0.9</td><td><a href="https://emojipedia.org/warning-sign/" target="_blank" rel="noopener noreferrer">⚠️</a> Performance-intensiv, verändert FX, <strong>verändert Video Settings vom Spiel</strong></td></tr><tr><td><a href="https://steamcommunity.com/sharedfiles/filedetails/?id=630737877" target="_blank" rel="noopener noreferrer">Head Range Plus - TrackIR Mod</a></td><td>v2.9.1</td><td>Erlaubt größeren Spielraum für FreeLook</td></tr><tr><td><a href="https://steamcommunity.com/sharedfiles/filedetails/?id=825174634" target="_blank" rel="noopener noreferrer">Immerse </a></td><td>V 2.04</td><td>Verändert FX, u.a. Camshake, Twitches bei Schüssen/Explosionen</td></tr><tr><td><a href="https://steamcommunity.com/sharedfiles/filedetails/?id=825174634" target="_blank" rel="noopener noreferrer">Suppress</a></td><td>2.04</td><td>Verändert FX, erlaubt Unterdrückung</td></tr><tr><td><a href="https://steamcommunity.com/sharedfiles/filedetails/?id=790393813" target="_blank" rel="noopener noreferrer">UISounds 2 </a></td><td>2.0</td><td>Fügt Inventar u.a. Sounds hinzu</td></tr></tbody></table>',70),f=[g];function b(k,_){return t(),r("div",null,f)}const A=e(u,[["render",b],["__file","gruppe-adler-modset.html.vue"]]);export{A as default};
