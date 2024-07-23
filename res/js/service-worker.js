self.addEventListener("install", (ev) => {
  console.log("installed", ev)
})

self.addEventListener('fetch', event => {
	// if (/\/api\//.test(event.request.url)) return;
	const cacheName = "cached-responses"
	if (event.request.method !== 'GET') return;
	// Go to the cache first
	event.respondWith(caches.open(cacheName).then((cache) => {
      // Go to the cache first
      return cache.match(event.request.url).then((cachedResponse) => {
        // Return a cached response if we have one
        if (cachedResponse) {
		  console.log("CACHE", cachedResponse, event.request.url)
          return cachedResponse;
        }

        // Otherwise, hit the network
        return fetch(event.request).then((fetchedResponse) => {
		  if (fetchedResponse.status === 200) {
			  // Add the network response to the cache for later visits
			  cache.put(event.request.url, fetchedResponse.clone());
		  }

		  console.log("NETTING", event.request.url)
          // Return the network response
          return fetchedResponse;
        });
      });
    }));
});
