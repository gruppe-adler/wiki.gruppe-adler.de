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
    "revision": "f8cc45418857dbf0755f054fbf3efda7"
  },
  {
    "url": "adlerkopp.png",
    "revision": "6fad4764c67af0eda687997ad7dec48a"
  },
  {
    "url": "assets/css/0.styles.9f86b8dd.css",
    "revision": "b4f1e49b2ba197d1aa05a5c3cc2ad37e"
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
    "url": "assets/js/16.69c5be35.js",
    "revision": "e35ab620c256b188d9765285a29bd74b"
  },
  {
    "url": "assets/js/17.2af25333.js",
    "revision": "c39f75aaa8093d4bd37cfbe1cbebd4c0"
  },
  {
    "url": "assets/js/18.523d0b39.js",
    "revision": "72bc6e1a8049c88c53c8c97c8117372a"
  },
  {
    "url": "assets/js/19.645a0199.js",
    "revision": "6e1a2a611fceb69ae10b46df04c3d490"
  },
  {
    "url": "assets/js/20.b42d4cae.js",
    "revision": "de280592a758aae10a9980b0029e4a08"
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
    "url": "assets/js/24.1e72cc2a.js",
    "revision": "cd971bb6211e025c916142d60e5aae6c"
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
    "url": "assets/js/32.625d7e86.js",
    "revision": "ae6554a07a86316d6707332f59fdfd21"
  },
  {
    "url": "assets/js/33.81e0cb68.js",
    "revision": "23bef8c5a91453d556772e5c9507ed85"
  },
  {
    "url": "assets/js/34.f919f19f.js",
    "revision": "8fa56b146e64d52975ac116658d8acc5"
  },
  {
    "url": "assets/js/35.7808afb8.js",
    "revision": "3fca45171a828b8a2401692ce1d1f651"
  },
  {
    "url": "assets/js/36.09f0f9a8.js",
    "revision": "06052e1483d3875645b9bc44955de567"
  },
  {
    "url": "assets/js/37.d74adcf1.js",
    "revision": "f5e3b314935c290371ca6484b5ee28b3"
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
    "url": "assets/js/4.877c7bb8.js",
    "revision": "c5d940f202c132115827d9b7043d0391"
  },
  {
    "url": "assets/js/40.1d317adc.js",
    "revision": "b7046c84f96ce1e0ffcc6458a52317c7"
  },
  {
    "url": "assets/js/41.ffcf5a32.js",
    "revision": "e278ac25d5a4d1453bf0634c729d737e"
  },
  {
    "url": "assets/js/42.a5b863a3.js",
    "revision": "c03f7dadf427a57a2ba75440d76b6c4b"
  },
  {
    "url": "assets/js/43.32f41e4b.js",
    "revision": "ba6d497bfcdd9ae5f95fa8789fc3d494"
  },
  {
    "url": "assets/js/5.e054b98e.js",
    "revision": "3d932b3fbfde12e5bb985b2fdd0ed5a0"
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
    "url": "assets/js/8.29a9ac26.js",
    "revision": "dd6d3132a52984e639ea70e586693f36"
  },
  {
    "url": "assets/js/9.36206c29.js",
    "revision": "be444a007737242ac5d565dfae6aa6f3"
  },
  {
    "url": "assets/js/app.8569bb90.js",
    "revision": "e7d71f2bf55286189058900295280d9b"
  },
  {
    "url": "de/bastelstube/ace3medical.html",
    "revision": "dfbb8ce218e62116060be55508461d1d"
  },
  {
    "url": "de/bastelstube/cba-settings.html",
    "revision": "81de9a97cd87ae7e434e6a27bbd0e81e"
  },
  {
    "url": "de/bastelstube/erste-hilfe-missionsbau.html",
    "revision": "0c3df0d5aaa4c39482bdb81c72f4458f"
  },
  {
    "url": "de/bastelstube/FX.html",
    "revision": "49e6e6b10b7c1218754836d6af9c4b8e"
  },
  {
    "url": "de/bastelstube/gruppe-adler-mod.html",
    "revision": "1caed13790633516e7e370e2c113914f"
  },
  {
    "url": "de/bastelstube/index.html",
    "revision": "ed9d5010f426b1ee21a9e31a931191d3"
  },
  {
    "url": "de/bastelstube/missionstemplates.html",
    "revision": "a984d1115814c34e0b899e8cc8d78be6"
  },
  {
    "url": "de/bastelstube/scriptmodule.html",
    "revision": "a63b774d2e6fd1e5d459fa6df892b07c"
  },
  {
    "url": "de/bastelstube/slotting-tool.html",
    "revision": "36f9a28035c38eaa5b03c713385eb036"
  },
  {
    "url": "de/bastelstube/symlinks.html",
    "revision": "f36b0a3cefb8fbbf50a568d9cfe962b4"
  },
  {
    "url": "de/index.html",
    "revision": "4e94b5ec60bf0d45e7ec7c4c79a0610b"
  },
  {
    "url": "de/infrastruktur/docker-host.html",
    "revision": "53840a1f72917cb161569630635f0a13"
  },
  {
    "url": "de/infrastruktur/gruppe-adler-modset.html",
    "revision": "93d0d9f4979c07ddeb109244fc73916b"
  },
  {
    "url": "de/infrastruktur/index.html",
    "revision": "f4d8b6b6558b923efb5460c28b47d83c"
  },
  {
    "url": "de/infrastruktur/styleguide-design.html",
    "revision": "03a852ebf0910d7fa60133f0413a62b1"
  },
  {
    "url": "de/infrastruktur/wiki-how-to.html",
    "revision": "d243ef51df99c42840bad0c1033123e2"
  },
  {
    "url": "de/organisatorisches/adlerung.html",
    "revision": "2b943ca08fabfcbc44d5ca62f1926ed6"
  },
  {
    "url": "de/organisatorisches/bek-checkliste.html",
    "revision": "a63f4e9be02ff368fad905838cb63fca"
  },
  {
    "url": "de/organisatorisches/gruppen.html",
    "revision": "a10e067d7a75d7abc5e1f09dfb6b0063"
  },
  {
    "url": "de/organisatorisches/index.html",
    "revision": "a49097748935d8f7a6cc78116101382c"
  },
  {
    "url": "de/taktik/ASOP.html",
    "revision": "73c4926bdbe6a3ac2ac7e5142a208be2"
  },
  {
    "url": "de/taktik/ateffectiveness.html",
    "revision": "3d46f76239f920bcbc6800efe398bec2"
  },
  {
    "url": "de/taktik/index.html",
    "revision": "3445f3c246fc2770d81e84a5f6348536"
  },
  {
    "url": "de/taktik/taktischeZeichen.html",
    "revision": "38a09f90aa048fc5016a3570d07c9891"
  },
  {
    "url": "de/wiki-index.html",
    "revision": "cabcf64d809452279bcab86fc21d626b"
  },
  {
    "url": "en/index.html",
    "revision": "9b852ab04df574b9d769828526edb3e0"
  },
  {
    "url": "en/infrastruktur/gruppe-adler-modset.html",
    "revision": "c69df4cdc62710085c43b111d8307d27"
  },
  {
    "url": "en/infrastruktur/index.html",
    "revision": "aecc690fa3f7c565a8daed9efcb085a8"
  },
  {
    "url": "en/wiki-index.html",
    "revision": "d8904d9110ae566f1765ba3d461cc008"
  },
  {
    "url": "index.html",
    "revision": "6dd480658dc2e6be733bbd65f937fc56"
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
