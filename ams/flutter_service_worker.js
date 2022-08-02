'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"flutter.js": "3688efe0a39e59781b4f95efbd6b5b62",
"main.dart.js": "417cf66824b53ade59ee0d33f7b0b25d",
"version.json": "8320c6fe58067eab4c2552a50d437b77",
"assets/assets/fonts/K.ttf": "f4ca7b52e1cc9fe0df9958deaafe0cc7",
"assets/assets/fonts/Oxygen-Regular.ttf": "d5ea9b254845291bc569162d298ac3f6",
"assets/assets/fonts/JetBrainsMono-Bold.ttf": "ffe19343aa6843ee1fcf9c690457d122",
"assets/assets/fonts/JetBrainsMono-VariableFont_wght.ttf": "7e355c2b5bc6bb45ebd2201456a9a2cf",
"assets/assets/fonts/UbuntuMono-Bold.ttf": "d3e281ca75369e8517b3910bc46a7ed0",
"assets/assets/fonts/UbuntuMono-Regular.ttf": "c8ca9c5cab2861cf95fc328900e6f1a3",
"assets/assets/images/amslogo.png": "d92377f5110a38d39331fc001036292b",
"assets/assets/images/AMSLogoColor.png": "b8df59f295f32a8a937a291c53546e50",
"assets/assets/images/AMSlogo%2520-%2520Copy.jpg": "4d87e480a804cb14e9b8788704782206",
"assets/assets/images/AMSlogo.jpg": "4d87e480a804cb14e9b8788704782206",
"assets/assets/images/AMSLogoColor%2520-%2520Copy.png": "db6f3eaafe18d7671485c8b8a5e79cb0",
"assets/assets/images/AMSlogo-Cut.psd": "b092987e9e8a162e809300ee25502454",
"assets/assets/images/logoams-bih.png": "a50d914508287686c6b4efa9e5eafe2c",
"assets/assets/images/phone.png": "6b37204eb54c3dc71be893a2789e68a1",
"assets/assets/images/AMS-BlueRedNoStroke.png": "f68e3f81732fe86d2069ba033a88dab9",
"assets/assets/images/AMS-BlueRedNoStroke540.png": "6129334cbdca61f32e62572297ad0d05",
"assets/assets/images/AMS-RedBlue.psd": "16e3cde5ceeee56f9fe5aeff1df2df5f",
"assets/assets/images/AMSLogoSmooth.png": "c35349499cc4e68894030d9022f04b63",
"assets/assets/images/AMSLogoSmoothRedBlue.png": "fa63f99dfbdac405fdd37baaec466de3",
"assets/assets/images/AMSlogo-Good.png": "eca7e10e43c6dc3d2dcc0959e7375a4e",
"assets/assets/images/AMSlogo-Good.psd": "164274a933a591564b71f4b511fe48a2",
"assets/assets/images/amslogo135.png": "b21070fac9739d0d214ccb2e906b94da",
"assets/assets/images/logoams123.png": "cdd098b1db068a02d0eea3e1837665c3",
"assets/assets/images/ams512.png": "f139139a608900ba51fd4e77cd76fc53",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/getwidget/icons/facebook.png": "293dc099a89c74ae34a028b1ecd2c1f0",
"assets/packages/getwidget/icons/wechat.png": "ba10e8b2421bde565e50dfabc202feb7",
"assets/packages/getwidget/icons/google.png": "596c5544c21e9d6cb02b0768f60f589a",
"assets/packages/getwidget/icons/whatsapp.png": "30632e569686a4b84cc68169fb9ce2e1",
"assets/packages/getwidget/icons/pinterest.png": "d52ccb1e2a8277e4c37b27b234c9f931",
"assets/packages/getwidget/icons/line.png": "da8d1b531d8189396d68dfcd8cb37a79",
"assets/packages/getwidget/icons/youtube.png": "1bfda73ab724ad40eb8601f1e7dbc1b9",
"assets/packages/getwidget/icons/dribble.png": "1e36936e4411f32b0e28fd8335495647",
"assets/packages/getwidget/icons/linkedin.png": "822742104a63a720313f6a14d3134f61",
"assets/packages/getwidget/icons/twitter.png": "caee56343a870ebd76a090642d838139",
"assets/packages/getwidget/icons/slack.png": "19155b848beeb39c1ffcf743608e2fde",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/AssetManifest.json": "2eb4c39ae85aed377cf0b9afc981a678",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/NOTICES": "0cd116574aa1b3a932490be24a2928e6",
"favicon.png": "b21070fac9739d0d214ccb2e906b94da",
"icons/Icon-192.png": "b21070fac9739d0d214ccb2e906b94da",
"icons/Icon-512.png": "928570e08f5f0d8f22785bc158d6ad05",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-192old.png": "5ea07449a59e0bde22c09e976ba383d7",
"index%20copy.html": "61dd2e3f0a5e7c31a814e57d12762df0",
"index-old.html": "f566de65c314d3ae6f1537d0183c8fdd",
"index.html": "810aa668eb3832369b703a96a5eaefa9",
"/": "810aa668eb3832369b703a96a5eaefa9",
"manifest.json": "2a465facf2597639b4febc1170e6c07a",
"jsQR.js": "d54b99cd32c7a3c35dc7df755ee1e137",
"favicon.ico": "6f96fa36acb4cc57e86bdd79e7342a06",
"faviconold.png": "b1713237c12b3442d7a8127929491a73"
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
