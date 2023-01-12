import{_ as e,x as n,y as t,D as i}from"./framework-3f51f5be.js";const r="/assets/Slotbutton-aa32e227.jpg",a="/assets/Editbutton-5268b472.jpg",s={},o=i('<h1 id="⭕-slotting-tool" tabindex="-1"><a class="header-anchor" href="#⭕-slotting-tool" aria-hidden="true">#</a> ⭕ Slotting-Tool</h1><p>::: warning Das <a href="https://github.com/gruppe-adler/slotting.gruppe-adler.de" target="_blank" rel="noopener noreferrer">Slotting-Tool</a> ermöglicht das Erstellen einer Slotliste fürs Forum oder externe Gäste :::</p><p>:::danger Bekannte Einschränkungen</p><ul><li>Keine Mobilfähigkeit Slotliste-Editieren-Screen</li><li>Reservierungen im Backend unsichtbar</li><li>Keine uuids im Frontend, Duplizieren schlägt ggf fehl</li><li>Kein Dialog mehr zum Slotkick, wenn man dazu ohnehin keine Rechte hat</li><li>sowie <a href="https://github.com/gruppe-adler/slotting.gruppe-adler.de/issues" target="_blank" rel="noopener noreferrer">Issues auf Github</a> :::</li></ul><h3 id="beginn" tabindex="-1"><a class="header-anchor" href="#beginn" aria-hidden="true">#</a> Beginn</h3><p>In einem Thread im Einsätze-Forum mit korrekter Syntax im Titel (YYYY-MM-DD, ...) erscheint ein Slotliste-Hinzufügen-Button im ersten Beitrag:</p><p><img src="'+r+'" alt="container-structure"></p><p><em>Hinweis: Threaddatum muss in der Zukunft liegen (spätestens selber Tag 19.59 Uhr)</em></p><h3 id="struktur-erstellen" tabindex="-1"><a class="header-anchor" href="#struktur-erstellen" aria-hidden="true">#</a> Struktur erstellen</h3><p>Die Struktur kann mit Drag + Drop aus den Elementen rechts erstellt werden.</p><h3 id="editieren-und-loschen" tabindex="-1"><a class="header-anchor" href="#editieren-und-loschen" aria-hidden="true">#</a> Editieren und Löschen</h3><p>Editieren und Löschen geht über das Kontextmenü oben rechts an einer Slotliste. <img src="'+a+'" alt="container-structure"></p><h3 id="uuids" tabindex="-1"><a class="header-anchor" href="#uuids" aria-hidden="true">#</a> UUIDs</h3><p>Schaltet man auf XML-Ansicht, sieht man in jedem Slot auch eine uuid. Diese ist einmalig für diesen Slot, an ihr hängt der Spieler. Mehrere identische UUIDs führen zu Fehlern. Deshalb beim Duplizieren immer rauslöschen (nicht nötig beim erstmaligen Erstellen, da sie erst nach Absenden generiert werden).</p><h3 id="xml-attribute" tabindex="-1"><a class="header-anchor" href="#xml-attribute" aria-hidden="true">#</a> XML Attribute</h3><p>Einzelne XML-Attribute können nicht im Interface gesetzt werden (momentane Limitation des Tools). Diese sind:</p><p><code>side</code><strong>beliebige Buchstaben/Zahlen, empfohlen BLUFOR/OPFOR/INDEPENDENT/CIVILIAN</strong> momentan färben nur Blufor und Opfor die Linie oben entsprechend ein</p><p><code>callsign</code><strong>beliebige Buchstaben/Zahlen</strong> wird automatisch in Versalien (Großbuchstaben) dargestellt</p><p><code>frequency</code><strong>Funkfrequenz</strong> beliebige Buchstaben/Zahlen, MHz wird automatisch ergänzt</p><p><code>natosymbol</code><strong>nicht bei Slot/Fireteam anwendbar</strong></p><p><code>vehicletype</code><strong>Fahrzeugtyp, Mouseover über Natosymbol, nicht bei Slot/Fireteam anwendbar</strong> beliebige Buchstaben/Zahlen</p>',21),l=[o];function h(d,u){return n(),t("div",null,l)}const g=e(s,[["render",h],["__file","slotting-tool.html.vue"]]);export{g as default};
