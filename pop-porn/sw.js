// The game moved from /pop-porn/ to /osku/. This worker replaces the old one:
// it deletes the old offline copy, removes itself, and sends any open window
// to the new address.
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', (e) => {
  e.waitUntil(
    (async () => {
      for (const k of await caches.keys()) if (k.startsWith('pop-porn-')) await caches.delete(k);
      await self.registration.unregister();
      for (const c of await self.clients.matchAll({ type: 'window' })) c.navigate('../osku/');
    })(),
  );
});
