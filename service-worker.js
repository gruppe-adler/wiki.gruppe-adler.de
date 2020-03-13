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
    "revision": "68758a78030629e66d151163bde70a58"
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
    "url": "assets/js/17.e05a11af.js",
    "revision": "97bc098f5b7a378635cc668239b63adc"
  },
  {
    "url": "assets/js/18.7368695a.js",
    "revision": "a5b6752ec23ba7ccffdd1e04732cfd42"
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
    "url": "assets/js/21.07c91b39.js",
    "revision": "73fc07d1d7ff28ff68c5976d184e7726"
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
    "url": "assets/js/34.3a76e2bf.js",
    "revision": "c2b786aac7c8ffb697bcd0f5e8c5860c"
  },
  {
    "url": "assets/js/35.227e618f.js",
    "revision": "dc721c26ce76fae3e64c46c94d7ebfad"
  },
  {
    "url": "assets/js/36.82953a51.js",
    "revision": "3d219cbd77b515659b54ff1fd977b70c"
  },
  {
    "url": "assets/js/37.4bb83d2c.js",
    "revision": "8b5724b4e8d2e2299c64b610cb676220"
  },
  {
    "url": "assets/js/38.523cf4c4.js",
    "revision": "1649838e2c9be13a9cfe6692349cf6b6"
  },
  {
    "url": "assets/js/39.81f92bca.js",
    "revision": "3d9ea365eda8ba0a3f9a5cbd23b35155"
  },
  {
    "url": "assets/js/4.01aab508.js",
    "revision": "10325d3cfd3f3ab833d2ce14acc133a1"
  },
  {
    "url": "assets/js/40.f719c0c4.js",
    "revision": "b557942eefaeb266e9e4c555dca99741"
  },
  {
    "url": "assets/js/41.52501752.js",
    "revision": "f4ab584988e78b2aeadc0b18f4216623"
  },
  {
    "url": "assets/js/42.b5f24023.js",
    "revision": "242f64c7e721cccb7deaa0e802dbb63b"
  },
  {
    "url": "assets/js/5.878cbf19.js",
    "revision": "3e89f2eea28794dc9193b63018a74b32"
  },
  {
    "url": "assets/js/6.dba61f68.js",
    "revision": "0bd29f51ff3f5e32613755787666d7ab"
  },
  {
    "url": "assets/js/7.8a2cface.js",
    "revision": "2e6a0644c8ef580e78de8807a4a539a6"
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
    "url": "assets/js/app.5e0104ea.js",
    "revision": "3b18c8f7d995945249699048cfa59967"
  },
  {
    "url": "de/bastelstube/ace3medical.html",
    "revision": "4b74b449cafccbd6ae47d7f2a4bde153"
  },
  {
    "url": "de/bastelstube/cba-settings.html",
    "revision": "1260df0f96f9c34d8ef622c3a0b8b540"
  },
  {
    "url": "de/bastelstube/erste-hilfe-missionsbau.html",
    "revision": "dc73913cdb303817c3f5b8aa0eeb754c"
  },
  {
    "url": "de/bastelstube/FX.html",
    "revision": "a82a686883d8a94003a160635e9a81f0"
  },
  {
    "url": "de/bastelstube/gruppe-adler-mod.html",
    "revision": "57b27d7c3b1c40af7ae662f56705ae69"
  },
  {
    "url": "de/bastelstube/index.html",
    "revision": "53db8506331b0746487d4cbc6b69bce9"
  },
  {
    "url": "de/bastelstube/missionstemplates.html",
    "revision": "c64e2ba852f89d7df4f324e2d8ef7b3b"
  },
  {
    "url": "de/bastelstube/scriptmodule.html",
    "revision": "eba63fc97df8fd0e14df92f439e3ef0e"
  },
  {
    "url": "de/bastelstube/slotting-tool.html",
    "revision": "87d65fbe8a57b84dcb5db2379fc625f5"
  },
  {
    "url": "de/bastelstube/symlinks.html",
    "revision": "062fa42b8d446174623d9525f0bbac75"
  },
  {
    "url": "de/index.html",
    "revision": "43e7e62ae84c334f4e95ececb2b44fd2"
  },
  {
    "url": "de/infrastruktur/docker-host.html",
    "revision": "88f6670b1c9100f73be264def23f1a5f"
  },
  {
    "url": "de/infrastruktur/gruppe-adler-modset.html",
    "revision": "92d761832cec40bf3cf50e9498d9a969"
  },
  {
    "url": "de/infrastruktur/index.html",
    "revision": "ae25ffa1b1fd9db3c061f9a915fab6fd"
  },
  {
    "url": "de/infrastruktur/styleguide-design.html",
    "revision": "46f44f92812b991b41729811e2945fd7"
  },
  {
    "url": "de/infrastruktur/uebersicht.html",
    "revision": "2b0ea0e043b08350eb60d792d5a94b27"
  },
  {
    "url": "de/infrastruktur/wiki-how-to.html",
    "revision": "4632d080053076810c967f7e4c004ae1"
  },
  {
    "url": "de/organisatorisches/adlerung.html",
    "revision": "a402fc11732ab103deed9abbaf2d9c1e"
  },
  {
    "url": "de/organisatorisches/bek-checkliste.html",
    "revision": "4caf6f527afe4a3785adfb76642ab28d"
  },
  {
    "url": "de/organisatorisches/gruppen.html",
    "revision": "ae3d7c14cac5892d85a453d9f3eb6da6"
  },
  {
    "url": "de/organisatorisches/index.html",
    "revision": "35d17a6a713a54f556a53ebeb5b89255"
  },
  {
    "url": "de/taktik/ASOP.html",
    "revision": "6295aee9ab92402fb18f850c04594b4f"
  },
  {
    "url": "de/taktik/ateffectiveness.html",
    "revision": "81471f8643a8fcaa232b34e0e9e681c1"
  },
  {
    "url": "de/taktik/index.html",
    "revision": "d1e85dbb5bcf34156930fa82f710f049"
  },
  {
    "url": "de/taktik/taktischeZeichen.html",
    "revision": "63c3ff89c19f1033b47904a6a824b382"
  },
  {
    "url": "de/wiki-index.html",
    "revision": "249f7ce35f80233fbb61e9a2166e408e"
  },
  {
    "url": "en/index.html",
    "revision": "f57427bc554b07794f2e83d3f59817ae"
  },
  {
    "url": "en/infrastruktur/gruppe-adler-modset.html",
    "revision": "580cf43930e101f14058476fe680d61c"
  },
  {
    "url": "en/infrastruktur/index.html",
    "revision": "b8f48560fb53f31f452a0d4d1e54c5bd"
  },
  {
    "url": "en/wiki-index.html",
    "revision": "ee473d2d17305d3fc1da14e89b98a715"
  },
  {
    "url": "index.html",
    "revision": "0ba195997393cfefbdf04d71d575ef2d"
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
