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
    "revision": "88d89c2e578d380b9de6b7093b2e9d68"
  },
  {
    "url": "adlerkopp.png",
    "revision": "6fad4764c67af0eda687997ad7dec48a"
  },
  {
    "url": "assets/css/0.styles.726b1560.css",
    "revision": "11ecb630e4ba9d4b0ffb49c6c5892fb9"
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
    "url": "assets/js/1.0b060c94.js",
    "revision": "033f3301ffe7c6ee3744d6c1da210177"
  },
  {
    "url": "assets/js/10.bbc769c2.js",
    "revision": "f8a3c403271efc37cc006dc212810b46"
  },
  {
    "url": "assets/js/11.228dd864.js",
    "revision": "0ad5e3bf0fc2e3d67c7d06e3e9c9a89e"
  },
  {
    "url": "assets/js/12.b57c3e73.js",
    "revision": "d6cee25eace8bcd81d4625e43c87952d"
  },
  {
    "url": "assets/js/13.7135bbd1.js",
    "revision": "7bad5f9625457c28290ef738de6a257d"
  },
  {
    "url": "assets/js/14.c3b9580c.js",
    "revision": "5b2be3d23286966c7861cc0e952480d5"
  },
  {
    "url": "assets/js/15.05bb63af.js",
    "revision": "04b485271d8d3df4db3eeb6278c45420"
  },
  {
    "url": "assets/js/16.d713e286.js",
    "revision": "3f4af7b1350f5aef5fdbf54ee58d0c22"
  },
  {
    "url": "assets/js/17.7fab6dad.js",
    "revision": "f85c5fe10a3f1fd6470e6c0f9bebcf83"
  },
  {
    "url": "assets/js/18.942d02e5.js",
    "revision": "7114058e6b9ac0a34e468df3079fd4c9"
  },
  {
    "url": "assets/js/19.a7a30751.js",
    "revision": "36bf78a516710fea0a8c08aad1beca6b"
  },
  {
    "url": "assets/js/20.4f03760e.js",
    "revision": "404de95ca4ebc54d41c2eac214237e99"
  },
  {
    "url": "assets/js/21.fae1ea0d.js",
    "revision": "65849be2e69fb92ce6e2e6a860cf469a"
  },
  {
    "url": "assets/js/22.eeeeaca6.js",
    "revision": "52e6322276c3e73bc9476a8992f88e35"
  },
  {
    "url": "assets/js/23.9de6ee49.js",
    "revision": "1e1ae6718b54c4823e40dd14b7aebf93"
  },
  {
    "url": "assets/js/24.0d3d1fba.js",
    "revision": "43fd86e6959f758706ef9f23d50a597b"
  },
  {
    "url": "assets/js/25.e78a39fa.js",
    "revision": "24c411b0e7b17d7daa3990f6ff74ced6"
  },
  {
    "url": "assets/js/26.4ffdf930.js",
    "revision": "9d51c6593dcc43c4b740d3a4ca05e9e2"
  },
  {
    "url": "assets/js/27.6e67b7b6.js",
    "revision": "29f0ac0498248840342c09a8a827ec18"
  },
  {
    "url": "assets/js/28.827c088f.js",
    "revision": "1cb7d028858b05a08cc5c55a9202bf62"
  },
  {
    "url": "assets/js/29.583a1221.js",
    "revision": "031697e186df682ff3ca8e57901032b0"
  },
  {
    "url": "assets/js/3.662a4b00.js",
    "revision": "b149e1c039c851bdac57428fbf65b3ca"
  },
  {
    "url": "assets/js/30.7bc94357.js",
    "revision": "75f521f67ffac8e72ec0bcdda5b3e600"
  },
  {
    "url": "assets/js/31.49f7685b.js",
    "revision": "6d90ab7a0b37326f6664825a2efb3214"
  },
  {
    "url": "assets/js/32.d6593712.js",
    "revision": "56b64102b7a99c654e3913ccc86727ad"
  },
  {
    "url": "assets/js/33.5f40bc1c.js",
    "revision": "2f7f3238da47352b6e2b1a4b4df42d6c"
  },
  {
    "url": "assets/js/34.766e2a64.js",
    "revision": "47aac3d217999c7922263b7bf2bbcc1b"
  },
  {
    "url": "assets/js/35.7808afb8.js",
    "revision": "3fca45171a828b8a2401692ce1d1f651"
  },
  {
    "url": "assets/js/36.b2deb8db.js",
    "revision": "71d649f111430d0dde55cf06d440a60c"
  },
  {
    "url": "assets/js/37.990d775f.js",
    "revision": "18b44fb80f30c3b9878e1ab4918f1644"
  },
  {
    "url": "assets/js/38.71787386.js",
    "revision": "5ba7463642ffe04f8f7af929e68b56b1"
  },
  {
    "url": "assets/js/39.77b24c62.js",
    "revision": "8a7ff39276354b04a64a88297e1855c1"
  },
  {
    "url": "assets/js/4.12add97e.js",
    "revision": "e5afc933483249766307a2e3e4928ede"
  },
  {
    "url": "assets/js/40.edae8d8e.js",
    "revision": "b63f1e3fb2aa278ee5aaeab8eec8bdd5"
  },
  {
    "url": "assets/js/41.de987d46.js",
    "revision": "01e0e4892d8ab5ad4ed02f84df5c4328"
  },
  {
    "url": "assets/js/42.7a08ecdf.js",
    "revision": "017590728b7cd08eb2ca991f053e165b"
  },
  {
    "url": "assets/js/43.32f41e4b.js",
    "revision": "ba6d497bfcdd9ae5f95fa8789fc3d494"
  },
  {
    "url": "assets/js/5.4d7432c3.js",
    "revision": "e6840bfe4a84d327064c55adb98f953a"
  },
  {
    "url": "assets/js/6.bc5ba43a.js",
    "revision": "d585c9bd4b297caf038053c633070368"
  },
  {
    "url": "assets/js/7.85c4057c.js",
    "revision": "a4e438c4f89e9cddd17bceb53399959d"
  },
  {
    "url": "assets/js/8.9c077266.js",
    "revision": "b5ce759e0b908282a12c7ba0daab390d"
  },
  {
    "url": "assets/js/9.36206c29.js",
    "revision": "be444a007737242ac5d565dfae6aa6f3"
  },
  {
    "url": "assets/js/app.fe82c763.js",
    "revision": "a400cf33a3c5da828e1a377cca144722"
  },
  {
    "url": "de/bastelstube/ace3medical.html",
    "revision": "e3cf3376801cb4873adfc571a8620421"
  },
  {
    "url": "de/bastelstube/cba-settings.html",
    "revision": "6393f907b74505c6dd5659e7bd025c28"
  },
  {
    "url": "de/bastelstube/erste-hilfe-missionsbau.html",
    "revision": "8e7d9acba2c86247ae5bbc8f40e3eef4"
  },
  {
    "url": "de/bastelstube/FX.html",
    "revision": "e4ed04b7f433ccde6c61da038758dc26"
  },
  {
    "url": "de/bastelstube/gruppe-adler-mod.html",
    "revision": "0de37de3a5d86106277960b856fe4f5e"
  },
  {
    "url": "de/bastelstube/index.html",
    "revision": "a53bac1bd1e4cdbc39aab7027400d793"
  },
  {
    "url": "de/bastelstube/missionstemplates.html",
    "revision": "e6f59adc6749def2e193a14134ad8916"
  },
  {
    "url": "de/bastelstube/scriptmodule.html",
    "revision": "585eead7b104a875c4c560944cf12989"
  },
  {
    "url": "de/bastelstube/slotting-tool.html",
    "revision": "b78eaebdd2698e26cc1e65b893e2710c"
  },
  {
    "url": "de/bastelstube/symlinks.html",
    "revision": "42e96535f7c1523276b7dd1ca5e95f90"
  },
  {
    "url": "de/index.html",
    "revision": "43aaa69843ff1100036418745865b81f"
  },
  {
    "url": "de/infrastruktur/docker-host.html",
    "revision": "6fe630eefdb6d0c2832003a887a61650"
  },
  {
    "url": "de/infrastruktur/gruppe-adler-modset.html",
    "revision": "5e1852d4aea8d4f27848399d0fe99e04"
  },
  {
    "url": "de/infrastruktur/index.html",
    "revision": "a759a1e8c6f93dc7ceecc0fdf8edffc7"
  },
  {
    "url": "de/infrastruktur/styleguide-design.html",
    "revision": "cf0fa52772ffdee7f1ea9fef7a43adb4"
  },
  {
    "url": "de/infrastruktur/wiki-how-to.html",
    "revision": "d56c74726d25d1a0b16253489373a99c"
  },
  {
    "url": "de/organisatorisches/adlerung.html",
    "revision": "c46261f03509b42d46a4ca44152547b9"
  },
  {
    "url": "de/organisatorisches/bek-checkliste.html",
    "revision": "8c74b224e6bdd555858db1335600d643"
  },
  {
    "url": "de/organisatorisches/gruppen.html",
    "revision": "a277c14061ffbe9a8f3e90e70ffe62f0"
  },
  {
    "url": "de/organisatorisches/index.html",
    "revision": "508cda6c1a845d3a90c6df855599c225"
  },
  {
    "url": "de/taktik/ASOP.html",
    "revision": "3ce10669af9bd8e17e54916f83c4941c"
  },
  {
    "url": "de/taktik/ateffectiveness.html",
    "revision": "61002703c695c9f7fd28c536e3616cc0"
  },
  {
    "url": "de/taktik/index.html",
    "revision": "ea6c417f96e022a1a8f4f8bad5d08147"
  },
  {
    "url": "de/taktik/taktischeZeichen.html",
    "revision": "af8b1456ed7fef8089bd1444e547c8ec"
  },
  {
    "url": "de/wiki-index.html",
    "revision": "c2450aa5c6d8a909a44668fdecddf259"
  },
  {
    "url": "en/index.html",
    "revision": "ee0bab0b379eafd58d6b874193290160"
  },
  {
    "url": "en/infrastruktur/gruppe-adler-modset.html",
    "revision": "b0740803730d0e81e69943793fa4632f"
  },
  {
    "url": "en/infrastruktur/index.html",
    "revision": "27ab5fc05df88b69fb5a69318c309e5d"
  },
  {
    "url": "en/wiki-index.html",
    "revision": "93dd045617bbca9f936214500f3d6b29"
  },
  {
    "url": "index.html",
    "revision": "9920735cc86e822abd203f68db47e1ae"
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
