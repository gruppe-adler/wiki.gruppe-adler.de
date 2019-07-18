# 📝 Liste der Adler-Infrastruktur

## Hosts
| IPv4                       	| IPv6                 	| Hostname 	| Typ                	| Domain Names                                                                                                            	| OS                           	| Services                                                                                                          	|
|----------------------------	|----------------------	|----------	|--------------------	|-------------------------------------------------------------------------------------------------------------------------	|------------------------------	|-------------------------------------------------------------------------------------------------------------------	|
| 138.201.30.232             	| 2a01:4f8:171:3267::2 	| horst    	| host               	| prometheus.gruppe-adler.de                                                                                              	| Debian 10 "buster" (testing) 	| hostet die VMs (kvm/virsh)und den Prometheus-Servicemitsamt einem Anrop-Auth-Proxy vor prometheus.gruppe-adler.de 	|
| 138.201.30.232             	| 2a01:4f8:171:3267::2 	| www      	| VM                 	| gruppe-adler.de www.gruppe-adler.de forum.gruppe-adler.de maps.gruppe-adler.de api.gruppe-adler.de wiki.gruppe-adler.de 	| Debian 8 "jessie"            	| Website (Website/Blog, Forum)ar3play-web (defunct)Arma3SyncBlechadler (hubot-Chatbot)Wiki                         	|
| 138.201.30.232             	| 2a01:4f8:171:3267::2 	| ts       	| VM                 	| ts.gruppe-adler.de                                                                                                      	| Debian 9 "stretch"           	| Teamspeak                                                                                                         	|
| 138.201.30.232             	| 2a01:4f8:171:3267::2 	|          	|                    	|                                                                                                                         	|                              	|                                                                                                                   	|
| 138.201.30.232             	| 2a01:4f8:171:3267::2 	| win-arma 	| VM                 	| nix                                                                                                                     	| Windows Server 2016          	| Gameserverkleine Servertools                                                                                      	|
| u178853.your-storagebox.de 	|                      	|          	| Hetzner-storagebox 	|                                                                                                                         	|                              	| ssh,smb,ftp?                                                                                                      	|

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