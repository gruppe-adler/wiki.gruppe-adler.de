# :question: Wiki How-To
## Einleitung
Dieses Wiki baut auf [VuePress](https://vuepress.vuejs.org/) auf und liegt auf <a :href="'https://github.com/'+$site.themeConfig.repo" target="_blank" rel="noopener noreferrer">GitHub <OutboundLink/></a>.  

Die VuePress Dokumentation ([hier zu finden](https://vuepress.vuejs.org/guide)) gilt also im Allgemeinen auch für dieses Wiki.  

Der folgende Guide soll alles Nötige vermitteln um Seiten bearbeiten und erstellen zu können.

## Travis
Da dieses Wiki auf VuePress aufbaut müssen die Wiki-Seiten nach jeder Änderung neu generiert werden. **Das bedeutet Änderungen durch Commits sind nicht sofort im Wiki zu sehen.**  
  
Travis ist so eingerichtet, dass nach jedem Commit im `master` Branch, der Build und Deployment Prozess neu angestoßen wird. So sind Änderungen bereits nach ein bis zwei Minuten zu sehen.  

Auf GitHub unter _commits_ ist zu sehen ob der Build für den aktuellen Commit fertiggestellt ist:  
![github-commits](@assets/wiki-how-to/github-commits.jpg)
::: tip
- _Gelber Punkt_ = Build Prozess noch in Arbeit
- _Grüner Haken_ = Build und Deployment Prozess erfolgreich
- _Rotes Kreuz_ = Fehler beim Build Prozess
:::

![travis-status](@assets/wiki-how-to/travis-status.jpg)

::: warning
Falls das Wiki-Seite trotzdem erfolgreichem Build nicht aktualisiert sollte der Cache deaktiviert werden.
:::

## Aufbau der GitHub Repository

### Verzeichnisse
Alle Dateien befinden sich im `docs` Unterverzeichnis, welches im groben wie folgt aufgebaut ist: 
::: vue
docs
├── .vuepress _Hier befinden sich die Wiki Konfiguration_
│
├── `assets` _Hier befinden sich alle Assets. Also Bilder, Code-Schnipsel, etc._
│     ├── _[...]_
│     └── gruppe-adler-modset _Alle Assets für die Wiki-Seite gruppe-adler-modset.md_
│           ├── _[...]_
│           └── create-profile.jpg
│
├── `de` _Hier befinden sich alle deutschsprachigen Wiki-Seiten_
│     ├── bastelstube
│     ├── infrastruktur
│     │     ├── _[...]_
│     │     ├── gruppe-adler-modset.md _Wiki-Seite "Gruppe Adler Modset"_
│     │     └── README.md _Hauptseite für Kategorie "Infrastruktur"_
│     │
│     ├── organisatorisches
│     ├── taktik
│     ├── README.md
│     └── wiki-index.md
│
└── `en` _Hier befinden sich alle englischsprachigen Wiki-Seiten_
:::

### Assets
Alle Assets (Bilder, Code-Schnipsel, etc.) befinden sich im Verzeichnis `docs/assets`.  
Für jede Wiki-Seite befindet sich dort ein eigenes Verzeichnis.  
Zum Beispiel existiert für die Seite `docs/de/infrastruktur/gruppe-adler-modset.md` ein Verzeichnis `docs/assets/gruppe-adler-modsets` in dem sich alle Bilder für die Wiki-Seite befinden.  

Innerhalb der Wiki-Seite kann auf diese Dateien mit dem Pfad **`~@assets/gruppe-adler-modset/`** zugegriffen werden, also wird das Bild `docs/assets/gruppe-adler-modsets/create-profile.jpg` folgendermaßen geladen:

    ![create-profile](~@assets/gruppe-adler-modset/create-profile.jpg)


## Markdown
VuePress Wiki Seiten werden in Markdown geschrieben. Markdown sollte den Meisten schon von GitHub, unserem Forum oder Discord, welches eine ähnliche Syntax hat, bekannt sein. Im Anschluss aber nochmal alles wichtige:

### Zeilenumbrüche
Um in Markdown einen Zeilenumbruch zu machen reicht eine neue Zeile allein nicht aus. Zusätzlich dazu muss am Ende der Zeile zwei Leerzeichen stehen.


||| grad-md-preview
~~~ grad-md-preview__preview
Zeile 1
ebenfalls Zeile 1 (nach dieser Klammer sind zwei Leerzeichen)  
Zeile 2
~~~
~~~ grad-md-preview__code
```markdown
Zeile 1
ebenfalls Zeile 1 (nach dieser Klammer sind zwei Leerzeichen)  
Zeile 2
```
~~~
|||

### Überschriften
||| grad-md-preview
~~~ grad-md-preview__preview
# Große Überschrift
## Fast so große Überschfit
### Kleinere Überschrift
#### Kleine Überschrift
~~~
~~~ grad-md-preview__code
```markdown
# Große Überschrift
## Fast so große Überschfit
### Kleinere Überschrift
#### Kleine Überschrift
```
~~~
|||

### Hervorhebung
||| grad-md-preview
~~~ grad-md-preview__preview
*kursiver Text*  
**fetter Text**  
_ebenfalls kursiver Text_  
__ebenfalls fetter Text__  
_**fetter und kursiver Text**_  
~~~
~~~ grad-md-preview__code
```markdown
*kursiver Text*  
**fetter Text**  
_ebenfalls kursiver Text_  
__ebenfalls fetter Text__  
_**fetter und kursiver Text**_  
```
~~~
|||

### Listen
#### Unsortierte Listen:
||| grad-md-preview
~~~ grad-md-preview__preview
* Eins
* Zwei
* Drei
~~~
~~~ grad-md-preview__code
```markdown
* Eins
* Zwei
* Drei
```
~~~
|||

#### Sortierte Listen
||| grad-md-preview
~~~ grad-md-preview__preview
1. Eins
2. Zwei
3. Drei
~~~
~~~ grad-md-preview__code
```markdown
1. Eins
2. Zwei
3. Drei
```
~~~
|||

#### Verschachtelte Listen
||| grad-md-preview
~~~ grad-md-preview__preview
1. Eins
    - Zweite
    - Ebene
2. Zwei
~~~
~~~ grad-md-preview__code
```markdown
1. Eins
    - Zweite
    - Ebene
2. Zwei
```
~~~
|||

### Bilder
||| grad-md-preview
~~~ grad-md-preview__preview
![Adlerkopp](https://forum.gruppe-adler.de/assets/uploads/system/site-logo.png)
~~~
~~~ grad-md-preview__code
```markdown
![Adlerkopp](https://forum.gruppe-adler.de/assets/uploads/system/site-logo.png)
```
~~~
|||

### Links
||| grad-md-preview
~~~ grad-md-preview__preview
Link zu externen Seiten
[Gruppe Adler Forum](http://forum.gruppe-adler.de)  

Link zu interner Seiten
[Modset](gruppe-adler-modset.html)

Link zu Abschnitt auf gleicher Seite:
[Aufbau der GitHub Repository](#aufbau-der-github-repository)
~~~
~~~ grad-md-preview__code
```markdown
Link zu externen Seiten
[Gruppe Adler Forum](http://forum.gruppe-adler.de)  

Link zu interner Seiten
[Modset](gruppe-adler-modset.html)

Link zu Abschnitt auf gleicher Seite:
[Aufbau der GitHub Repository](#aufbau-der-github-repository)
```
~~~
|||

### Zitate
||| grad-md-preview
~~~ grad-md-preview__preview
DerZade sagte:
> Oida ... Ganz Ehrlich
~~~
~~~ grad-md-preview__code
```markdown
DerZade sagte:
> Oida ... Ganz Ehrlich
```
~~~
|||

### Code
#### Im Fließtext eingebetteter Code
||| grad-md-preview
~~~ grad-md-preview__preview
Hast du es schon einmal mit `setUnitLoadout` probiert?
~~~
~~~ grad-md-preview__code
```markdown
Hast du es schon einmal mit `setUnitLoadout` probiert?
```
~~~
|||

#### Code Block
||| grad-md-preview
~~~ grad-md-preview__preview
Das hier ist ein Paragraph.
```javascript
console.log("Gruppe Adler Rulez!"):

module.exports = "test123";

console.log("Hello");
```
Das hier ist auch ein Paragraph.
~~~
~~~ grad-md-preview__code
````markdown
Das hier ist ein Paragraph.
```javascript 
console.log("Gruppe Adler Rulez!"):

module.exports = "test123";

console.log("Hello");
```
Das hier ist auch ein Paragraph.
````
~~~
|||

### Custom Container

||| grad-md-preview
~~~ grad-md-preview__preview
::: tip
Dies ist ein Tipp
:::

::: warning
Dies ist eine Warnung
:::

::: danger
Jetzt wirds aber gefährlich
:::
~~~
~~~ grad-md-preview__code
```markdown
::: tip
Dies ist ein Tipp
:::

::: warning
Dies ist eine Warnung
:::

::: danger
Jetzt wirds aber gefährlich
:::
```
~~~
|||

Es lässt sich ebenfalls eine eigene Überschrift festlegen:  

||| grad-md-preview
~~~ grad-md-preview__preview
::: warning Gruppe Adler rulez
Aufgepasst! Wir sind die besten :P
:::
~~~
~~~ grad-md-preview__code
```markdown
::: warning Gruppe Adler rulez
Aufgepasst! Wir sind die besten :P
:::
```
~~~
|||

### Tabellen
Tabellen funktioniert ähnlich wie auf GitHub. Ein genauen Guide dazu gibt es [hier](https://help.github.com/articles/organizing-information-with-tables/).

||| grad-md-preview
~~~ grad-md-preview__preview
| Tabellen      | Sind          | Cool  |
| ------------- |:-------------:| -----:|
| Spalte 3 ist  | rechtsbündig  |  GRAD |
| Spalte 2 ist  | zentriert     | rulez |
| zebra stripes | are neat      |       |
~~~
~~~ grad-md-preview__code
```markdown
| Tabellen      | Sind          | Cool  |
| ------------- |:-------------:| -----:|
| Spalte 3 ist  | rechtsbündig  |  GRAD |
| Spalte 2 ist  | zentriert     | rulez |
| zebra stripes | are neat      |       |
```
~~~
|||

### Emojis
||| grad-md-preview
~~~ grad-md-preview__preview
:tada: :100:
~~~
~~~ grad-md-preview__code
```markdown
:tada: :100:
```
~~~
|||

### Hervorhebung von Zeilen in Code Blöcken
||| grad-md-preview
~~~ grad-md-preview__preview
```javascript{1,4}
// Hervorgehoben
// Durch Zeilenzahlen in geschweiften Klammern
// am Anfang der Code-Blocks
// Diese Zeile ist auch hervorgehoben
console.log("Yo");
```
~~~
~~~ grad-md-preview__code
````markdown
```javascript{1,4}
// Hervorgehoben
// Durch Zeilenzahlen in geschweiften Klammern
// am Anfang der Code-Blocks
// Diese Zeile ist auch hervorgehoben
console.log("Yo");
```
````
~~~
|||

### HTML in Markdown
HTML lässt sich ebenfalls direkt in die Markdown Datei schreiben. Dies gilt auch für `<style>` und `<script>` Tags.


## Markdown Sandbox
Es ist eine Markdown Sandbox in Arbeit, in der man Markdown mit allen Erweiterungen ausprobieren kann. Nerv einfach solange Zade bis sie endlich fertig ist. 


## Eine Seite bearbeiten
Dieses Wiki liegt auf GitHub, dementsprechend kann man die einzelnen Seiten direkt auf GitHub bearbeiten. Dazu befindet sich am Ende jeder Seite ein Link um die dementsprechende Seite auf GitHub zu editieren:
![edit-link](~@assets/wiki-how-to/edit-link.jpg)

Falls du keinen Zugriff auf das Repository habt, wende dich an einen Admin der [Gruppe Adler Organisation auf GitHub](https://github.com/gruppe-adler/).


## Eine Seite erstellen
Neue Wiki Seiten lassen sich ebenfalls GitHub erstellen. 

::: danger HALT STOP!
Aber nicht so schnell!  
Bitte erst den Punkt [Eine Seite erstellen](#eine-seite-erstellen) zu Ende lesen bevor du mit Erstellen anfängst.
:::

![create-file](~@assets/wiki-how-to/create-file.jpg)

Hier sind Links um eine Seite direkt in der jeweiligen Kategorie zu erstellen:  
- [Seite erstellen: Bastelstube](https://github.com/gruppe-adler/vuepress-wiki/new/master/docs/de/bastelstube)  
- [Seite erstellen: Infrastruktur](https://github.com/gruppe-adler/vuepress-wiki/new/master/docs/de/infrastruktur)  
- [Seite erstellen: Organisatorisches](https://github.com/gruppe-adler/vuepress-wiki/new/master/docs/de/organisatorisches)  
- [Seite erstellen: Taktik](https://github.com/gruppe-adler/vuepress-wiki/new/master/docs/de/taktik)  

### Nomenklatur
Einen kurzen aussagekräftigen Titel verweden, da unsere Suchfunktion primär die Titel durchsucht!  

Neue Seiten sind bitte wie folgt zu benennen:
- Alles in Kleinbuchstaben
- Leerzeichen durch `-` ersetzten
  
**Beispiele:**  
Gruppe Adler Modset → `gruppe-adler-modset`  
Wiki How-To → `wiki-how-to`

::: tip
Da es sich um eine markdown Datei handelt sollte die neue Datei natürlich mit der Dateierweiterung `.md` enden.
:::

### Titel
Die erste Zeile einer neuen Seite sollte immer eine große Überschrift sein und den Titel der Seite enthalten.  
z.B.: `# Wiki How-To`  
Dieser Titel wird zum Beispiel für die Sidebar gebraucht. Alle übrigen Überschriften sollten maximal die Größe 2 (`##`) haben.


### Tabellen / MD Editor
Ein guter Editor, der das Arbeiten insbesondere mit Tabellen deutlich erleichtert findet sich hier: [Typora](https://typora.io/)

<style>
img {
    max-height: 300px;
}
</style>