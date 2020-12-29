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
    "revision": "7f3a37e2eab857152d8749ed47aebf71"
  },
  {
    "url": "adlerkopp.png",
    "revision": "6fad4764c67af0eda687997ad7dec48a"
  },
  {
    "url": "assets/css/0.styles.8e6345a9.css",
    "revision": "d7e13e5f9d12e67453825bb1b1d5f127"
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
    "url": "assets/js/1.89ddd247.js",
    "revision": "012217623f2f59fb342a80a672051b31"
  },
  {
    "url": "assets/js/10.8d199565.js",
    "revision": "6c04484ef33358f70c4ae54fe23da5b3"
  },
  {
    "url": "assets/js/11.9825b7d7.js",
    "revision": "78bea1fda82117fe55db87eafc1dbf63"
  },
  {
    "url": "assets/js/12.414c2acd.js",
    "revision": "c7cba76ebec37897b52a3aaa123acb05"
  },
  {
    "url": "assets/js/13.3bb86b3e.js",
    "revision": "1d16fe378bfd299f05dabf4f58036965"
  },
  {
    "url": "assets/js/14.b9cab4d0.js",
    "revision": "42f5306f658018a4d5738c466d31bcc4"
  },
  {
    "url": "assets/js/15.edb6c646.js",
    "revision": "1225859820ed4129ad7a7ffa26ac7af5"
  },
  {
    "url": "assets/js/16.46c0a204.js",
    "revision": "fb8d221ccd116ab5412e3bd570f80275"
  },
  {
    "url": "assets/js/17.03802c64.js",
    "revision": "3601964c1de83b72dcf57ccc03cb9003"
  },
  {
    "url": "assets/js/18.727199a8.js",
    "revision": "a115d2589334a7bc9a110b674baa0322"
  },
  {
    "url": "assets/js/19.07ab8568.js",
    "revision": "5eb6406c02e62954ac27c6f973c902aa"
  },
  {
    "url": "assets/js/20.f69c4d4f.js",
    "revision": "260b4acabc0920e4ff70e4bcab42d940"
  },
  {
    "url": "assets/js/21.f4822a4b.js",
    "revision": "34fe435026a796903bf548edd4b3073c"
  },
  {
    "url": "assets/js/22.8e078b38.js",
    "revision": "2de4bd1f033a92d18f94158903d9fc9e"
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
    "url": "assets/js/3.1e38e6c1.js",
    "revision": "3d11e5f160139691d75e07f0e156410a"
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
    "url": "assets/js/33.03ab7284.js",
    "revision": "f69dc070d4aaf43aed1f68d0a97b5500"
  },
  {
    "url": "assets/js/34.f919f19f.js",
    "revision": "8fa56b146e64d52975ac116658d8acc5"
  },
  {
    "url": "assets/js/35.bd50dc3d.js",
    "revision": "7ab9cc7faaa0655736c6ed7cd2fca437"
  },
  {
    "url": "assets/js/36.f140dfaa.js",
    "revision": "9a66de3bf0aa4daa27f9875a4cb2ee87"
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
    "url": "assets/js/4.0ee8e735.js",
    "revision": "ef8cc8cd813ff8c722c67639f142e885"
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
    "url": "assets/js/43.2302d233.js",
    "revision": "5a96054786eb11c62af699e0a3b692ed"
  },
  {
    "url": "assets/js/5.11b85ac5.js",
    "revision": "97a347578f9755bb1f92c2e2667699e6"
  },
  {
    "url": "assets/js/6.b87f985d.js",
    "revision": "4bf164ad78e3428b0d9f8a712b2c0d07"
  },
  {
    "url": "assets/js/7.74557657.js",
    "revision": "f897d1c0acf802574fcaf8654761316d"
  },
  {
    "url": "assets/js/8.e4b20b87.js",
    "revision": "e7f60a74e1a571cea9650914fbf7b860"
  },
  {
    "url": "assets/js/9.fccf19f8.js",
    "revision": "3e1398d0c43cf15c2e0f780c1057b3c7"
  },
  {
    "url": "assets/js/app.ebdf99ab.js",
    "revision": "31ded93a867d361f243d2e962a4706ea"
  },
  {
    "url": "de/bastelstube/ace3medical.html",
    "revision": "80759c184379cc1c4d1f06add917b386"
  },
  {
    "url": "de/bastelstube/cba-settings.html",
    "revision": "9426ddbed1dfa0edbf332915b6e1b08e"
  },
  {
    "url": "de/bastelstube/erste-hilfe-missionsbau.html",
    "revision": "f4a4ea008fb05b5dd151a54c689be9d0"
  },
  {
    "url": "de/bastelstube/FX.html",
    "revision": "9d977de8931d1dfb8f36378532fdf312"
  },
  {
    "url": "de/bastelstube/gruppe-adler-mod.html",
    "revision": "bce2f3db371fda50bcd42e7242d4dc9b"
  },
  {
    "url": "de/bastelstube/index.html",
    "revision": "1c2bcb24bd36521912fcebfb66ee1f03"
  },
  {
    "url": "de/bastelstube/missionstemplates.html",
    "revision": "a5a6aafbdc881c3c983463edd11db57b"
  },
  {
    "url": "de/bastelstube/scriptmodule.html",
    "revision": "4dbc5eded388ddfd542ae232271d36bb"
  },
  {
    "url": "de/bastelstube/slotting-tool.html",
    "revision": "b47036d0c239214511bca798627c8d3f"
  },
  {
    "url": "de/bastelstube/symlinks.html",
    "revision": "d3c0e9af9edde4bb40400c88f31f5beb"
  },
  {
    "url": "de/index.html",
    "revision": "dbe7f22cfc7c9d1656bce220a5a5b569"
  },
  {
    "url": "de/infrastruktur/docker-host.html",
    "revision": "6d4b77e0a40afce5905a853740352656"
  },
  {
    "url": "de/infrastruktur/gruppe-adler-modset.html",
    "revision": "4c66c7f21c6890c2d451966840188d29"
  },
  {
    "url": "de/infrastruktur/index.html",
    "revision": "a49ada9f9b59e42e5a16605ca39212db"
  },
  {
    "url": "de/infrastruktur/styleguide-design.html",
    "revision": "6bb40628703f4efe1ad33bcb22385d1e"
  },
  {
    "url": "de/infrastruktur/wiki-how-to.html",
    "revision": "e1488840ddac56afe557bc01f2eeb192"
  },
  {
    "url": "de/organisatorisches/adlerung.html",
    "revision": "6b404d007d6cc03526a1c4b338eb9aa3"
  },
  {
    "url": "de/organisatorisches/bek-checkliste.html",
    "revision": "c1906c2e89494201f11ec6d765fed04a"
  },
  {
    "url": "de/organisatorisches/gruppen.html",
    "revision": "abb5dc927aa1357f4da8c83171b2b5b5"
  },
  {
    "url": "de/organisatorisches/index.html",
    "revision": "b6c009c54ab74e80d84b975bcfb2fa46"
  },
  {
    "url": "de/taktik/ASOP.html",
    "revision": "6aa7938baa232a63a224d4e22cf2e2a0"
  },
  {
    "url": "de/taktik/ateffectiveness.html",
    "revision": "aebe65b1ce87c81d4551f66498c9a194"
  },
  {
    "url": "de/taktik/index.html",
    "revision": "8677053896390bd06b0fbaa670dd54c4"
  },
  {
    "url": "de/taktik/taktischeZeichen.html",
    "revision": "065b465a20ed5b283e07e0a87cd73c78"
  },
  {
    "url": "de/wiki-index.html",
    "revision": "8deb7e346e5bc0951bc8e25d283b92de"
  },
  {
    "url": "en/index.html",
    "revision": "3e4c0a2b67f28fbb0d29f2aa99409274"
  },
  {
    "url": "en/infrastruktur/gruppe-adler-modset.html",
    "revision": "e7e3bff33322f73c505c2cb12db80a2c"
  },
  {
    "url": "en/infrastruktur/index.html",
    "revision": "f61d19651004f60c98989db86eb461e9"
  },
  {
    "url": "en/wiki-index.html",
    "revision": "45aa0690d6a59ffc833e625efe74332b"
  },
  {
    "url": "index.html",
    "revision": "d02049dc396d929e8409a22ba8fd48d0"
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
