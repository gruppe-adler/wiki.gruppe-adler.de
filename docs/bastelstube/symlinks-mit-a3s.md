# ⛓️ Symlinks mit A3S

Wenn man seine Modpakete, zB von verschiedenen Gruppen, in eigenen Ordnern haben will, muss man entweder manche Mods doppelt auf der Festplatte haben, A3S so einrichten das es mehrere Ordner ausliest oder mit Links arbeiten.  

Ich hab mich für die letzte Variante entschieden, da mir mein SSD-Speicherplatz heilig ist und A3S manchmal sehr anfällig ist wenn man verschiedene Ordner angibt und es dann trotzdem den Mod komplett neu laden will.  

Symbolische Links kann man in Windows am besten via Konsole anlegen. Evtl gibt es dafür auch noch Programme, das ist aber aus meiner Sicht unnötig, da es auch so recht schnell geht.  

## Ausgangslage

Ich habe meinen Arma 3 Ordner in `E:\SteamLibrary\SteamApps\common\Arma 3`.
Darin liegen die Ordner **AdlerMods** und **3CBMods** in die das jeweilige Repo von A3S geladen werden soll.
Das Adler-Repo beinhaltet schon die Pakete cup_terrains, CBA, RHS und TFAR. Ich möchte diese also nicht ein zweites mal im Ordner **3CBMods** liegen haben

## Durchführung

Konsole öffnen (Ausführen -> cmd)
Zum entsprechenden Ordner wechseln (Der in dem die Links erzeugt werden)

```
C:\Users\andy>e:
E:\>cd "E:\SteamLibrary\SteamApps\common\Arma 3\3CBMods"
```

Die Anführungszeichen sind wichtig weil der Pfad ein Leerzeichen enthält.

Danach die Links mit dem mklink-Befehl anlegen und darauf achten das eine entsprechende Erfolgsmeldung erscheint.

```
mklink /J @cup_terrains "E:\SteamLibrary\SteamApps\common\Arma 3\AdlerMods\@cup_terrains"
Verbindung erstellt für @cup_terrains <<===>> E:\SteamLibrary\SteamApps\common\Arma 3\AdlerMods\@cup_terrains
mklink /J @CBA_A3 "E:\SteamLibrary\SteamApps\common\Arma 3\AdlerMods\@CBA_A3"
Verbindung erstellt für @CBA_A3 <<===>> E:\SteamLibrary\SteamApps\common\Arma 3\AdlerMods\@CBA_A3
mklink /J @RHSAFRF "E:\SteamLibrary\SteamApps\common\Arma 3\AdlerMods\@RHSAFRF"
Verbindung erstellt für @RHSAFRF <<===>> E:\SteamLibrary\SteamApps\common\Arma 3\AdlerMods\@RHSAFRF
mklink /J @RHSUSF "E:\SteamLibrary\SteamApps\common\Arma 3\AdlerMods\@RHSUSF"
Verbindung erstellt für @RHSUSF <<===>> E:\SteamLibrary\SteamApps\common\Arma 3\AdlerMods\@RHSUSF
mklink /J @task_force_radio "E:\SteamLibrary\SteamApps\common\Arma 3\AdlerMods\@task_force_radio"
Verbindung erstellt für @task_force_radio <<===>> E:\SteamLibrary\SteamApps\common\Arma 3\AdlerMods\@task_force_radio
```

Im Ordner **3CBMods** sind jetzt 5 Links enthalten, die auf die entsprechenden Ordner bei den AdlerMods zeigen. A3S merkt den Unterschied nicht und denkt die kompletten Mods sind auch in **3CBMods** enthalten.