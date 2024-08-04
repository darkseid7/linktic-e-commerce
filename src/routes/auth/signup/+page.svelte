<script>
	import { enhance } from '$app/forms';
	import { goto } from '$app/navigation';
	import { Input, Button } from '$lib';

	export let form;
</script>

<h1 class="text-2xl font-bold mb-4 text-center">Signup</h1>

{#if form?.errorMessage}
	<p class="text-red-600">{form?.errorMessage}</p>
{/if}

<form method="POST" action="?/signup" use:enhance>
	<div class="grid grid-cols-2 gap-4">
		<Input type="email" name="email" label="Email*" required />
		<Input type="password" name="password" label="Password*" required />
	</div>
	<div class="text-end mt-5">
		<Button text="Regresar" on:click={() => goto('login')} />
		<Button text="Signup" />
	</div>
</form>
