"use strict";(self.webpackChunkwiki_gruppe_adler_de=self.webpackChunkwiki_gruppe_adler_de||[]).push([[142],{6947:(e,n,i)=>{i.r(n),i.d(n,{data:()=>t});const t={key:"v-44bc135b",path:"/bastelstube/erste-hilfe-missionsbau.html",title:"🚑 Erste Hilfe Missionsbau",lang:"de",frontmatter:{},excerpt:"",headers:[{level:2,title:"GRAD-Loadout",slug:"grad-loadout",children:[{level:3,title:"… greift nicht",slug:"greift-nicht",children:[]},{level:3,title:"… soll nicht greifen",slug:"soll-nicht-greifen",children:[]}]},{level:2,title:"Nackte Einheiten",slug:"nackte-einheiten",children:[]},{level:2,title:"Respawn",slug:"respawn",children:[{level:3,title:"… greift nicht",slug:"greift-nicht-1",children:[]},{level:3,title:"… soll nicht greifen",slug:"soll-nicht-greifen-1",children:[]}]},{level:2,title:"Medicsettings",slug:"medicsettings",children:[{level:3,title:"Einheit kann nicht sterben, soll aber",slug:"einheit-kann-nicht-sterben-soll-aber",children:[]}]},{level:2,title:"CBA Settings",slug:"cba-settings",children:[]},{level:2,title:"Ganz generell",slug:"ganz-generell",children:[]}],filePathRelative:"bastelstube/erste-hilfe-missionsbau.md",git:{updatedTime:1632823362e3,contributors:[{name:"DerZade",email:"DerZade@gmail.com",commits:1}]}}},8441:(e,n,i)=>{i.r(n),i.d(n,{default:()=>g});var t=i(6252);const a=(0,t._)("h1",{id:"erste-hilfe-missionsbau",tabindex:"-1"},[(0,t._)("a",{class:"header-anchor",href:"#erste-hilfe-missionsbau","aria-hidden":"true"},"#"),(0,t.Uk)(" 🚑 Erste Hilfe Missionsbau")],-1),s=(0,t._)("p",null,"Die ganze 💩 klappt nicht? Hier findest Du Lösungen auf die häufigsten Probleme, die beim Missionsbau auftreten – geordnet nach Typ.",-1),l={class:"custom-container tip"},r=(0,t._)("p",{class:"custom-container-title"},"Disclaimer",-1),d=(0,t.Uk)("Es empfiehlt sich, die Anleitung von McDiod einmal komplett gelesen und einmal komplett verstanden zu haben. So eine gute "),c={href:"https://github.com/gruppe-adler/co_template.vr/wiki",target:"_blank",rel:"noopener noreferrer"},h=(0,t.Uk)("Dokumentation"),o=(0,t.Uk)(" findet man sonst selten."),u=(0,t.uE)('<h2 id="grad-loadout" tabindex="-1"><a class="header-anchor" href="#grad-loadout" aria-hidden="true">#</a> GRAD-Loadout</h2><h3 id="greift-nicht" tabindex="-1"><a class="header-anchor" href="#greift-nicht" aria-hidden="true">#</a> <em>… greift nicht</em></h3><p>💡 <strong>Syntaxfehler beim Deklarieren? (Scriptfehler anschalten bzw. RPT prüfen):</strong></p><ul><li>Klammer zuviel/zu wenig</li><li>Semikolon vergessen</li><li>Klasse der Einheit muss mit Loadoutklasse übereinstimmen</li><li><code>B_</code> bzw. <code>O_</code> muss aus Loadoutklasse gekürzt werden, d.h. <code>Medic_F</code> statt <code>B_Medic_F</code></li></ul><p>💡 <strong>Weste/Rucksack überfüllt?</strong><br> 💡 <strong>Keine Vanilla NATO/CSAT Fraktion benutzt beim Setzen?</strong></p><h3 id="soll-nicht-greifen" tabindex="-1"><a class="header-anchor" href="#soll-nicht-greifen" aria-hidden="true">#</a> <em>… soll nicht greifen</em></h3><p>💡 <strong>in <code>USER/loadouts.hpp</code> darf keine Faction eingetragen sein</strong></p><h2 id="nackte-einheiten" tabindex="-1"><a class="header-anchor" href="#nackte-einheiten" aria-hidden="true">#</a> Nackte Einheiten</h2><div class="custom-container danger"><p class="custom-container-title">Kein GRAD-Loadout Bug</p><p>Nackte Einheiten entstehen seit einigen ARMA-Versionen beim Ownerwechsel von Zeus-Client auf Dedicated Server/Headless. Sollte mit Workaround im Template gefixt worden sein.</p></div><h4 id="ggf-uniformen-classnames-im-loadout-checken" tabindex="-1"><a class="header-anchor" href="#ggf-uniformen-classnames-im-loadout-checken" aria-hidden="true">#</a> 💡 Ggf. Uniformen-Classnames im Loadout checken.</h4><p>Es gibt in Project Opfor Uniformen-Classname-Lücken (bspw. <code>LOP_Bla_1</code>, <code>LOP_Bla_3</code> aber kein <code>LOP_Bla_2</code>)</p><h2 id="respawn" tabindex="-1"><a class="header-anchor" href="#respawn" aria-hidden="true">#</a> Respawn</h2><h3 id="greift-nicht-1" tabindex="-1"><a class="header-anchor" href="#greift-nicht-1" aria-hidden="true">#</a> <em>… greift nicht</em></h3><p>💡 Respawn Marker alle vorhanden? (müssen heißen: respawn_east, respawn_west, respawn_guerrila, respawn_civilian)</p><h3 id="soll-nicht-greifen-1" tabindex="-1"><a class="header-anchor" href="#soll-nicht-greifen-1" aria-hidden="true">#</a> <em>… soll nicht greifen</em></h3><p>💡 CBA Settings korrekt? ACE-medical: Prevent-Insta-Death sollte dort AN sein</p><h2 id="medicsettings" tabindex="-1"><a class="header-anchor" href="#medicsettings" aria-hidden="true">#</a> Medicsettings</h2><h3 id="einheit-kann-nicht-sterben-soll-aber" tabindex="-1"><a class="header-anchor" href="#einheit-kann-nicht-sterben-soll-aber" aria-hidden="true">#</a> <em>Einheit kann nicht sterben, soll aber</em></h3><ul><li>Prevent-Insta-Death ausmachen</li><li>Revive ausmachen (!)</li></ul><p>💡 Einstellungen siehe CBA Settings</p><h2 id="cba-settings" tabindex="-1"><a class="header-anchor" href="#cba-settings" aria-hidden="true">#</a> CBA Settings</h2><div class="custom-container warning"><p class="custom-container-title">Wenn die CBA-Settings nicht greifen, ist etwas grundsätzlich schief</p><p>Denn diese sind im CO_Template enthalten und brauchen nicht angefasst werden.</p></div><p>💡 CO_Template bringt alle nötigen Settings mit Advanced Medical<br> 💡 <strong>Sofern die Mission nicht im Template erstellt wurde</strong> – manuell im CO_Template speichern und in der neuen Missionsdatei laden:</p><ol><li>CO_Template laden, Addon Settings öffnen, Speichern</li><li>Zielmission laden, Addon Settings öffnen, eben gespeichertes laden</li><li>Kurz prüfen ob Advanced Medical eingestellt ist (Stichprobe)</li></ol><h2 id="ganz-generell" tabindex="-1"><a class="header-anchor" href="#ganz-generell" aria-hidden="true">#</a> Ganz generell</h2><div class="custom-container warning"><p class="custom-container-title">Testen bleibt das A und O</p><p>Wer seine Mission nicht auf dem Dedicated Server (!) testet, der hat auch keine Chance Probleme rechtzeitig zu entdecken.</p></div>',26),g={render:function(e,n){const i=(0,t.up)("OutboundLink");return(0,t.wg)(),(0,t.iD)(t.HY,null,[a,s,(0,t._)("div",l,[r,(0,t._)("p",null,[d,(0,t._)("a",c,[h,(0,t.Wm)(i)]),o])]),u],64)}}}}]);