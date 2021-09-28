# :desktop_computer: Docker Host

## Einleitung
Die Gruppe Adler verfügt über einen Dedicated Server auf welchem zwei Virtuelle Maschinen laufen. Eine dieser VMs ist der _Docker Host_, auf welchem Services wie Blechadler, Homepage, CMS, Forum, API, Slotting und einige weitere Tools als jeweils ein/mehrere Docker Container laufen.

## Zugriff auf VM
Genaueres zum Zugriff gibt es [hier](https://github.com/gruppe-adler/ips-n-stuff).

## Die wichtigsten Container
Alle Applikationen (ein oder mehrere zusammenhörigen Container) sind grundsätzlich unabhängig von einander aufgebaut. Hierbei gibt es aber einige Ausnahmen:  

### Reverse Proxy
Da mehrere Applikationen von außen auf Port 80 _(http)_ / 443 _(https)_ erreichbar sein sollen, muss ein reverse proxy zum Einsatz kommen. Hierfür kommt [nginx-proxy](https://github.com/jwilder/nginx-proxy) und [nginx-proxy-le](https://github.com/JrCs/docker-letsencrypt-nginx-proxy-companion) (für das automatische Lösen von Let's Encrypt Zertifikaten) zum Einsatz.  
Alle Container die nun auch per http(s) erreichbar sein sollen, müssen nur noch zwei Anforderungen erfüllen: 
1. Dem `nginx-proxy` Docker Netzwerk hinzugefügt sein.
2. Folgende Environment Variablen gesetzt haben (Hierbei natürlich `foo` durch korrekten Wert ersetzen):
    - `VIRTUAL_HOST=foo.gruppe-adler.de,www.foo.gruppe-adler.de`
    - `LETSENCRYPT_HOST=foo.gruppe-adler.de`

![container-structure](~@assets/docker-host/container-structure.svg)

### Watchtower
Um die Entwicklung zu vereinfachen und ein Continuous Deployment zu gewährleisten, wird [Watchtower](https://github.com/containrrr/watchtower) eingesetzt. Dieser Container prüft periodisch ob auf Docker Hub eine neuere Versionen eines verwendeten Images zu Verfügung steht. Falls eine neue Version gefunden wurde, lädt watchtower das neue Image und  updated den betroffenen Container komplett automatisch.  
Bei uns ist es so eingestellt, dass nur Container, bei denen es explizit eingeschaltet wurde, von Watchtower geupdated werden. Dies erfolgt durch das setzen des `com.centurylinklabs.watchtower.enable=true` [label](https://docs.docker.com/engine/reference/commandline/run/#set-metadata-on-container--l---label---label-file). Mehr dazu lässt sich in der [watchtower Dokumentation](https://containrrr.github.io/watchtower/container-selection/) lesen.

## Docker Compose Files
Alle Docker Compose Konfigurationsdateien lassen sich unter `/etc/docker-configs/` finden. Der gundlegende Aufbau ist wie folgt:

<div class="language-text ext-text">
    <pre class="language-text">
<code>/etc/docker-configs
<span class="token punctuation">├──</span> homepage <span class="token comment">Hier befindet sich alles zur Homepage</span>
<span class="token punctuation">│</span>
<span class="token punctuation">├──</span> blechadler <span class="token comment">Hier befinden sich alles zum Blechadler</span>
<span class="token punctuation">│     ├──</span> docker-compose.yml <span class="token comment">Docker Compose Konfiguration für Blechadler</span>
<span class="token punctuation">│     └──</span> volumes <span class="token comment">Enthält soft links zu allen docker volumes für Blechadler</span>
<span class="token punctuation">│           ├── [...]</span>
<span class="token punctuation">│           └──</span> config <span class="token comment">Link zum config volume</span>
<span class="token punctuation">│</span>
<span class="token punctuation">└── [...]</span></code></pre></div>

## Cheat Sheet
### VM neuststarten
```reboot```

### Alle Container auflisten
```docker container ls -a```  
![list-containers](~@assets/docker-host/list-containers.png)

### Container Logs einsehen
```docker logs foo```  
_Hierbei natürlich foo durch den korrekten container namen ersetzten. Dieser kann in der Liste aller Container gefunden werden (siehe [Alle Container auflisten](#alle-container-auflisten))_

### Eine Applikation (neu-)starten
1. In jeweilges Verzeichnis wechseln
```cd /etc/docker-configs/foo```
2. Applikation starten
```docker-compose up -d```

### Alle unbenutzen Images löschen
```docker image rm $(docker image ls -q)```  
(Dieser Befehl versucht zwar alle Images zu löschen, kann aber Images, die aktuell in Benutzung sind nicht löschen 😅)
