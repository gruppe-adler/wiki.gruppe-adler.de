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
    "revision": "242d05be030d2f3670c5e1653c620abc"
  },
  {
    "url": "adlerkopp.png",
    "revision": "6fad4764c67af0eda687997ad7dec48a"
  },
  {
    "url": "assets/css/0.styles.f7c23736.css",
    "revision": "bb219da7ea0fe746657df63f281b7e0b"
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
    "url": "assets/js/1.8266b3f4.js",
    "revision": "b802c3393e69836a448361300554315e"
  },
  {
    "url": "assets/js/10.5658f4fa.js",
    "revision": "87a7cc4758fd2766269bd65843402c31"
  },
  {
    "url": "assets/js/11.45251d22.js",
    "revision": "07c0f874d182e7c02ebe22b62594ee47"
  },
  {
    "url": "assets/js/12.29a29821.js",
    "revision": "f9945d43b0eec4b19b84e012f72e88dd"
  },
  {
    "url": "assets/js/13.53941c64.js",
    "revision": "1840533974140a9224e0a5c95b8dfa28"
  },
  {
    "url": "assets/js/14.a75bc67a.js",
    "revision": "bc0da26a45544c6ca2efaab6c2b75841"
  },
  {
    "url": "assets/js/15.71629b88.js",
    "revision": "336a55a87f64f40f5fff2a5dbe12cfa9"
  },
  {
    "url": "assets/js/16.80daded5.js",
    "revision": "3c5d0ec691026109e45761d0db6201e5"
  },
  {
    "url": "assets/js/17.31595069.js",
    "revision": "b0d91b183ecf299e9a75eed202288ed4"
  },
  {
    "url": "assets/js/18.b0ff2118.js",
    "revision": "98339b54101ef432feff6ca8daca6ad2"
  },
  {
    "url": "assets/js/19.d2dee45c.js",
    "revision": "7562c13ac2710815890e4ed972274a62"
  },
  {
    "url": "assets/js/20.5b235dad.js",
    "revision": "0b476027d6930992c0a778389420b486"
  },
  {
    "url": "assets/js/21.9f3c5d12.js",
    "revision": "e311956d819bfa7fc2cd49a2fe8730f3"
  },
  {
    "url": "assets/js/22.6c603547.js",
    "revision": "820bd2327d9049992d7708bd110b78fa"
  },
  {
    "url": "assets/js/23.55920c93.js",
    "revision": "06512bd593fd8beea0cee8918060ac97"
  },
  {
    "url": "assets/js/24.4316b187.js",
    "revision": "774a5cd666f20ac68031eb6e5b323b89"
  },
  {
    "url": "assets/js/25.74ba7430.js",
    "revision": "0f8a006ef3abd8e319f1e0c1dac66b93"
  },
  {
    "url": "assets/js/26.1a628172.js",
    "revision": "0af459cefcc405cd38b49d628c5b1f00"
  },
  {
    "url": "assets/js/27.f74ceffb.js",
    "revision": "461053641cf1fad7ceb351fa3354772a"
  },
  {
    "url": "assets/js/28.f28e82c6.js",
    "revision": "ac9d939ed0c790f08c9c17b40525fd27"
  },
  {
    "url": "assets/js/29.c44c7bde.js",
    "revision": "57aa28b247a5bb8f16b181814666ad4c"
  },
  {
    "url": "assets/js/3.aa693ca3.js",
    "revision": "bc762597d2559efabd4fee43d27f04d7"
  },
  {
    "url": "assets/js/30.2a4c373b.js",
    "revision": "6a2f06fe1efe2371e40f5e289fb05759"
  },
  {
    "url": "assets/js/31.56ec0dc4.js",
    "revision": "fe2cc6ee5385c6fa78a67974b19df465"
  },
  {
    "url": "assets/js/32.c180e033.js",
    "revision": "1a965ee1008c0a2d1f6706e15d97efae"
  },
  {
    "url": "assets/js/33.58d3860b.js",
    "revision": "4157fbc4036bf8026573a3e9f0c9b747"
  },
  {
    "url": "assets/js/34.1194c11d.js",
    "revision": "ae5913bd1713afd36cdc1300015b817a"
  },
  {
    "url": "assets/js/35.3da39fd8.js",
    "revision": "615ca17c513321f7a656be479225fbfb"
  },
  {
    "url": "assets/js/36.bc67ace3.js",
    "revision": "903d2b96f93c0a841f4bf1ad6f3ac922"
  },
  {
    "url": "assets/js/37.193f8ba7.js",
    "revision": "42f9b7e98c7591888a0f4a29a42e30e7"
  },
  {
    "url": "assets/js/38.e963031f.js",
    "revision": "4eea0e6bb3d7b1484bc5f1d86a7c8d67"
  },
  {
    "url": "assets/js/39.18f9dc24.js",
    "revision": "f8430a2471141418e72166d241829973"
  },
  {
    "url": "assets/js/4.e704607a.js",
    "revision": "848c1ed12e57da3cbd383cedd2eff9c6"
  },
  {
    "url": "assets/js/40.4b33429f.js",
    "revision": "6466990480db950fd04effd56b13d9c7"
  },
  {
    "url": "assets/js/41.ed944941.js",
    "revision": "bcb62a8ffb1e31222452dc5f3d529850"
  },
  {
    "url": "assets/js/42.6f3fd04a.js",
    "revision": "242f64c7e721cccb7deaa0e802dbb63b"
  },
  {
    "url": "assets/js/5.750af2dd.js",
    "revision": "f436a8be4b012777a1bb02ee79ada95c"
  },
  {
    "url": "assets/js/6.e5018750.js",
    "revision": "4b10d98d047feff0473b973c0263b631"
  },
  {
    "url": "assets/js/7.d82e4bd0.js",
    "revision": "757f58528565f91b7c890b38db7787e1"
  },
  {
    "url": "assets/js/8.36cd0bc4.js",
    "revision": "37829690b06ff4a29a0c6b239a21d115"
  },
  {
    "url": "assets/js/9.def5bf0c.js",
    "revision": "40f18a8c47a5570884a0d5aa4dc5fd97"
  },
  {
    "url": "assets/js/app.959c8088.js",
    "revision": "7cc54ce655f9e70c9875d12dfb59ff5d"
  },
  {
    "url": "de/bastelstube/ace3medical.html",
    "revision": "9580f2eb12e340910ef75a4dc8813041"
  },
  {
    "url": "de/bastelstube/cba-settings.html",
    "revision": "9b2a8956a2d184962dba34273de89f41"
  },
  {
    "url": "de/bastelstube/erste-hilfe-missionsbau.html",
    "revision": "c0437a481d1d96c5e0ff52a9216c2fcd"
  },
  {
    "url": "de/bastelstube/FX.html",
    "revision": "bd6dab28af4f6014ced5e7e816bca59d"
  },
  {
    "url": "de/bastelstube/gruppe-adler-mod.html",
    "revision": "2cd254b8852ebb698219914a0ea161a2"
  },
  {
    "url": "de/bastelstube/index.html",
    "revision": "92788d780c2b6b7ff6b2fad7db2eb545"
  },
  {
    "url": "de/bastelstube/scriptmodule.html",
    "revision": "5973f3cfb47e61e218d5614b3c156ea9"
  },
  {
    "url": "de/bastelstube/slotting-tool.html",
    "revision": "8bd1f843b11f1a40d9d05ac301d24105"
  },
  {
    "url": "de/bastelstube/symlinks.html",
    "revision": "cce90aa934b2b1e961eccb9af1818489"
  },
  {
    "url": "de/index.html",
    "revision": "ad69e0b37dc824ad65ffb72228e17dbb"
  },
  {
    "url": "de/infrastruktur/docker-host.html",
    "revision": "305a9ce56ea7b5865c48883ee2dfc289"
  },
  {
    "url": "de/infrastruktur/gruppe-adler-modset.html",
    "revision": "3e2dc64b788be742c5233eab2ffdaaa4"
  },
  {
    "url": "de/infrastruktur/index.html",
    "revision": "001cf59c47adc547a782ae65c3495b59"
  },
  {
    "url": "de/infrastruktur/styleguide-design.html",
    "revision": "73cacea238715212eacb73db36f8bda9"
  },
  {
    "url": "de/infrastruktur/uebersicht.html",
    "revision": "dbdbe5095bf87105c2c79b8ea3cf7058"
  },
  {
    "url": "de/infrastruktur/wiki-how-to.html",
    "revision": "ea2878c540d667acc36dd4034275d79c"
  },
  {
    "url": "de/organisatorisches/adlerung.html",
    "revision": "6b7fb545d7e405e0bbf2893f559b5ec9"
  },
  {
    "url": "de/organisatorisches/bek-checkliste.html",
    "revision": "0039e56d55fe9ebaa9af899af4350ad5"
  },
  {
    "url": "de/organisatorisches/gastspieler.html",
    "revision": "87863b43a9ad019cb58e372ff7c67227"
  },
  {
    "url": "de/organisatorisches/gruppen.html",
    "revision": "a91fae2c4773d523432dd25a6a27f017"
  },
  {
    "url": "de/organisatorisches/index.html",
    "revision": "d8c6d0fb2e5cdf272651c5465722052c"
  },
  {
    "url": "de/taktik/ASOP.html",
    "revision": "58773a728f76af0d062addf19140dd1d"
  },
  {
    "url": "de/taktik/ateffectiveness.html",
    "revision": "765956dfcd33a9225525d32d28b18899"
  },
  {
    "url": "de/taktik/index.html",
    "revision": "f7df315a6d21518acced23ab32984137"
  },
  {
    "url": "de/taktik/taktischeZeichen.html",
    "revision": "60cddad5f4a99acd8ecf09abfdc6d786"
  },
  {
    "url": "de/wiki-index.html",
    "revision": "a31f9b921b738625f04ba40b9cafdc4c"
  },
  {
    "url": "en/index.html",
    "revision": "3eeb5f36006d621f7132bbce1e60a1a3"
  },
  {
    "url": "en/infrastruktur/gruppe-adler-modset.html",
    "revision": "e6163d269334996411a39a0e09c9659e"
  },
  {
    "url": "en/infrastruktur/index.html",
    "revision": "524f70f97a4901c079228654486f99a5"
  },
  {
    "url": "en/wiki-index.html",
    "revision": "9f84ae9b3cb1681f44d116810a77ffdd"
  },
  {
    "url": "index.html",
    "revision": "921000ce2989efb33f1e13210f5b4585"
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
