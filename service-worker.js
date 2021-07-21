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
    "revision": "f6086ef0c0c4d9ef67558a393b8a4d37"
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
    "url": "assets/js/16.d713e286.js",
    "revision": "3f4af7b1350f5aef5fdbf54ee58d0c22"
  },
  {
    "url": "assets/js/17.0cb67ccf.js",
    "revision": "41290555d1a7dfeb725db228b96554af"
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
    "url": "assets/js/3.93a53881.js",
    "revision": "a9c5e20803883aece3eb96c82785e64e"
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
    "url": "assets/js/33.763cd668.js",
    "revision": "5e8cf5698cbba7f8c76975c27c2435c5"
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
    "url": "assets/js/36.09f0f9a8.js",
    "revision": "06052e1483d3875645b9bc44955de567"
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
    "url": "assets/js/4.877c7bb8.js",
    "revision": "c5d940f202c132115827d9b7043d0391"
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
    "url": "assets/js/app.793a9704.js",
    "revision": "0ed9c49bcf2ab6a1eb36f4d8bad28b5f"
  },
  {
    "url": "de/bastelstube/ace3medical.html",
    "revision": "9b6094d88682d9c67088d0d51147804d"
  },
  {
    "url": "de/bastelstube/cba-settings.html",
    "revision": "cda2b8509f69dc59f47a9dd4864963ab"
  },
  {
    "url": "de/bastelstube/erste-hilfe-missionsbau.html",
    "revision": "58ddfaec9e669f24954acf6ba7f0b2c2"
  },
  {
    "url": "de/bastelstube/FX.html",
    "revision": "e08b6c47499af093af63d67e2427694f"
  },
  {
    "url": "de/bastelstube/gruppe-adler-mod.html",
    "revision": "6930e200559dd10aa523cdadda2a3987"
  },
  {
    "url": "de/bastelstube/index.html",
    "revision": "69cc31d32ba48ea6024d17f8b42a16ce"
  },
  {
    "url": "de/bastelstube/missionstemplates.html",
    "revision": "ed8a0b05ea4ef7e0641e8e1e9de3653a"
  },
  {
    "url": "de/bastelstube/scriptmodule.html",
    "revision": "3d0040696918a1ba6f7b478b78b14249"
  },
  {
    "url": "de/bastelstube/slotting-tool.html",
    "revision": "f78c49e3273d331b56cca4b9a4f4f348"
  },
  {
    "url": "de/bastelstube/symlinks.html",
    "revision": "d6ce4aeb1545b60f63eef57d64f1b03c"
  },
  {
    "url": "de/index.html",
    "revision": "21b87aabfabfcf85491442fab1c00c4a"
  },
  {
    "url": "de/infrastruktur/docker-host.html",
    "revision": "947ddff1dc99de3e3f6b4ef0f998283a"
  },
  {
    "url": "de/infrastruktur/gruppe-adler-modset.html",
    "revision": "cf72dd9649a518bb5bdf97ce8fa0309d"
  },
  {
    "url": "de/infrastruktur/index.html",
    "revision": "0d982296ade1fc0146b359955a2350fb"
  },
  {
    "url": "de/infrastruktur/styleguide-design.html",
    "revision": "7b6a99ca201c8392efc3b86016136851"
  },
  {
    "url": "de/infrastruktur/wiki-how-to.html",
    "revision": "78b532b81b09658a554701cb1cef0237"
  },
  {
    "url": "de/organisatorisches/adlerung.html",
    "revision": "0ecc55797ed6bf63cbb4b642b7c55b8f"
  },
  {
    "url": "de/organisatorisches/bek-checkliste.html",
    "revision": "08fc8af6194b6f642b962584c5a07329"
  },
  {
    "url": "de/organisatorisches/gruppen.html",
    "revision": "ae639748ed0e341a042c540d7294fac3"
  },
  {
    "url": "de/organisatorisches/index.html",
    "revision": "5aa2ec2557e7d0f1b4d4350631cbb518"
  },
  {
    "url": "de/taktik/ASOP.html",
    "revision": "1e363c05d0b649a77b224fd31368e485"
  },
  {
    "url": "de/taktik/ateffectiveness.html",
    "revision": "a0e56c17d5508bee01e57c1b2fdd0106"
  },
  {
    "url": "de/taktik/index.html",
    "revision": "97d20edbfaa0c7c2ab28276eff4518d1"
  },
  {
    "url": "de/taktik/taktischeZeichen.html",
    "revision": "5e73caaec52760057fec409ee1c29622"
  },
  {
    "url": "de/wiki-index.html",
    "revision": "2c5d316dcc8afe546eb56f3e32fc28ea"
  },
  {
    "url": "en/index.html",
    "revision": "a36eb6e9a76abbc65ed42eed40dfb257"
  },
  {
    "url": "en/infrastruktur/gruppe-adler-modset.html",
    "revision": "444cad69caed9618567e1595b440ddc2"
  },
  {
    "url": "en/infrastruktur/index.html",
    "revision": "2e42de339e767bf9b53fa54ce793cbd4"
  },
  {
    "url": "en/wiki-index.html",
    "revision": "357054b4cbb945ef42186cb2e8782f83"
  },
  {
    "url": "index.html",
    "revision": "9f3c656b4303f0e6559bfeffd8600ebf"
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
