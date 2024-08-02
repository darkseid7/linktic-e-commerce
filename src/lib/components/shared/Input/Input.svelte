<script lang="ts">
	export let name;
	export let label;
	export let type = 'text';
	export let placeholder = '';
	export let value = '';
	export let required = false;
	export let onInput = () => {};
</script>

<div class="">
	<label for={name} class="block text-gray-700 font-semibold mb-2">{label}</label>

	<input
		{type}
		id={name}
		{name}
		class="mt-1 block w-full border-gray-300 rounded-md border p-2 focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
		{placeholder}
		{value}
		{required}
		on:input={onInput}
	/>
</div>
