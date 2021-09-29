# :question: Wiki How-To
::: danger
Dieser Guide geht davon aus, dass du Mitglied in der Gruppe Adler GitHub Organisation bist.

Falls du Adler, aber noch kein Mitglied auf GitHub bist, melde dich bitte im interen Discord.
:::

## Einleitung
Dieses Wiki baut auf [VuePress Version 2](https://v2.vuepress.vuejs.org/) auf. Die VuePress Dokumentation ([hier zu finden](https://v2.vuepress.vuejs.org/guide)) gilt dementsprechend im Allgemeinen auch für dieses Wiki.  

Seiten werden in **Markdown** verfasst (genauso wie auf GitHub, in unserem Forum oder auf Discord). Genauer gesagt handelt es sich um [GitHub Flavored Markdown](https://guides.github.com/features/mastering-markdown/) mit einigen Extras, welche du [weiter unten in diesem Guide](#markdown) findest.


## Eine Seite bearbeiten
Auf jeder Seite befindest sich ganz unten ein Link, um die Seite direkt auf GitHub zu bearbeiten.

![](~@assets/wiki-how-to/edit-link.png)

::: tip
Es kann ein paar Minuten dauern, bis Änderungen zu sehen sind!
:::

## Neue Seite erstellen

### Anmerkungen
Überleg dir einen aussagekräftigen Namen! Du willst ja auch, dass deine Seite gefunden wird :innocent:

**Die Dateien sind wie folgt zu benennen:**
- Alles Kleinbuchstaben
- Leerzeichen durch `-` ersetzten
- Dateierweiterung ist `.md`

Beispiele:  
Gruppe Adler Modset → `gruppe-adler-modset.md`  
Wiki How-To → `wiki-how-to.md`

**Titel und Überschriften**  
Die erste Zeile in deiner Datei **muss** eine Überschrift (Größe 1) mit dem Titel sein. Wenn du magst kannst du auch noch einen Emoji voranstellen.  
z. B.:
```md
# ❓ Wiki How-To
```

_Alle weiteren Überschriften dürfen maximal Größe 2 (`##`) haben._

### Seite erstellen
::: danger 
Unbedingt Anmerkungen zu Nomenklatur und Titel von oben beachten!
:::

::: tip Quick-Links zum Seite erstellen:
- <GradGitHubLink link="/new/:branch/:dir/bastelstube">Seite erstellen: Bastelstube</GradGitHubLink>
- <GradGitHubLink link="/new/:branch/:dir/infrastruktur">Seite erstellen: Infrastruktur</GradGitHubLink>
- <GradGitHubLink link="/new/:branch/:dir/organisatorisches">Seite erstellen: Organisatorisches</GradGitHubLink>
- <GradGitHubLink link="/new/:branch/:dir/taktik">Seite erstellen: Taktik</GradGitHubLink>
:::

Eine neue Seite kann einfach auf GitHub erstellt werden. Im <GradGitHubLink link="/tree/:branch/:dir">docs-Verzeichnis</GradGitHubLink> einfach das Verzeichnis für die richtige Kategorie wählen und dann unter _"Add file"_ auf _"Create new file klicken"_.

![create-file](~@assets/wiki-how-to/create-page.png)

::: tip
Es kann ein paar Minuten dauern, bis die neue Seite zu sehen ist!
:::

## Bilder einbinden
Um Bilder einzubinden, gibt es zwei Möglichkeiten:  
Auf Imgur (oder vergleichbaren Plattformen) hochladen und dann einfach im Markdown verwenden oder Bilder über das Wiki hosten.  
Ersteres sollte eigentlich selbst erklärend sein. Letzteres wird im Folgenden erklärt.

### GitHub WebEditor öffnen
1. Auf die <GradGitHubLink link="/">GitHub Seite des Wikis</GradGitHubLink> gehen
2. Punkt (`.`) auf der Tastatur drücken

### Bilder hochladen
1. In das Verzeichnis `docs/assets/` navigieren.
2. Falls es noch kein Verzeichnis für eure Seite gibt, einfach per Rechtsklick auf den `assets` Ordner ein neues erstellen
3. Per Rechtsklick auf den erstellten Ordner Bilder hochladen

### Aus Markdown auf Assets zugreifen
Im WebEditor könnt ihr auch gleich eure Seite anpassen.

Auf Dateien aus dem Assets-Ordner kann mit dem Prefix `~@assets/` zugegriffen werden.  
Zum Beispiel: Euer Bild hat den Pfad `docs/assets/wiki-how-to/create-page.png` dann könnt ihr im Markdown folgendermaßen darauf zugreifen:

```md
![Screenshot aus GitHub](~@assets/wiki-how-to/create-page.png)
```

### Commit
Sobald ihr mit euren Änderungen zufrieden seid, könnt ihr einfach auf der linken Seite auf das Graph-Symbol klicken, oben eine Nachricht eingeben (ist komplett beliebig) und dann per Klick auf den Haken bestätigen.

## Markdown
Der [VuePress Markdown Guide](https://v2.vuepress.vuejs.org/guide/markdown.html#syntax-extensions) zeigt alle Features im genauen, aber im Folgenden einmal das Wichtigste zusammengefasst:

### Grundlagen
Die Grundlagen sind in [diesem Guide von GitHub](https://guides.github.com/features/mastering-markdown/) erklärt.  
_Hiervon wird alles unterstützt, außer natürlich SHA / Issue Referenzen und Mentions._

### Inhaltsverzeichnis

Mit `[[toc]]` kann ein Inhaltsverzeichnis (Table of Contents) der aktuellen Seite eingefügt werden.

#### Markdown
```markdown
[[toc]]
```

#### Ausgabe
[[toc]]

### Zeilen in Codeblöcken hervorheben

Es besteht die Möglichkeit, Zeilen in Codeblöcken hervorzuheben.

- Zeilenbereiche: `{5-8}`
- Mehrere einzelne Zeilen: `{4,7,9}`
- Kombiniert: `{4,7-13,16,23-27,40}`

#### Markdown
````markdown
```sqf{1-3,7}
params [
    ["_setting", "", [""]]
];

private _setting = toLower _setting;

systemChat _setting;
```
````

#### Ausgabe
```sqf{1-3,7}
params [
    ["_setting", "", [""]]
];

private _setting = toLower _setting;

systemChat _setting;
```

### Zeilenummern für Codeblöcke

Falls du für deinen Codeblock Zeilennummern brauchst, kannst du diese mit `:line-numbers` anschalten.

#### Markdown
````markdown
```sqf:line-numbers
private _setting = toLower _setting;
systemChat player;
```
````

#### Ausgabe
```sqf:line-numbers
private _setting = toLower _setting;
systemChat player;
```

### Tipps und Warnungen

#### Markdown
```markdown
::: tip
Wusstest du schon, dass Gruppe Adler amazing ist?
:::

::: warning HALT STOP!
Jetzt rede ich
:::

::: danger
Update dein Modset rechtzeitig!
:::

::: details
I love Joe <3
:::
```

#### Ausgabe
::: tip
Wusstest du schon, dass Gruppe Adler amazing ist?
:::

::: warning HALT STOP!
Jetzt rede ich
:::

::: danger
Update dein Modset rechtzeitig!
:::

::: details
I love Joe <3
:::
