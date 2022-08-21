"use strict";(self.webpackChunkwiki_gruppe_adler_de=self.webpackChunkwiki_gruppe_adler_de||[]).push([[884],{2663:(e,n,s)=>{s.r(n),s.d(n,{data:()=>t});const t={key:"v-25543993",path:"/bastelstube/cba-settings.html",title:"⚙️ CBA Settings",lang:"de",frontmatter:{},excerpt:"",headers:[{level:2,title:"Wo finde ich die aktuellen Settings",slug:"wo-finde-ich-die-aktuellen-settings",children:[]},{level:2,title:"Anpassen der Settings",slug:"anpassen-der-settings",children:[]},{level:2,title:"Settings auf dem Server",slug:"settings-auf-dem-server",children:[]},{level:2,title:"Was wird vom Server geforced?",slug:"was-wird-vom-server-geforced",children:[]}],filePathRelative:"bastelstube/cba-settings.md",git:{updatedTime:1661110516e3,contributors:[{name:"DerZade",email:"DerZade@gmail.com",commits:1}]}}},6662:(e,n,s)=>{s.r(n),s.d(n,{default:()=>b});var t=s(6252);const a=(0,t._)("h1",{id:"cba-settings",tabindex:"-1"},[(0,t._)("a",{class:"header-anchor",href:"#cba-settings","aria-hidden":"true"},"#"),(0,t.Uk)(" ⚙️ CBA Settings")],-1),i=(0,t._)("h2",{id:"wo-finde-ich-die-aktuellen-settings",tabindex:"-1"},[(0,t._)("a",{class:"header-anchor",href:"#wo-finde-ich-die-aktuellen-settings","aria-hidden":"true"},"#"),(0,t.Uk)(" Wo finde ich die aktuellen Settings")],-1),r=(0,t.Uk)("💡 "),o={href:"https://github.com/gruppe-adler/CO_Template.VR/releases",target:"_blank",rel:"noopener noreferrer"},c=(0,t.Uk)("CO_Template"),l=(0,t.Uk)("/"),p={href:"https://github.com/gruppe-adler/TvT_Template.VR/releases",target:"_blank",rel:"noopener noreferrer"},u=(0,t.Uk)("TvT_Template"),d=(0,t.Uk)(" öffnen und unter "),g=(0,t._)("strong",null,"Settings",-1),h=(0,t.Uk)(" - "),k=(0,t._)("strong",null,"ADDON OPTIONS",-1),f=(0,t.Uk)(" schauen."),m=(0,t.uE)('<h2 id="anpassen-der-settings" tabindex="-1"><a class="header-anchor" href="#anpassen-der-settings" aria-hidden="true">#</a> Anpassen der Settings</h2><div class="custom-container tip"><p class="custom-container-title">TIPP</p><p>Das CO_Template bzw. das TvT_Template bringen alle nötigen CBA-Settings mit. Eine Anpassung ist also nur nötig, wenn an bestimmten Punkten vom Standard abgewichen werden soll. <strong>Dann genügt es, das einzelne Setting anzupassen und die Mission zu speichern.</strong> Nicht vergessen, beim nächsten Mal wieder ein &quot;frisches&quot; Template zu nehmen.</p></div><h2 id="settings-auf-dem-server" tabindex="-1"><a class="header-anchor" href="#settings-auf-dem-server" aria-hidden="true">#</a> Settings auf dem Server</h2><p>Es gibt eine einfache Möglichkeit zu prüfen, welches Setting greift (Settingsmenü erreichbar auf dem Server über ESC - Addon-Options).</p><ul><li>Grüner Haken: Setting ist aktiv.</li><li>Rotes Kreuz: Setting wird von der höheren Instanz (SERVER &gt; MISSION &gt; CLIENT) überschrieben <strong>oder</strong> ist sowohl bei MISSION als auch SERVER auf ACE Default, d.h. identisch</li></ul><div class="custom-container warning"><p class="custom-container-title">Faustregel</p><p><strong>Vom ACE Default abweichende Settings überschreiben den Server.</strong></p><ul><li>Setting in MISSION ist auf ACE Default: Serversetting greift (nicht zwingend abweichend)</li><li>Setting in MISSION ist auf ACE Default, aber soll Server überschreiben: Haken setzen bei <em>Overwrite Clients</em></li><li>Setting in MISSION abweichend vom ACE Default: Missionssetting greift</li></ul></div><h2 id="was-wird-vom-server-geforced" tabindex="-1"><a class="header-anchor" href="#was-wird-vom-server-geforced" aria-hidden="true">#</a> Was wird vom Server geforced?</h2><p>&quot;Richtig&quot; forcen, d.h. <code>force force</code> ohne Möglichkeit seitens MISSION zu überschreiben machen wir nur bei sehr wenigen, nicht gameplayrelevanten Settings, Stand 05.08.2018:</p><div class="language-sqf ext-sqf"><pre class="language-sqf"><code>force force grad_versionCheck_setting_dontKickAdmin <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>\nforce force grad_versionCheck_setting_kickOnMissingClient <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>\nforce force grad_versionCheck_setting_kickOnMissingServer <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>\nforce force grad_versionCheck_setting_kickOnTimeout <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>\nforce force grad_versionCheck_setting_kickOnVersionMismatch <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>\n\nforce force STHud_Settings_Occlusion <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>\nforce force STHud_Settings_RemoveDeadViaProximity <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>\nforce force STHud_Settings_SquadBar <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>\n\nforce force ace_common_checkPBOsAction <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>\nforce force ace_common_checkPBOsCheckAll <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>\n\nforce force ace_common_checkPBOsWhitelist <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n</code></pre></div><blockquote><p><strong>Obige Einstellungen können im laufenden Spiel nicht geändert werden und sind für alle Server gültig.</strong></p></blockquote>',10),b={render:function(e,n){const s=(0,t.up)("OutboundLink");return(0,t.wg)(),(0,t.iD)(t.HY,null,[a,i,(0,t._)("p",null,[r,(0,t._)("a",o,[c,(0,t.Wm)(s)]),l,(0,t._)("a",p,[u,(0,t.Wm)(s)]),d,g,h,k,f]),m],64)}}}}]);