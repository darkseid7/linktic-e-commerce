<script lang="ts">
	import { enhance } from '$app/forms';
	import { goto } from '$app/navigation';

	export let data;
	$: formData = data.formRows;
</script>

<div class="">
	<div class="flex justify-between items-center">
		<h2 class="text-2xl font-bold mb-4">Lista de personas</h2>
		<button
			class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
			on:click={() => goto('form/create')}>Agregar</button
		>
	</div>
	<div class="overflow-x-auto">
		<table class="min-w-full divide-y divide-gray-200">
			<thead class="bg-gray-200">
				<tr class="text-center">
					<th class="px-4 py-2 text-sm font-medium text-gray-700">Nombre</th>
					<th class="px-4 py-2 text-sm font-medium text-gray-700">Apellido</th>
					<th class="px-4 py-2 text-sm font-medium text-gray-700">Documento de identidad</th>
					<th class="px-4 py-2 text-sm font-medium text-gray-700">Tipo de documento</th>
					<th class="px-4 py-2 text-sm font-medium text-gray-700">Acciones</th>
				</tr>
			</thead>

			<tbody class="bg-white divide-y divide-gray-200">
				{#if formData?.length === 0}
					<tr class="text-center">
						<td class="px-4 py-2" colspan="5">No hay registros</td>
					</tr>
				{/if}
				{#each formData || [] as item, idx}
					<tr class="text-center">
						<td class="px-4 py-2 whitespace-nowrap"
							>{` ${item.primer_nombre} ${item.segundo_nombre} `}</td
						>
						<td class="px-4 py-2 whitespace-nowrap"
							>{` ${item.primer_apellido} ${item.segundo_apellido} `}</td
						>
						<td class="px-4 py-2">{item.numero_documento}</td>
						<td class="px-4 py-2">{item.tipo_documento}</td>
						<td class="flex px-4 py-2">
							<button
								class="bg-blue-500 text-white py-1 px-3 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 mr-2"
								on:click={() => goto(`form/${item.id}`)}
							>
								Ver
							</button>
							<form method="POST" action="?/deleteRow" use:enhance>
								<input type="hidden" name="id" value={item.id} />

								<button
									class="bg-red-500 text-white py-1 px-3 rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
									type="submit"
								>
									Eliminar
								</button>
							</form>
						</td>
					</tr>
				{/each}
			</tbody>
		</table>
	</div>
</div>
