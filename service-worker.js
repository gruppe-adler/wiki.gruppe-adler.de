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
    "revision": "c48ee3d71c3528f6f6b48878d30ac102"
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
    "url": "assets/js/13.b3135fcd.js",
    "revision": "f7c65393b063da2cccd6ede360658ae2"
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
    "url": "assets/js/16.6f60e81d.js",
    "revision": "6d1519c95a2ff049b70869700fca337e"
  },
  {
    "url": "assets/js/17.5f8de383.js",
    "revision": "7783d8339370d799701f45c227eebf83"
  },
  {
    "url": "assets/js/18.76b88c7a.js",
    "revision": "2b6c2606037e0d3f954f9b6886bef091"
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
    "url": "assets/js/21.f51f996d.js",
    "revision": "5742ae532675cb1a1bc7247110b92585"
  },
  {
    "url": "assets/js/22.0c7b5b5a.js",
    "revision": "d1c6b6e14076cbe91d444f7edae9efac"
  },
  {
    "url": "assets/js/23.b0c126e7.js",
    "revision": "2d6c8634f4216eae38b56af5a2636ae8"
  },
  {
    "url": "assets/js/24.906c9461.js",
    "revision": "4e48b1c892b5e46721becd4cce79e533"
  },
  {
    "url": "assets/js/25.3c621885.js",
    "revision": "9195482f824b913d91ef82c031b73218"
  },
  {
    "url": "assets/js/26.457dc371.js",
    "revision": "bfc8b0863a0e75e5d9cc895820431393"
  },
  {
    "url": "assets/js/27.068de67a.js",
    "revision": "bfcd00c3fb47bfb0ab580a785675a560"
  },
  {
    "url": "assets/js/28.6c82d400.js",
    "revision": "dcfaef5abeb36cb34bd4596b3da855e3"
  },
  {
    "url": "assets/js/29.02c0bae2.js",
    "revision": "115c6b9572697f6ad5352c483268cc75"
  },
  {
    "url": "assets/js/3.a4eac80e.js",
    "revision": "7c9ec67674899b78fad1fd744905c255"
  },
  {
    "url": "assets/js/30.2ac60913.js",
    "revision": "a10f154d6e4ee60ac17f00dc4656f68e"
  },
  {
    "url": "assets/js/31.7f0678bf.js",
    "revision": "80e0e5012365442f0a105be8bed3eb85"
  },
  {
    "url": "assets/js/32.d8b72707.js",
    "revision": "b4ee9b61d4dc00c5dce5193b1530a63a"
  },
  {
    "url": "assets/js/33.b040befa.js",
    "revision": "461bd7b5a6d8ed0ea1dd1a125a8b50b2"
  },
  {
    "url": "assets/js/34.e07a6130.js",
    "revision": "51b9b227808d99cd2bc40fe114192ea1"
  },
  {
    "url": "assets/js/35.da6314e2.js",
    "revision": "d601ed14f66f87a653261e5ce645e610"
  },
  {
    "url": "assets/js/36.7615156a.js",
    "revision": "35f708f58b2003f26f71e9f46c027950"
  },
  {
    "url": "assets/js/37.b4c4d3b4.js",
    "revision": "0e653715fca766cfa1bea1662bb3c100"
  },
  {
    "url": "assets/js/38.4cf1b100.js",
    "revision": "5610f62ead66edf0cc8ee4771b5f5f48"
  },
  {
    "url": "assets/js/39.bdfb1bf2.js",
    "revision": "d2add0779a3e3b0ab8520de60fcfc6ad"
  },
  {
    "url": "assets/js/4.01aab508.js",
    "revision": "10325d3cfd3f3ab833d2ce14acc133a1"
  },
  {
    "url": "assets/js/40.a4ccb56a.js",
    "revision": "7427bc87d5fa7350a3c89de279766ae2"
  },
  {
    "url": "assets/js/41.4325e117.js",
    "revision": "ed9d99c6831147c2a8bbe1d676041889"
  },
  {
    "url": "assets/js/5.2241273f.js",
    "revision": "325466e6689eb4cf86c66bf768254619"
  },
  {
    "url": "assets/js/6.5a2ecefb.js",
    "revision": "0dfd616513f2def8a7b757452737d806"
  },
  {
    "url": "assets/js/7.20237fda.js",
    "revision": "af266bf5b00140b7f68639e39852cc88"
  },
  {
    "url": "assets/js/8.3c20f471.js",
    "revision": "7268e1a553216730e8e069a396cd7c2c"
  },
  {
    "url": "assets/js/9.5d3a8e3a.js",
    "revision": "fcf2ef4d248d7c3df3b33dbac2070e65"
  },
  {
    "url": "assets/js/app.d1b05a1e.js",
    "revision": "e55f8b859fdccb4bd2a8bd1eebf5d61d"
  },
  {
    "url": "de/bastelstube/ace3medical.html",
    "revision": "e2471edaec6282491295a1e62f433d53"
  },
  {
    "url": "de/bastelstube/cba-settings.html",
    "revision": "c8df77ed6c1ee634c6491eb60e5ce8f4"
  },
  {
    "url": "de/bastelstube/erste-hilfe-missionsbau.html",
    "revision": "ee14f890984160e4e2374ef2b44598c7"
  },
  {
    "url": "de/bastelstube/FX.html",
    "revision": "7c3152d3db87ff883ed0debc1e5ee960"
  },
  {
    "url": "de/bastelstube/gruppe-adler-mod.html",
    "revision": "1fb0429297edb1481057927b169422b8"
  },
  {
    "url": "de/bastelstube/index.html",
    "revision": "dabeef914ae6018001091857532799d7"
  },
  {
    "url": "de/bastelstube/scriptmodule.html",
    "revision": "47549278f8e7e0b51bdc270f497400ed"
  },
  {
    "url": "de/bastelstube/slotting-tool.html",
    "revision": "52361ae664ac8c2964f0f7718444780b"
  },
  {
    "url": "de/bastelstube/symlinks.html",
    "revision": "aeb63d9215a6122fb977da820fca1d2e"
  },
  {
    "url": "de/index.html",
    "revision": "fecdc0c4f8e458c7b23e403b3988f964"
  },
  {
    "url": "de/infrastruktur/docker-host.html",
    "revision": "bbface150ec8d86de0cdb3c88b1f7d81"
  },
  {
    "url": "de/infrastruktur/gruppe-adler-modset.html",
    "revision": "1e70b2771daaaa8a2e5198b94bd84315"
  },
  {
    "url": "de/infrastruktur/index.html",
    "revision": "1341c11578dff4fb5e95b3ab70f6f6fb"
  },
  {
    "url": "de/infrastruktur/styleguide-design.html",
    "revision": "c1f489785f2ed9f5dd10712e8581f961"
  },
  {
    "url": "de/infrastruktur/uebersicht.html",
    "revision": "aa4177de9551ca9ad3142f50bd946916"
  },
  {
    "url": "de/infrastruktur/wiki-how-to.html",
    "revision": "502d7da563a6b5e7f61406f4e1750300"
  },
  {
    "url": "de/organisatorisches/adlerung.html",
    "revision": "0c7a0bb26e037acde6e5b56971ea39b0"
  },
  {
    "url": "de/organisatorisches/bek-checkliste.html",
    "revision": "e4eb348105516238c551c3ef635863b8"
  },
  {
    "url": "de/organisatorisches/gruppen.html",
    "revision": "3cf5c7ec5a5b5216580d27e173fc87f5"
  },
  {
    "url": "de/organisatorisches/index.html",
    "revision": "8ceb6340abbe7fb9bb5a1d44d19a7d78"
  },
  {
    "url": "de/taktik/ASOP.html",
    "revision": "9287b5b7dc05fb9ee63e848c9c8720e1"
  },
  {
    "url": "de/taktik/ateffectiveness.html",
    "revision": "92d12f77ba2b11c5056e399ae469d255"
  },
  {
    "url": "de/taktik/index.html",
    "revision": "ed7d45a830f9f08007a1941ed52ae18f"
  },
  {
    "url": "de/taktik/taktischeZeichen.html",
    "revision": "47ae2bdfff4285cd06b73bb50a4782ec"
  },
  {
    "url": "de/wiki-index.html",
    "revision": "986c94c77781fcaf93e3b4134f79bdc3"
  },
  {
    "url": "en/index.html",
    "revision": "559ca72bf1fa8b85fa1b05cf3de97117"
  },
  {
    "url": "en/infrastruktur/gruppe-adler-modset.html",
    "revision": "db90f1badeaffc4954543bf76c10e03e"
  },
  {
    "url": "en/infrastruktur/index.html",
    "revision": "46a6162d7530ebba4d0e0d315d9399ea"
  },
  {
    "url": "en/wiki-index.html",
    "revision": "711f20d3209fed4ee14e47e5c69f461b"
  },
  {
    "url": "index.html",
    "revision": "8a6b5bc19ccaf9ed2228868d45de5824"
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
