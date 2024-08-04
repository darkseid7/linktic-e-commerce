/// <reference types="@sveltejs/kit" />
import { build, files, version } from '$service-worker';

const CACHE = `cache-${version}`;

const ASSETS = [...build, ...files];

self.addEventListener('install', (event) => {
	async function addFilesToCache() {
		const cache = await caches.open(CACHE);
		await cache.addAll(ASSETS);
	}

	event.waitUntil(addFilesToCache());
});

self.addEventListener('activate', (event) => {
	async function removeOldCaches() {
		const keys = await caches.keys();
		await Promise.all(
			keys.map((key) => {
				if (key !== CACHE) {
					return caches.delete(key);
				}
			})
		);
	}

	event.waitUntil(removeOldCaches());
});

self.addEventListener('fetch', (event) => {
	const { request } = event;

	if (request.method !== 'GET') {
		return;
	}

	async function respond() {
		const url = new URL(request.url);
		const cache = await caches.open(CACHE);

		if (ASSETS.includes(url.pathname)) {
			return cache.match(request);
		}

		try {
			const response = await fetch(request);
			if (response.status === 200) {
				cache.put(request, response.clone());
			}
			return response;
		} catch {
			return cache.match(request);
		}
	}

	event.respondWith(respond());
});
