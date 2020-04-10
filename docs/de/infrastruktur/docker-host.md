# :desktop_computer: Docker Host

## Einleitung
Die Gruppe Adler verfügt über einen Dedicated Server auf welchem zwei Virtuelle Maschinen laufen. Eine dieser VMs ist der _Docker Host_, auf welchem Services wie Blechadler, Homepage, CMS, Forum, API, Slotting und einige weitere Tools als jeweils ein/mehrere Docker Container laufen.

## Zugriff auf VM
Zugriff auf die VM erfolgt per ssh. Falls du kein Zugriff hast wende dich bitte an DerZade.

## Die wichtigsten Container
Alle Applikationen (ein oder mehrere zusammenhörigen Container) sind grundsätzlich unabhängig von einander aufgebaut. Hierbei gibt es aber einige Ausnahmen:  

### Reverse Proxy
Da mehrere Applikationen von außen auf Port 80 _(http)_ / 443 _(https)_ erreichbar sein sollen, muss ein reverse proxy zum Einsatz kommen. Hierfür kommt [nginx-proxy](https://github.com/jwilder/nginx-proxy) und [nginx-proxy-le](https://github.com/JrCs/docker-letsencrypt-nginx-proxy-companion) (für das automatische Lösen von Let's Encrypt Zertifikaten) zum Einsatz.  
Alle Container die nun auch per http(s) erreichbar sein sollen, müssen nur noch zwei Anforderungen erfüllen: 
1. Dem `nginx-proxy` Docker Netzwerk hinzugefügt sein.
2. Folgende Environment Variablen gesetzt haben (Hierbei natürlich `foo` durch korrekten Wert ersetzen):
    - `VIRTUAL_HOST=foo.gruppe-adler.de,www.foo.gruppe-adler.de`
    - `LETSENCRYPT_HOST=foo.gruppe-adler.de`
    - `LETSENCRYPT_EMAIL=admin@gruppe-adler.com`

![container-structure](~@assets/docker-host/container-structure.svg)

### Watchtower
Um die Entwicklung zu vereinfachen und ein Continuous Deployment zu gewährleisten, wird [Watchtower](https://github.com/containrrr/watchtower) eingesetzt. Dieser Container prüft periodisch ob auf Docker Hub eine neuere Versionen eines verwendeten Images zu Verfügung steht. Falls eine neue Version gefunden wurde, lädt watchtower das neue Image und  updated den betroffenen Container komplett automatisch.  
Bei uns ist es so eingestellt, dass nur Container, bei denen es explizit eingeschaltet wurde, von Watchtower geupdated werden. Dies erfolgt durch das setzen des `com.centurylinklabs.watchtower.enable=true` [label](https://docs.docker.com/engine/reference/commandline/run/#set-metadata-on-container--l---label---label-file). Mehr dazu lässt sich in der [watchtower Dokumentation](https://containrrr.github.io/watchtower/container-selection/) lesen.

## Docker Networks
_soonTM_


## Docker Compose Files
Alle Docker Compose Konfigurationsdateien lassen sich unter `/etc/docker-configs/` finden. Der gundlegende Aufbau ist wie folgt:
::: vue
`/etc/docker-configs`
├── `homepage` _Hier befindet sich alles zur Homepage_
│
├── `blechadler` _Hier befinden sich alles zum Blechadler_
│     ├── docker-compose.yml _Docker Compose Konfiguration für Blechadler_
│     └── volumes _Enthält soft links zu allen docker volumes für Blechadler_
│           ├── _[...]_
│           └── config _Link zu **config** volume_
│
└── _[...]_
:::


## Cheat Sheet
### VM neuststarten
```reboot```

### Alle Container auflisten
```docker ps -a```  
![list-containers](~@assets/docker-host/list-containers.png)

### Eine Applikation starten
1. In jeweilges Verzeichnis wechseln
```cd /etc/docker-configs/foo```
2. Applikation starten
```docker-compose up -d```
