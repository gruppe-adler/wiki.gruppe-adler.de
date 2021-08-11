/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "8cebf2fb5c13d6f7565510a3aec75f9d"
  },
  {
    "url": "adlerkopp.png",
    "revision": "6fad4764c67af0eda687997ad7dec48a"
  },
  {
    "url": "assets/css/0.styles.4c0bc885.css",
    "revision": "d11f20b1ecdb5176e6ce2c073bf04a22"
  },
  {
    "url": "assets/img/1600px-Taktisch_keil.463c6094.jpg",
    "revision": "463c60942514ad41d4b86431cfe432dc"
  },
  {
    "url": "assets/img/1600px-Taktisch_kolonne.9fb5fc7e.jpg",
    "revision": "9fb5fc7ee387c5c8ec30339539adec93"
  },
  {
    "url": "assets/img/1600px-Taktisch_linie.346cda0e.jpg",
    "revision": "346cda0e0dce339b8dac82d39127c7b1"
  },
  {
    "url": "assets/img/addon-options.af7d8107.jpg",
    "revision": "af7d8107a8787f3ca7a164eeb14abbcd"
  },
  {
    "url": "assets/img/column.457e75b3.png",
    "revision": "457e75b3d91c25fb3c095b224a7d88ab"
  },
  {
    "url": "assets/img/connect-to-repository.7b13ae58.jpg",
    "revision": "7b13ae58b09a0ef9423c6e8d6eccee18"
  },
  {
    "url": "assets/img/container-structure.32f7cc02.svg",
    "revision": "32f7cc02526aa47a4eab88a2713624d1"
  },
  {
    "url": "assets/img/create-addon-group.6949a422.jpg",
    "revision": "6949a4225849e80590c88ab4281a33e7"
  },
  {
    "url": "assets/img/create-file.f101f1ba.jpg",
    "revision": "f101f1ba378b08a3b2c9f380ab8a7d05"
  },
  {
    "url": "assets/img/create-profile.ef36c62e.jpg",
    "revision": "ef36c62e67daf98cac6b7173e6c11bd5"
  },
  {
    "url": "assets/img/edit-link.cbaa9764.jpg",
    "revision": "cbaa9764095e6247dba9c7c529abd328"
  },
  {
    "url": "assets/img/Editbutton.d735283c.jpg",
    "revision": "d735283c75574a1770ddb2f5cb86b129"
  },
  {
    "url": "assets/img/formationen.2a9b394f.gif",
    "revision": "2a9b394fe65bda8f71f3d40af80693f7"
  },
  {
    "url": "assets/img/github-commits.5aebe9e1.jpg",
    "revision": "5aebe9e1a4cfac7e7dddff62fac5f931"
  },
  {
    "url": "assets/img/gm.b0c83edb.jpg",
    "revision": "b0c83edba1490b390172654a3b315b31"
  },
  {
    "url": "assets/img/launcher-options.627fd852.jpg",
    "revision": "627fd852e8f25daafedeec9b78faf866"
  },
  {
    "url": "assets/img/line.d38c2c4a.png",
    "revision": "d38c2c4a5267de23a7fb563bf6ac3b44"
  },
  {
    "url": "assets/img/list-containers.e16871f2.png",
    "revision": "e16871f28aad9f02f04d9835702b21bd"
  },
  {
    "url": "assets/img/max-connections.2d0b3086.jpg",
    "revision": "2d0b30862b56120dcc4817156033a5dc"
  },
  {
    "url": "assets/img/new-repository.4c248ab7.jpg",
    "revision": "4c248ab77332bde82d370eb1d28b3a6a"
  },
  {
    "url": "assets/img/prozess.c96df5b5.png",
    "revision": "c96df5b59230b5bb395a8e08dfbf193c"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/img/Slotbutton.647e1ae4.jpg",
    "revision": "647e1ae408ed07ad3853a692d852b869"
  },
  {
    "url": "assets/img/Sthud.2ca991b4.png",
    "revision": "2ca991b4a66db463e423550893b83c37"
  },
  {
    "url": "assets/img/sync-mods.84919c03.jpg",
    "revision": "84919c03fad1b96301de3b8257cd71ab"
  },
  {
    "url": "assets/img/Takt_Zeichen_Auswahl.93c61306.png",
    "revision": "93c61306b7c08ed0aa43caf4824cae71"
  },
  {
    "url": "assets/img/teamspeak.9c5e3f7f.jpg",
    "revision": "9c5e3f7f2ed5629fbded752aed3bf139"
  },
  {
    "url": "assets/img/travis-status.a0a35589.jpg",
    "revision": "a0a35589a2c895b06008766230361775"
  },
  {
    "url": "assets/img/wedge.13a38d2a.png",
    "revision": "13a38d2aced397c2dc3bb370415ea8ad"
  },
  {
    "url": "assets/js/1.78d8fb55.js",
    "revision": "6033ff368a936723c2f5f30e82ab5e46"
  },
  {
    "url": "assets/js/10.52ef8b37.js",
    "revision": "e5270551fef4b20720ace5b18d8b49ad"
  },
  {
    "url": "assets/js/11.6b69e6c0.js",
    "revision": "7ae1d79b9609958189df653e7f2de0c9"
  },
  {
    "url": "assets/js/12.5da30d92.js",
    "revision": "5179458dc4ca5f79c4f3184b44dd8416"
  },
  {
    "url": "assets/js/13.573f07a4.js",
    "revision": "fd088c4f1dc72980f427ae612e0ccf91"
  },
  {
    "url": "assets/js/14.cfe9a1ee.js",
    "revision": "a5161e66c78952ebac199bece00676ad"
  },
  {
    "url": "assets/js/15.3f4bbd4c.js",
    "revision": "d1da4c8ab8ef65a691e0d030f0312cf8"
  },
  {
    "url": "assets/js/16.4cc8ef94.js",
    "revision": "c354c4f6afb9bf170727882be2951fa0"
  },
  {
    "url": "assets/js/17.339cc99a.js",
    "revision": "16ef82b67ddd9e1e142c317e82b35a27"
  },
  {
    "url": "assets/js/18.e3e9d956.js",
    "revision": "283323c0d653ae4c066d89b6a4b900eb"
  },
  {
    "url": "assets/js/19.a858b329.js",
    "revision": "9581ca312d7ad272812de53d4b51d8b8"
  },
  {
    "url": "assets/js/20.af23066c.js",
    "revision": "31ac79a8b51157df09c1aa8dd857e2ae"
  },
  {
    "url": "assets/js/21.907a52e2.js",
    "revision": "57a235bed88171648b20e8965019a859"
  },
  {
    "url": "assets/js/22.ad11db1d.js",
    "revision": "8c5dc7de3175829ea97214c540354d38"
  },
  {
    "url": "assets/js/23.f323fdd3.js",
    "revision": "d6d4512d7a61e77fdfa06c65c4cab4c8"
  },
  {
    "url": "assets/js/24.bd862424.js",
    "revision": "fd3193f0e2a463119781e84033474b21"
  },
  {
    "url": "assets/js/25.13ac15bd.js",
    "revision": "45464b86aaf010e64ae2e40784599256"
  },
  {
    "url": "assets/js/26.1efd839f.js",
    "revision": "13ec6ffbf0d7f37708e2a79ecd0f6faf"
  },
  {
    "url": "assets/js/27.14b8de1c.js",
    "revision": "83de33218b1ea6a51ae9ffd3fccf59c4"
  },
  {
    "url": "assets/js/28.79e273f0.js",
    "revision": "bb1ef459609a584c9919d9f45b853bde"
  },
  {
    "url": "assets/js/29.9929ae19.js",
    "revision": "a1f5542b4680e8463338e9130070b3cc"
  },
  {
    "url": "assets/js/3.6bb678f3.js",
    "revision": "83a45b3f947b422c7b7665e7ddc588eb"
  },
  {
    "url": "assets/js/30.f3f750bc.js",
    "revision": "f6e07cb656e01020777a58230974eaeb"
  },
  {
    "url": "assets/js/31.40b3842a.js",
    "revision": "802d975b379b31a75b58cf072fbb4bea"
  },
  {
    "url": "assets/js/32.c5f3f924.js",
    "revision": "4b89f979a31fbf633d80bf5638bb33e7"
  },
  {
    "url": "assets/js/33.74a049e0.js",
    "revision": "32ea433f0d5377104ded05b0bea7c13f"
  },
  {
    "url": "assets/js/34.c2417794.js",
    "revision": "efc270f1aff899426eb7b3b9a3a990fd"
  },
  {
    "url": "assets/js/35.6593e16d.js",
    "revision": "6d5156fe4f8a267d04996c22cb2ec141"
  },
  {
    "url": "assets/js/36.7662b4c5.js",
    "revision": "7b2cdc8d177e2c0aa13fb9bd34d2db69"
  },
  {
    "url": "assets/js/37.9e3bec65.js",
    "revision": "1fe5a49ec0bcbedd05856b2ca99d4130"
  },
  {
    "url": "assets/js/38.e31cbe76.js",
    "revision": "b88c11b7e05aaff109c57531cebc2ba1"
  },
  {
    "url": "assets/js/39.dd206dad.js",
    "revision": "25a195f3e02088f5490273d27f3a98e9"
  },
  {
    "url": "assets/js/4.8e8513a0.js",
    "revision": "c91fd08bf3a672cfd0539ecb9679c9c6"
  },
  {
    "url": "assets/js/40.2eae918d.js",
    "revision": "84f7d6e342b84bc1a3ee159bfc5803e0"
  },
  {
    "url": "assets/js/41.e80c5eb8.js",
    "revision": "0e4bcb90bcea0e208a12b5dc2e3f6d53"
  },
  {
    "url": "assets/js/42.e503462f.js",
    "revision": "bdcd9b5aae0c15b0f9ee3e32ff91e92e"
  },
  {
    "url": "assets/js/43.8ffa3113.js",
    "revision": "9bff426e51fb8691360fe84abef4c07c"
  },
  {
    "url": "assets/js/5.0cdc302e.js",
    "revision": "c982876b541202946b92956e6c3439c7"
  },
  {
    "url": "assets/js/6.1699bbdc.js",
    "revision": "b35cadf13ab2995ddc8ec5996fd0b5f1"
  },
  {
    "url": "assets/js/7.e2496ea6.js",
    "revision": "e8f7765e2a265896fba3c671e0303d2e"
  },
  {
    "url": "assets/js/8.b89566cd.js",
    "revision": "c67ec0b01806551c37b4926ca21f222b"
  },
  {
    "url": "assets/js/9.84283739.js",
    "revision": "962a1bf253cc7fdcee53a5210ea10b2e"
  },
  {
    "url": "assets/js/app.b2321032.js",
    "revision": "243de945c02e11fcd568a29ff7e2f1e3"
  },
  {
    "url": "de/bastelstube/ace3medical.html",
    "revision": "7babb74a4dba1e027d218ad443e8feb1"
  },
  {
    "url": "de/bastelstube/cba-settings.html",
    "revision": "1eee52a6d75d50abc8a3d5c5bbee8a5d"
  },
  {
    "url": "de/bastelstube/erste-hilfe-missionsbau.html",
    "revision": "47e3881fe68e719a2397a3e755926e65"
  },
  {
    "url": "de/bastelstube/FX.html",
    "revision": "cf3a6deb7fbe663a96fd0b1a75c133f5"
  },
  {
    "url": "de/bastelstube/gruppe-adler-mod.html",
    "revision": "ab72ca27d746fba466778897171d879b"
  },
  {
    "url": "de/bastelstube/index.html",
    "revision": "d28f498b10ae0e4a2b73e10d9210b714"
  },
  {
    "url": "de/bastelstube/missionstemplates.html",
    "revision": "fa317f6df10f86a85d60fae38e03c071"
  },
  {
    "url": "de/bastelstube/scriptmodule.html",
    "revision": "7a69244d22ef18b21e50545a966c6a1f"
  },
  {
    "url": "de/bastelstube/slotting-tool.html",
    "revision": "1350594d55ac3f1667d0e6a16b3c2c49"
  },
  {
    "url": "de/bastelstube/symlinks.html",
    "revision": "23de307051933f029c2dd693f375cfea"
  },
  {
    "url": "de/index.html",
    "revision": "25161fe33166c20c5c06f84f376290c1"
  },
  {
    "url": "de/infrastruktur/docker-host.html",
    "revision": "84b1a3ce77b1dc8740b18a3e5b856acc"
  },
  {
    "url": "de/infrastruktur/gruppe-adler-modset.html",
    "revision": "969a08d9ff4719403d1384cb4077758d"
  },
  {
    "url": "de/infrastruktur/index.html",
    "revision": "1f6217fe5a223427e177d452226e1a89"
  },
  {
    "url": "de/infrastruktur/styleguide-design.html",
    "revision": "3e9a0601ea832bb30de9a10f08d58242"
  },
  {
    "url": "de/infrastruktur/wiki-how-to.html",
    "revision": "3f2cdec7f3919b4638a05486a2416d9c"
  },
  {
    "url": "de/organisatorisches/adlerung.html",
    "revision": "30e4b163ccd717dd1d613d15c837a4b8"
  },
  {
    "url": "de/organisatorisches/bek-checkliste.html",
    "revision": "7f371441b735d9a1bf2e3dabce74afde"
  },
  {
    "url": "de/organisatorisches/gruppen.html",
    "revision": "45b97cf54a496a0f0c78401c5340e9ec"
  },
  {
    "url": "de/organisatorisches/index.html",
    "revision": "ae023864a7502659b51e8ec860b075c7"
  },
  {
    "url": "de/taktik/ASOP.html",
    "revision": "d215ae0a35dfaf380b42c439f6cf22d9"
  },
  {
    "url": "de/taktik/ateffectiveness.html",
    "revision": "da536dca9c087bd0794c53aaafccf816"
  },
  {
    "url": "de/taktik/index.html",
    "revision": "659f676fb7d62b691978001430ae4cd1"
  },
  {
    "url": "de/taktik/taktischeZeichen.html",
    "revision": "502b85ff55c509b9b9518421363876a9"
  },
  {
    "url": "de/wiki-index.html",
    "revision": "f7130171bbedca4715457a73e8818460"
  },
  {
    "url": "en/index.html",
    "revision": "bdcb6cf28b4e340d6cd24f0864d6962e"
  },
  {
    "url": "en/infrastruktur/gruppe-adler-modset.html",
    "revision": "ab29aff60219666ae05c0a1bdcb766cc"
  },
  {
    "url": "en/infrastruktur/index.html",
    "revision": "a17a29f81378ada54b06147fb612f254"
  },
  {
    "url": "en/wiki-index.html",
    "revision": "b82ca3528b3cc16a2c19ebf7907e6eda"
  },
  {
    "url": "index.html",
    "revision": "1cbeb816039a724290b538d42ac019e4"
  },
  {
    "url": "logo.png",
    "revision": "cc10714dc7b65eef7149fca8c14ceab3"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
