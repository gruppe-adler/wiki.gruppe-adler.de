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
    "revision": "68ccaea36cd516dcee7d8531917161a0"
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
    "url": "assets/js/14.d78ef694.js",
    "revision": "d87b2b481427f6b185a80fcd7d8cc1b8"
  },
  {
    "url": "assets/js/15.cf06986b.js",
    "revision": "190e72ae34de42bd07d05c65489b808d"
  },
  {
    "url": "assets/js/16.658af9e9.js",
    "revision": "407a6e4974ae88507613691c9ac331cf"
  },
  {
    "url": "assets/js/17.c24afcb8.js",
    "revision": "fd1dbc7c8d434033e219d956b225b3ad"
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
    "url": "assets/js/28.bfb72218.js",
    "revision": "18f6c786f9f088147f3cceca6debac7c"
  },
  {
    "url": "assets/js/29.58dd654a.js",
    "revision": "46f1e7dd64b5102d3d9556250c079ea2"
  },
  {
    "url": "assets/js/3.a4eac80e.js",
    "revision": "7c9ec67674899b78fad1fd744905c255"
  },
  {
    "url": "assets/js/30.1fedc09e.js",
    "revision": "6538f63f5fe581b35420111201cffd7b"
  },
  {
    "url": "assets/js/31.58a9a974.js",
    "revision": "8b988a676f660b20af373f2df1b9f38a"
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
    "url": "assets/js/40.134f150a.js",
    "revision": "905ccaee3a496bfee1d7ff0ae37a4101"
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
    "url": "assets/js/5.78c7715e.js",
    "revision": "a25f480d96bcebcd191ec81b0d5166b7"
  },
  {
    "url": "assets/js/6.5a2ecefb.js",
    "revision": "0dfd616513f2def8a7b757452737d806"
  },
  {
    "url": "assets/js/7.8a2cface.js",
    "revision": "2e6a0644c8ef580e78de8807a4a539a6"
  },
  {
    "url": "assets/js/8.a985a187.js",
    "revision": "c21784b3d85634d35352a734a4c020c2"
  },
  {
    "url": "assets/js/9.5d3a8e3a.js",
    "revision": "fcf2ef4d248d7c3df3b33dbac2070e65"
  },
  {
    "url": "assets/js/app.47fb24e6.js",
    "revision": "4ecb064124fd28f7f565bc98faf3e578"
  },
  {
    "url": "de/bastelstube/ace3medical.html",
    "revision": "c4c022bfc5c157ea43d87ae622a5aef4"
  },
  {
    "url": "de/bastelstube/cba-settings.html",
    "revision": "e7f82280b55f051f80f89001c3c782ca"
  },
  {
    "url": "de/bastelstube/erste-hilfe-missionsbau.html",
    "revision": "693f79e0506be82da12fa48696ae9fba"
  },
  {
    "url": "de/bastelstube/FX.html",
    "revision": "af83b4d780c908c6ea8acd0c76386b8a"
  },
  {
    "url": "de/bastelstube/gruppe-adler-mod.html",
    "revision": "95f1615a64303f794fe2435a5fb118a5"
  },
  {
    "url": "de/bastelstube/index.html",
    "revision": "ada06c5df1381fce89882130f58640b0"
  },
  {
    "url": "de/bastelstube/missionstemplates.html",
    "revision": "e56b858eb508ea60ed6034a238523465"
  },
  {
    "url": "de/bastelstube/scriptmodule.html",
    "revision": "fda999679b3802a86143f3c60ae189a5"
  },
  {
    "url": "de/bastelstube/slotting-tool.html",
    "revision": "5c25261a93c573df3191d5b32cd54639"
  },
  {
    "url": "de/bastelstube/symlinks.html",
    "revision": "1915bc01b47dc054dc435987c8fd5944"
  },
  {
    "url": "de/index.html",
    "revision": "3479030a3d4f31b800aaca337d7ae189"
  },
  {
    "url": "de/infrastruktur/docker-host.html",
    "revision": "3bd3f1c42e1daac263ef92386d51a596"
  },
  {
    "url": "de/infrastruktur/gruppe-adler-modset.html",
    "revision": "4e8f37018b1b4a50186a6f0dc3d8a5a6"
  },
  {
    "url": "de/infrastruktur/index.html",
    "revision": "fec5274e3c4254e5d53cebd0d887c781"
  },
  {
    "url": "de/infrastruktur/styleguide-design.html",
    "revision": "f4a93fa82536df911f4c5b587b582dc7"
  },
  {
    "url": "de/infrastruktur/uebersicht.html",
    "revision": "4bde6ed556d027c8ce2c6e51c42ae76d"
  },
  {
    "url": "de/infrastruktur/wiki-how-to.html",
    "revision": "095851bf292c8450a5590ec37125a3dd"
  },
  {
    "url": "de/organisatorisches/adlerung.html",
    "revision": "9b790a1e6177d56c8e0d28e5872475ac"
  },
  {
    "url": "de/organisatorisches/bek-checkliste.html",
    "revision": "5df1bfdf4e44a51fe764a4da7bfad7d4"
  },
  {
    "url": "de/organisatorisches/gruppen.html",
    "revision": "f6dec292b875d087a0ac8ac087d68feb"
  },
  {
    "url": "de/organisatorisches/index.html",
    "revision": "8883b142e4f26707ac289225b7159e99"
  },
  {
    "url": "de/taktik/ASOP.html",
    "revision": "9b332af4c82150dda4643cb37f1b2a0c"
  },
  {
    "url": "de/taktik/ateffectiveness.html",
    "revision": "1538ab9b6adeb75803a4df70bc5257cf"
  },
  {
    "url": "de/taktik/index.html",
    "revision": "7698f4ad3b070ee0a5f18398e0c434b4"
  },
  {
    "url": "de/taktik/taktischeZeichen.html",
    "revision": "278681750c0d416c53af0de41b4de434"
  },
  {
    "url": "de/wiki-index.html",
    "revision": "78773954180c1015df2e4d247a5d8f69"
  },
  {
    "url": "en/index.html",
    "revision": "891a1d5e8c0b722df0a37bd978fef29f"
  },
  {
    "url": "en/infrastruktur/gruppe-adler-modset.html",
    "revision": "3670f0f133d06550ac5d62efd55eb169"
  },
  {
    "url": "en/infrastruktur/index.html",
    "revision": "4544ae63555fc652b2a2af9a47d46a84"
  },
  {
    "url": "en/wiki-index.html",
    "revision": "fa202aa57ab854afeb15a8df2a40a386"
  },
  {
    "url": "index.html",
    "revision": "0ce1bcb1f6ecd885c44398284ae79123"
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
