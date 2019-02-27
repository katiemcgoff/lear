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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "e6e56bbc11e9e7bcb6fa1d2959ed33b1"
  },
  {
    "url": "assets/css/0.styles.a5b5bc33.css",
    "revision": "3bd50f2889554b1f94d7b510cb280724"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.4569ac01.js",
    "revision": "12471f865c0b713b15a2d175c21670c1"
  },
  {
    "url": "assets/js/11.0299a4bc.js",
    "revision": "34b026b45437a1775b7626656db3c0b8"
  },
  {
    "url": "assets/js/12.509df1ad.js",
    "revision": "8d1927e60810da20bc672ec73e6142a8"
  },
  {
    "url": "assets/js/13.77071a43.js",
    "revision": "cf096a51bc3c2466ef3346bbfab23abb"
  },
  {
    "url": "assets/js/14.f21ec9b1.js",
    "revision": "002aabc6a082ebee7215e0592689eb81"
  },
  {
    "url": "assets/js/15.f0622b9c.js",
    "revision": "569ff48f28aea8eabe7d6bdecfc90e27"
  },
  {
    "url": "assets/js/16.550eb43d.js",
    "revision": "fb7a28830177a2a0c44218055f608036"
  },
  {
    "url": "assets/js/17.0cbb898a.js",
    "revision": "6faa07cad1a187df2b1fff9a7b558d27"
  },
  {
    "url": "assets/js/18.837439a3.js",
    "revision": "3393e2df19f615bfc77b84abd6940419"
  },
  {
    "url": "assets/js/19.b54319a9.js",
    "revision": "8880c1eb5ae62fc8d3c07c6e19bf2a9e"
  },
  {
    "url": "assets/js/20.edc9ac81.js",
    "revision": "e8de0e09d42c5b6fa3010a4f1300251b"
  },
  {
    "url": "assets/js/21.9b93f35e.js",
    "revision": "69b3bd7280dcdca3a78a0bb937b7bda1"
  },
  {
    "url": "assets/js/22.63875f90.js",
    "revision": "a58de74da9bd8f44667bcb3ef519049b"
  },
  {
    "url": "assets/js/23.2f24ddb9.js",
    "revision": "2adbac1a6fc3e5e5aa08cab2ca155f77"
  },
  {
    "url": "assets/js/24.b56141f6.js",
    "revision": "3d1698a7a7e3e3d11f374f524d566701"
  },
  {
    "url": "assets/js/25.64299b45.js",
    "revision": "53dd809e62d215dfa9285c1a0784135c"
  },
  {
    "url": "assets/js/26.cc1e90ed.js",
    "revision": "171dbf6b56fc64445a6e5c39a09bdcca"
  },
  {
    "url": "assets/js/27.567ccf02.js",
    "revision": "839c6cdba995743efd21d6fcd32522ff"
  },
  {
    "url": "assets/js/28.0065423e.js",
    "revision": "4deb05e845f84f6aac992c5d3d2a950a"
  },
  {
    "url": "assets/js/29.eacdc791.js",
    "revision": "9cd4bf128b9ad9c2d4b01884cac82037"
  },
  {
    "url": "assets/js/3.ea719602.js",
    "revision": "dce0133cddede39ec6a5875de3fc7b89"
  },
  {
    "url": "assets/js/30.5b4aff04.js",
    "revision": "851679b19d7936a53cdd4de827bbb453"
  },
  {
    "url": "assets/js/4.8cb751e4.js",
    "revision": "651f316132cc58727305e6fed4a0254e"
  },
  {
    "url": "assets/js/5.0db8775b.js",
    "revision": "72aebd3289dbd5e2f2c664dc0e3ec737"
  },
  {
    "url": "assets/js/6.800d9eb9.js",
    "revision": "b426836cad1dc6861ae751577848fd04"
  },
  {
    "url": "assets/js/7.4200bffb.js",
    "revision": "fbd5288784e9d1f53242bd6cd6777ffa"
  },
  {
    "url": "assets/js/8.56958a61.js",
    "revision": "05c8c50f863d40b5f4e46df441a8c26f"
  },
  {
    "url": "assets/js/9.07592c56.js",
    "revision": "e793f06fc2df3dd7d61c8dedcfcb9afc"
  },
  {
    "url": "assets/js/app.9a0ce056.js",
    "revision": "5ed8387ff90f77571dcdf6a4b1b189a8"
  },
  {
    "url": "assets/js/vendors~notification.50bf8195.js",
    "revision": "6383ad9583401580e2665ef9af311230"
  },
  {
    "url": "design/index.html",
    "revision": "c4e774f597295c57dd7fa0ed64472997"
  },
  {
    "url": "design/mvp-ar/database.html",
    "revision": "16028295ce3e4a0b067cce09b4017a66"
  },
  {
    "url": "design/mvp-ar/index.html",
    "revision": "ef1070e3556957e700ac5d04d700994d"
  },
  {
    "url": "faq/index.html",
    "revision": "93746c5116c29dffda13d6efe4a02d6c"
  },
  {
    "url": "guide/api-services/deploy.html",
    "revision": "cd212ffbb93077a31fd071aede531d5b"
  },
  {
    "url": "guide/api-services/directory-structure.html",
    "revision": "fa9ddf5a37ef3e491ff734c3ff80b485"
  },
  {
    "url": "guide/api-services/setup.html",
    "revision": "dde6f7f857ad14ed4103fc3a6a8ee111"
  },
  {
    "url": "guide/database/index.html",
    "revision": "16b9aff98a1fc00a3798a56bf6e9e69d"
  },
  {
    "url": "guide/documentation.html",
    "revision": "89acc10c4ff3bde0edba3e556be8c1c2"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "ae6d133a61e9777e5c714030f5f7fa39"
  },
  {
    "url": "guide/index.html",
    "revision": "da890603e1fb6f39264645d0cd4759ef"
  },
  {
    "url": "guide/standards.html",
    "revision": "748e77f54edfaa64ee43008c2d1a0ab6"
  },
  {
    "url": "guide/tools.html",
    "revision": "308341c55123c63da9ee2ae26179337a"
  },
  {
    "url": "guide/web-app/deploy.html",
    "revision": "79d3069cf0477e4e014ea4eb9f6411d4"
  },
  {
    "url": "guide/web-app/directory-structure.html",
    "revision": "4c83d0be49157a5ccec2431109724ee6"
  },
  {
    "url": "guide/web-app/i18n.html",
    "revision": "cb3159ee220aec9b1fdb1e36fa0add30"
  },
  {
    "url": "guide/web-app/setup.html",
    "revision": "8a0c869f9f90f5a7e243ebea2a31d09f"
  },
  {
    "url": "hero.png",
    "revision": "e23db9931fb14055b765092ce28a4b70"
  },
  {
    "url": "icons/android-chrome-192x192.png",
    "revision": "f130a0b70e386170cf6f011c0ca8c4f4"
  },
  {
    "url": "icons/android-chrome-512x512.png",
    "revision": "0ff1bc4d14e5c9abcacba7c600d97814"
  },
  {
    "url": "icons/apple-touch-icon-120x120.png",
    "revision": "936d6e411cabd71f0e627011c3f18fe2"
  },
  {
    "url": "icons/apple-touch-icon-152x152.png",
    "revision": "1a034e64d80905128113e5272a5ab95e"
  },
  {
    "url": "icons/apple-touch-icon-180x180.png",
    "revision": "c43cd371a49ee4ca17ab3a60e72bdd51"
  },
  {
    "url": "icons/apple-touch-icon-60x60.png",
    "revision": "9a2b5c0f19de617685b7b5b42464e7db"
  },
  {
    "url": "icons/apple-touch-icon-76x76.png",
    "revision": "af28d69d59284dd202aa55e57227b11b"
  },
  {
    "url": "icons/apple-touch-icon.png",
    "revision": "66830ea6be8e7e94fb55df9f7b778f2e"
  },
  {
    "url": "icons/Asset 1.png",
    "revision": "bc4ceb61731ac94966fa60b3caf8ab1c"
  },
  {
    "url": "icons/favicon-16x16.1.png",
    "revision": "4bb1a55479d61843b89a2fdafa7849b3"
  },
  {
    "url": "icons/favicon-16x16.png",
    "revision": "bc4ceb61731ac94966fa60b3caf8ab1c"
  },
  {
    "url": "icons/favicon-32x32.png",
    "revision": "98b614336d9a12cb3f7bedb001da6fca"
  },
  {
    "url": "icons/msapplication-icon-144x144.png",
    "revision": "b89032a4a5a1879f30ba05a13947f26f"
  },
  {
    "url": "icons/mstile-150x150.png",
    "revision": "058a3335d15a3eb84e7ae3707ba09620"
  },
  {
    "url": "icons/safari-pinned-tab.svg",
    "revision": "f22d501a35a87d9f21701cb031f6ea17"
  },
  {
    "url": "index.html",
    "revision": "538983622e48d11fef36c2fc783488d7"
  },
  {
    "url": "lear_mvp1_all.png",
    "revision": "6b1d66b346c6338c6ad4f00164692b74"
  },
  {
    "url": "logo.png",
    "revision": "e23db9931fb14055b765092ce28a4b70"
  },
  {
    "url": "other/glossary.html",
    "revision": "4867113363de7ce60c94a4526a83e153"
  },
  {
    "url": "registry-wardleymap.png",
    "revision": "372883bb2af5523c1a40ee7edcc881ea"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
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
