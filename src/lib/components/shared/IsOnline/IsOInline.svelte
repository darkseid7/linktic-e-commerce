<script>
	import { onMount } from 'svelte';
	import { writable } from 'svelte/store';

	const isOnline = writable(true); // Inicialmente suponemos que está en línea

	onMount(() => {
		// Asegúrate de que el código solo se ejecuta en el cliente
		if (typeof window !== 'undefined' && typeof navigator !== 'undefined') {
			isOnline.set(navigator.onLine);

			const updateOnlineStatus = () => {
				isOnline.set(navigator.onLine);
			};

			window.addEventListener('online', updateOnlineStatus);
			window.addEventListener('offline', updateOnlineStatus);

			return () => {
				window.removeEventListener('online', updateOnlineStatus);
				window.removeEventListener('offline', updateOnlineStatus);
			};
		} else {
			console.error('navigator is not defined');
		}
	});
</script>

{#if $isOnline}
	<div class="p-4 bg-green-500 text-white text-center">online</div>
{:else}
	<div class="p-4 bg-red-500 text-white text-center">offline</div>
{/if}
