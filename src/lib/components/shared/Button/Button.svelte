<script lang="ts">
	export let text = 'Button';
	export let onClick = () => {};
</script>

<button
	type="submit"
	class="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
	on:click={onClick}
>
	{text}
</button>
