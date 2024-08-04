<script>
	import { Input, Button, Select, RadioButton } from '$lib';

	import { enhance } from '$app/forms';
	import { goto } from '$app/navigation';

	export let form;
</script>

<h1 class="text-2xl font-bold mb-4 text-center">Login</h1>

{#if form?.errorMessage}
	<p class="text-red-600">{form?.errorMessage}</p>
{/if}
<form method="POST" action="?/login" use:enhance>
	<div class="grid grid-cols-2 gap-4">
		<Input type="email" name="email" label="Email*" required />

		<Input type="password" name="password" label="Contraseña*" required />
	</div>
	<div class="text-end mt-5">
		<Button text="Login" />
	</div>
</form>

<Button text="Signup" on:click={() => goto('signup')} />
