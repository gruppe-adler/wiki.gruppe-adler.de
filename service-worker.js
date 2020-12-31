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
    "revision": "ba463f6594384acdc7c2e373e9384d92"
  },
  {
    "url": "adlerkopp.png",
    "revision": "6fad4764c67af0eda687997ad7dec48a"
  },
  {
    "url": "assets/css/0.styles.68f460e5.css",
    "revision": "f669043ddad325bc143eb1d478f251d8"
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
    "url": "assets/js/10.1df8a8f0.js",
    "revision": "c5b5960c8407c87042890de698ecbe0f"
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
    "url": "assets/js/22.6c793ae3.js",
    "revision": "f26d50809c3a81fc8fdcdba7f9d9b3f6"
  },
  {
    "url": "assets/js/23.ebc340af.js",
    "revision": "6ce79aaa1e0401820a7c84ad2319f2c8"
  },
  {
    "url": "assets/js/24.3cf8b72c.js",
    "revision": "24042c63ed9630f393f67c2af845f432"
  },
  {
    "url": "assets/js/25.e9eae6c4.js",
    "revision": "af66b56f4b34ecd9d4cef616a1d52c8e"
  },
  {
    "url": "assets/js/26.ca3e1e00.js",
    "revision": "64de0c75055c712cf51dc004788151e0"
  },
  {
    "url": "assets/js/27.d39c3288.js",
    "revision": "4bb69e6f4c0800e64ea7690efefca559"
  },
  {
    "url": "assets/js/28.a0f15d02.js",
    "revision": "681bfae58485d63bad00c4ca1e9c597e"
  },
  {
    "url": "assets/js/29.bace41fd.js",
    "revision": "4f76217a0921177614f6d44bb9b3bee2"
  },
  {
    "url": "assets/js/3.93a53881.js",
    "revision": "a9c5e20803883aece3eb96c82785e64e"
  },
  {
    "url": "assets/js/30.f0116c3e.js",
    "revision": "cd8a752061802bd4fc73342874cf559e"
  },
  {
    "url": "assets/js/31.fb548bef.js",
    "revision": "2cc67857a424e10319869db00d71bb21"
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
    "url": "assets/js/7.3a72da46.js",
    "revision": "26b32d3849a3715a078215410d6451c3"
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
    "url": "assets/js/app.78edfae9.js",
    "revision": "ca05afb685a94fef69bdb4fcf0f259f3"
  },
  {
    "url": "de/bastelstube/ace3medical.html",
    "revision": "22d04decc23c7ef0efe23e31dd302242"
  },
  {
    "url": "de/bastelstube/cba-settings.html",
    "revision": "35fa462d339b3a3837f3fc5102199d45"
  },
  {
    "url": "de/bastelstube/erste-hilfe-missionsbau.html",
    "revision": "74f02d5edd1c0b1654bc1064c78289e9"
  },
  {
    "url": "de/bastelstube/FX.html",
    "revision": "4e50d2bee6eb40db7f6ca024c52d12c9"
  },
  {
    "url": "de/bastelstube/gruppe-adler-mod.html",
    "revision": "612016cf1417fefa638b3a7730215ab3"
  },
  {
    "url": "de/bastelstube/index.html",
    "revision": "521ab5baaaaa516719c09a85c705e8af"
  },
  {
    "url": "de/bastelstube/missionstemplates.html",
    "revision": "3292e84606fd9058a93464b6a2379beb"
  },
  {
    "url": "de/bastelstube/scriptmodule.html",
    "revision": "5e5fe92b5b049d50e2edaad54dc90c0f"
  },
  {
    "url": "de/bastelstube/slotting-tool.html",
    "revision": "953127308b9ffe6c6728bdfc1c8e945d"
  },
  {
    "url": "de/bastelstube/symlinks.html",
    "revision": "d0f131b419692db33f94dcb08d2038e5"
  },
  {
    "url": "de/index.html",
    "revision": "035f1417deade00d5f1cf4cb8e0223ff"
  },
  {
    "url": "de/infrastruktur/docker-host.html",
    "revision": "9ccd1ce601d9fad0fb6a2891a3144140"
  },
  {
    "url": "de/infrastruktur/gruppe-adler-modset.html",
    "revision": "233c89899347c2df8ef400597242373a"
  },
  {
    "url": "de/infrastruktur/index.html",
    "revision": "114547ecabe49eef6ea2ea592043ba17"
  },
  {
    "url": "de/infrastruktur/styleguide-design.html",
    "revision": "3f6a3c02bc0268a0213ee6210898a9a8"
  },
  {
    "url": "de/infrastruktur/wiki-how-to.html",
    "revision": "d18e6d9073434c9981f9d1a8304ae30a"
  },
  {
    "url": "de/organisatorisches/adlerung.html",
    "revision": "59202286031c7369cfc9dd4ffedf635d"
  },
  {
    "url": "de/organisatorisches/bek-checkliste.html",
    "revision": "5daceb88d925ffff6a336b8bfc3fe05e"
  },
  {
    "url": "de/organisatorisches/gruppen.html",
    "revision": "2eb4fe6c3baaf6cbdf40d14581ddd6de"
  },
  {
    "url": "de/organisatorisches/index.html",
    "revision": "984a42bad16e42460e88681f57c16d75"
  },
  {
    "url": "de/taktik/ASOP.html",
    "revision": "06bc1dae03b4ca282b292a139d8c93ef"
  },
  {
    "url": "de/taktik/ateffectiveness.html",
    "revision": "4e9cc02ba7794efa6b10d384ff8a2280"
  },
  {
    "url": "de/taktik/index.html",
    "revision": "93b23ebfc9a8a17d7ea057b92056e724"
  },
  {
    "url": "de/taktik/taktischeZeichen.html",
    "revision": "8e150cf74bdc4b31d1c71f30ea626c28"
  },
  {
    "url": "de/wiki-index.html",
    "revision": "859c8ebffb66846f2281888818e44fc2"
  },
  {
    "url": "en/index.html",
    "revision": "dd470d952c5d82464e71310810a2f1d0"
  },
  {
    "url": "en/infrastruktur/gruppe-adler-modset.html",
    "revision": "5aa03101e36e0a1960adb08a4f0579e5"
  },
  {
    "url": "en/infrastruktur/index.html",
    "revision": "d3036b3ac88b197f17b29a4e3afa5165"
  },
  {
    "url": "en/wiki-index.html",
    "revision": "438db508b491ffcbc496f70a23cfd318"
  },
  {
    "url": "index.html",
    "revision": "4e4dda4ed5b8ecd0172b32036656dadd"
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
