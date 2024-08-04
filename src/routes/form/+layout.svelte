<script>
	import { enhance } from '$app/forms';
	export let data;
</script>

{#if data.session}
	<form method="post" action="/auth/logout?/logout" use:enhance>
		<button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
			Cerrar sesión
		</button>
	</form>
{/if}
<slot></slot>
