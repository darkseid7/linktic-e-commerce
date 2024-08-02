<script>
	import { goto } from '$app/navigation';
	import { IsOInline } from '$lib';
	const randomData = [
		{
			firstName: 'John',
			lastName: 'Doe',
			idNumber: '123456789',
			idType: 'Passport'
		},
		{
			firstName: 'Jane',
			lastName: 'Smith',
			idNumber: '987654321',
			idType: "Driver's License"
		},
		{
			firstName: 'Michael',
			lastName: 'Johnson',
			idNumber: '123987456',
			idType: 'National ID'
		},
		{
			firstName: 'Emily',
			lastName: 'Davis',
			idNumber: '456123789',
			idType: 'Passport'
		},
		{
			firstName: 'David',
			lastName: 'Wilson',
			idNumber: '789456123',
			idType: "Driver's License"
		}
	];
</script>

<div class="flex flex-col gap-6 border rounded-lg px-4 py-6 bg-gray-50">
	<IsOInline />
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
				{#each randomData || [] as item, idx}
					<tr class="text-center">
						<td class="px-4 py-2 whitespace-nowrap">{item.firstName}</td>
						<td class="px-4 py-2 whitespace-nowrap">{item.lastName}</td>
						<td class="px-4 py-2">{item.idNumber}</td>
						<td class="px-4 py-2">{item.idType}</td>
						<td class="px-4 py-2">
							<button
								class="bg-blue-500 text-white py-1 px-3 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 mr-2"
							>
								Ver
							</button>
							<button
								class="bg-red-500 text-white py-1 px-3 rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
							>
								Eliminar
							</button>
						</td>
					</tr>
				{/each}
			</tbody>
		</table>
	</div>
</div>
