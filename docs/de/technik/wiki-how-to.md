# Wiki How-To
## Einleitung
Dieses Wiki baut auf [VuePress](https://vuepress.vuejs.org/) auf und liegt auf <a :href="'https://github.com/'+$site.themeConfig.repo" target="_blank" rel="noopener noreferrer">GitHub <OutboundLink/></a>.  

Die VuePress Dokumentation ([hier zu finden](https://vuepress.vuejs.org/guide)) gilt also im Allgemeinen auch für dieses Wiki.

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
│     ├── missionen
│     ├── mods
│     ├── technik
│     │     ├── _[...]_
│     │     ├── gruppe-adler-modset.md _Wiki-Seite "Gruppe Adler Modset"_
│     │     └── README.md _Hauptseite für Kategorie "Technik"_
│     │
│     ├── organisatorisches
│     ├── README.md
│     └── wiki-index.md
│
└── `en` _Hier befinden sich alle englischsprachigen Wiki-Seiten_
:::

<style>
pre.vue-container > code code {
    background-color: #d18d1f !important;
}

pre.vue-container {
    border-color: #d18d1f;
}
</style>


### Assets
Alle Assets (Bilder, Code-Schnipsel, etc.) befinden sich im Verzeichnis `docs/assets`.  
Für jedes Wiki-Seite befindet sich dort ein eigenes Verzeichnis.  
Für die Seite `docs/de/technik/gruppe-adler-modset.md` existiert ein Verzeichnis `docs/assets/gruppe-adler-modsets` in dem sich alle Bilder für die Wiki-Seite befinden.  

Innerhalb der Wiki-Seite kann auf diese Dateien mit dem Pfad **`~@assets/gruppe-adler-modset/`** zugegriffen werden, also wird das Bild `docs/assets/gruppe-adler-modsets/create-profile.jpg` folgendermaßen geladen:

    ![create-profile](~@assets/gruppe-adler-modset/create-profile.jpg)


## Markdown
VuePress Wiki Seiten werden in Markdown geschrieben. Markdown sollte den Meisten schon von GitHub, unserem Forum oder Discord, welches eine ähnliche Syntax hat, bekannt sein.

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
[Gruppe Adler Forum](http://forum.gruppe-adler.de)  

[Landing Page](/)
~~~
~~~ grad-md-preview__code
```markdown
[Gruppe Adler Forum](http://forum.gruppe-adler.de)  

[Landing Page](/)
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
`Code`
~~~
~~~ grad-md-preview__code
```markdown
`Code`
```
~~~
|||

#### Code Block
||| grad-md-preview
~~~ grad-md-preview__preview
```javascript
console.log("Gruppe Adler Rulez!"):

module.exports = "test123";

console.log("Hello");
```
~~~
~~~ grad-md-preview__code
````markdown
```javascript 
console.log("Gruppe Adler Rulez!"):

module.exports = "test123";

console.log("Hello");
```
````
~~~
|||

### Markdown Erweiterungen
VuePress unterstützt zusätzlich zum standardmäßigen Markdown von Haus aus mehrere Erweiterungen. Ein genauen Guide hierzu kann man [hier](https://vuepress.vuejs.org/guide/markdown.html) finden.  

::: grad-warn
Statt den VuePress _Custom Containers_ bitte unsere eigenen benutzen. (Siehe [Custom Containers](#custom-containers))  
Diese haben standardmäßig deutsche Überschriften und entsprechen unserem Farbschema.
:::

Zusätzlich dazu, haben wir einige eigene Erweiterungen:

#### Custom Container

||| grad-md-preview
~~~ grad-md-preview__preview
::: grad-tip
Dies ist ein Tipp
:::

::: grad-warn
Dies ist eine Warnung
:::

::: grad-danger
Dies ist Gefahr
:::
~~~
~~~ grad-md-preview__code
```markdown
::: grad-tip
Dies ist ein Tipp
:::

::: grad-warn
Dies ist eine Warnung
:::

::: grad-danger
Dies ist Gefahr
:::
```
~~~
|||

Es lässt sich ebenfalls eine eigene Überschrift festlegen:  

||| grad-md-preview
~~~ grad-md-preview__preview
::: grad-warn Gruppe Adler rulez
Aufgepasst! Wir sind die besten :P
:::
~~~
~~~ grad-md-preview__code
```markdown
::: grad-warn Gruppe Adler rulez
Aufgepasst! Wir sind die besten :P
:::
```
~~~
|||

### HTML in Markdown
HTML lässt sich ebenfalls direkt in die Markdown Datei schreiben. Dies gilt auch für `<style>` und `<script>` Tags.

## Markdown Sandbox
Es gibt eine Markdown Sandbox. Hier kann man direkt seine Änderungen im Markdown sehen:
[Markdown Sandbox](/sandbox.html)
`TODO`

## Eine Seite bearbeiten
Dieses Wiki liegt auf GitHub, dementsprechend kann man die einzelnen Seiten direkt auf GitHub bearbeiten. Dazu befindet sich am Ende jeder Seite ein Link um die dementsprechende Seite auf GitHub zu editieren:
![edit-link](~@assets/wiki-how-to/edit-link.jpg)

Falls du keinen Zugriff auf das Repository habt, wende dich an einen Admin der [Gruppe Adler Organisation auf GitHub](https://github.com/gruppe-adler/).

## Eine Seite erstellen

