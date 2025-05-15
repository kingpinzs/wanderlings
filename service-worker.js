// service-worker.js

const CACHE_NAME = 'lemmings-game-cache-v1';
// List of files to cache.
// Since your game is mostly self-contained in index.html and levels.js,
// these are the most critical.
// If you add separate CSS files or image assets later, add them here.
const urlsToCache = [
  'index.html', // Your main game file
  'levels.js',  // Your level data
  // Add paths to your icons once you create them, e.g.:
  // 'icons/icon-192x192.png',
  // 'icons/icon-512x512.png',
  // You might also want to cache the game's root directory '/' if index.html is served as the default
  // For simplicity, we'll stick to explicit files for now.
  // If you have a specific "offline.html" page, you can add it too.
];

// Install event: opens the cache and adds the core files to it.
self.addEventListener('install', (event) => {
  console.log('Service Worker: Installing...');
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('Service Worker: Caching app shell');
        return cache.addAll(urlsToCache);
      })
      .then(() => {
        console.log('Service Worker: App shell cached successfully');
        return self.skipWaiting(); // Activate the new service worker immediately
      })
      .catch(error => {
        console.error('Service Worker: Failed to cache app shell:', error);
      })
  );
});

// Activate event: cleans up old caches.
self.addEventListener('activate', (event) => {
  console.log('Service Worker: Activating...');
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            console.log('Service Worker: Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    }).then(() => {
        console.log('Service Worker: Activated successfully and old caches cleaned.');
        return self.clients.claim(); // Take control of all open clients
    })
  );
});

// Fetch event: serves assets from cache first, falling back to network.
self.addEventListener('fetch', (event) => {
  // We only want to cache GET requests.
  if (event.request.method !== 'GET') {
    return;
  }

  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        if (response) {
          // Found in cache, return it.
          // console.log('Service Worker: Serving from cache:', event.request.url);
          return response;
        }

        // Not in cache, fetch from network.
        // console.log('Service Worker: Fetching from network:', event.request.url);
        return fetch(event.request)
          .then((networkResponse) => {
            // Check if we received a valid response
            if (!networkResponse || networkResponse.status !== 200 || networkResponse.type !== 'basic') {
              return networkResponse;
            }

            // IMPORTANT: Clone the response. A response is a stream
            // and because we want the browser to consume the response
            // as well as the cache consuming the response, we need
            // to clone it so we have two streams.
            const responseToCache = networkResponse.clone();

            caches.open(CACHE_NAME)
              .then((cache) => {
                // console.log('Service Worker: Caching new resource:', event.request.url);
                cache.put(event.request, responseToCache);
              });

            return networkResponse;
          })
          .catch(error => {
            console.error('Service Worker: Fetch failed; returning offline page or error.', error);
            // Optionally, you could return a custom offline fallback page here:
            // return caches.match('offline.html'); 
          });
      })
  );
});
