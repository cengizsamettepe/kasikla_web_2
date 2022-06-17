'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "64d42024f1a77ee5e61e4096bdebac78",
".git/config": "dd25695684241661a0b8bd38871a5b1c",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "d8dce1a8ebd8af2dce78ffc2b6217f65",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "0ccdf73ff8d1c82b0f326f8030df6bb8",
".git/logs/refs/heads/master": "0ccdf73ff8d1c82b0f326f8030df6bb8",
".git/logs/refs/remotes/origin/master": "7a985a4f8dab19450de6d4322033d325",
".git/objects/03/6049d0c05491600a295372f33064d51257e673": "0a560dfa880ca74ee9d8286de74476b6",
".git/objects/06/2d52180c4f305fc29c8cd94c3f96cf75c3c2b2": "67f9a09338611da814a062f8db3e35f2",
".git/objects/08/d8e61500b55d9f41e4d46a62076322d615e702": "8ea2aef52e6c7c0f5556466405a6142b",
".git/objects/0d/0df08f7c3e147a8ae36017cf81a96e35b73717": "106e868f28a72727fb6fb0fa71123633",
".git/objects/0e/4acab549f92c9c8846b06fb38f8bc7c62566bc": "b454849d0ccebd442228e811a9e591bd",
".git/objects/0e/cabe1f70a1b23b2089541343cbe1c92e84a087": "ffd0074f13970ee4c2a00852f09552bf",
".git/objects/10/a9b6d062f545fc002e0f89b5a949b3e41515c8": "8a770a12dee20b6991dbbe4955282a01",
".git/objects/12/e9e7bba5231883c7439545556b4ce14e96f398": "6fde4616be9999a30ff79dc3b292c4a9",
".git/objects/13/1c4ad34c21f56a8f6ee9f48d9b9c8c440690cd": "324a36edb88368602fff280a1a8ae452",
".git/objects/13/7e6b63868cfa9628a1f7eca6fa5499abe4aa80": "403915b692259acd4faf89033afded2f",
".git/objects/17/f8bdde717176290b4335dc6c3aae6f71f01136": "c1987371c10f5d98bc51860f85b056c5",
".git/objects/22/7221656fcdd4d1dfaecd7866e0fcb42a557f3a": "b0741c45fdb6566d849de2be32b1cba2",
".git/objects/24/b1f14dd348b07c9b8373758bde9ac14d16fd92": "dbf45d6c044044561758a334420e9569",
".git/objects/2b/0a7f02a361e19dbb47bf122bb289829566b3b2": "99a723137d8b89eca41f65cf74a70d98",
".git/objects/2d/cf3542c874e33cd8ab86ceb6f0ec444228aa78": "66baad0ae5d874f09b6eee790095bc65",
".git/objects/2e/6bd4f0161dd4fa976dae6186d6ad2441c2e1c8": "879b16ceb78c50bda6222eb19fab7966",
".git/objects/2e/a2590b2b2a363ad5c84b713c9baf48479be327": "565a4ddd811cf5690fc1f9ee194e7bca",
".git/objects/31/f5c571f9bb062079a8e4f2770dac82b8ee7200": "23ba738025378028e6022ca301c795ab",
".git/objects/34/7da23813bd96eda01507542c0df5d08d80cdcd": "09f1398de699a7548896e56f2315e666",
".git/objects/37/06f904966dbe7e97b092b4044a892f0e455c71": "56c6caab6508edf2cae356d889225278",
".git/objects/49/153a7f60c2bcd0da73bf9830d54709d6040630": "ba07eeb37eda1948d087cc2ed55ff131",
".git/objects/4d/f8508735639cb2aa8be71ff092dbe91c19ca62": "08800e2470b0db6bf7e55641296711c2",
".git/objects/4e/89617a3696bd10c155ec378f4a65a9f89e9e3a": "d8056e20bae90d092b619c895129e982",
".git/objects/52/480a63b1f184ea74afb06662aa98fa98864864": "6f8b2cf71be2b4830601f9db57eded45",
".git/objects/53/b500728facf6f567aafe32620534063d14c6fd": "defe64f034c12228723eb0268dac172b",
".git/objects/59/21032e940f74a1e9854c0f7283519b6161e0f4": "35d094d4fd735ed59f338f3a11df629d",
".git/objects/59/bfb46c1262813d0cc70c531d240ae468c5e154": "e7a3ccf5c806598aae41b51fb31d3757",
".git/objects/5b/c7adbfe138f9fbdc7dffaedf577b4fac9c05a9": "f1db2330796c30c7cd8d194ec7165603",
".git/objects/62/9cda42d63764fd8c246d2cacd2ceb5c779f5dc": "5cf09e87f6bdb410856faa069ce63586",
".git/objects/69/cec2ee189e25dc71bc544eeaa312b43fa11e13": "ea73b12fb9965d5681e0c42935e7490a",
".git/objects/6b/213f4e6df7696e2f4a7fbf1b47451779db8c92": "5299f398ee2ddea18a44ad80052e480d",
".git/objects/6f/9dedd75d3fa59a42bd510729c46c3f17e848c5": "bc4c0d456a901b341430bac79324800b",
".git/objects/70/e2a70d9cfe4233363a3bf19dcad239fdb58942": "c52311bb70912b457d1f56226fcaa773",
".git/objects/76/8651b2e249c2517c7b37bdbeea0a5d8bfbb707": "495b1c4fefa633f6afe4dc5840ebe18f",
".git/objects/76/bfad450413e4bd6a940e9376ecc97cae40d57e": "e8a1fd3344514563493dd8499b54f148",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7a/9cb2c0be70f090273b0e4e69b28d7e754883e2": "3a8086b1d1311f165ed0a3d50580ef95",
".git/objects/7a/af6be34e2348802e3228a3d38f42f717d784e4": "791792300637bb74018ac8cfe93d527b",
".git/objects/7d/109a1c70894910d32c94ac710cbd6662bd1fb3": "5f8bedfbaabd639e3738e96b31df1a47",
".git/objects/84/6e94f8210af362f461c86300e4056a6dd16f04": "991f845f200e9d66d2cc3372f48be655",
".git/objects/84/96e35a0c71a1c1d67ab5060801bcb5da54347f": "a1961efa98bd463128d3a35d238767f5",
".git/objects/86/b842317f0013d651abd8442ef69f4e820d04f6": "1619fe54eb190c00a43ccc7b815a1fcd",
".git/objects/88/74c90b197fd83b8ce878e0d968b6de18f331d4": "77c14b7f6a1b627b6d948d37966b6826",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8c/892a210b8873a63d0b6d9d1fb385b492ac2e19": "5b4f552221c16c736786d2b04be8b1f3",
".git/objects/95/2096c09f814ff1522604962546e5452e3a81af": "e671a8647150f29095e13792b6496ac4",
".git/objects/99/acba488562373f9ca7905d2984b3a850202d27": "90b21d917f98529cedfe781cc0ef46c4",
".git/objects/9c/9c46748df97bcaf362b7638fdb382ea2375b55": "91c6b320d8ce2441dfa4fb4d306a1350",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a5/d642bfe5c23421a008daaac9a221cf912bf98b": "15b2cf7340e75372dac11dc3775479fd",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/b5/3cd60d8464310b9057d36750b9f28c806a8991": "9b1e893f4c49ad6e88f026ba933f3932",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/c1/e80ef5d341321e55376292252858d9fa70d3d4": "d6f8f8aaae7554953dc43af87b63c5f0",
".git/objects/c3/a3d3d3283e2313751080267db96ab2f65e7d0a": "473c5069b097732ecb8993aa4ae46815",
".git/objects/c9/3614baaed862687c95c07be02eba047baf847d": "95812f348a2d41476b3774b018433b76",
".git/objects/cb/e9185b9ad88a8e26ac5fe7f13efa25e739423a": "33a47b6c7798f5d9b9f8dfc7bca09cf8",
".git/objects/d1/62ea92078354fc3c9a923eed33d59e6df6bddc": "3af5c1f8e5170b1d288aaf5958978272",
".git/objects/d2/e4af4e0b1351fbe95ffe654cbc1b3f1e640feb": "89bfaf64859dc72fbdb23ca3074254b2",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d8/8e193a298cb814cc6aacf9e6fc05b85e8312fd": "c4a04892518a115103168c2832e050f4",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e6/d85973128fabad3703afaa729290d3badeb40a": "847d52cce8af2fddaadd14785b807259",
".git/objects/e9/e575d0b36ebd696294496017834c26b62e1505": "8eca52e53d59927cc7c00a13888ea67b",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ec/a81bc79adfed412463e431f5ed66867ccccf0a": "055fd93d09fc3dea07cef75cd74f5826",
".git/objects/f1/2ed58c56beaf72be0a87837588e6e51c33ca49": "b5cdca5f65d5cb49fef4caaa06bbc7ed",
".git/objects/f2/4a20a9d2139fa7b412f98785cf24336a9cdc35": "1f0c1e25c1188cace1a19bc2e0031486",
".git/objects/f6/4cf5077140c7ee425d69fee61cdbc78ce08905": "2106b46d7f68d4b4d0c81583d9ac62de",
".git/objects/f6/c79b2c4d8647e1398de2c641a08fcc60096077": "0a7d0955b4559a2346b74c736cfbb5ac",
".git/objects/fa/69596b67cda81f91320ce7f676410bf96153bb": "087fd6822918d6f2d8757f2f97d37689",
".git/objects/fb/8d82a607a1ff8fede981b6b49fceb033beffe8": "e81efd928d8d5f297c4451f9c27287da",
".git/objects/fe/707857a4a40a549260e4ebbe3f517c9e1c4b47": "38e54e46b0a8462d27b0ebfb34b81d9f",
".git/refs/heads/master": "4ba370c9e4d753f3205114a67480079c",
".git/refs/remotes/origin/master": "4ba370c9e4d753f3205114a67480079c",
"assets/AssetManifest.json": "6fd882093435a472ce16504666daaac3",
"assets/assets/fonts/Antonio-VariableFont_wght.ttf": "6d0958ae67ac7320de01dfc664e2a5f7",
"assets/assets/images/100082-billing.json": "9ae627d94717dab6d1baa1d1c6a7e099",
"assets/assets/images/68908-checking-out-online.json": "cd8a66c797ed824cecdd17c64812dc52",
"assets/assets/images/69733-food-beverage.json": "469198f7ee1c5b7355fc83472729e85e",
"assets/assets/images/98802-youtube.json": "1a58faae9fecff21b037072f75f2ada6",
"assets/assets/images/99032-linkedin.json": "b62240b0374060134d08fdf2706d0322",
"assets/assets/images/99142-green-graph-growing.json": "074bebafb49c890ae6395425765de31a",
"assets/assets/images/99282-twitter.json": "c31ce2ee9abd5a4eb16f0fe6861ab011",
"assets/assets/images/alkis.png": "c0196bd04842b895f0732eadc97a039f",
"assets/assets/images/bardak_1.jpg": "472038dcc5c8ac9a4491b24148ab83bd",
"assets/assets/images/bardak_2.jpg": "cd77be427e4390c6b3fde5465696b191",
"assets/assets/images/ben.jpeg": "8781180bcca46d8697488b555ef4beaf",
"assets/assets/images/canta.jpg": "facd18e92ab854568cc2ec1cdd21b23b",
"assets/assets/images/dis.jpg": "d70416668b586ef14ff7df2c6f38bd7a",
"assets/assets/images/ic.jpg": "e80b3f65d1102ef55f3a6834309f8668",
"assets/assets/images/icecek_1.png": "3f1df0466f6216432eab87da2fd280ee",
"assets/assets/images/icecek_2.png": "98da53a731fb62e7f4f3011fb914ed50",
"assets/assets/images/icecek_3.png": "a84283c497cb17fd77ae340fb5002421",
"assets/assets/images/icecek_4.png": "b5ede4b0dad074742080235e808ed3d4",
"assets/assets/images/icecek_5.png": "954615f7f41fe7be8667bd60c8c01d59",
"assets/assets/images/icecek_6.png": "ea733b616aa456caa0ea54f79e8b67e4",
"assets/assets/images/icecek_7.png": "1350e8e5e938068013063a8889273195",
"assets/assets/images/icecek_8.png": "def767f768309881031aa6d764c086c6",
"assets/assets/images/kasikla.png": "c72ac95824b234370cbde8d3453c2965",
"assets/assets/images/kavanoz.jpg": "02c01e605c8ac18f97a3b913350b6a30",
"assets/assets/images/menu_1.jpg": "7b694648cc3a2efe680329287dc36acb",
"assets/assets/images/pano_1.jpg": "be34d5e04723ae590baaeac6160dcdef",
"assets/assets/images/tatli_1.png": "f6931dcc6857f265750fc1838db7b79c",
"assets/assets/images/tatli_2.png": "e75c77be538f567badc4b821142fd67e",
"assets/assets/images/tatli_3.png": "b88b3aedb14dcd236651b7d8c57de2b9",
"assets/assets/images/tatli_4.png": "005ee31a31af9ad04f7a0c77cae96805",
"assets/assets/images/tatli_5.png": "ed832981ab850fef2319615de9d1e7c9",
"assets/assets/images/tatli_6.png": "dd6633bc38605c71efdc8c27da9ffad8",
"assets/assets/images/yemek_1.png": "7f9501f1a4c35442730f2ed752b4ec17",
"assets/assets/images/yemek_2.png": "3f5a07757ee5286b21b5b28d5809c9e7",
"assets/assets/images/yemek_3.png": "043688923d12462da7d0872aaab5e7f4",
"assets/assets/images/yemek_4.png": "c25f4b8f9ff9316a7db1c1349d9c37ec",
"assets/assets/images/yemek_5.png": "fa0dc1d442dc78a7e9382e6626da6c7d",
"assets/assets/images/yemek_6.png": "07b5b3c1716d614894ebfa784b02f582",
"assets/assets/images/yemek_7.png": "b8bd8a4a9ea0d824a88dd3feaedc15f8",
"assets/assets/images/yemek_8.png": "a040d61d55bc51832c869f5185b6fa46",
"assets/assets/images/yemek_9.png": "02d111fd50ebe1f53dcc0a94d833bed8",
"assets/FontManifest.json": "413e768c8ebaf358121c48b33cad4c46",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/NOTICES": "020a0382ef1f2a4d6055cd7f18da59f8",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "eb2682e33f25cd8f1fc59011497c35f8",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "3e374fe40e6d39e4434c14b3bb23330e",
"/": "3e374fe40e6d39e4434c14b3bb23330e",
"main.dart.js": "09fd329f85feb01ebac0d0b2bd12e0dc",
"manifest.json": "bc5ed0363017c4a9b9f75184d6b82f6e",
"version.json": "861a8bed58c638ab7bc5d6758f286c9d"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
