# :gear: Arma Reforger Server Admin (arsa)

[[toc]]

## Einleitung

Der **Arma Reforger Server Admin** (kurz arsa) ist ein Webfrontend und erlaubt das erstellen und administrieren von Arma Reforger Servern auf unserer Infrastruktur. Details zur Infrastruktur findest du [hier](https://github.com/gruppe-adler/Infrastruktur/blob/master/docs/arsa.md).

## Eine Config erstellen

Du kannst eine bestehende Config duplizieren (Button **Clone** rechts neben dem Eintrag zu einer Config auf der Seite **Servers List**) oder oben im Menü über **Add Server** neu erstellen. Wenn du die Config neu erstellst, werden bereits Default-Werte eingetragen. Du musst nur folgende Punkte beachten:

- Es gibt zwei unterschiedliche Namen zu vergeben:
  - Ganz oben wird der Name für die Config vergeben, wie er in der Liste **Servers List** angezeigt wird
  - Im Bereich **Game** vergibst du den Namen, der später im Reforger Multiplayer Browser angezeigt wird
- Es wird von BI empfohlen, immer mit **maxFPS** die Leistung des Servers zu begrenzen. Irgendetwas zwischen 30 und 60 FPS sollte ausreichend sein. Dabei handelt es sich um die Server-FPS und nicht die Client-FPS.
- Wird **logStats** aktiviert, so landen im Interval (angegeben in Millisekunden) Einträge im Log zur Performance des Servers. Ist ganz nützlich zur Performance-Analyse.
- **keepNumOfLogs** löscht automatisch alte Logs, wenn die Anzahl die Angabe übersteigt
- Alles in den Bereichen **Config**, **A2S** und **RCON** kann auf Default-Werten bleiben. Nur die **publicAddress** muss einmal gesetzt werden. Einfach auf **Auto** drücken zum eintragen.
- In **admins** kann sowohl die SteamId als auch die neue identityID verwendet werden. Wenn ein Server bereits gestartet wurde und Spieler gejoint sind, finden sich die identityIDs in den Logs. Einfach das Log (console.log) öffnen und oben auf den Knopf **Import Players** drücken. Es gibt dann eine Meldung, wieviele Player importiert wurden. Die Ids der Player sind dann im Menü **Servers List** über den Knopf **Known Players** einsehbar und können dort kopiert und bei **admins** eingefügt werden.
- Bei **supportedPlatforms** ist Vorsicht geboten. Wenn keine Mods geladen sind, dann müssen alle 3 Optionen (PC, Xbox, PlayStation) aktiviert sein. Andernfalls beendet sich der Server wieder. Werden Mods geladen dürfen nur PC und ggf. Xbox angewählt sein. Stand heute (Januar 2025) unterstützt die PlayStation noch keine Mods. Der Server würde sich gleich wieder beenden.
- Die **properties** können so beibehalten werden.
- Unter **Mods** lassen sich zwar einzelne Mods eintragen, aber einfacher ist der Import von Mods. Dafür im Reforger Client die entsprechenden Mods laden/aktivieren und dann als JSON exportieren und hier über **Import Modset** wieder importieren.
  - Wenn ihr immer die neueste Version der Mods laden wollt, dann den Eintrag **version** bei jedem Mod vor dem Import entfernen.
- Am Ende können **Operating** und **joinQueue** bleiben wie sie sind.
- Am Ende einfach auf **add** klicken. Damit wird die Config hinzugefügt.

## Eine Config bearbeiten

Einfach auf den Namen der Config in der **Servers List** klicken, die Config editieren und ganz unten auf **update** klicken.

## Eine Config löschen

Einfach auf den Button **Delete** in der **Servers List** klicken. Hiermit wird nicht nur die Config gelöscht, sondern auch alle anderen mit der Instanz in Zusammenhang stehenden Daten, wie z.B. Mods und Logs.

## Eine Instanz starten

Zum Starten einer Arma Reforger Server Instanz basierend auf einer Config, einfach in der **Servers List** auf **Start** drücken. Sollte sich die Instanz von allein wieder beenden, wird dies in der Übersicht angezeigt.

## Eine Instanz stoppen

Zum Stoppen einer laufenden Arma Reforger Server Instanz, einfach in der **Servers List** auf **Stop** drücken.

## Auf Logs zugreifen

Insofern eine Instanz mindestens einmal gestartet wurde, kann über die Schaltfläche **Logs** in der **Servers List** auf die Logs zugegriffen werden. Pro Start werden 3 Logs angelegt. Das wichtigste Log ist **console.log**. Darin sind alle Meldungen inkl. Fehlermeldungen enthalten. Am Ende des Logs findet sich ein Knopf **Refresh** um das Log neu zu laden, falls der Server gerade läuft.

## Auf Statistiken einer laufenden Instanz zugreifen (CPU, RAM)

Läuft eine Instanz, so ist in der **Servers List** der Knopf **Stats** verfügbar. Dieser Befehl gibt die Docker-spezifischen Leistungsmerkmale der Instanz an wie z.B. CPU- und RAM-Nutzung.
