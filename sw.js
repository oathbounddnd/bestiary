const CACHE='best-v3_3-cache-v1';
const ASSETS=['./','./index.html','./manifest.webmanifest','./assets/icon-192.png','./assets/icon-512.png','./assets/cover.png','./assets/parchment.jpg','./assets/open.ogg','./assets/mask1.webp','./assets/Blood-Splat-07.png','./assets/Blood-Splat-08.png','./assets/Blood-Splat-01.png','./assets/Blood-Splat-04.png','./assets/Acid_Splat.webm.png','https://fonts.googleapis.com/css2?family=Pirata+One&family=MedievalSharp&display=swap'];
self.addEventListener('install',e=>e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS).catch(()=>{}))));
self.addEventListener('activate',e=>e.waitUntil(caches.keys().then(keys=>Promise.all(keys.map(k=>k!==CACHE&&caches.delete(k))))));
self.addEventListener('fetch',e=>{e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request).then(resp=>{const cp=resp.clone(); caches.open(CACHE).then(c=>c.put(e.request,cp)); return resp;})));});
