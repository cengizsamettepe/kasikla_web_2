'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
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
"assets/fonts/MaterialIcons-Regular.otf": "7e7a6cccddf6d7b20012a548461d5d81",
"assets/NOTICES": "485af855fecdde0cacb6afb8dbfddeb1",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "669a29d27f2d623a7989c17d90f6164e",
"/": "669a29d27f2d623a7989c17d90f6164e",
"main.dart.js": "a326d0d785efdb99d394a8079363a8b2",
"manifest.json": "bc5ed0363017c4a9b9f75184d6b82f6e",
"version.json": "861a8bed58c638ab7bc5d6758f286c9d"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
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
