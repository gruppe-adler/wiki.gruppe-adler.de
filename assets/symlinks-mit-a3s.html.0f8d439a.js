import{_ as e,e as n}from"./app.77e60c10.js";const r={},t=n(`<h1 id="\u26D3\uFE0F-symlinks-mit-a3s" tabindex="-1"><a class="header-anchor" href="#\u26D3\uFE0F-symlinks-mit-a3s" aria-hidden="true">#</a> \u26D3\uFE0F Symlinks mit A3S</h1><p>Wenn man seine Modpakete, zB von verschiedenen Gruppen, in eigenen Ordnern haben will, muss man entweder manche Mods doppelt auf der Festplatte haben, A3S so einrichten das es mehrere Ordner ausliest oder mit Links arbeiten.</p><p>Ich hab mich f\xFCr die letzte Variante entschieden, da mir mein SSD-Speicherplatz heilig ist und A3S manchmal sehr anf\xE4llig ist wenn man verschiedene Ordner angibt und es dann trotzdem den Mod komplett neu laden will.</p><p>Symbolische Links kann man in Windows am besten via Konsole anlegen. Evtl gibt es daf\xFCr auch noch Programme, das ist aber aus meiner Sicht unn\xF6tig, da es auch so recht schnell geht.</p><h2 id="ausgangslage" tabindex="-1"><a class="header-anchor" href="#ausgangslage" aria-hidden="true">#</a> Ausgangslage</h2><p>Ich habe meinen Arma 3 Ordner in <code>E:\\SteamLibrary\\SteamApps\\common\\Arma 3</code>. Darin liegen die Ordner <strong>AdlerMods</strong> und <strong>3CBMods</strong> in die das jeweilige Repo von A3S geladen werden soll. Das Adler-Repo beinhaltet schon die Pakete cup_terrains, CBA, RHS und TFAR. Ich m\xF6chte diese also nicht ein zweites mal im Ordner <strong>3CBMods</strong> liegen haben</p><h2 id="durchfuhrung" tabindex="-1"><a class="header-anchor" href="#durchfuhrung" aria-hidden="true">#</a> Durchf\xFChrung</h2><p>Konsole \xF6ffnen (Ausf\xFChren -&gt; cmd) Zum entsprechenden Ordner wechseln (Der in dem die Links erzeugt werden)</p><div class="language-text ext-text"><pre class="language-text"><code>C:\\Users\\andy&gt;e:
E:\\&gt;cd &quot;E:\\SteamLibrary\\SteamApps\\common\\Arma 3\\3CBMods&quot;
</code></pre></div><p>Die Anf\xFChrungszeichen sind wichtig weil der Pfad ein Leerzeichen enth\xE4lt.</p><p>Danach die Links mit dem mklink-Befehl anlegen und darauf achten das eine entsprechende Erfolgsmeldung erscheint.</p><div class="language-text ext-text"><pre class="language-text"><code>mklink /J @cup_terrains &quot;E:\\SteamLibrary\\SteamApps\\common\\Arma 3\\AdlerMods\\@cup_terrains&quot;
Verbindung erstellt f\xFCr @cup_terrains &lt;&lt;===&gt;&gt; E:\\SteamLibrary\\SteamApps\\common\\Arma 3\\AdlerMods\\@cup_terrains
mklink /J @CBA_A3 &quot;E:\\SteamLibrary\\SteamApps\\common\\Arma 3\\AdlerMods\\@CBA_A3&quot;
Verbindung erstellt f\xFCr @CBA_A3 &lt;&lt;===&gt;&gt; E:\\SteamLibrary\\SteamApps\\common\\Arma 3\\AdlerMods\\@CBA_A3
mklink /J @RHSAFRF &quot;E:\\SteamLibrary\\SteamApps\\common\\Arma 3\\AdlerMods\\@RHSAFRF&quot;
Verbindung erstellt f\xFCr @RHSAFRF &lt;&lt;===&gt;&gt; E:\\SteamLibrary\\SteamApps\\common\\Arma 3\\AdlerMods\\@RHSAFRF
mklink /J @RHSUSF &quot;E:\\SteamLibrary\\SteamApps\\common\\Arma 3\\AdlerMods\\@RHSUSF&quot;
Verbindung erstellt f\xFCr @RHSUSF &lt;&lt;===&gt;&gt; E:\\SteamLibrary\\SteamApps\\common\\Arma 3\\AdlerMods\\@RHSUSF
mklink /J @task_force_radio &quot;E:\\SteamLibrary\\SteamApps\\common\\Arma 3\\AdlerMods\\@task_force_radio&quot;
Verbindung erstellt f\xFCr @task_force_radio &lt;&lt;===&gt;&gt; E:\\SteamLibrary\\SteamApps\\common\\Arma 3\\AdlerMods\\@task_force_radio
</code></pre></div><p>Im Ordner <strong>3CBMods</strong> sind jetzt 5 Links enthalten, die auf die entsprechenden Ordner bei den AdlerMods zeigen. A3S merkt den Unterschied nicht und denkt die kompletten Mods sind auch in <strong>3CBMods</strong> enthalten.</p>`,13);function a(s,d){return t}var o=e(r,[["render",a]]);export{o as default};
