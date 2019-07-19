# 📝 Liste der Adler-Infrastruktur

## Hosts

### Horst
> Der root-Server bei Hetzner, auf dem die ganzen VMs laufen. Hat iwie drölfzig GB RAM und so.

IPv4: `138.201.30.232`
IPv6: `2a01:4f8:171:3267::2`
| Typ  	| Domain Names               	| OS                           	|
|------	|----------------------------	|------------------------------	|
| host 	| prometheus.gruppe-adler.de 	| Debian 10 "buster" (testing) 	|

:::tip Services
* hostet die VMs (kvm/virsh)
* und den Prometheus-Service
* mitsamt einem Anrop-Auth-Proxy vor prometheus.gruppe-adler.de
:::

### www
> Alles was web ist (und nicht armaserver-Verwaltung)  

IPv4: `138.201.30.245`
IPV6: `2a01:4f8:171:3267::10`  
| Typ  	| Domain Names               	| OS                           	|
|------	|----------------------------	|------------------------------	|
| VM 	| gruppe-adler.de, www.gruppe-adler.de, forum.gruppe-adler.de, maps.gruppe-adler.de, api.gruppe-adler.de, wiki.gruppe-adler.de 	| Debian 8 "jessie"	|


:::tip Services  
* Website (Website/Blog, Forum)
* ar3play-web (defunct)
* Arma3Sync
* Blechadler (hubot-Chatbot)
* Wiki
:::

### ts
| Typ  	| Domain Names               	| OS                           	|
|------	|----------------------------	|------------------------------	|
| VM 	| ts.gruppe-adler.de	| Debian 9 "Stretch"	|

IPv4: `138.201.30.246`  
IPv6: `2a01:4f8:171:3267::20`

:::tip Server Setup
Der Teamspeak-Server läuft unter dem Benutzer `ts3server` auf `ts.gruppe-adler.de`. Er startet über `/opt/teamspeak…irgendwas…3.3.0/irgendwsa…startscript-something.sh`. Weitere Einstellungen finden sich unter `/etc/teamspeak-server.ini` sowie `/etc/default/teamspeak-server`.
:::

:::warning Fun Fact
Der Host für Teamspeak *muß* bei der Namensauflösung IPv4 vor IPv6 bevorzugen. Sonst kann Teamspeak nicht zu accounting.teamspeak.com connecten, und beendet sich nach 2h Dafür (für Debian/Ubuntu) in `/etc/gai.conf` diese Zeile finden: `#precedence ::ffff:0:0/96 100` und entkommentieren.
:::
### win-arma
> Gameserver VM

IPv4: `138.201.30.228`
IPv6: `2a01:4f8:171:3267::40`

Administration via RDP auf Port 1337  
`arma.gruppe-adler.de:1337`

| Typ  	| Domain Names               	| OS                           	|
|------	|----------------------------	|------------------------------	|
| VM 	| -	| Windows Server 2016	|

:::tip Services
* Gameserver
* Web-Admin-Tool (Serverinstanzen verwalten, Missionsupload, Logfiles Einsicht)
:::

* Auf arma.gruppe-adler.de läuft nginx als Webserver, der die Requests weiterleitet auf 127.0.0.1:3000 .
* Dort lauscht ein Anrop-Auth-Proxy (installiert in `/home/arma/Anrop-Auth-Proxy`), der das Forumscookie nimmt um den user als Adler zu erkennen, und dann weiterleitet auf `127.0.0.1:3001`
Dort lauscht eine arma-server-web-admin - Instanz, die in `/home/arma/arma-server-web-admin` installiert ist.
es gibt daemon-scripte dafür in `/etc/init.d` . Über `npm start` und im tmux des arma3server-Users laufen lassen geht allerdings auch.


### storage 
`u178853.your-storagebox.de`  
_Hetzner-storagebox_  
Services: ssh,smb,ftp?
### deprecated (ehemals armalin)
IPv4: `138.201.30.253`  
IPv6: `2a01:4f8:171:3267::30`

## Https
HTTPS ist mit einem kostenlosen Zertifikat von letsencrypt.org abgedeckt, momentan für die Subdomains admin, forum, wiki, www. Dieses Zertifikat läuft nach jeweils 90 Tagen ab. Es existiert ein Cronjob für den root-User, der dies jeweils am 1. jeden Monats erledigt.

Automatische redirects nach HTTPS existieren atm für admin, forum, www

## Webservices
[arma.gruppe-adler.de](https://arma.gruppe-adler.de/)

## Teamspeak
Teamspeak: `ts.gruppe-adler.de:9988`

## Extern gelagerte Webservices
[Discord Chat](https://discordapp.com/channels/106824005322838016/106824005322838016)

## Shellzugriff
Ausgewählte Adler haben Shellzugriff auf die VMs (nomisum,mcdiod,xivid,fusselwurm,derzade). Dazu:  

`ssh [username]@[hostname].gruppe-adler.de`  

um root zu werden:  
* bei Ubuntu: sudo su und eigenes Passwort eingeben
* bei Debian: su und root-Passwort eingeben wenn man's denn kennt :>

## Monitoring

Servermonitoring wird mit **prometheus.io** erledigt. Wir haben als vhost `prometheus.gruppe-adler.de`. Die Zugriffe werden per nginx auf die Prometheus-Instanz geforwardet.  

Für Zugriff aufs web-Frontend / Graphing auf prometheus.gruppe-adler.de gehen. Benutzer: adler, Passwort: nomiestomi. Beispiele für die Abfragen, die dort möglich sind: [https://prometheus.io/docs/querying/examples/](https://prometheus.io/docs/querying/examples/)

Auf jeder VM läuft ein prometheus node_exporter (der Prometheus-Server selbst nicht!), dessen Daten von dem Hostsystem abgegriffen werden.  

Es gibt auch [https://gruppeadler.grafana.net](https://gruppeadler.grafana.net) , von wo das Prometheus-output abgerufen wird.