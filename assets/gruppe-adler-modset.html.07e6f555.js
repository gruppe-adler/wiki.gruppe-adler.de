import{_ as s,o as a,c as d,b as e,d as n,a as r,F as o,e as i,r as l}from"./app.a27603ab.js";var c="/assets/create-profile.0e4e3d4f.jpg",u="/assets/launcher-options.c24eeb31.jpg",h="/assets/addon-options.42745df1.jpg",p="/assets/new-repository.bc47dfe2.jpg",m="/assets/connect-to-repository.8142fc4f.jpg",g="/assets/sync-mods.1367c548.jpg",f="/assets/max-connections.5aedfb89.jpg",b="/assets/create-addon-group.29b00a0b.jpg",w="/assets/gm.66ccc9e3.jpg",A="/assets/teamspeak.dbc97f17.jpg";const k={},_=i('<h1 id="gruppe-adler-modset" tabindex="-1"><a class="header-anchor" href="#gruppe-adler-modset" aria-hidden="true">#</a> \u{1F4C1} Gruppe Adler Modset</h1><h2 id="einleitung" tabindex="-1"><a class="header-anchor" href="#einleitung" aria-hidden="true">#</a> Einleitung</h2><p>Die Gruppe Adler benutzt ein Repository (Repo) aus verschiedenen Mods um die Spielerfahrung auf unsere Bed\xFCrfnisse anzupassen.</p><p><a href="#repository-anlegen-und-konfigurieren">F\xFCr die Aktualisierung verwenden wir Arma3Sync (A3S)</a></p><h2 id="ubersicht" tabindex="-1"><a class="header-anchor" href="#ubersicht" aria-hidden="true">#</a> \xDCbersicht</h2><p>Die Gruppe Adler benutzt im Wesentlichen folgende Mods:</p><ul><li>Advanced Combat Environment 3 (ACE3)</li><li>Community Upgrade Project Terrains (CUP TP)</li><li>Red Hammer Studios Mods (RHS)</li><li>Task Force Arrowhead Radio (TFAR)</li></ul><p><a href="#modliste">Vollst\xE4ndige \xDCbersicht aller Mods mit Versionsnummer und Quellenlink</a></p><h2 id="aufteilung-des-repository" tabindex="-1"><a class="header-anchor" href="#aufteilung-des-repository" aria-hidden="true">#</a> Aufteilung des Repository</h2><p>Unser Repository beinhalten insgesamt drei Events (oder auch im folgenden Modsets genannt). Abh\xE4ngig davon, bei welchen Spieltagen teilgenommen werden soll, werden nicht alle Mods ben\xF6tigt.</p><ul><li><strong>Gruppe Adler Main</strong>: Dieses Modset enth\xE4lt alle Mods, welche f\xFCr normale Spieltage gebraucht werden.</li><li><strong>Gruppe Adler Joint Ops</strong>: Dieses Modset ist eine Teilmenge des <em>Gruppe Adler Main</em>, enth\xE4lt aber nur die absolut n\xF6tigsten Mods. Wir benutzen dieses Modsets wenn Partnerclans bei uns zu Gast sind.</li><li><strong>Gruppe Adler Optionals</strong>: Hier findest du alle optionalen Addons die du mitladen darfst, aber nicht musst. Hierbei handelt es sich ausschlie\xDFlich um Addons die nur lokale Auswirkungen haben (Sound, Userinterface etc.). Bitte <a href="#optionals">Hinweise in der Tabelle</a> ganz unten beachten!</li></ul><h2 id="repository-anlegen-und-konfigurieren" tabindex="-1"><a class="header-anchor" href="#repository-anlegen-und-konfigurieren" aria-hidden="true">#</a> Repository anlegen und konfigurieren</h2><h3 id="installation-arma3sync" tabindex="-1"><a class="header-anchor" href="#installation-arma3sync" aria-hidden="true">#</a> Installation Arma3Sync</h3>',13),v={href:"https://hosted.anrop.se/arma3sync.exe",target:"_blank",rel:"noopener noreferrer"},z=i('<h3 id="anlegen-eines-neuen-profils" tabindex="-1"><a class="header-anchor" href="#anlegen-eines-neuen-profils" aria-hidden="true">#</a> Anlegen eines neuen Profils</h3><p>Es ist zwar nicht unbedingt notwenig, aber empfehlenswert f\xFCr jedes neues Repository ein neues Profil zu erstellen um Fehler vorzubeugen.</p><p>Ein neues Profil l\xE4sst sich unter <code>Profiles</code> \u2192 <code>Edit</code> \u2192 <code>New</code> erstellen.</p><div class="custom-container warning"><p class="custom-container-title">AUFGEPASST</p><p>Nachdem das neue Profil erstellt wurde sollte Arma3Sync neu gestartet werden.</p></div><p><img src="'+c+'" alt="create_profile"></p><h3 id="grundlegende-einstellungen" tabindex="-1"><a class="header-anchor" href="#grundlegende-einstellungen" aria-hidden="true">#</a> Grundlegende Einstellungen</h3><p>Im Tab <code>Launcher Options</code> sind die grundlegenden Einstellungen zu finden. Hier kann alles vom Arma 3 Installations Pfad bis zu Startup Parameter konfiguriert werden. Die Einstellungen die vorgenommen werden m\xFCssen sind:</p><ul><li><code>Profile</code> - Hier das Arma-Profil mit dem gew\xFCnschten Nickname ausw\xE4hlen</li><li><code>Enable Battleye</code> - Da Battleye manchmal zu Problemen f\xFChrt, da es teilweise Komponenten von Mods blockiert, kann es bei uns auf den Servern ausgeschaltet werden.</li><li><code>ArmA III Executable Location (game/server)</code> - Hier den Pfad zur <em>arma3_x64.exe</em> angeben. Diese l\xE4sst sich im Arma Installations Verzeichnis zu finden.</li></ul><div class="custom-container tip"><p class="custom-container-title">TIPP</p><p>Das Arma Installations Verzeichnis l\xE4sst sich folgenderma\xDFen finden:<br> Steam \xF6ffnen \u2192 Rechtsklick auf Arma 3 \u2192 <em>Eigenschaften</em> \u2192 <em>Lokale Dateien</em> \u2192 <em>Lokale Dateien durchsuchen</em></p></div><p><img src="'+u+'" alt="launcher-options"></p><p>Im Tab <code>Addon Options</code> muss nun noch ein Ordner eingestellt werden, in welchem nachher die Mods gespeichert werden. Dazu einfach rechts auf das blaue Kreuz klicken und den gew\xFCnschten Pfad ausw\xE4hlen.</p><div class="custom-container warning"><p class="custom-container-title">AUFGEPASST</p><p>Um Fehler zu vermeiden sollte als Verzeichnis nicht das Arma-Verzeichnis gew\xE4hlt werden, da sonst Probleme mit Workshop-Mods aus Steam entstehen k\xF6nnten, bei denen A3S nicht eindeutig bestimmen kann, welche Variante des Mods gepatcht bzw. geladen werden soll.</p><p>Falls die Mods dennoch im Arma-Verzeichnis liegen sollen, sollte mindestens ein Ordner <em>&quot;Gruppe Adler Mods&quot;</em> im Arma-Verzeichnis erstellt und gew\xE4hlt werden.</p></div><p><img src="'+h+'" alt="addon-options"></p><h3 id="anlegen-des-repository" tabindex="-1"><a class="header-anchor" href="#anlegen-des-repository" aria-hidden="true">#</a> Anlegen des Repository</h3><p>Ein neues Repository l\xE4sst sich im <code>Repository</code> Tab anlegen.<br> Hierzu - auf der rechten Seite - auf das blaue Kreuz klicken. Im neu ge\xF6ffnetem Fenster das Folgende in das Feld <code>Public auto-config url</code> eintragen:<br><strong><code>http://a3s.gruppe-adler.de/mods/.a3s/autoconfig</code></strong><br> Danach auf <code>Import</code> dr\xFCcken. Die Verbindung war erfolgreich wenn \xFCber dem Eingabefeld <span style="color:var(--c-tip);"><em>Connection success!</em></span> steht.</p><p><img src="'+p+'" alt="new-repository"></p><div class="custom-container tip"><p class="custom-container-title">TIPP</p><p>A3S bietet im Tab <code>Repositories</code> f\xFCr alle Repositories noch folgende hilfreiche Einstellungen:</p><ul><li><strong>Notify:</strong> A3S zeigt beim Starten an, wenn dieses Repo ein Update erhalten hat.</li><li><strong>Auto:</strong> A3S aktualisiert das Repo automatisch, sobald ein Update verf\xFCgbar ist. (Hierzu muss A3S nat\xFCrlich laufen)</li></ul></div><h2 id="repository-aktualisieren" tabindex="-1"><a class="header-anchor" href="#repository-aktualisieren" aria-hidden="true">#</a> Repository aktualisieren</h2><p>Jedes mal wenn Mods geupdatet werden m\xFCssen folgende Schritte befolgt werden um beim n\xE4chsten Spieltag ohne Probleme spielen zu k\xF6nnen.</p><h3 id="mit-repository-verbinden" tabindex="-1"><a class="header-anchor" href="#mit-repository-verbinden" aria-hidden="true">#</a> Mit Repository verbinden</h3><p>In der Liste der Events <strong>(untere Liste!)</strong> das gew\xFCnschte Event ausw\xE4hlen und rechts neben der Liste auf den Knopf mit dem blauen Pfeil klicken.</p><p><img src="'+m+'" alt="connect-to-repository"></p><p>Ein neuer Tab mit dem gew\xE4hlten Event erscheint. Hier muss unter <code>Default destination folder</code> das Verzeichnis, welches unter <a href="#grundlegende-einstellungen">Grundlegende Einstellungen</a> erstellt wurde, gew\xE4hlt werden.<br> Mit dem Knopf mit dem gr\xFCnen Haken kann die Aktualit\xE4t der Mods \xFCberpr\xFCft werden. Dieser Prozess kann - gerade beim aller ersten Mal - einige Minuten dauern.</p><p><img src="'+g+'" alt="sync-mods"></p><h3 id="mods-aktualisieren" tabindex="-1"><a class="header-anchor" href="#mods-aktualisieren" aria-hidden="true">#</a> Mods aktualisieren</h3><p>Alle Mods, die mit einem gelben Warnzeichen versehen sind, m\xFCssen aktualisiert werden.</p><ul><li><strong>Rot</strong> - neue Mod</li><li><strong>Blau</strong> - Mod wird gel\xF6scht</li><li><strong>Schwarz (mit gelben Warnzeichen)</strong> - Mod wird aktualisiert</li></ul><p>Der Download wird mit dem schwarzen Play Knopf gestartet.</p><div class="custom-container tip"><p class="custom-container-title">TIPP</p><p>Um eine h\xF6chst m\xF6gliche Downloadgeschwindigkeit zu gew\xE4hrleisten sollte die Anzahl der maximal aktiven Verbindungen auf den maximalen Wert gestellt werden <code>Settings</code> \u2192 <code>Maximum number of connections</code></p></div><p><img src="'+f+'" alt="max-connections"></p><h3 id="anlegen-einer-addon-group" tabindex="-1"><a class="header-anchor" href="#anlegen-einer-addon-group" aria-hidden="true">#</a> Anlegen einer Addon Group</h3><p>Als letzten Schritt muss eine sog. <em>Addon Group</em> erstellt werden. Diese befinden sich im ersten Tab <code>Addons</code>. Mit Addon Groups l\xE4sst sich bestimmen welchen Mods mit Arma gestartet werden. Alle angehakten Mods werden mit gestartet.<br> Um eine Addon Group aus einem Modset zu erstellen auf den Knopf <code>Modsets</code> dr\xFCcken. In dem erschienen Fenster das gew\xFCnschte Event ausw\xE4hlen und mit <code>OK</code> best\xE4tigen.</p><div class="custom-container warning"><p class="custom-container-title">AUFGEPASST</p><p>Sobald Mods zum Repository hinzukommen oder rausfliegen sollte auf jeden Fall die Addon Group neu erstellt werden. Dazu erst die alte Addon Group per Rechtsklick l\xF6schen und danach den Schritten unter <a href="#anlegen-einer-addon-group">Anlegen einer Addon Group</a> folgen.</p></div><p><img src="'+b+'" alt="create-addon-group"></p><h3 id="gm" tabindex="-1"><a class="header-anchor" href="#gm" aria-hidden="true">#</a> GM</h3><p><strong>GM wird immer mitgeladen - sofern nichts anderes im Einsatz-Thread steht</strong></p><div class="custom-container tip"><p class="custom-container-title">TIPP</p><p>F\xFCr Besitzer des <strong>DLC</strong> : GM im Reiter &quot;DLC&quot; unter <strong>Addons</strong> in selber neu erstellte Addon Group rechts ziehen und mit dem jeweiligen Event-Repo zus\xE4tzlich anhaken.</p></div>',37),S={class:"custom-container warning"},M=e("p",{class:"custom-container-title"},"AUFGEPASST",-1),y={href:"https://steamcommunity.com/sharedfiles/filedetails/?id=1776428269",target:"_blank",rel:"noopener noreferrer"},P=e("strong",null,"Compat-Mod",-1),T=e("p",null,[e("code",null,'"-mod=C:\\deinPfadZuArma\\deinModVerzeichnis\\@Global Mobilization - Cold War Germany- Compatibility Data for Non-Owners;"')],-1),D=e("p",null,[e("strong",null,"Die Anf\xFChrungszeichen sind wichtig!")],-1),E=e("p",null,[e("img",{src:w,alt:"gm.PNG"})],-1),G=i('<h3 id="testconnect-auf-server" tabindex="-1"><a class="header-anchor" href="#testconnect-auf-server" aria-hidden="true">#</a> Testconnect auf Server</h3><p>Ein kurzer Testconnect auf den Server, um zu \xFCberpr\xFCfen ob alles korrekt l\xE4uft, ist immer empfehlenswert. Auf unserem Standardserver ist die Adlerbase rund um die Uhr erreichbar und stets auf dem neusten Stand.</p><h2 id="installation-tfar" tabindex="-1"><a class="header-anchor" href="#installation-tfar" aria-hidden="true">#</a> Installation TFAR</h2><p>Die Gruppe Adler benutzt Task Force Arrowhead Radio (TFAR) um eine ausreichend gute Kommunikation zu gew\xE4hrleisten.<br> TFAR ben\xF6tigt ein Teamspeak (TS) Plugin um korrekt zu funktionieren, welches separat in TS installiert werden muss. Dazu ins Mod-Verzeichnis, welches unter <a href="#grundlegende-einstellungen">Grundlegende Einstellungen</a> erstellt wurde wechseln. Im Unterverzeichnis <code>@tfar\\teamspeak</code> befindet sich die Datei <code>task_force_radio.ts3_plugin</code>. Ein einfacher Doppelklick auf die Datei installiert das Plugin.</p><div class="custom-container tip"><p class="custom-container-title">TIPP</p><p>Um das Plugin zu installieren darf keine Instanz des Teamspeak 3 Clients laufen.</p></div><p>Im TS sollte nun, wenn man den eigenen Nutzer ausw\xE4hlt, rechts ein Abschnitt <em>Task Force Radio Status</em> vorhanden sein.</p><p><img src="'+A+'" alt="teamspeak"></p>',7);function x(R,F){const t=l("OutboundLink");return a(),d(o,null,[_,e("p",null,[n("F\xFCr das Herunterladen und die Synchronisation der Mods wird Arma3Sync ben\xF6tigt. Die aktuelle Version ist "),e("a",v,[n("hier zu finden"),r(t)]),n(". Diese einfach herunterladen und installieren.")]),z,e("div",S,[M,e("p",null,[n("F\xFCr Nichtbesitzer des CDLC gibt es einen kostenlosen "),e("a",y,[P,n(),r(t)]),n(" Daf\xFCr muss folgender Startup Parameter in das unten gezeigte A3S Inputfeld:")]),T,D,E]),G],64)}var V=s(k,[["render",x]]);export{V as default};
