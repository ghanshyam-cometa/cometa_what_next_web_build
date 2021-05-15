'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "ccc73cc410271b0d277c8b7622c3d417",
"assets/assets/html/career/Charted_accountant.html": "51687bb939fc0eaaea4a737505385229",
"assets/assets/html/career/Career_in_Bsc.Agriculture.html": "cc6504042f6e37918b1693468e4939fe",
"assets/assets/html/career/Career_as_an_Army_Officer.html": "e15c96fae5d002e5677d6b2c4785e96c",
"assets/assets/html/career/Judge.html": "1a2196d966f5abd33233f7bc3f111db2",
"assets/assets/html/career/Police.html": "1698fa34bc96e17dee4943ddf157e786",
"assets/assets/html/career/Career_as_a_Central_Reserve_Police_Force.html": "57ee324840c09e53760759ebd0c57677",
"assets/assets/html/career/IAS_.html": "a9b9ecb72ebe1f0631af1d0fb4530b98",
"assets/assets/html/career/images/Career_as_a_Scientist_html_e5c4db9aee09a043.png": "c3ede315e8957cdc78a7641bb5dc7add",
"assets/assets/html/career/images/Career_as_a_Scientist_html_cc702fc3ada6ff03.jpg": "0c359522c8a7f7b866970fd35adbbf9e",
"assets/assets/html/career/images/Career_as_a_Scientist_html_64322f7105de46b5.jpg": "25269a045c97a13cfad2edbaaf97e6a4",
"assets/assets/html/career/images/CAREER_AS_A_TEACHER_html_db4866176c725237.png": "55ad861e021011e9473f86c40de9e71a",
"assets/assets/html/career/images/Career_as_a_Scientist_html_b877cba1f16d952b.jpg": "17ea159bb13d75a6e59cebd43f9f5c4a",
"assets/assets/html/career/images/CAREER_AS_A_TEACHER_html_4f081ba760ca0628.png": "1ad8e62688902a28dd4198975bb886e7",
"assets/assets/html/career/images/Career_as_a_Scientist_html_506c91846daa3012.jpg": "f96fd5ab1842f2c202d4d09d8b75f30d",
"assets/assets/html/career/images/Career_as_a_Scientist_html_661416f22de9194c.png": "63abe224d4dbcacff5e57270035daeb2",
"assets/assets/html/career/images/Career_as_a_Scientist_html_570c0767884bfea8.jpg": "da1d981e633c2ac4a9030ca25d0d2b23",
"assets/assets/html/career/images/Career_as_a_Scientist_html_b5dab80ef1ae5b79.png": "89ab0025aee491e3056fe96d50604ed1",
"assets/assets/html/career/images/Judge_html_b2cda45f4baa2fff.png": "eb73e035ca8d3506b43d97bd2c5eb477",
"assets/assets/html/career/CAREER_AS_A_TEACHER.html": "9b5132504fdb3edf9ca81b85251059dc",
"assets/assets/html/career/banker.html": "5be92a2ecbebc18b918dae0df13a8454",
"assets/assets/html/career/Career_as_a_Professor.html": "c4ddf6829da228d1de3988656ff31fe6",
"assets/assets/html/career/Career_as_a_Scientist.html": "bc20bf8386db7f28653dabe157df54aa",
"assets/assets/html/career/Doctor.html": "637b8f6920ee3f4c73a57b9d427267ee",
"assets/assets/html/career/ENTEPRENEUR.html": "b6c4bca9b9d209c4d5404c2b5d87f1e8",
"assets/assets/html/career/Education_after_10th_to_Degree.html": "f69697274a32699c746bd8ff453409f7",
"assets/assets/html/career/Career_as_a_nAir_Force_Officer.html": "6fec2f56b8b6d827867bffd6b62bf600",
"assets/assets/html/career/Engineer.html": "c1bd98d13949fc9c070e3674de7d5b6c",
"assets/assets/career_db.json": "a81062adfae15fd946132adf8a1f0ee1",
"assets/assets/career_paths.jpg": "710e6779865c1d759c162b6aa8280c7a",
"assets/assets/education_db.json": "1498f83864156fd0e0a62a774084e64d",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Fraktur-Regular.ttf": "dede6f2c7dad4402fa205644391b3a94",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-Regular.ttf": "5a5766c715ee765aa1398997643f1589",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Caligraphic-Regular.ttf": "7ec92adfa4fe03eb8e9bfb60813df1fa",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_SansSerif-Regular.ttf": "b5f967ed9e4933f1c3165a12fe3436df",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size4-Regular.ttf": "85554307b465da7eb785fd3ce52ad282",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_AMS-Regular.ttf": "657a5353a553777e270827bd1630e467",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size2-Regular.ttf": "959972785387fe35f7d47dbfb0385bc4",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Math-BoldItalic.ttf": "946a26954ab7fbd7ea78df07795a6cbc",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Caligraphic-Bold.ttf": "a9c8e437146ef63fcd6fae7cf65ca859",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size1-Regular.ttf": "1e6a3368d660edc3a2fbbe72edfeaa85",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Typewriter-Regular.ttf": "87f56927f1ba726ce0591955c8b3b42d",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_SansSerif-Italic.ttf": "d89b80e7bdd57d238eeaa80ed9a1013a",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Script-Regular.ttf": "55d2dcd4778875a53ff09320a85a5296",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-BoldItalic.ttf": "e3c361ea8d1c215805439ce0941a1c8d",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-Italic.ttf": "ac3b1882325add4f148f05db8cafd401",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size3-Regular.ttf": "e87212c26bb86c21eb028aba2ac53ec3",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-Bold.ttf": "9eef86c1f9efa78ab93d41a0551948f7",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Fraktur-Bold.ttf": "46b41c4de7a936d099575185a94855c4",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_SansSerif-Bold.ttf": "ad0a28f28f736cf4c121bcb0e719b88a",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Math-Italic.ttf": "a7732ecb5840a15be39e1eda377bc21d",
"assets/packages/wakelock_web/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/AssetManifest.json": "a74670dd149e5f7839c996ac33e7fdbb",
"assets/NOTICES": "b9b3c4164e95d2b757a44c64e114d00e",
"assets/fonts/MaterialIcons-Regular.otf": "1288c9e28052e028aba623321f7826ac",
"assets/FontManifest.json": "71a4a82de411f155107da3f8dac64ebd",
"manifest.json": "84193c0027defc404bd488fd0aac7e0f",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/refs/heads/main": "57469ec96860390bb17f75ae7da27c13",
".git/logs/refs/remotes/origin/main": "36b409abb4661a22f8176ec66e7882c5",
".git/logs/HEAD": "99850b32bbb02f7e8ea5a616592af888",
".git/objects/cf/588709dc6a1429e17ae5c753437305e25b8fb2": "8b0516e26c2e61851906a92ad5fca7fe",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/9e/9e897b135e58303de037173fc870b5e445c41e": "74334160bdba2bd0f5b88fb037264f11",
".git/objects/85/fdf257e388393bb50a813cd4213483559f5af4": "c88187488960f74d623c008acb8411e0",
".git/objects/b6/e4c4fb340825b7568bdb8e1d0904c047b2c944": "9485b1b9a42d143cd9f847784c77cda3",
".git/objects/73/74f7d3c0a9b13ef95a9e627df42473a7c0a909": "319745cc990f1d98afb6b40212843c34",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a9/91f51138ffe059d588003dc7936aff059a0428": "b73a35563fa129bd884d8b5c53ee9231",
".git/objects/f2/5787c93ad00665f0f797a43ab397f0628a273e": "59e425d1456034072d902c75d18ec75f",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/cc/fab74c1f56c330985060e2247607eaedb3c7d7": "ad5b6117df489509af208438785f208b",
".git/objects/64/c00bed8c1634ebc7bdb2654241a14fd4c0afb9": "53c8e10f4bf3d5046a463db310cc4d6d",
".git/objects/3e/32c5a94193e28b9b61d873a5272d8556e72609": "a5ade75a2f2ee86d8e2ecb263aa912e0",
".git/objects/a8/3a17d54b6dc2156c855c6580301cefc9c8d017": "6525101be8d70b808a809af9c83fa4ad",
".git/objects/d3/792fdfd4084a102dedd74059fa4efa54c61264": "ac4fe8c5e24b8e2e035691c269ccdf89",
".git/objects/47/622a9c37be943d3b892dd9357a6be0dad18df0": "b0d497b07025b4b2e79aaf85ee7d3b15",
".git/objects/bb/372c5f1656613e7e019a198fd2fa0eadfd7321": "bec9412b4ca178ff3b71394dcbe33ee0",
".git/objects/52/ccf8fdf728c326b9e64ff585ac08d8241a782e": "285b3eb4988814f69c1a8998d9431bbf",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/96/21177481cb1a963b7641744469d296fdd479b3": "033406bd068b6d016e78a3e33799e7cb",
".git/objects/d1/2469875af54ef281b6d36bdc98ab45d64b717e": "bca89ac976dc698a60bc94779351e4b4",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/2c/451c879f49feadb5910122743fb5c9a0e27a70": "c02c3def29c77dc62faa43aeff458092",
".git/objects/f9/d7c3cd2ee397a17625b051db44d73932267128": "58570abef1fa6e62a48ff263a5e61afd",
".git/objects/92/3cab6c140883f23138185fe182854e671bef66": "89f2705cf40df223c976b65d86ff5e2e",
".git/objects/ad/2f90b78480aeb6608226d9db4ecbd3ec06aaeb": "4add97a99941aa0e9eed0f2173416ade",
".git/objects/33/13d918b160f55bcf0331b5cf7a354beecb22b8": "136158b98720da1d57a7181fb2f22472",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/b4/91da4a70939c2a02875a62cabd96be7acae56a": "aa9a3a5579bb801b2fb0db439bf08230",
".git/objects/7c/3e2ddc6a620205bc84415b57d9ab5d1dc6b3af": "f5a3105f7ed6f6043dc278d9ad3cec53",
".git/index": "6ef60c62699437f5bd797b28bf572056",
".git/COMMIT_EDITMSG": "1b7f7acd175acf99fd51de2524c88b54",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/refs/heads/main": "996ee943a5311a80ad768a33ede65522",
".git/refs/remotes/origin/main": "996ee943a5311a80ad768a33ede65522",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/fsmonitor-watchman.sample": "db4d62db2039e4bec38baa7567788284",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "e4db8c12ee125a8a085907b757359ef0",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/config": "81665f89c03e6cef03b00cb2676e19ee",
"main.dart.js": "104b1d919feb9f4a62f2d159c4256cf2",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"index.html": "2ee91198a694cd6e23162b5121817849",
"/": "2ee91198a694cd6e23162b5121817849",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1"
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
        CORE.map((value) => new Request(value + '?revision=' + RESOURCES[value], {'cache': 'reload'})));
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
