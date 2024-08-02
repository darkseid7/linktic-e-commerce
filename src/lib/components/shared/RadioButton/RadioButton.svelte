<script lang="ts">
	export let name;
	export let label;
	export let selectedValue: string = '';
	export let required = false;
</script>

<div>
	<label for="name">{label}</label>
	<div class="flex gap-3">
		<div>
			<input
				type="radio"
				{name}
				id="{name}_sí"
				value="Sí"
				checked={selectedValue === 'Sí'}
				{required}
				on:change
			/>
			<label for={name + '_sí'}>Sí</label>
		</div>

		<div>
			<input
				type="radio"
				{name}
				id="{name}_no"
				value="No"
				checked={selectedValue === 'No'}
				{required}
				on:change
			/>
			<label for={name + '_no'}>No</label>
		</div>
	</div>
</div>
