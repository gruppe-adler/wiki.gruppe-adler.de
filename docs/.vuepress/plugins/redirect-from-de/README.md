# `@gruppe-adler/vuepress-plugin-redirect-from-de`

In September 2021 this wiki still supported multiple languages. So all links were prefixed with `/de/` (i. E. `/de/infrastruktur/wiki-how-to.html`).  
The only page which was written in another language was an english version of _Gruppe Adler Modeset_. Because of this low demand support for multiple languages was dropped with the switch to VuePress Version 2.x.  
The purpose of this plugin is to ensure backwards compatibility with old references to the wiki. Links that start with `/de/` will automatically redirect to the non-prefixed link.