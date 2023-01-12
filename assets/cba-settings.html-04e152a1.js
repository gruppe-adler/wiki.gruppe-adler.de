import{_ as e,x as n,y as t,D as r}from"./framework-3f51f5be.js";const i={},s=r(`<h1 id="cba-settings" tabindex="-1"><a class="header-anchor" href="#cba-settings" aria-hidden="true">#</a> ⚙️ CBA Settings</h1><h2 id="wo-finde-ich-die-aktuellen-settings" tabindex="-1"><a class="header-anchor" href="#wo-finde-ich-die-aktuellen-settings" aria-hidden="true">#</a> Wo finde ich die aktuellen Settings</h2><p>💡 <a href="https://github.com/gruppe-adler/CO_Template.VR/releases" target="_blank" rel="noopener noreferrer">CO_Template</a>/<a href="https://github.com/gruppe-adler/TvT_Template.VR/releases" target="_blank" rel="noopener noreferrer">TvT_Template</a> öffnen und unter <strong>Settings</strong> - <strong>ADDON OPTIONS</strong> schauen.</p><h2 id="anpassen-der-settings" tabindex="-1"><a class="header-anchor" href="#anpassen-der-settings" aria-hidden="true">#</a> Anpassen der Settings</h2><p>::: tip Das CO_Template bzw. das TvT_Template bringen alle nötigen CBA-Settings mit. Eine Anpassung ist also nur nötig, wenn an bestimmten Punkten vom Standard abgewichen werden soll. <strong>Dann genügt es, das einzelne Setting anzupassen und die Mission zu speichern.</strong> Nicht vergessen, beim nächsten Mal wieder ein &quot;frisches&quot; Template zu nehmen. :::</p><h2 id="settings-auf-dem-server" tabindex="-1"><a class="header-anchor" href="#settings-auf-dem-server" aria-hidden="true">#</a> Settings auf dem Server</h2><p>Es gibt eine einfache Möglichkeit zu prüfen, welches Setting greift (Settingsmenü erreichbar auf dem Server über ESC - Addon-Options).</p><ul><li>Grüner Haken: Setting ist aktiv.</li><li>Rotes Kreuz: Setting wird von der höheren Instanz (SERVER &gt; MISSION &gt; CLIENT) überschrieben <strong>oder</strong> ist sowohl bei MISSION als auch SERVER auf ACE Default, d.h. identisch</li></ul><p>::: warning Faustregel <strong>Vom ACE Default abweichende Settings überschreiben den Server.</strong></p><ul><li>Setting in MISSION ist auf ACE Default: Serversetting greift (nicht zwingend abweichend)</li><li>Setting in MISSION ist auf ACE Default, aber soll Server überschreiben: Haken setzen bei <em>Overwrite Clients</em></li><li>Setting in MISSION abweichend vom ACE Default: Missionssetting greift :::</li></ul><h2 id="was-wird-vom-server-geforced" tabindex="-1"><a class="header-anchor" href="#was-wird-vom-server-geforced" aria-hidden="true">#</a> Was wird vom Server geforced?</h2><p>&quot;Richtig&quot; forcen, d.h. <code>force force</code> ohne Möglichkeit seitens MISSION zu überschreiben machen wir nur bei sehr wenigen, nicht gameplayrelevanten Settings, Stand 05.08.2018:</p><div class="language-sqf" data-ext="sqf"><pre class="language-sqf"><code>force force grad_versionCheck_setting_dontKickAdmin = true;
force force grad_versionCheck_setting_kickOnMissingClient = true;
force force grad_versionCheck_setting_kickOnMissingServer = true;
force force grad_versionCheck_setting_kickOnTimeout = false;
force force grad_versionCheck_setting_kickOnVersionMismatch = true;

force force STHud_Settings_Occlusion = true;
force force STHud_Settings_RemoveDeadViaProximity = true;
force force STHud_Settings_SquadBar = true;

force force ace_common_checkPBOsAction = 0;
force force ace_common_checkPBOsCheckAll = false;

force force ace_common_checkPBOsWhitelist = [...];
</code></pre></div><blockquote><p><strong>Obige Einstellungen können im laufenden Spiel nicht geändert werden und sind für alle Server gültig.</strong></p></blockquote>`,14),a=[s];function c(o,d){return n(),t("div",null,a)}const l=e(i,[["render",c],["__file","cba-settings.html.vue"]]);export{l as default};
