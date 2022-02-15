"use strict";(self.webpackChunkwiki_gruppe_adler_de=self.webpackChunkwiki_gruppe_adler_de||[]).push([[867],{848:(e,n,r)=>{r.r(n),r.d(n,{data:()=>t});const t={key:"v-4a2d2d72",path:"/infrastruktur/docker-host.html",title:"🖥️ Docker Host",lang:"de",frontmatter:{},excerpt:"",headers:[{level:2,title:"Einleitung",slug:"einleitung",children:[]},{level:2,title:"Zugriff auf VM",slug:"zugriff-auf-vm",children:[]},{level:2,title:"Die wichtigsten Container",slug:"die-wichtigsten-container",children:[{level:3,title:"Reverse Proxy",slug:"reverse-proxy",children:[]},{level:3,title:"Watchtower",slug:"watchtower",children:[]}]},{level:2,title:"Docker Compose Files",slug:"docker-compose-files",children:[]},{level:2,title:"Cheat Sheet",slug:"cheat-sheet",children:[{level:3,title:"VM neuststarten",slug:"vm-neuststarten",children:[]},{level:3,title:"Alle Container auflisten",slug:"alle-container-auflisten",children:[]},{level:3,title:"Container Logs einsehen",slug:"container-logs-einsehen",children:[]},{level:3,title:"Eine Applikation (neu-)starten",slug:"eine-applikation-neu-starten",children:[]},{level:3,title:"Alle unbenutzen Images löschen",slug:"alle-unbenutzen-images-loschen",children:[]}]}],filePathRelative:"infrastruktur/docker-host.md",git:{updatedTime:164495418e4,contributors:[{name:"b-mayr-1984",email:"76476468+b-mayr-1984@users.noreply.github.com",commits:1}]}}},1144:(e,n,r)=>{r.r(n),r.d(n,{default:()=>se});var t=r(6252),l=r(9177),a=r(498);const i=(0,t._)("h1",{id:"docker-host",tabindex:"-1"},[(0,t._)("a",{class:"header-anchor",href:"#docker-host","aria-hidden":"true"},"#"),(0,t.Uk)(" 🖥️ Docker Host")],-1),s=(0,t._)("h2",{id:"einleitung",tabindex:"-1"},[(0,t._)("a",{class:"header-anchor",href:"#einleitung","aria-hidden":"true"},"#"),(0,t.Uk)(" Einleitung")],-1),o=(0,t._)("p",null,[(0,t.Uk)("Die Gruppe Adler verfügt über einen Dedicated Server auf welchem zwei Virtuelle Maschinen laufen. Eine dieser VMs ist der "),(0,t._)("em",null,"Docker Host"),(0,t.Uk)(", auf welchem Services wie Blechadler, Homepage, CMS, Forum, API, Slotting und einige weitere Tools als jeweils ein/mehrere Docker Container laufen.")],-1),u=(0,t._)("h2",{id:"zugriff-auf-vm",tabindex:"-1"},[(0,t._)("a",{class:"header-anchor",href:"#zugriff-auf-vm","aria-hidden":"true"},"#"),(0,t.Uk)(" Zugriff auf VM")],-1),c=(0,t.Uk)("Genaueres zum Zugriff gibt es "),d={href:"https://github.com/gruppe-adler/ips-n-stuff",target:"_blank",rel:"noopener noreferrer"},h=(0,t.Uk)("hier"),k=(0,t.Uk)("."),p=(0,t._)("h2",{id:"die-wichtigsten-container",tabindex:"-1"},[(0,t._)("a",{class:"header-anchor",href:"#die-wichtigsten-container","aria-hidden":"true"},"#"),(0,t.Uk)(" Die wichtigsten Container")],-1),g=(0,t._)("p",null,"Alle Applikationen (ein oder mehrere zusammenhörigen Container) sind grundsätzlich unabhängig von einander aufgebaut. Hierbei gibt es aber einige Ausnahmen:",-1),f=(0,t._)("h3",{id:"reverse-proxy",tabindex:"-1"},[(0,t._)("a",{class:"header-anchor",href:"#reverse-proxy","aria-hidden":"true"},"#"),(0,t.Uk)(" Reverse Proxy")],-1),m=(0,t.Uk)("Da mehrere Applikationen von außen auf Port 80 "),_=(0,t._)("em",null,"(http)",-1),b=(0,t.Uk)(" / 443 "),U=(0,t._)("em",null,"(https)",-1),w=(0,t.Uk)(" erreichbar sein sollen, muss ein reverse proxy zum Einsatz kommen. Hierfür kommt "),v={href:"https://github.com/jwilder/nginx-proxy",target:"_blank",rel:"noopener noreferrer"},x=(0,t.Uk)("nginx-proxy"),z=(0,t.Uk)(" und "),C={href:"https://github.com/JrCs/docker-letsencrypt-nginx-proxy-companion",target:"_blank",rel:"noopener noreferrer"},D=(0,t.Uk)("nginx-proxy-le"),y=(0,t.Uk)(" (für das automatische Lösen von Let's Encrypt Zertifikaten) zum Einsatz."),A=(0,t._)("br",null,null,-1),H=(0,t.Uk)(" Alle Container die nun auch per http(s) erreichbar sein sollen, müssen nur noch zwei Anforderungen erfüllen:"),E=(0,t._)("ol",null,[(0,t._)("li",null,[(0,t.Uk)("Dem "),(0,t._)("code",null,"nginx-proxy"),(0,t.Uk)(" Docker Netzwerk hinzugefügt sein.")]),(0,t._)("li",null,[(0,t.Uk)("Folgende Environment Variablen gesetzt haben (Hierbei natürlich "),(0,t._)("code",null,"foo"),(0,t.Uk)(" durch korrekten Wert ersetzen): "),(0,t._)("ul",null,[(0,t._)("li",null,[(0,t._)("code",null,"VIRTUAL_HOST=foo.gruppe-adler.de,www.foo.gruppe-adler.de")]),(0,t._)("li",null,[(0,t._)("code",null,"LETSENCRYPT_HOST=foo.gruppe-adler.de")])])])],-1),V=(0,t._)("p",null,[(0,t._)("img",{src:l,alt:"container-structure"})],-1),W=(0,t._)("h3",{id:"watchtower",tabindex:"-1"},[(0,t._)("a",{class:"header-anchor",href:"#watchtower","aria-hidden":"true"},"#"),(0,t.Uk)(" Watchtower")],-1),I=(0,t.Uk)("Um die Entwicklung zu vereinfachen und ein Continuous Deployment zu gewährleisten, wird "),L={href:"https://github.com/containrrr/watchtower",target:"_blank",rel:"noopener noreferrer"},S=(0,t.Uk)("Watchtower"),M=(0,t.Uk)(" eingesetzt. Dieser Container prüft periodisch ob auf Docker Hub eine neuere Versionen eines verwendeten Images zu Verfügung steht. Falls eine neue Version gefunden wurde, lädt watchtower das neue Image und updated den betroffenen Container komplett automatisch."),B=(0,t._)("br",null,null,-1),T=(0,t.Uk)(" Bei uns ist es so eingestellt, dass nur Container, bei denen es explizit eingeschaltet wurde, von Watchtower geupdated werden. Dies erfolgt durch das setzen des "),P=(0,t._)("code",null,"com.centurylinklabs.watchtower.enable=true",-1),F=(0,t.Uk)(),R={href:"https://docs.docker.com/engine/reference/commandline/run/#set-metadata-on-container--l---label---label-file",target:"_blank",rel:"noopener noreferrer"},Z=(0,t.Uk)("label"),j=(0,t.Uk)(". Mehr dazu lässt sich in der "),O={href:"https://containrrr.github.io/watchtower/container-selection/",target:"_blank",rel:"noopener noreferrer"},G=(0,t.Uk)("watchtower Dokumentation"),K=(0,t.Uk)(" lesen."),N=(0,t._)("h2",{id:"docker-compose-files",tabindex:"-1"},[(0,t._)("a",{class:"header-anchor",href:"#docker-compose-files","aria-hidden":"true"},"#"),(0,t.Uk)(" Docker Compose Files")],-1),Y=(0,t._)("p",null,[(0,t.Uk)("Alle Docker Compose Konfigurationsdateien lassen sich unter "),(0,t._)("code",null,"/etc/docker-configs/"),(0,t.Uk)(" finden. Der gundlegende Aufbau ist wie folgt:")],-1),q=(0,t._)("div",{class:"language-text ext-text"},[(0,t._)("pre",{class:"language-text"},[(0,t.Uk)(""),(0,t._)("code",null,[(0,t.Uk)("/etc/docker-configs\n"),(0,t._)("span",{class:"token punctuation"},"├──"),(0,t.Uk)(" homepage "),(0,t._)("span",{class:"token comment"},"Hier befindet sich alles zur Homepage"),(0,t.Uk)("\n"),(0,t._)("span",{class:"token punctuation"},"│"),(0,t.Uk)("\n"),(0,t._)("span",{class:"token punctuation"},"├──"),(0,t.Uk)(" blechadler "),(0,t._)("span",{class:"token comment"},"Hier befinden sich alles zum Blechadler"),(0,t.Uk)("\n"),(0,t._)("span",{class:"token punctuation"},"│     ├──"),(0,t.Uk)(" docker-compose.yml "),(0,t._)("span",{class:"token comment"},"Docker Compose Konfiguration für Blechadler"),(0,t.Uk)("\n"),(0,t._)("span",{class:"token punctuation"},"│     └──"),(0,t.Uk)(" volumes "),(0,t._)("span",{class:"token comment"},"Enthält soft links zu allen docker volumes für Blechadler"),(0,t.Uk)("\n"),(0,t._)("span",{class:"token punctuation"},"│           ├── [...]"),(0,t.Uk)("\n"),(0,t._)("span",{class:"token punctuation"},"│           └──"),(0,t.Uk)(" config "),(0,t._)("span",{class:"token comment"},"Link zum config volume"),(0,t.Uk)("\n"),(0,t._)("span",{class:"token punctuation"},"│"),(0,t.Uk)("\n"),(0,t._)("span",{class:"token punctuation"},"└── [...]")])])],-1),J=(0,t._)("h2",{id:"cheat-sheet",tabindex:"-1"},[(0,t._)("a",{class:"header-anchor",href:"#cheat-sheet","aria-hidden":"true"},"#"),(0,t.Uk)(" Cheat Sheet")],-1),$=(0,t._)("h3",{id:"vm-neuststarten",tabindex:"-1"},[(0,t._)("a",{class:"header-anchor",href:"#vm-neuststarten","aria-hidden":"true"},"#"),(0,t.Uk)(" VM neuststarten")],-1),Q=(0,t._)("p",null,[(0,t._)("code",null,"reboot")],-1),X=(0,t._)("h3",{id:"alle-container-auflisten",tabindex:"-1"},[(0,t._)("a",{class:"header-anchor",href:"#alle-container-auflisten","aria-hidden":"true"},"#"),(0,t.Uk)(" Alle Container auflisten")],-1),ee=(0,t._)("p",null,[(0,t._)("code",null,"docker container ls -a"),(0,t._)("br"),(0,t._)("img",{src:a,alt:"list-containers"})],-1),ne=(0,t._)("h3",{id:"container-logs-einsehen",tabindex:"-1"},[(0,t._)("a",{class:"header-anchor",href:"#container-logs-einsehen","aria-hidden":"true"},"#"),(0,t.Uk)(" Container Logs einsehen")],-1),re=(0,t._)("p",null,[(0,t._)("code",null,"docker logs foo"),(0,t._)("br"),(0,t._)("em",null,[(0,t.Uk)("Hierbei natürlich foo durch den korrekten container namen ersetzten. Dieser kann in der Liste aller Container gefunden werden (siehe "),(0,t._)("a",{href:"#alle-container-auflisten"},"Alle Container auflisten"),(0,t.Uk)(")")])],-1),te=(0,t._)("h3",{id:"eine-applikation-neu-starten",tabindex:"-1"},[(0,t._)("a",{class:"header-anchor",href:"#eine-applikation-neu-starten","aria-hidden":"true"},"#"),(0,t.Uk)(" Eine Applikation (neu-)starten")],-1),le=(0,t._)("ol",null,[(0,t._)("li",null,[(0,t.Uk)("In jeweilges Verzeichnis wechseln "),(0,t._)("code",null,"cd /etc/docker-configs/foo")]),(0,t._)("li",null,[(0,t.Uk)("Applikation starten "),(0,t._)("code",null,"docker-compose up -d")])],-1),ae=(0,t._)("h3",{id:"alle-unbenutzen-images-loschen",tabindex:"-1"},[(0,t._)("a",{class:"header-anchor",href:"#alle-unbenutzen-images-loschen","aria-hidden":"true"},"#"),(0,t.Uk)(" Alle unbenutzen Images löschen")],-1),ie=(0,t._)("p",null,[(0,t._)("code",null,"docker image rm $(docker image ls -q)"),(0,t._)("br"),(0,t.Uk)(" (Dieser Befehl versucht zwar alle Images zu löschen, kann aber Images, die aktuell in Benutzung sind nicht löschen 😅)")],-1),se={render:function(e,n){const r=(0,t.up)("OutboundLink");return(0,t.wg)(),(0,t.iD)(t.HY,null,[i,s,o,u,(0,t._)("p",null,[c,(0,t._)("a",d,[h,(0,t.Wm)(r)]),k]),p,g,f,(0,t._)("p",null,[m,_,b,U,w,(0,t._)("a",v,[x,(0,t.Wm)(r)]),z,(0,t._)("a",C,[D,(0,t.Wm)(r)]),y,A,H]),E,V,W,(0,t._)("p",null,[I,(0,t._)("a",L,[S,(0,t.Wm)(r)]),M,B,T,P,F,(0,t._)("a",R,[Z,(0,t.Wm)(r)]),j,(0,t._)("a",O,[G,(0,t.Wm)(r)]),K]),N,Y,q,J,$,Q,X,ee,ne,re,te,le,ae,ie],64)}}},9177:(e,n,r)=>{e.exports=r.p+"assets/img/container-structure.faf355a2.svg"},498:(e,n,r)=>{e.exports=r.p+"assets/img/list-containers.f08d6e44.png"}}]);