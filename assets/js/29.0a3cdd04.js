(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{283:function(e,n,r){"use strict";r.r(n);var a=r(2),s=Object(a.a)({},(function(){var e=this,n=e.$createElement,r=e._self._c||n;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"⛓️-symlinks-mit-a3s"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#⛓️-symlinks-mit-a3s","aria-hidden":"true"}},[e._v("#")]),e._v(" ⛓️ Symlinks mit A3S")]),e._v(" "),r("p",[e._v("Wenn man seine Modpakete, zB von verschiedenen Gruppen, in eigenen Ordnern haben will, muss man entweder manche Mods doppelt auf der Festplatte haben, A3S so einrichten das es mehrere Ordner ausliest oder mit Links arbeiten.")]),e._v(" "),r("p",[e._v("Ich hab mich für die letzte Variante entschieden, da mir mein SSD-Speicherplatz heilig ist und A3S manchmal sehr anfällig ist wenn man verschiedene Ordner angibt und es dann trotzdem den Mod komplett neu laden will.")]),e._v(" "),r("p",[e._v("Symbolische Links kann man in Windows am besten via Konsole anlegen. Evtl gibt es dafür auch noch Programme, das ist aber aus meiner Sicht unnötig, da es auch so recht schnell geht.")]),e._v(" "),r("h2",{attrs:{id:"ausgangslage"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#ausgangslage","aria-hidden":"true"}},[e._v("#")]),e._v(" Ausgangslage")]),e._v(" "),r("p",[e._v("Ich habe meinen Arma 3 Ordner in "),r("code",[e._v("E:\\SteamLibrary\\SteamApps\\common\\Arma 3")]),e._v(".\nDarin liegen die Ordner "),r("strong",[e._v("AdlerMods")]),e._v(" und "),r("strong",[e._v("3CBMods")]),e._v(" in die das jeweilige Repo von A3S geladen werden soll.\nDas Adler-Repo beinhaltet schon die Pakete cup_terrains, CBA, RHS und TFAR. Ich möchte diese also nicht ein zweites mal im Ordner "),r("strong",[e._v("3CBMods")]),e._v(" liegen haben")]),e._v(" "),r("h2",{attrs:{id:"durchfuhrung"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#durchfuhrung","aria-hidden":"true"}},[e._v("#")]),e._v(" Durchführung")]),e._v(" "),r("p",[e._v("Konsole öffnen (Ausführen -> cmd)\nZum entsprechenden Ordner wechseln (Der in dem die Links erzeugt werden)")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",[r("code",{staticClass:"hljs"},[e._v('C:\\Users\\andy>e:\nE:\\>cd "E:\\SteamLibrary\\SteamApps\\common\\Arma 3\\3CBMods"\n')])])]),r("p",[e._v("Die Anführungszeichen sind wichtig weil der Pfad ein Leerzeichen enthält.")]),e._v(" "),r("p",[e._v("Danach die Links mit dem mklink-Befehl anlegen und darauf achten das eine entsprechende Erfolgsmeldung erscheint.")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",[r("code",{staticClass:"hljs"},[e._v('mklink /J @cup_terrains "E:\\SteamLibrary\\SteamApps\\common\\Arma 3\\AdlerMods\\@cup_terrains"\nVerbindung erstellt für @cup_terrains <<===>> E:\\SteamLibrary\\SteamApps\\common\\Arma 3\\AdlerMods\\@cup_terrains\nmklink /J @CBA_A3 "E:\\SteamLibrary\\SteamApps\\common\\Arma 3\\AdlerMods\\@CBA_A3"\nVerbindung erstellt für @CBA_A3 <<===>> E:\\SteamLibrary\\SteamApps\\common\\Arma 3\\AdlerMods\\@CBA_A3\nmklink /J @RHSAFRF "E:\\SteamLibrary\\SteamApps\\common\\Arma 3\\AdlerMods\\@RHSAFRF"\nVerbindung erstellt für @RHSAFRF <<===>> E:\\SteamLibrary\\SteamApps\\common\\Arma 3\\AdlerMods\\@RHSAFRF\nmklink /J @RHSUSF "E:\\SteamLibrary\\SteamApps\\common\\Arma 3\\AdlerMods\\@RHSUSF"\nVerbindung erstellt für @RHSUSF <<===>> E:\\SteamLibrary\\SteamApps\\common\\Arma 3\\AdlerMods\\@RHSUSF\nmklink /J @task_force_radio "E:\\SteamLibrary\\SteamApps\\common\\Arma 3\\AdlerMods\\@task_force_radio"\nVerbindung erstellt für @task_force_radio <<===>> E:\\SteamLibrary\\SteamApps\\common\\Arma 3\\AdlerMods\\@task_force_radio\n')])])]),r("p",[e._v("Im Ordner "),r("strong",[e._v("3CBMods")]),e._v(" sind jetzt 5 Links enthalten, die auf die entsprechenden Ordner bei den AdlerMods zeigen. A3S merkt den Unterschied nicht und denkt die kompletten Mods sind auch in "),r("strong",[e._v("3CBMods")]),e._v(" enthalten.")])])}),[],!1,null,null,null);n.default=s.exports}}]);