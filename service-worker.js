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
    "revision": "fa3f3fc55b71c9cb8d12375279a2b7e1"
  },
  {
    "url": "adlerkopp.png",
    "revision": "6fad4764c67af0eda687997ad7dec48a"
  },
  {
    "url": "assets/css/0.styles.a5212c44.css",
    "revision": "bb219da7ea0fe746657df63f281b7e0b"
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
    "url": "assets/js/1.7d918530.js",
    "revision": "4cfbf8c6ff66e4f1f0e363a99aa05ccc"
  },
  {
    "url": "assets/js/10.36dafffc.js",
    "revision": "5e1b3442370203add8bb2dd5879deb97"
  },
  {
    "url": "assets/js/11.e560fca4.js",
    "revision": "1de1a4563b9e20a3d4cffa2fa2851d61"
  },
  {
    "url": "assets/js/12.29a29821.js",
    "revision": "f9945d43b0eec4b19b84e012f72e88dd"
  },
  {
    "url": "assets/js/13.b03765bf.js",
    "revision": "8090738efd2f13467915ac3e729078d8"
  },
  {
    "url": "assets/js/14.714afa61.js",
    "revision": "c304d4038e1e65388e6b4dc55bebb128"
  },
  {
    "url": "assets/js/15.130c511c.js",
    "revision": "05f77fefc8eebebb999b94a4f0e6253b"
  },
  {
    "url": "assets/js/16.dd931dff.js",
    "revision": "f0ae542eb95a95c0024b574e94803633"
  },
  {
    "url": "assets/js/17.140eda8b.js",
    "revision": "e394f8a343750042c47eeea56945f891"
  },
  {
    "url": "assets/js/18.452faebc.js",
    "revision": "e0e6b52514ff6a3a28602f832bbe9774"
  },
  {
    "url": "assets/js/19.83d03351.js",
    "revision": "222e7279c1a15ebc56f3ddfa8129cd58"
  },
  {
    "url": "assets/js/20.6fd65ba5.js",
    "revision": "aca504a04666f0cd3414ff8661e64d7b"
  },
  {
    "url": "assets/js/21.5e3ec1fc.js",
    "revision": "507df31b883f2fceec75ba99ede4c2b0"
  },
  {
    "url": "assets/js/22.6c603547.js",
    "revision": "820bd2327d9049992d7708bd110b78fa"
  },
  {
    "url": "assets/js/23.55920c93.js",
    "revision": "06512bd593fd8beea0cee8918060ac97"
  },
  {
    "url": "assets/js/24.52eeb7d2.js",
    "revision": "57c41c085c6275da3e5a37dfeb8861f7"
  },
  {
    "url": "assets/js/25.97c25d9a.js",
    "revision": "b8bb4bbf36ee5a2cf99f4e8d0acadca2"
  },
  {
    "url": "assets/js/26.033f274b.js",
    "revision": "f75a1e2ee728495d322142acef048f37"
  },
  {
    "url": "assets/js/27.bf44bb13.js",
    "revision": "0397eea58c3789796478d3c308e9e36b"
  },
  {
    "url": "assets/js/28.dea29f13.js",
    "revision": "c3adbe0ccce380f91ad620579c5d73a9"
  },
  {
    "url": "assets/js/29.0a3cdd04.js",
    "revision": "6d2009394eb92bc9d11207dfde765ad0"
  },
  {
    "url": "assets/js/3.97a69c0e.js",
    "revision": "790dd88cd1d6f30a3f7bf493279436ee"
  },
  {
    "url": "assets/js/30.acecf3f9.js",
    "revision": "3c00131007c0f8e0ee8321e2d855af01"
  },
  {
    "url": "assets/js/31.ba52f8af.js",
    "revision": "cfbbbc955f9744936f485aee684718af"
  },
  {
    "url": "assets/js/32.78651ff4.js",
    "revision": "ebfc774b4e4130a76df8c778f8724446"
  },
  {
    "url": "assets/js/33.22e23502.js",
    "revision": "31b9ff97eda8e04a329ff00185d6e9c3"
  },
  {
    "url": "assets/js/34.3837c0a1.js",
    "revision": "ac35ecbb1802042dd95d59715bc424be"
  },
  {
    "url": "assets/js/35.e51c3bf0.js",
    "revision": "5109dca7941ba60627b807d70cc415f3"
  },
  {
    "url": "assets/js/36.d78abb16.js",
    "revision": "5cf3cba9b4347287a94534ad849fd25e"
  },
  {
    "url": "assets/js/37.deb923a6.js",
    "revision": "5433e9b477576a1b266794a759981c27"
  },
  {
    "url": "assets/js/38.26595fb9.js",
    "revision": "6cf1d81c2410786f7013bd24ad8e6eb7"
  },
  {
    "url": "assets/js/39.fa4a8aca.js",
    "revision": "42311da779a69d6ee8458fdd32cca5f0"
  },
  {
    "url": "assets/js/4.e704607a.js",
    "revision": "848c1ed12e57da3cbd383cedd2eff9c6"
  },
  {
    "url": "assets/js/40.ce82c8ad.js",
    "revision": "ef81fb61b05d58a4fba699f85598e764"
  },
  {
    "url": "assets/js/41.19709b61.js",
    "revision": "18994c72e4e45b144000c3daca25b3f6"
  },
  {
    "url": "assets/js/42.84cbf584.js",
    "revision": "a697b072f9d4690347596915219851ba"
  },
  {
    "url": "assets/js/43.34ba8603.js",
    "revision": "77e132648b23deef91aee159894c6563"
  },
  {
    "url": "assets/js/5.4e00dfd5.js",
    "revision": "b31c62f1897ae420d3090532497742e3"
  },
  {
    "url": "assets/js/6.7f257221.js",
    "revision": "b33719b518a40014c6cacdad79c6d91f"
  },
  {
    "url": "assets/js/7.825556a4.js",
    "revision": "3575c29cf9bda763d6d5610811ad4e9a"
  },
  {
    "url": "assets/js/8.cd6b6a33.js",
    "revision": "1619b985fda46125f406723ca530832b"
  },
  {
    "url": "assets/js/9.f10ec660.js",
    "revision": "433bb810ea5b9367aeece794f03140e1"
  },
  {
    "url": "assets/js/app.a31e9a1c.js",
    "revision": "c5eeed79a3e20359b5688606b01aeaa4"
  },
  {
    "url": "de/bastelstube/ace3medical.html",
    "revision": "7c1bbfdbd098a4d4c5e4f27ebbd0bb10"
  },
  {
    "url": "de/bastelstube/cba-settings.html",
    "revision": "6276d1afd97e9fe6dd1e045d888ebdad"
  },
  {
    "url": "de/bastelstube/erste-hilfe-missionsbau.html",
    "revision": "d3f5a6942d09f9fe1716e70b575091fc"
  },
  {
    "url": "de/bastelstube/FX.html",
    "revision": "fab1ccd9eedab7bce8203c113edeb63d"
  },
  {
    "url": "de/bastelstube/gruppe-adler-mod.html",
    "revision": "57dc432aeba9de2d8398f6459b707b33"
  },
  {
    "url": "de/bastelstube/index.html",
    "revision": "503bf57a5960b39c08f80f78fcf95bff"
  },
  {
    "url": "de/bastelstube/scriptmodule.html",
    "revision": "8100ae9855f4c26bf4db325144526dd7"
  },
  {
    "url": "de/bastelstube/slotting-tool.html",
    "revision": "be3406296f35f1e3f57574ff64c13069"
  },
  {
    "url": "de/bastelstube/symlinks.html",
    "revision": "68db690169f598d8bab235fd8f62d756"
  },
  {
    "url": "de/index.html",
    "revision": "9d5039d5dc94654b440e0dc189c8a281"
  },
  {
    "url": "de/infrastruktur/docker-host.html",
    "revision": "df79672faec496064477740c488a751e"
  },
  {
    "url": "de/infrastruktur/gruppe-adler-modset.html",
    "revision": "bc2d6fdc21d9691abbe6d42cede91cd5"
  },
  {
    "url": "de/infrastruktur/index.html",
    "revision": "ada68fc3931d1a4e468085aa34a64213"
  },
  {
    "url": "de/infrastruktur/styleguide-design.html",
    "revision": "3fca3d755a0cb1302ab4bf9030d84857"
  },
  {
    "url": "de/infrastruktur/uebersicht.html",
    "revision": "d897d953fc6b85d19f8874ac9bbc238b"
  },
  {
    "url": "de/infrastruktur/wiki-how-to.html",
    "revision": "ebee5ab2a09657785183b6ad528cefb0"
  },
  {
    "url": "de/organisatorisches/adlerung.html",
    "revision": "1430796bf004eb1f4354f036d2776b10"
  },
  {
    "url": "de/organisatorisches/bek-checkliste.html",
    "revision": "3100cc344d09aa7c5c5eead84e63f4e5"
  },
  {
    "url": "de/organisatorisches/gastspieler.html",
    "revision": "a1adb82b61e48e70f0db9d615f8d8e40"
  },
  {
    "url": "de/organisatorisches/gruppen.html",
    "revision": "dfcfe0ed774faae5b005aabc6e6fc6d2"
  },
  {
    "url": "de/organisatorisches/index.html",
    "revision": "fe4ea6a4a507fe9abd57cbe823b64124"
  },
  {
    "url": "de/organisatorisches/repo.html",
    "revision": "e35f19a1578ae204e87506be80350fd7"
  },
  {
    "url": "de/taktik/ASOP.html",
    "revision": "19c6541c40ee0088276276bd2fda60fd"
  },
  {
    "url": "de/taktik/ateffectiveness.html",
    "revision": "0d062cb2da0e7dd91cb5ec70574cc033"
  },
  {
    "url": "de/taktik/index.html",
    "revision": "a0383e8873b1296787bed70ce7d4a202"
  },
  {
    "url": "de/taktik/taktischeZeichen.html",
    "revision": "2b0d2bfa91443162a5f918fc57836319"
  },
  {
    "url": "de/wiki-index.html",
    "revision": "4006605070e997b499b4b9a1d9c47eda"
  },
  {
    "url": "en/index.html",
    "revision": "06deca12867c848716f73bb68afa2788"
  },
  {
    "url": "en/infrastruktur/gruppe-adler-modset.html",
    "revision": "1c322ca7b6ae8da4b25d1d8a6a60c035"
  },
  {
    "url": "en/infrastruktur/index.html",
    "revision": "69860ea338161a3d27ff3c4e1a41fda6"
  },
  {
    "url": "en/wiki-index.html",
    "revision": "f341f586562ba8dbef1fe7b9736e012b"
  },
  {
    "url": "index.html",
    "revision": "3b1ecc55510f3f5ec80ad65fcd84743d"
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
