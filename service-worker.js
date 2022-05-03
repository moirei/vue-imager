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
    "revision": "0de34528022f3bd76438873be3e6ede6"
  },
  {
    "url": "assets/css/0.styles.ebf0a4b6.css",
    "revision": "5158658f9c16ac26c8737cefdd3bce1e"
  },
  {
    "url": "assets/fonts/MaterialIcons-Regular.39bfea5e.woff",
    "revision": "39bfea5e86f5f41c9d2896dbbed6791b"
  },
  {
    "url": "assets/fonts/MaterialIcons-Regular.ae8b1248.eot",
    "revision": "ae8b1248595e70a828b880b9c56963da"
  },
  {
    "url": "assets/fonts/MaterialIcons-Regular.b073f597.woff2",
    "revision": "b073f5972d9c4cc1b8ae8e071e441376"
  },
  {
    "url": "assets/fonts/MaterialIcons-Regular.b9968c1a.ttf",
    "revision": "b9968c1adf542baec8d2b298d3ff437c"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/1.d3a212c1.js",
    "revision": "07c4ec58fb2774b52b21888756997a19"
  },
  {
    "url": "assets/js/10.357fa055.js",
    "revision": "8cda56c8e7f308f7ad0a8267976e5e3d"
  },
  {
    "url": "assets/js/11.1a7d6605.js",
    "revision": "a82d1e57ee43e8b606aae82d2c1518b1"
  },
  {
    "url": "assets/js/12.556438e6.js",
    "revision": "14e4ccc16a62c3f3d4719ebc79c8a86a"
  },
  {
    "url": "assets/js/13.7ea94ecb.js",
    "revision": "1effd56ac64022d6c258365fc3301b95"
  },
  {
    "url": "assets/js/14.ed37f893.js",
    "revision": "94717e4c3730b0691c1613ca61049a37"
  },
  {
    "url": "assets/js/15.95913a45.js",
    "revision": "0da6445416aacf20a2a9715649057a3b"
  },
  {
    "url": "assets/js/16.10f52344.js",
    "revision": "9a8132de7bc86ffe79a6384ab394d341"
  },
  {
    "url": "assets/js/17.df072177.js",
    "revision": "79282adf2b16fef60a10cffeaa5f0659"
  },
  {
    "url": "assets/js/18.dcf6d0eb.js",
    "revision": "6e40d567ae10693fd096870162868a51"
  },
  {
    "url": "assets/js/19.b1dc3ad2.js",
    "revision": "7f3389bb1a43d8a1237480153145e52d"
  },
  {
    "url": "assets/js/2.d3775fe2.js",
    "revision": "95807f4a248b6be9168667d7783355f0"
  },
  {
    "url": "assets/js/20.7e0fd1f4.js",
    "revision": "6501e36136e5a30b631472eddca65f17"
  },
  {
    "url": "assets/js/21.d5585692.js",
    "revision": "087fae0f5a9344c072d13963021b5b3b"
  },
  {
    "url": "assets/js/22.420c29be.js",
    "revision": "b63251cc111d966be2cdcbfae72abc6d"
  },
  {
    "url": "assets/js/23.82c0f2a0.js",
    "revision": "876512cc35e6e0e9a1f3751a490afdfa"
  },
  {
    "url": "assets/js/24.5d5d4955.js",
    "revision": "86068b65252af614860a1696b16aa5ee"
  },
  {
    "url": "assets/js/25.269725a4.js",
    "revision": "b05e7ef292daec487f573eab5266ca98"
  },
  {
    "url": "assets/js/26.4252f9cc.js",
    "revision": "c94666336d17883fd6f265a941359fe2"
  },
  {
    "url": "assets/js/27.4110c0f5.js",
    "revision": "8e9ed8d8cf82bcd9e2e53550566b337d"
  },
  {
    "url": "assets/js/28.f9c95193.js",
    "revision": "dbb89a3a9b8e2c4b401a5bcb53c66d8e"
  },
  {
    "url": "assets/js/29.6768075b.js",
    "revision": "97cf4ec3deb681a0c958b15d68836448"
  },
  {
    "url": "assets/js/30.07128e0f.js",
    "revision": "c0ce371f1b9f6af18204f12ff37dedb4"
  },
  {
    "url": "assets/js/31.0dba07b2.js",
    "revision": "11b794094248ee51c207d373807d29c5"
  },
  {
    "url": "assets/js/4.8dc1743e.js",
    "revision": "e83c49d4b9ad0994d857b9e0ca7c8c15"
  },
  {
    "url": "assets/js/5.219d1ce3.js",
    "revision": "7c801f9e99ebe7acc0e25fa3b6e90c09"
  },
  {
    "url": "assets/js/6.684e3200.js",
    "revision": "dfeeadd110fc3e594bf7d6b3107f76a4"
  },
  {
    "url": "assets/js/7.7f188985.js",
    "revision": "9cc1fc902c61260c52b06631c79fb3a2"
  },
  {
    "url": "assets/js/8.1b75014e.js",
    "revision": "4667f6e47cbd4e5ee06ff61d8d10d71e"
  },
  {
    "url": "assets/js/9.0a5e725f.js",
    "revision": "6bd457364fa1d1919be3323893fcff98"
  },
  {
    "url": "assets/js/app.4e3cc724.js",
    "revision": "e48ed261ea8d0939fdd1705ff6f9e845"
  },
  {
    "url": "components/v-imager.html",
    "revision": "de56241b296ea1fd2b38b82737b3f7e3"
  },
  {
    "url": "customize.html",
    "revision": "436833b3c7767feced92e09e738a7fff"
  },
  {
    "url": "getting-started.html",
    "revision": "f4d33af0c17f541e9d3ab0409e2400d3"
  },
  {
    "url": "icons/apple-touch-icon-152x152.png",
    "revision": "bb5d8a25d314cab9fb7003293e262b7b"
  },
  {
    "url": "icons/msapplication-icon-144x144.png",
    "revision": "7b147426540b00bc662c63140819dac9"
  },
  {
    "url": "index.html",
    "revision": "f716b33e161d26c2aa9310eac9b6ebbc"
  },
  {
    "url": "introduction.html",
    "revision": "d8a057de7f27d4052e0dd0a04fae3d4f"
  },
  {
    "url": "logo.png",
    "revision": "a68c56ae1a0bc32fdcbf4d244b183aef"
  },
  {
    "url": "usage/background-image.html",
    "revision": "2d33e227167a7908d021ec101907f4ee"
  },
  {
    "url": "usage/image.html",
    "revision": "1197581a9ba68e6b04a172092a0d49e2"
  },
  {
    "url": "usage/imager.html",
    "revision": "6074bd6c8652244bbf40071fe1a5156a"
  },
  {
    "url": "usage/lazy-loading.html",
    "revision": "a7e54762c2c2ce763ff47d8d50f51169"
  },
  {
    "url": "usage/loading-animation.html",
    "revision": "3b1963b9e1c63f8062093b93737dafbe"
  },
  {
    "url": "usage/responsive-imaging.html",
    "revision": "c4f235b265659ad954ef7fe33c26e7aa"
  },
  {
    "url": "usage/url-image.html",
    "revision": "3aa6f15d49d20efbe1bee6d5ec7796a2"
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
