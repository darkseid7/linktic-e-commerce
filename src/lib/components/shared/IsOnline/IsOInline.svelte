<script>
	import { onMount } from 'svelte';
	import { checkNetwork } from '../../../../store';

	let isOnline = true;
	onMount(() => {
		if (typeof window !== 'undefined' && typeof navigator !== 'undefined') {
			checkNetwork.subscribe((value) => {
				isOnline = value;
			});

			const updateOnlineStatus = () => {
				checkNetwork.set(navigator.onLine);
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

<div class="m-2">
	{#if $checkNetwork}
		<div class="p-4 bg-green-500 text-white text-center">online</div>
	{:else}
		<div class="p-4 bg-red-500 text-white text-center">offline</div>
	{/if}
</div>
