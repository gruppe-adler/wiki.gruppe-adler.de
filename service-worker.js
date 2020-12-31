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
    "revision": "3e2156a0a3585b0c521acb2db717cbbf"
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
    "url": "assets/js/17.e2b7068d.js",
    "revision": "18d183fac3fa8648adda8de42e1acd0d"
  },
  {
    "url": "assets/js/18.4f523ac8.js",
    "revision": "4ef9bf6d2f5eb71a469fe0498739e3a3"
  },
  {
    "url": "assets/js/19.a7a30751.js",
    "revision": "36bf78a516710fea0a8c08aad1beca6b"
  },
  {
    "url": "assets/js/20.2f48632b.js",
    "revision": "581c3a8491d12a9ddae3aee7e8d1df4a"
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
    "url": "assets/js/37.6f467064.js",
    "revision": "250977e32a08f021979f618e7c690c90"
  },
  {
    "url": "assets/js/38.856d1c9b.js",
    "revision": "2561c5d8a336f524c79ec1209c8f0e50"
  },
  {
    "url": "assets/js/39.38621c09.js",
    "revision": "3efce69d3299718eceb19f6377500863"
  },
  {
    "url": "assets/js/4.e8e3c44f.js",
    "revision": "c827ad3e13188fef3c2fa95ec37b4094"
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
    "url": "assets/js/6.875507ec.js",
    "revision": "3a586b10a76dfb7ec00b32dd7f5cfafa"
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
    "url": "assets/js/app.b6ce5940.js",
    "revision": "85a697947b1b97460966d161e8eeb087"
  },
  {
    "url": "de/bastelstube/ace3medical.html",
    "revision": "527df73d2d12527543a6b705c7805576"
  },
  {
    "url": "de/bastelstube/cba-settings.html",
    "revision": "bbcb5fdfd4eeb086e285615c727f2c74"
  },
  {
    "url": "de/bastelstube/erste-hilfe-missionsbau.html",
    "revision": "e45bd344c20c4f34a15d681669b91803"
  },
  {
    "url": "de/bastelstube/FX.html",
    "revision": "d2295daa8d9daa716be58433036e65b2"
  },
  {
    "url": "de/bastelstube/gruppe-adler-mod.html",
    "revision": "51f17cb6c67bc52174b1de1b9f80cf74"
  },
  {
    "url": "de/bastelstube/index.html",
    "revision": "819e42c4434577ffb37f9b2b78a0c4f3"
  },
  {
    "url": "de/bastelstube/missionstemplates.html",
    "revision": "78b17627471021920c4aa7f046b6a69a"
  },
  {
    "url": "de/bastelstube/scriptmodule.html",
    "revision": "bed87f80356c15fd1fe372c5e24ce188"
  },
  {
    "url": "de/bastelstube/slotting-tool.html",
    "revision": "3e0773c9cf37cac32036680756fe04f2"
  },
  {
    "url": "de/bastelstube/symlinks.html",
    "revision": "9c5e1c88afbf7725b58731f2ea4b058f"
  },
  {
    "url": "de/index.html",
    "revision": "4e195998e89342449ecbdb8f9ed9969e"
  },
  {
    "url": "de/infrastruktur/docker-host.html",
    "revision": "0d6fbadc74ea0bb6c444f47876a40bb6"
  },
  {
    "url": "de/infrastruktur/gruppe-adler-modset.html",
    "revision": "66c096a9fe914701260fa066a608c2f0"
  },
  {
    "url": "de/infrastruktur/index.html",
    "revision": "5b427aff5cad3b82bd92a967c2e3807d"
  },
  {
    "url": "de/infrastruktur/styleguide-design.html",
    "revision": "e09ccb3472dd7511b6c379acd602abf6"
  },
  {
    "url": "de/infrastruktur/wiki-how-to.html",
    "revision": "dd71bcf2c88968a71e9c1be12f7b6cae"
  },
  {
    "url": "de/organisatorisches/adlerung.html",
    "revision": "1880f0a3df598688fd1e8ad8d67d2aea"
  },
  {
    "url": "de/organisatorisches/bek-checkliste.html",
    "revision": "ca9df48f7bc3bb8103ee3e8be496667c"
  },
  {
    "url": "de/organisatorisches/gruppen.html",
    "revision": "48949465b30c687c0d2744905355da98"
  },
  {
    "url": "de/organisatorisches/index.html",
    "revision": "95ae41e93e998151a8f167d7eea959e3"
  },
  {
    "url": "de/taktik/ASOP.html",
    "revision": "0e535ebcc96bde5b59bd5535cfb23ed8"
  },
  {
    "url": "de/taktik/ateffectiveness.html",
    "revision": "d728d9dbccfe1b1df9aa79dae8c1cd06"
  },
  {
    "url": "de/taktik/index.html",
    "revision": "bd65b2c512f095074a3faacc4e505cd9"
  },
  {
    "url": "de/taktik/taktischeZeichen.html",
    "revision": "fac8ef0e829b5d34dfd558a5c655c2eb"
  },
  {
    "url": "de/wiki-index.html",
    "revision": "16602d18aaaaee21d4890653fa0d1dab"
  },
  {
    "url": "en/index.html",
    "revision": "93fcfed116d6f3705f9d3d3f6a12bd50"
  },
  {
    "url": "en/infrastruktur/gruppe-adler-modset.html",
    "revision": "053b9add05815279eceddb05b2360b6f"
  },
  {
    "url": "en/infrastruktur/index.html",
    "revision": "d514544386e918814015524591138080"
  },
  {
    "url": "en/wiki-index.html",
    "revision": "52de6e2602e80a06f3ef76d8e256ab90"
  },
  {
    "url": "index.html",
    "revision": "35ffb8ce71275702438b2e671779f4e2"
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
