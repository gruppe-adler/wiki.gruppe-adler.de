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
    "revision": "68cbc8487342dd6c7f23fa9f31a09d02"
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
    "url": "assets/js/5.2341a75d.js",
    "revision": "09d61673c8e359a05f759a0be1c6b5ea"
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
    "url": "assets/js/app.c0d33a8f.js",
    "revision": "97e0b60371b47232a0860c3f4ed9aa86"
  },
  {
    "url": "de/bastelstube/ace3medical.html",
    "revision": "024624a431d41199654b8dfad631eb4b"
  },
  {
    "url": "de/bastelstube/cba-settings.html",
    "revision": "9ba6d8d9610d62cde55b9df666e985a4"
  },
  {
    "url": "de/bastelstube/erste-hilfe-missionsbau.html",
    "revision": "797ad31fd344caf509ed9660165dce8f"
  },
  {
    "url": "de/bastelstube/FX.html",
    "revision": "8061a92999ffe7e30a96ef707308bb5b"
  },
  {
    "url": "de/bastelstube/gruppe-adler-mod.html",
    "revision": "50df6b81e33095ca2bd89b1121c996b4"
  },
  {
    "url": "de/bastelstube/index.html",
    "revision": "5f8c2e6e5140c5f56aaf5439bcbf284f"
  },
  {
    "url": "de/bastelstube/scriptmodule.html",
    "revision": "90de6faed94e3079fe329457a3962656"
  },
  {
    "url": "de/bastelstube/slotting-tool.html",
    "revision": "7a54113df61ca8162e647f5688b9e566"
  },
  {
    "url": "de/bastelstube/symlinks.html",
    "revision": "999a24ed29375de85da02b322184eda4"
  },
  {
    "url": "de/index.html",
    "revision": "b7d4d3e27ea891e2cf3b40147ff8a696"
  },
  {
    "url": "de/infrastruktur/docker-host.html",
    "revision": "93c7f727e8eb9be7f830cc4ce7cba6e8"
  },
  {
    "url": "de/infrastruktur/gruppe-adler-modset.html",
    "revision": "e8047daf8f4c229b37608938141088ad"
  },
  {
    "url": "de/infrastruktur/index.html",
    "revision": "6df19a52c846418ed71dc8e249245d61"
  },
  {
    "url": "de/infrastruktur/styleguide-design.html",
    "revision": "23488b37aa4bd159ef56a9f5674e8ea2"
  },
  {
    "url": "de/infrastruktur/uebersicht.html",
    "revision": "c427cb9607dac7bb28048b7fb5a5a918"
  },
  {
    "url": "de/infrastruktur/wiki-how-to.html",
    "revision": "0c2399b118e526985bfac87882b76d78"
  },
  {
    "url": "de/organisatorisches/adlerung.html",
    "revision": "20f52f5056421786853581d926cc88b8"
  },
  {
    "url": "de/organisatorisches/bek-checkliste.html",
    "revision": "abb48757ad1c38cded45ed6847481de1"
  },
  {
    "url": "de/organisatorisches/gruppen.html",
    "revision": "c16b2e8ae905028bf7cbd0a838ed4182"
  },
  {
    "url": "de/organisatorisches/index.html",
    "revision": "54f4b68c83a01d0a6684fc55930aae41"
  },
  {
    "url": "de/taktik/ASOP.html",
    "revision": "e6d86967f8a40817f553caec88984c08"
  },
  {
    "url": "de/taktik/ateffectiveness.html",
    "revision": "4dd0e22ac08bf8d059b31612c2f047dc"
  },
  {
    "url": "de/taktik/index.html",
    "revision": "071db2905c1c9e54bb2726657f59db93"
  },
  {
    "url": "de/taktik/taktischeZeichen.html",
    "revision": "4775fe40af98f508fa86337a453c8ef0"
  },
  {
    "url": "de/wiki-index.html",
    "revision": "e5bc392ae5d166fb4266f643040d4b7a"
  },
  {
    "url": "en/index.html",
    "revision": "8103936f8da40a7ee8bb48b6a00f7d39"
  },
  {
    "url": "en/infrastruktur/gruppe-adler-modset.html",
    "revision": "9aa6969ad93b0c84a3cc6b9f9dba9baa"
  },
  {
    "url": "en/infrastruktur/index.html",
    "revision": "63ddfbfcda4c852e760567eca0805b81"
  },
  {
    "url": "en/wiki-index.html",
    "revision": "50e6fb673e622de34a4d61f584fe0ab4"
  },
  {
    "url": "index.html",
    "revision": "0c17a94bb57d54d01d9a4aeb981f49ce"
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
