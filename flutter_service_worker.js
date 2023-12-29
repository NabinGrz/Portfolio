'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "2aa9ddb499709d08188ec2414cfbf9fc",
".git/config": "a28d01500407da334f78a3a58ffd5ed8",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "3e67b9a34fd389bfac83e89f9b3324ed",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "28db33ca61c1da02c160f444152551e2",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "cf6ed74515af01c1e5e37e2edb69d165",
".git/logs/refs/heads/main": "04a85db37d3fc907688cbd2b4b037653",
".git/logs/refs/remotes/origin/main": "a42ea3f39db3a24011d6c5c3698d4a34",
".git/objects/03/0bfd0f6c965760374589188ef3b1ad386bd01d": "9276cf21b7d9016065de6bc0d909952e",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/04/e5efc15dc0c60ea2ffcc37c5bf25e96689f44d": "978222f47488835b92838c74cb5c684c",
".git/objects/0a/2ad3a8946718e5da80b8b36f3a970f9203bb41": "493becadfb3c0f3d60727bde4e9f1614",
".git/objects/0a/fb4eca098a8202f86c9fd5d06f0b67980c9a9c": "31e4274648f75b3f25574269250a758e",
".git/objects/1b/427b43a7c8332ce0485804199257b1cabe6029": "61b378758c4538032423874042689d9e",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/22/ae0c4602c11b82206c350909ebc4688bd1daeb": "1e254fc43423d34907c558e2c54f6b09",
".git/objects/2a/c9832e68223410e9b05687c60225c326ba7b6e": "6b8aabcf73c27d66a7a51623fc0ddb08",
".git/objects/39/0d080c923df14d04f223ba026a1424f8205697": "2fecd98345f3842f83d3c6778f3ec7e6",
".git/objects/3d/245a78e40b6013ddbeb7c3cab3055b51ddd9ea": "f273b736ba4ca930c96d21cf696dd265",
".git/objects/3f/595fcc13a68600f2546c2e00d37088a0b6f80d": "c73538f1e4cdb792f8f14eb579fa6655",
".git/objects/43/98c21d2cdb422c8f53c8452ef3c31da436e2c6": "c267e204b3b49f76979261bcb4c34bd0",
".git/objects/43/e946e398d96aee466fa0aabb625f0889c3a4bd": "ac34520dee747f675e6e0a15c0bbd2be",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/47/49ce8ac556207ab929de2d7d58fa726b25d655": "9ce35755ad485a12f8f551d6a0d7d9c6",
".git/objects/48/33fcf9ba677d3df448c90e63368e50f8bfc8d6": "a5b926fccf641f8e2a09e52478c0d37a",
".git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "75589287973d2772c2fc69d664e10822",
".git/objects/4f/d0e51f345ee398d4c56c9a2a36514cfdc54f3e": "d8e976b7b97437231f01681fc40815a3",
".git/objects/4f/dfd9239496897114f597ad87f9b3ec3487d871": "dee275d1332b20b5c67b03990dd35ee2",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/59/62efb2dffef4c259bda261b128fcab4b659c34": "11e1a7683fedc73b6a0da57ee3c6a112",
".git/objects/5a/35bca46590bbcb3ed3368da71121adacc67fc3": "209cc276e78474f7e5a03834b100957d",
".git/objects/5e/e2b22519c54de2785fe8b9e458cac3edc46ec3": "1822fe1e60ec78441993eff207c37bc0",
".git/objects/69/dd618354fa4dade8a26e0fd18f5e87dd079236": "8cc17911af57a5f6dc0b9ee255bb1a93",
".git/objects/6a/2f0e7388bb3ba296d38438a50b5fb484a43c74": "110af789f49ea58dacdc7fb0d30be581",
".git/objects/6b/5555efb1d72b1f5f49357ef5536e04dfa777ba": "63d2707a8abceb873526d2c348ac3a31",
".git/objects/78/d525319fb7e7ced7caaaa7aa50da78b5130fe6": "b9612551eac0a45a7489227f80e3f2c1",
".git/objects/7c/1f8df932e711279ca93bde4224fca9efe8f4c2": "6c3a7bfacfaef58fa26c1fce899dcff0",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8a/d41123112dcc05e645c65693277074ac106233": "3de645de309caa9346a728f03e403fdd",
".git/objects/8b/2e3ccd02edea44603c279546235b1ac1ff7d9d": "2d9be92a271c2ebfb9706d23ed3fa898",
".git/objects/8f/e7af5a3e840b75b70e59c3ffda1b58e84a5a1c": "e3695ae5742d7e56a9c696f82745288d",
".git/objects/9a/8445714a513a667a932267afe3a7277ed949f1": "97e5c4500a7ba1a0aa45ef5556af0303",
".git/objects/b3/3819935179f94aac67ab19a9071348a81b620c": "0f91ce155cf7be20d5288d86cfa9a668",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b8/fa04b03efeb03be21da84bb37ded6c3066228a": "eae5ebf23aa788a989c0754dc4f71917",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/8cb00dd5231f1a55de0205c16445926a696526": "be8592f9341c9b01b70890c8614c6cf7",
".git/objects/bb/3085876799532613a08c7ebe43f24f0cc46864": "1b6aa21800d948d5513c15e54d131215",
".git/objects/c0/3ad5896ca2aa73e9c9358b443f2e8bcc24317e": "60e864cb244a4141738068726cb39e68",
".git/objects/c4/9344db36719edce46eb5397fca645ad401eb54": "332b771dace6c9c1f305bdb39c9dcaf5",
".git/objects/c6/231dec4826f44df060b60241740b2fdec6053c": "082c93011d64162dce3bb79d2a61a466",
".git/objects/c9/08a7156039a98b96e5a67d500fb06f4d45ee70": "077da2cdf47e206dead6f51aa24e3e58",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/db/a0128eb9e8b7a3fdec3735f319ec2feecf9dd4": "8c3d03b9bcbd5804589a6e3741763234",
".git/objects/dd/8b2e844b09fe66dd9cd10ad1359185c7ce6ceb": "c25e1ecf46e47411de973f7c3756a7d7",
".git/objects/df/7d2dcb89ab89da87467c0e1059b38c8d8f9296": "a44162ff357b024e4638ab18a9bb01c7",
".git/objects/e5/1ef0a670b315314d6f303eef5e53be48299dde": "6453c800bb74ecb652ed74e038374aef",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f0/956b2fe34b75a2c82491f90898da578b94f0e4": "ab8b68c7302880f49195a116a901a240",
".git/objects/f7/09ccd8fdf5e21dc5b46e90c762f0a9f05724ab": "a431e01776747a9d6257cd1add0e0cd6",
".git/objects/fa/6421f7b63237d481223ec0270709a610f155a8": "f77071e8357266629f10349003adda9a",
".git/objects/fa/81d0cc454e3cb76ad2b16e97d09d6e390c48ba": "9190dbcf22d3f0b88a877e19fbdd02ae",
".git/objects/fd/44e5aad2a9f12577891fc7935473500df0b092": "176b2f607cdd40a0899f92d76beb5552",
".git/objects/fe/3914bcf3baf9d87a873a444cac8aaf9dcd54c1": "372add7dd6cdabc32b9333e8d66bff72",
".git/ORIG_HEAD": "88529776607ae95321f0328c4e938b8f",
".git/refs/heads/main": "3615ff7586692809cbfc1776224dce4e",
".git/refs/remotes/origin/main": "3615ff7586692809cbfc1776224dce4e",
"assets/AssetManifest.bin": "dbeb26280f1fb8b7076f5f04e97dde40",
"assets/AssetManifest.bin.json": "73b15d64324729630b3bfb5a621670d1",
"assets/AssetManifest.json": "033cef110b8116a913391f0dad6db369",
"assets/assets/images/coding_background.png": "6ace6b2fe781377bf025f55162673da2",
"assets/assets/images/deviceframes.png": "e3ade24a412c4e27c15f24eb78bdae2a",
"assets/assets/images/email.png": "e55d3ff1db29fa80ad1589ce2b79d32e",
"assets/assets/images/icons8-github-50%2520(1).png": "20f39a7bcdcc4f10dc0b94c46214155a",
"assets/assets/images/icons8-github-50.png": "279b75de047d85f99cf41441c1c090d8",
"assets/assets/images/icons8-github.svg": "b004eeebed11276deebce8fb6191efcb",
"assets/assets/images/icons8-linkedin%2520(1).svg": "1666c203dd56fe12ca484fbb884cd0a4",
"assets/assets/images/icons8-linkedin-48.png": "f33b3032dcc4df0e1c28e472742419d4",
"assets/assets/images/icons8-linkedin.svg": "ed22836d52975d687bd8f78a5cc09af3",
"assets/assets/images/laptop.png": "27656094f2060a3da9414da98adda24b",
"assets/assets/images/phone.png": "06d120a87a4b8359ce72297068544b66",
"assets/assets/images/pp.JPG": "8b822f07df9098619e40279a199e91c5",
"assets/assets/images/verified.png": "4210e74e15219af770a6384b606102ab",
"assets/assets/lottie/developer1.json": "882ff9f767ce1977995926d06efa596b",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "32fce58e2acb9c420eab0fe7b828b761",
"assets/NOTICES": "3bfdd8d3b6d8358e0d33e6c790dddc21",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.wasm": "64edb91684bdb3b879812ba2e48dd487",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "f87e541501c96012c252942b6b75d1ea",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.wasm": "4124c42a73efa7eb886d3400a1ed7a06",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"CNAME": "25468e15c175a9c931b64858a6fa13f3",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "59a12ab9d00ae8f8096fffc417b6e84f",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "ad39a82bd4fb8700cb8ea4193b6f53ef",
"/": "ad39a82bd4fb8700cb8ea4193b6f53ef",
"main.dart.js": "b23f4d033bd10dd356f6bacdad481548",
"manifest.json": "e74af8957b5899dc6da961caee768ec9",
"version.json": "009c9e65172e010890f7f65fde438006"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
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
