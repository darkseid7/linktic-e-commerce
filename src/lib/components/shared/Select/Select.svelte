<script lang="ts">
	export let name = '';
	export let label = '';
	export let required = false;
	export let items: String[] = [];
</script>

<div class="">
	<label for={name} class="block text-gray-700 font-semibold mb-2">{label}</label>
	<select
		class="mt-1 block w-full border-gray-300 rounded-md border p-2 focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
		{name}
		id={name}
		{required}
		on:change
	>
		{#each items as item}
			<option value={item}>{item}</option>
		{/each}
	</select>
</div>
