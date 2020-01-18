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
    "revision": "5de483a1e0f127f8d264c4cd3e7daa34"
  },
  {
    "url": "adlerkopp.png",
    "revision": "6fad4764c67af0eda687997ad7dec48a"
  },
  {
    "url": "assets/css/0.styles.533a18bd.css",
    "revision": "bbadbfb974eb6bea9996a52f6db6c5b4"
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
    "url": "assets/js/1.9d972ef3.js",
    "revision": "bc6f1e9b7bc165c3f627cc12d4fcccb5"
  },
  {
    "url": "assets/js/10.c2b6af22.js",
    "revision": "52139ea8a6689005e4a98fde98eac69f"
  },
  {
    "url": "assets/js/11.9edb86aa.js",
    "revision": "c1d1c7932edc9df7be45e8d782ab597e"
  },
  {
    "url": "assets/js/12.ac5ae795.js",
    "revision": "1d929b96c4cbe04a31e00e90cac00714"
  },
  {
    "url": "assets/js/13.ce0bf753.js",
    "revision": "8f5d654182eaa2a6a20cd0fb4987911a"
  },
  {
    "url": "assets/js/14.263ac074.js",
    "revision": "6dd7f18a3776fd366e1fd5609e7e1a52"
  },
  {
    "url": "assets/js/15.81eb5036.js",
    "revision": "4e5fc315fb34db986af982143ccb5a17"
  },
  {
    "url": "assets/js/16.658af9e9.js",
    "revision": "407a6e4974ae88507613691c9ac331cf"
  },
  {
    "url": "assets/js/17.0c1420b9.js",
    "revision": "caa4d63d2f174da2e04cd63860f9e649"
  },
  {
    "url": "assets/js/18.efa817d9.js",
    "revision": "b31f86345d25c95533ab534fca63b45e"
  },
  {
    "url": "assets/js/19.5b08a2e7.js",
    "revision": "639dd0e9ff5f7607f49cbac829d5dd46"
  },
  {
    "url": "assets/js/20.f97a0a55.js",
    "revision": "bc27df494fb163152bb4d5b487bf37d7"
  },
  {
    "url": "assets/js/21.5a73f310.js",
    "revision": "3398d7761ee7bf2301c2215227e1deb2"
  },
  {
    "url": "assets/js/22.b391d76a.js",
    "revision": "6a6829e01b7683c4633dcc3540eaf4ce"
  },
  {
    "url": "assets/js/23.fd6ee99e.js",
    "revision": "600ad852fa8bbe936ea92e6c9206c783"
  },
  {
    "url": "assets/js/24.d224d47a.js",
    "revision": "d7421bb42a6d0044620e1ad6b8157b78"
  },
  {
    "url": "assets/js/25.7aec0bac.js",
    "revision": "b39cdc1c290675258a68facbf1dc5c27"
  },
  {
    "url": "assets/js/26.f771787f.js",
    "revision": "649c05bb7797e6b16edf6fca48db5a23"
  },
  {
    "url": "assets/js/27.162adb67.js",
    "revision": "fc25a60296fc6ef8d0e6721c695ad5d6"
  },
  {
    "url": "assets/js/28.93739c6f.js",
    "revision": "89ea7829c4c606ffa743e1aa0c7da7b6"
  },
  {
    "url": "assets/js/29.60a6804a.js",
    "revision": "bf0ad83b2dcbfcc96d33d8881b3aba26"
  },
  {
    "url": "assets/js/3.a4eac80e.js",
    "revision": "7c9ec67674899b78fad1fd744905c255"
  },
  {
    "url": "assets/js/30.31b93492.js",
    "revision": "351ab3ccb61790bd63061c9a7c1cde13"
  },
  {
    "url": "assets/js/31.721f1fc8.js",
    "revision": "02d794370fa891788a100c16c1195756"
  },
  {
    "url": "assets/js/32.343e3257.js",
    "revision": "1294b6afec6cac5e5d577e6b37d9db82"
  },
  {
    "url": "assets/js/33.f0dfd98c.js",
    "revision": "8284ec01d127050c968cb5081c7903da"
  },
  {
    "url": "assets/js/34.94800e5d.js",
    "revision": "b996c66e9094d53081b4a84d924fb766"
  },
  {
    "url": "assets/js/35.6a6a93e8.js",
    "revision": "b1620c41663f7892dbda6beda1d42ebe"
  },
  {
    "url": "assets/js/36.e5e1c73a.js",
    "revision": "b35e6bc580b0ee0a7acf946517f7adf4"
  },
  {
    "url": "assets/js/37.e18f4048.js",
    "revision": "b8e1311046c7beb2abf6c6523178d79a"
  },
  {
    "url": "assets/js/38.8337c107.js",
    "revision": "8a653a7d9b15c439da2db29ef51a32db"
  },
  {
    "url": "assets/js/39.ad01466b.js",
    "revision": "0762857f9bfa6dab828d74d9aed64d86"
  },
  {
    "url": "assets/js/4.01aab508.js",
    "revision": "10325d3cfd3f3ab833d2ce14acc133a1"
  },
  {
    "url": "assets/js/40.e993cf3a.js",
    "revision": "9518988982fd8250e793965460069ce3"
  },
  {
    "url": "assets/js/41.08321a8e.js",
    "revision": "bae637b5c9160d31f9849bf8b7191ef8"
  },
  {
    "url": "assets/js/42.b5f24023.js",
    "revision": "242f64c7e721cccb7deaa0e802dbb63b"
  },
  {
    "url": "assets/js/5.0128af8d.js",
    "revision": "c7dc58f3901614b7afe157dbc71276d2"
  },
  {
    "url": "assets/js/6.c8e9de94.js",
    "revision": "8129b9c769a0545887a46f152bbae08c"
  },
  {
    "url": "assets/js/7.aa2b7c01.js",
    "revision": "3cc1dcbb26f4c2a19da3500915234bc6"
  },
  {
    "url": "assets/js/8.d502752d.js",
    "revision": "45c454636a6e8b0bacf5ef3d86cc96a5"
  },
  {
    "url": "assets/js/9.5d3a8e3a.js",
    "revision": "fcf2ef4d248d7c3df3b33dbac2070e65"
  },
  {
    "url": "assets/js/app.84c1633d.js",
    "revision": "3f886deb1c5c15681756a324ce3f65a4"
  },
  {
    "url": "de/bastelstube/ace3medical.html",
    "revision": "5e0fd98aa75a5618acd25ba26b796782"
  },
  {
    "url": "de/bastelstube/cba-settings.html",
    "revision": "e2414492cb7e53becbc404f48adfd373"
  },
  {
    "url": "de/bastelstube/erste-hilfe-missionsbau.html",
    "revision": "86d058197ea3fe529d48a6eeaae83307"
  },
  {
    "url": "de/bastelstube/FX.html",
    "revision": "3459e8e26cfa777b21e110becf06b852"
  },
  {
    "url": "de/bastelstube/gruppe-adler-mod.html",
    "revision": "101e30a66bf994cb7041e0b195a3747c"
  },
  {
    "url": "de/bastelstube/index.html",
    "revision": "43d9808bf81d09a0c9cebd3627979c06"
  },
  {
    "url": "de/bastelstube/missionstemplates.html",
    "revision": "4c455a1ceba0aa8cad83ba0aaadc743c"
  },
  {
    "url": "de/bastelstube/scriptmodule.html",
    "revision": "91a6f7f688bec643a8c460fb06e4248f"
  },
  {
    "url": "de/bastelstube/slotting-tool.html",
    "revision": "0c64940f03af43fcf09fdc59c426adc6"
  },
  {
    "url": "de/bastelstube/symlinks.html",
    "revision": "e20c2b6c6a9a5610893ba615c87440d4"
  },
  {
    "url": "de/index.html",
    "revision": "f50543235651d7cf6b7d78034f12b42e"
  },
  {
    "url": "de/infrastruktur/docker-host.html",
    "revision": "e6c89da34b26e960ab6321516f06af3b"
  },
  {
    "url": "de/infrastruktur/gruppe-adler-modset.html",
    "revision": "f258dd6fdf039168c4fb54c069f5a0e8"
  },
  {
    "url": "de/infrastruktur/index.html",
    "revision": "4e6d4f058dd811ad10204f8995574712"
  },
  {
    "url": "de/infrastruktur/styleguide-design.html",
    "revision": "465b27df6dd49e987d2506312ae56e6a"
  },
  {
    "url": "de/infrastruktur/uebersicht.html",
    "revision": "47c8b5778387d2100cbce729dfa5a19c"
  },
  {
    "url": "de/infrastruktur/wiki-how-to.html",
    "revision": "6715d09a248eadff6ad79cb1ec8a7f8e"
  },
  {
    "url": "de/organisatorisches/adlerung.html",
    "revision": "a57eef5fda3b42eb7adcd63f47c0149e"
  },
  {
    "url": "de/organisatorisches/bek-checkliste.html",
    "revision": "9e6594af8b731ff0893dff416dbf4316"
  },
  {
    "url": "de/organisatorisches/gruppen.html",
    "revision": "4425088646ba9e54a8da651277691f29"
  },
  {
    "url": "de/organisatorisches/index.html",
    "revision": "a2320070bdc72183b3a0eb67b26c74f3"
  },
  {
    "url": "de/taktik/ASOP.html",
    "revision": "1cc97b02960efb3d212c0a75a689698d"
  },
  {
    "url": "de/taktik/ateffectiveness.html",
    "revision": "e3a859bcbfeb58f9351df970df5e6a5b"
  },
  {
    "url": "de/taktik/index.html",
    "revision": "6e4d324c5cae1814d9ee6eeeca6344a1"
  },
  {
    "url": "de/taktik/taktischeZeichen.html",
    "revision": "5b31fddf3294fa69a5faf4de035c43f9"
  },
  {
    "url": "de/wiki-index.html",
    "revision": "1a15ec985ca3c2ace818ad1cd5989a59"
  },
  {
    "url": "en/index.html",
    "revision": "9fa025cb0cd2d56a1c465f55235e7dca"
  },
  {
    "url": "en/infrastruktur/gruppe-adler-modset.html",
    "revision": "ffe4090d7bb046f9039248b4f1422c2a"
  },
  {
    "url": "en/infrastruktur/index.html",
    "revision": "bfeb97b94c6a3ccf4f9b660ce3581be9"
  },
  {
    "url": "en/wiki-index.html",
    "revision": "21b14413997ceea1a246dc08f61712f3"
  },
  {
    "url": "index.html",
    "revision": "85b5eb5df83c20fbdacfb71381ab506a"
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
