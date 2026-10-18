// Generated at build time.
const CACHE = 'boom-day-f7feca9758';
const FILES = ["./","./assets/index-H0Nx3RMj.js","./assets/index-Cqbq5nwD.css","./assets/press-start-2p-latin-400-normal-KLytu4cr.woff","./assets/press-start-2p-latin-400-normal-_wFEWmAB.woff2","./manifest.webmanifest","./osku/osku-sheet.png","./osku/icon-192.png","./osku/icon-512.png","./osku/icon-maskable-192.png","./osku/icon-maskable-512.png","./osku/favicon-32.png","./osku/favicon-80.png","./osku/apple-touch-icon.png"];
self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(CACHE).then((c) => c.addAll(FILES)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', (e) => {
  e.waitUntil(caches.keys().then((ks) => Promise.all(ks.filter((k) => k.startsWith('boom-day-') && k !== CACHE).map((k) => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener('fetch', (e) => {
  if (e.request.method !== 'GET') return;
  const url = new URL(e.request.url);
  if (url.origin !== location.origin) return;
  // Pages: network first (so updates arrive), cache when offline. Assets: cache first.
  if (e.request.mode === 'navigate') {
    e.respondWith(fetch(e.request).then((r) => { const copy = r.clone(); caches.open(CACHE).then((c) => c.put('./', copy)); return r; }).catch(() => caches.match('./')));
    return;
  }
  e.respondWith(caches.match(e.request).then((hit) => hit || fetch(e.request)));
});
