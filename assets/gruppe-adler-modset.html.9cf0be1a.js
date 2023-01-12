import{_ as s,o,c as i,b as e,d as n,a as r,F as d,e as l,r as a}from"./app.77e60c10.js";var u="/assets/create-profile.0e4e3d4f.jpg",h="/assets/launcher-options.c24eeb31.jpg",c="/assets/addon-options.42745df1.jpg",_="/assets/new-repository.bc47dfe2.jpg",m="/assets/connect-to-repository.8142fc4f.jpg",p="/assets/sync-mods.1367c548.jpg",g="/assets/max-connections.5aedfb89.jpg",f="/assets/create-addon-group.29b00a0b.jpg",b="/assets/gm.66ccc9e3.jpg",k="/assets/teamspeak.dbc97f17.jpg";const w={},A=l('<h1 id="gruppe-adler-modset" tabindex="-1"><a class="header-anchor" href="#gruppe-adler-modset" aria-hidden="true">#</a> \u{1F4C1} Gruppe Adler Modset</h1><h2 id="einleitung" tabindex="-1"><a class="header-anchor" href="#einleitung" aria-hidden="true">#</a> Einleitung</h2><p>Die Gruppe Adler benutzt ein Repository (Repo) aus verschiedenen Mods um die Spielerfahrung auf unsere Bed\xFCrfnisse anzupassen.</p><p><a href="#repository-anlegen-und-konfigurieren">F\xFCr die Aktualisierung verwenden wir Arma3Sync (A3S)</a></p><h2 id="ubersicht" tabindex="-1"><a class="header-anchor" href="#ubersicht" aria-hidden="true">#</a> \xDCbersicht</h2><p>Die Gruppe Adler benutzt im Wesentlichen folgende Mods:</p><ul><li>Advanced Combat Environment 3 (ACE3)</li><li>Community Upgrade Project Terrains (CUP TP)</li><li>Red Hammer Studios Mods (RHS)</li><li>Task Force Arrowhead Radio (TFAR)</li></ul><p><a href="#modliste">Vollst\xE4ndige \xDCbersicht aller Mods mit Versionsnummer und Quellenlink</a></p><h2 id="aufteilung-des-repository" tabindex="-1"><a class="header-anchor" href="#aufteilung-des-repository" aria-hidden="true">#</a> Aufteilung des Repository</h2><p>Unser Repository beinhalten insgesamt drei Events (oder auch im folgenden Modsets genannt). Abh\xE4ngig davon, bei welchen Spieltagen teilgenommen werden soll, werden nicht alle Mods ben\xF6tigt.</p><ul><li><strong>Gruppe Adler Main</strong>: Dieses Modset enth\xE4lt alle Mods, welche f\xFCr normale Spieltage gebraucht werden.</li><li><strong>Gruppe Adler Joint Ops</strong>: Dieses Modset ist eine Teilmenge des <em>Gruppe Adler Main</em>, enth\xE4lt aber nur die absolut n\xF6tigsten Mods. Wir benutzen dieses Modsets wenn Partnerclans bei uns zu Gast sind.</li><li><strong>Gruppe Adler Optionals</strong>: Hier findest du alle optionalen Addons die du mitladen darfst, aber nicht musst. Hierbei handelt es sich ausschlie\xDFlich um Addons die nur lokale Auswirkungen haben (Sound, Userinterface etc.). Bitte <a href="#optionals">Hinweise in der Tabelle</a> ganz unten beachten!</li></ul><h2 id="repository-anlegen-und-konfigurieren" tabindex="-1"><a class="header-anchor" href="#repository-anlegen-und-konfigurieren" aria-hidden="true">#</a> Repository anlegen und konfigurieren</h2><h3 id="installation-arma3sync" tabindex="-1"><a class="header-anchor" href="#installation-arma3sync" aria-hidden="true">#</a> Installation Arma3Sync</h3>',13),v={href:"https://hosted.anrop.se/arma3sync.exe",target:"_blank",rel:"noopener noreferrer"},S=l('<h3 id="anlegen-eines-neuen-profils" tabindex="-1"><a class="header-anchor" href="#anlegen-eines-neuen-profils" aria-hidden="true">#</a> Anlegen eines neuen Profils</h3><p>Es ist zwar nicht unbedingt notwenig, aber empfehlenswert f\xFCr jedes neues Repository ein neues Profil zu erstellen um Fehler vorzubeugen.</p><p>Ein neues Profil l\xE4sst sich unter <code>Profiles</code> \u2192 <code>Edit</code> \u2192 <code>New</code> erstellen.</p><div class="custom-container warning"><p class="custom-container-title">AUFGEPASST</p><p>Nachdem das neue Profil erstellt wurde sollte Arma3Sync neu gestartet werden.</p></div><p><img src="'+u+'" alt="create_profile"></p><h3 id="grundlegende-einstellungen" tabindex="-1"><a class="header-anchor" href="#grundlegende-einstellungen" aria-hidden="true">#</a> Grundlegende Einstellungen</h3><p>Im Tab <code>Launcher Options</code> sind die grundlegenden Einstellungen zu finden. Hier kann alles vom Arma 3 Installations Pfad bis zu Startup Parameter konfiguriert werden. Die Einstellungen die vorgenommen werden m\xFCssen sind:</p><ul><li><code>Profile</code> - Hier das Arma-Profil mit dem gew\xFCnschten Nickname ausw\xE4hlen</li><li><code>Enable Battleye</code> - Da Battleye manchmal zu Problemen f\xFChrt, da es teilweise Komponenten von Mods blockiert, kann es bei uns auf den Servern ausgeschaltet werden.</li><li><code>ArmA III Executable Location (game/server)</code> - Hier den Pfad zur <em>arma3_x64.exe</em> angeben. Diese l\xE4sst sich im Arma Installations Verzeichnis zu finden.</li></ul><div class="custom-container tip"><p class="custom-container-title">TIPP</p><p>Das Arma Installations Verzeichnis l\xE4sst sich folgenderma\xDFen finden:<br> Steam \xF6ffnen \u2192 Rechtsklick auf Arma 3 \u2192 <em>Eigenschaften</em> \u2192 <em>Lokale Dateien</em> \u2192 <em>Lokale Dateien durchsuchen</em></p></div><p><img src="'+h+'" alt="launcher-options"></p><p>Im Tab <code>Addon Options</code> muss nun noch ein Ordner eingestellt werden, in welchem nachher die Mods gespeichert werden. Dazu einfach rechts auf das blaue Kreuz klicken und den gew\xFCnschten Pfad ausw\xE4hlen.</p><div class="custom-container warning"><p class="custom-container-title">AUFGEPASST</p><p>Um Fehler zu vermeiden sollte als Verzeichnis nicht das Arma-Verzeichnis gew\xE4hlt werden, da sonst Probleme mit Workshop-Mods aus Steam entstehen k\xF6nnten, bei denen A3S nicht eindeutig bestimmen kann, welche Variante des Mods gepatcht bzw. geladen werden soll.</p><p>Falls die Mods dennoch im Arma-Verzeichnis liegen sollen, sollte mindestens ein Ordner <em>&quot;Gruppe Adler Mods&quot;</em> im Arma-Verzeichnis erstellt und gew\xE4hlt werden.</p></div><p><img src="'+c+'" alt="addon-options"></p><h3 id="anlegen-des-repository" tabindex="-1"><a class="header-anchor" href="#anlegen-des-repository" aria-hidden="true">#</a> Anlegen des Repository</h3><p>Ein neues Repository l\xE4sst sich im <code>Repository</code> Tab anlegen.<br> Hierzu - auf der rechten Seite - auf das blaue Kreuz klicken. Im neu ge\xF6ffnetem Fenster das Folgende in das Feld <code>Public auto-config url</code> eintragen:<br><strong><code>http://a3s.gruppe-adler.de/mods/.a3s/autoconfig</code></strong><br> Danach auf <code>Import</code> dr\xFCcken. Die Verbindung war erfolgreich wenn \xFCber dem Eingabefeld <span style="color:var(--c-tip);"><em>Connection success!</em></span> steht.</p><p><img src="'+_+'" alt="new-repository"></p><div class="custom-container tip"><p class="custom-container-title">TIPP</p><p>A3S bietet im Tab <code>Repositories</code> f\xFCr alle Repositories noch folgende hilfreiche Einstellungen:</p><ul><li><strong>Notify:</strong> A3S zeigt beim Starten an, wenn dieses Repo ein Update erhalten hat.</li><li><strong>Auto:</strong> A3S aktualisiert das Repo automatisch, sobald ein Update verf\xFCgbar ist. (Hierzu muss A3S nat\xFCrlich laufen)</li></ul></div><h2 id="repository-aktualisieren" tabindex="-1"><a class="header-anchor" href="#repository-aktualisieren" aria-hidden="true">#</a> Repository aktualisieren</h2><p>Jedes mal wenn Mods geupdatet werden m\xFCssen folgende Schritte befolgt werden um beim n\xE4chsten Spieltag ohne Probleme spielen zu k\xF6nnen.</p><h3 id="mit-repository-verbinden" tabindex="-1"><a class="header-anchor" href="#mit-repository-verbinden" aria-hidden="true">#</a> Mit Repository verbinden</h3><p>In der Liste der Events <strong>(untere Liste!)</strong> das gew\xFCnschte Event ausw\xE4hlen und rechts neben der Liste auf den Knopf mit dem blauen Pfeil klicken.</p><p><img src="'+m+'" alt="connect-to-repository"></p><p>Ein neuer Tab mit dem gew\xE4hlten Event erscheint. Hier muss unter <code>Default destination folder</code> das Verzeichnis, welches unter <a href="#grundlegende-einstellungen">Grundlegende Einstellungen</a> erstellt wurde, gew\xE4hlt werden.<br> Mit dem Knopf mit dem gr\xFCnen Haken kann die Aktualit\xE4t der Mods \xFCberpr\xFCft werden. Dieser Prozess kann - gerade beim aller ersten Mal - einige Minuten dauern.</p><p><img src="'+p+'" alt="sync-mods"></p><h3 id="mods-aktualisieren" tabindex="-1"><a class="header-anchor" href="#mods-aktualisieren" aria-hidden="true">#</a> Mods aktualisieren</h3><p>Alle Mods, die mit einem gelben Warnzeichen versehen sind, m\xFCssen aktualisiert werden.</p><ul><li><strong>Rot</strong> - neue Mod</li><li><strong>Blau</strong> - Mod wird gel\xF6scht</li><li><strong>Schwarz (mit gelben Warnzeichen)</strong> - Mod wird aktualisiert</li></ul><p>Der Download wird mit dem schwarzen Play Knopf gestartet.</p><div class="custom-container tip"><p class="custom-container-title">TIPP</p><p>Um eine h\xF6chst m\xF6gliche Downloadgeschwindigkeit zu gew\xE4hrleisten sollte die Anzahl der maximal aktiven Verbindungen auf den maximalen Wert gestellt werden <code>Settings</code> \u2192 <code>Maximum number of connections</code></p></div><p><img src="'+g+'" alt="max-connections"></p><h3 id="anlegen-einer-addon-group" tabindex="-1"><a class="header-anchor" href="#anlegen-einer-addon-group" aria-hidden="true">#</a> Anlegen einer Addon Group</h3><p>Als letzten Schritt muss eine sog. <em>Addon Group</em> erstellt werden. Diese befinden sich im ersten Tab <code>Addons</code>. Mit Addon Groups l\xE4sst sich bestimmen welchen Mods mit Arma gestartet werden. Alle angehakten Mods werden mit gestartet.<br> Um eine Addon Group aus einem Modset zu erstellen auf den Knopf <code>Modsets</code> dr\xFCcken. In dem erschienen Fenster das gew\xFCnschte Event ausw\xE4hlen und mit <code>OK</code> best\xE4tigen.</p><div class="custom-container warning"><p class="custom-container-title">AUFGEPASST</p><p>Sobald Mods zum Repository hinzukommen oder rausfliegen sollte auf jeden Fall die Addon Group neu erstellt werden. Dazu erst die alte Addon Group per Rechtsklick l\xF6schen und danach den Schritten unter <a href="#anlegen-einer-addon-group">Anlegen einer Addon Group</a> folgen.</p></div><p><img src="'+f+'" alt="create-addon-group"></p><h3 id="gm" tabindex="-1"><a class="header-anchor" href="#gm" aria-hidden="true">#</a> GM</h3><p><strong>GM wird immer mitgeladen - sofern nichts anderes im Einsatz-Thread steht</strong></p><div class="custom-container tip"><p class="custom-container-title">TIPP</p><p>F\xFCr Besitzer des <strong>DLC</strong> : GM im Reiter &quot;DLC&quot; unter <strong>Addons</strong> in selber neu erstellte Addon Group rechts ziehen und mit dem jeweiligen Event-Repo zus\xE4tzlich anhaken.</p></div>',37),y={class:"custom-container warning"},z=e("p",{class:"custom-container-title"},"AUFGEPASST",-1),M={href:"https://steamcommunity.com/sharedfiles/filedetails/?id=1776428269",target:"_blank",rel:"noopener noreferrer"},R=e("strong",null,"Compat-Mod",-1),P=e("p",null,[e("code",null,'"-mod=C:\\deinPfadZuArma\\deinModVerzeichnis\\@Global Mobilization - Cold War Germany- Compatibility Data for Non-Owners;"')],-1),E=e("p",null,[e("strong",null,"Die Anf\xFChrungszeichen sind wichtig!")],-1),x=e("p",null,[e("img",{src:b,alt:"gm.PNG"})],-1),T=l('<h3 id="testconnect-auf-server" tabindex="-1"><a class="header-anchor" href="#testconnect-auf-server" aria-hidden="true">#</a> Testconnect auf Server</h3><p>Ein kurzer Testconnect auf den Server, um zu \xFCberpr\xFCfen ob alles korrekt l\xE4uft, ist immer empfehlenswert. Auf unserem Standardserver ist die Adlerbase rund um die Uhr erreichbar und stets auf dem neusten Stand.</p><h2 id="installation-tfar" tabindex="-1"><a class="header-anchor" href="#installation-tfar" aria-hidden="true">#</a> Installation TFAR</h2><p>Die Gruppe Adler benutzt Task Force Arrowhead Radio (TFAR) um eine ausreichend gute Kommunikation zu gew\xE4hrleisten.<br> TFAR ben\xF6tigt ein Teamspeak (TS) Plugin um korrekt zu funktionieren, welches separat in TS installiert werden muss. Dazu ins Mod-Verzeichnis, welches unter <a href="#grundlegende-einstellungen">Grundlegende Einstellungen</a> erstellt wurde wechseln. Im Unterverzeichnis <code>@tfar\\teamspeak</code> befindet sich die Datei <code>task_force_radio.ts3_plugin</code>. Ein einfacher Doppelklick auf die Datei installiert das Plugin.</p><div class="custom-container tip"><p class="custom-container-title">TIPP</p><p>Um das Plugin zu installieren darf keine Instanz des Teamspeak 3 Clients laufen.</p></div><p>Im TS sollte nun, wenn man den eigenen Nutzer ausw\xE4hlt, rechts ein Abschnitt <em>Task Force Radio Status</em> vorhanden sein.</p><p><img src="'+k+'" alt="teamspeak"></p><h2 id="modliste" tabindex="-1"><a class="header-anchor" href="#modliste" aria-hidden="true">#</a> Modliste</h2><h3 id="main-joint-op" tabindex="-1"><a class="header-anchor" href="#main-joint-op" aria-hidden="true">#</a> Main/Joint Op</h3>',9),D=e("thead",null,[e("tr",null,[e("th",null,"Name"),e("th",null,"Version"),e("th",null,"Anmerkung")])],-1),F={href:"https://github.com/acemod/ACE3/releases",target:"_blank",rel:"noopener noreferrer"},G=e("td",null,"3.13.2",-1),I=e("td",null,null,-1),C={href:"https://github.com/acemod/ACE3/releases",target:"_blank",rel:"noopener noreferrer"},V=e("td",null,"3.13.2",-1),U=e("td",null,null,-1),H={href:"https://github.com/acemod/ACE3/releases",target:"_blank",rel:"noopener noreferrer"},j=e("td",null,"3.13.2",-1),B=e("td",null,null,-1),L={href:"https://github.com/acemod/ACE3/releases",target:"_blank",rel:"noopener noreferrer"},N=e("td",null,"3.13.2",-1),O=e("td",null,null,-1),K=e("tr",null,[e("td",null,[e("a",{href:""},"ace_optionals")]),e("td",null,"3.13.2"),e("td")],-1),J={href:"https://github.com/acemod/ACEX/releases",target:"_blank",rel:"noopener noreferrer"},W=e("td",null,"3.5.2",-1),X=e("td",null,null,-1),Z={href:"https://steamcommunity.com/sharedfiles/filedetails/?id=615007497",target:"_blank",rel:"noopener noreferrer"},q=e("td",null,"2.1.1",-1),Q=e("td",null,null,-1),Y={href:"https://steamcommunity.com/sharedfiles/filedetails/?id=615007497",target:"_blank",rel:"noopener noreferrer"},$=e("td",null,"2.1.1",-1),ee=e("td",null,null,-1),ne={href:"http://www.armaholic.com/page.php?id=28838",target:"_blank",rel:"noopener noreferrer"},te=e("td",null,"1.2.0",-1),re=e("td",null,null,-1),le={href:"http://www.armaholic.com/page.php?id=35241",target:"_blank",rel:"noopener noreferrer"},se=e("td",null,"0.04",-1),oe=e("td",null,null,-1),ie={href:"https://github.com/CBATeam/CBA_A3/releases/tag/v3.12.0.190708",target:"_blank",rel:"noopener noreferrer"},de=e("td",null,"v3.14",-1),ae=e("td",null,null,-1),ue={href:"https://steamcommunity.com/workshop/filedetails/?id=583496184",target:"_blank",rel:"noopener noreferrer"},he=e("td",null,"1.15.0",-1),ce=e("td",null,null,-1),_e={href:"https://steamcommunity.com/sharedfiles/filedetails/?id=583544987",target:"_blank",rel:"noopener noreferrer"},me=e("td",null,"1.15.0",-1),pe=e("td",null,null,-1),ge=e("tr",null,[e("td",null,[e("a",{href:""},"cup_wheeledvehicles_suv ")]),e("td",null,"1.0"),e("td")],-1),fe={href:"https://steamcommunity.com/sharedfiles/filedetails/?id=1841553455",target:"_blank",rel:"noopener noreferrer"},be=e("td",null,"1.03",-1),ke=e("td",null,null,-1),we={href:"https://github.com/diwako/diwako_dui/",target:"_blank",rel:"noopener noreferrer"},Ae=e("td",null,"1.7.0",-1),ve=e("td",null,null,-1),Se={href:"http://www.armaholic.com/page.php?id=20393",target:"_blank",rel:"noopener noreferrer"},ye=e("td",null,"1.7.1",-1),ze=e("td",null,null,-1),Me={href:"https://steamcommunity.com/sharedfiles/filedetails/?l=german&id=333310405",target:"_blank",rel:"noopener noreferrer"},Re=e("td",null,"0.8.4.15",-1),Pe=e("td",null,null,-1),Ee={href:"https://github.com/DerZade/grad_slinghelmet/releases",target:"_blank",rel:"noopener noreferrer"},xe=e("td",null,"1.2",-1),Te=e("td",null,null,-1),De={href:"https://github.com/gruppe-adler/grad_trenches/releases",target:"_blank",rel:"noopener noreferrer"},Fe=e("td",null,"1.6.0.0",-1),Ge=e("td",null,null,-1),Ie={href:"https://github.com/gruppe-adler/gruppe_adler_mod/releases",target:"_blank",rel:"noopener noreferrer"},Ce=e("td",null,"2.15.3",-1),Ve=e("td",null,null,-1),Ue={href:"https://github.com/gruppe-adler/gruppe_adler_mod/releases",target:"_blank",rel:"noopener noreferrer"},He=e("td",null,"2.4",-1),je=e("td",null,null,-1),Be={href:"https://steamcommunity.com/sharedfiles/filedetails/?id=1284731930",target:"_blank",rel:"noopener noreferrer"},Le=e("td",null,"1.37",-1),Ne=e("td",null,null,-1),Oe={href:"https://steamcommunity.com/workshop/filedetails/?id=520618345",target:"_blank",rel:"noopener noreferrer"},Ke=e("td",null,"0.7.0917",-1),Je=e("td",null,null,-1),We={href:"https://steamcommunity.com/sharedfiles/filedetails/?id=909547724",target:"_blank",rel:"noopener noreferrer"},Xe=e("td",null,"1.09",-1),Ze=e("td",null,null,-1),qe={href:"https://steamcommunity.com/workshop/filedetails/?id=962932583",target:"_blank",rel:"noopener noreferrer"},Qe=e("td",null,"1.0",-1),Ye=e("td",null,null,-1),$e={href:"http://www.armaholic.com/page.php?id=28329",target:"_blank",rel:"noopener noreferrer"},en=e("td",null,"12",-1),nn=e("td",null,null,-1),tn={href:"http://steamcommunity.com/sharedfiles/filedetails/?id=950966660",target:"_blank",rel:"noopener noreferrer"},rn=e("td",null,"0.8",-1),ln=e("td",null,null,-1),sn={href:"http://steamcommunity.com/sharedfiles/filedetails/?id=735566597",target:"_blank",rel:"noopener noreferrer"},on=e("td",null,"0.3.0",-1),dn=e("td",null,null,-1),an={href:"http://steamcommunity.com/sharedfiles/filedetails/?id=1128145626",target:"_blank",rel:"noopener noreferrer"},un=e("td",null,"1.12.171",-1),hn=e("td",null,null,-1),cn={href:"https://steamcommunity.com/sharedfiles/filedetails/?id=843425103",target:"_blank",rel:"noopener noreferrer"},_n=e("td",null,"0.5.0",-1),mn=e("td",null,null,-1),pn={href:"https://steamcommunity.com/sharedfiles/filedetails/?id=843577117",target:"_blank",rel:"noopener noreferrer"},gn=e("td",null,"0.5.0",-1),fn=e("td",null,null,-1),bn={href:"https://steamcommunity.com/sharedfiles/filedetails/?id=843593391",target:"_blank",rel:"noopener noreferrer"},kn=e("td",null,"0.5.0",-1),wn=e("td",null,null,-1),An={href:"https://steamcommunity.com/sharedfiles/filedetails/?id=843632231",target:"_blank",rel:"noopener noreferrer"},vn=e("td",null,"0.5.0",-1),Sn=e("td",null,null,-1),yn={href:"http://www.armaholic.com/page.php?id=26188",target:"_blank",rel:"noopener noreferrer"},zn=e("td",null,"1.3.1",-1),Mn=e("td",null,null,-1),Rn={href:"https://steamcommunity.com/sharedfiles/filedetails/?id=1527410521",target:"_blank",rel:"noopener noreferrer"},Pn=e("td",null,"2.0",-1),En=e("td",null,null,-1),xn={href:"https://steamcommunity.com/sharedfiles/filedetails/?id=1368857262",target:"_blank",rel:"noopener noreferrer"},Tn=e("td",null,"0.11",-1),Dn=e("td",null,null,-1),Fn=e("tr",null,[e("td",null,[e("a",{href:""},"SMM German Uniforms ")]),e("td",null,"0.98"),e("td")],-1),Gn={href:"http://steamcommunity.com/sharedfiles/filedetails/?id=770418577&searchtext=splendid",target:"_blank",rel:"noopener noreferrer"},In=e("td",null,"1.1",-1),Cn=e("td",null,null,-1),Vn={href:"https://github.com/michail-nikolaev/task-force-arma-3-radio/releases/tag/1.0-PreRelease",target:"_blank",rel:"noopener noreferrer"},Un=e("td",null,"1.-1.0.325",-1),Hn=e("td",null,null,-1),jn={href:"https://steamcommunity.com/sharedfiles/filedetails/?id=1252091296",target:"_blank",rel:"noopener noreferrer"},Bn=e("td",null,"1.2",-1),Ln=e("td",null,null,-1),Nn=e("tr",null,[e("td",null,"virolahti - valtatie 7"),e("td",null,"1.01"),e("td")],-1),On=e("tr",null,[e("td",null,[e("a",{href:""},"Vinjesvingen ")]),e("td",null,"1.21"),e("td")],-1),Kn={href:"https://steamcommunity.com/sharedfiles/filedetails/?id=1703187116",target:"_blank",rel:"noopener noreferrer"},Jn=e("td",null,"1.3.1.02",-1),Wn=e("td",null,null,-1),Xn={href:"https://github.com/zen-mod/ZEN/releases",target:"_blank",rel:"noopener noreferrer"},Zn=e("td",null,"1.8.0",-1),qn=e("td",null,null,-1),Qn=e("tr",null,[e("td",null,[e("a",{href:""},"SFP tempor\xE4r")]),e("td",null,"x.xx"),e("td")],-1),Yn=e("tr",null,[e("td",null,[e("a",{href:""},"SFP JSRS")]),e("td",null,"x.xx"),e("td")],-1),$n={href:"https://steamcommunity.com/sharedfiles/filedetails/changelog/861133494",target:"_blank",rel:"noopener noreferrer"},et=e("td",null,"CE.20.0423B",-1),nt=e("td",null,null,-1),tt=e("tr",null,[e("td",null,[e("a",{href:""},"JSRS RHS comp")]),e("td",null,"x.xx"),e("td")],-1),rt=e("tr",null,[e("td",null,[e("a",{href:""},"JSRS GM comp")]),e("td",null,"x.xx"),e("td")],-1),lt=e("tr",null,[e("td",null,[e("a",{href:"steamcommunity.com/sharedfiles/filedetails/?id=639837898"},"Advanced Towing")]),e("td",null,"v1.5"),e("td")],-1),st=e("h3",{id:"optionals",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#optionals","aria-hidden":"true"},"#"),n(" Optionals")],-1),ot=e("thead",null,[e("tr",null,[e("th",null,"Name"),e("th",null,"Version"),e("th",null,"Anmerkung")])],-1),it={href:"http://steamcommunity.com/sharedfiles/filedetails/?id=767380317",target:"_blank",rel:"noopener noreferrer"},dt=e("td",null,"1.7",-1),at={href:"https://emojipedia.org/warning-sign/",target:"_blank",rel:"noopener noreferrer"},ut={href:"https://steamcommunity.com/sharedfiles/filedetails/?id=809527168",target:"_blank",rel:"noopener noreferrer"},ht=e("td",null,"1.2",-1),ct=e("td",null,"Zeigt Armor-Werte im Inventar",-1),_t={href:"https://github.com/DerZade/grad_minui/releases",target:"_blank",rel:"noopener noreferrer"},mt=e("td",null,"v0.6.3",-1),pt={href:"https://emojipedia.org/warning-sign/",target:"_blank",rel:"noopener noreferrer"},gt={href:"https://steamcommunity.com/sharedfiles/filedetails/?id=1223309664",target:"_blank",rel:"noopener noreferrer"},ft=e("td",null,"0.9",-1),bt={href:"https://emojipedia.org/warning-sign/",target:"_blank",rel:"noopener noreferrer"},kt=e("strong",null,"ver\xE4ndert Video Settings vom Spiel",-1),wt={href:"https://steamcommunity.com/sharedfiles/filedetails/?id=630737877",target:"_blank",rel:"noopener noreferrer"},At=e("td",null,"v2.9.1",-1),vt=e("td",null,"Erlaubt gr\xF6\xDFeren Spielraum f\xFCr FreeLook",-1),St={href:"https://steamcommunity.com/sharedfiles/filedetails/?id=825174634",target:"_blank",rel:"noopener noreferrer"},yt=e("td",null,"V 2.04",-1),zt=e("td",null,"Ver\xE4ndert FX, u.a. Camshake, Twitches bei Sch\xFCssen/Explosionen",-1),Mt={href:"https://steamcommunity.com/sharedfiles/filedetails/?id=825174634",target:"_blank",rel:"noopener noreferrer"},Rt=e("td",null,"2.04",-1),Pt=e("td",null,"Ver\xE4ndert FX, erlaubt Unterdr\xFCckung",-1),Et={href:"https://steamcommunity.com/sharedfiles/filedetails/?id=790393813",target:"_blank",rel:"noopener noreferrer"},xt=e("td",null,"2.0",-1),Tt=e("td",null,"F\xFCgt Inventar u.a. Sounds hinzu",-1);function Dt(Ft,Gt){const t=a("OutboundLink");return o(),i(d,null,[A,e("p",null,[n("F\xFCr das Herunterladen und die Synchronisation der Mods wird Arma3Sync ben\xF6tigt. Die aktuelle Version ist "),e("a",v,[n("hier zu finden"),r(t)]),n(". Diese einfach herunterladen und installieren.")]),S,e("div",y,[z,e("p",null,[n("F\xFCr Nichtbesitzer des CDLC gibt es einen kostenlosen "),e("a",M,[R,n(),r(t)]),n(" Daf\xFCr muss folgender Startup Parameter in das unten gezeigte A3S Inputfeld:")]),P,E,x]),T,e("table",null,[D,e("tbody",null,[e("tr",null,[e("td",null,[e("a",F,[n("ACE3"),r(t)])]),G,I]),e("tr",null,[e("td",null,[e("a",C,[n("ace_compat_rhs_afrf3"),r(t)])]),V,U]),e("tr",null,[e("td",null,[e("a",H,[n("ace_compat_rhs_gref3"),r(t)])]),j,B]),e("tr",null,[e("td",null,[e("a",L,[n("ace_compat_rhs_usf3 "),r(t)])]),N,O]),K,e("tr",null,[e("td",null,[e("a",J,[n("ACEX"),r(t)])]),W,X]),e("tr",null,[e("td",null,[e("a",Z,[n("Advanced Sling Loading"),r(t)])]),q,Q]),e("tr",null,[e("td",null,[e("a",Y,[n("Advanced Sling Loading"),r(t)])]),$,ee]),e("tr",null,[e("td",null,[e("a",ne,[n("BackpackOnChest "),r(t)])]),te,re]),e("tr",null,[e("td",null,[e("a",le,[n("Cham"),r(t)])]),se,oe]),e("tr",null,[e("td",null,[e("a",ie,[n("CBA Community Base addons A3"),r(t)])]),de,ae]),e("tr",null,[e("td",null,[e("a",ue,[n("CUP Terrains Core"),r(t)])]),he,ce]),e("tr",null,[e("td",null,[e("a",_e,[n("CUP Terrains Maps"),r(t)])]),me,pe]),ge,e("tr",null,[e("td",null,[e("a",fe,[n("Dismount where you look"),r(t)])]),be,ke]),e("tr",null,[e("td",null,[e("a",we,[n("DUI Squad Radar "),r(t)])]),Ae,ve]),e("tr",null,[e("td",null,[e("a",Se,[n("FHQ Accessories pack"),r(t)])]),ye,ze]),e("tr",null,[e("td",null,[e("a",Me,[n("Enhanced Movement"),r(t)])]),Re,Pe]),e("tr",null,[e("td",null,[e("a",Ee,[n("grad_slinghelmet "),r(t)])]),xe,Te]),e("tr",null,[e("td",null,[e("a",De,[n("Gruppe Adler Trenches"),r(t)])]),Fe,Ge]),e("tr",null,[e("td",null,[e("a",Ie,[n("Gruppe_Adler_Mod"),r(t)])]),Ce,Ve]),e("tr",null,[e("td",null,[e("a",Ue,[n("Gruppe_Adler_Additionals"),r(t)])]),He,je]),e("tr",null,[e("td",null,[e("a",Be,[n("GM Demo Vehicle"),r(t)])]),Le,Ne]),e("tr",null,[e("td",null,[e("a",Oe,[n("JBAD Buildings"),r(t)])]),Ke,Je]),e("tr",null,[e("td",null,[e("a",We,[n("Lythium Map "),r(t)])]),Xe,Ze]),e("tr",null,[e("td",null,[e("a",qe,[n("MBG Buildings 3"),r(t)])]),Qe,Ye]),e("tr",null,[e("td",null,[e("a",$e,[n("NIArsenal"),r(t)])]),en,nn]),e("tr",null,[e("td",null,[e("a",tn,[n("Prei Khmaoch Luong"),r(t)])]),rn,ln]),e("tr",null,[e("td",null,[e("a",sn,[n("Project OPFOR"),r(t)])]),on,dn]),e("tr",null,[e("td",null,[e("a",an,[n("Redd'n'Tank Vehicles"),r(t)])]),un,hn]),e("tr",null,[e("td",null,[e("a",cn,[n("RHS Rus -RHSAFRF"),r(t)])]),_n,mn]),e("tr",null,[e("td",null,[e("a",pn,[n("RHS USA - RHSUSAF"),r(t)])]),gn,fn]),e("tr",null,[e("td",null,[e("a",bn,[n("RHS Ind - RHSGREF"),r(t)])]),kn,wn]),e("tr",null,[e("td",null,[e("a",An,[n("RHS Ser - RHSSAF"),r(t)])]),vn,Sn]),e("tr",null,[e("td",null,[e("a",yn,[n("RDS A2 Civilian Pack"),r(t)])]),zn,Mn]),e("tr",null,[e("td",null,[e("a",Rn,[n("Rosche Map"),r(t)])]),Pn,En]),e("tr",null,[e("td",null,[e("a",xn,[n("Ruha Map"),r(t)])]),Tn,Dn]),Fn,e("tr",null,[e("td",null,[e("a",Gn,[n("Splendid Smoke"),r(t)])]),In,Cn]),e("tr",null,[e("td",null,[e("a",Vn,[n("TFAR"),r(t)])]),Un,Hn]),e("tr",null,[e("td",null,[e("a",jn,[n("Tembelan Island "),r(t)])]),Bn,Ln]),Nn,On,e("tr",null,[e("td",null,[e("a",Kn,[n("Vet Unflipping"),r(t)])]),Jn,Wn]),e("tr",null,[e("td",null,[e("a",Xn,[n("ZEN "),r(t)])]),Zn,qn]),Qn,Yn,e("tr",null,[e("td",null,[e("a",$n,[n("JSRS"),r(t)])]),et,nt]),tt,rt,lt])]),st,e("table",null,[ot,e("tbody",null,[e("tr",null,[e("td",null,[e("a",it,[n("Blastcore edited standalone"),r(t)])]),dt,e("td",null,[e("a",at,[n("\u26A0\uFE0F"),r(t)]),n(" ggf. Performance-intensiv, ver\xE4ndert FX")])]),e("tr",null,[e("td",null,[e("a",ut,[n("Enhanced Arma3 Inventory"),r(t)])]),ht,ct]),e("tr",null,[e("td",null,[e("a",_t,[n("GRAD MinUI "),r(t)])]),mt,e("td",null,[e("a",pt,[n("\u26A0\uFE0F"),r(t)]),n(" Entfernt gro\xDFe Teile des UI")])]),e("tr",null,[e("td",null,[e("a",gt,[n("Enhanced Video Settings"),r(t)])]),ft,e("td",null,[e("a",bt,[n("\u26A0\uFE0F"),r(t)]),n(" Performance-intensiv, ver\xE4ndert FX, "),kt])]),e("tr",null,[e("td",null,[e("a",wt,[n("Head Range Plus - TrackIR Mod"),r(t)])]),At,vt]),e("tr",null,[e("td",null,[e("a",St,[n("Immerse "),r(t)])]),yt,zt]),e("tr",null,[e("td",null,[e("a",Mt,[n("Suppress"),r(t)])]),Rt,Pt]),e("tr",null,[e("td",null,[e("a",Et,[n("UISounds 2 "),r(t)])]),xt,Tt])])])],64)}var Ct=s(w,[["render",Dt]]);export{Ct as default};
