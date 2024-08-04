<script>
	import { goto } from '$app/navigation';

	import { Button } from '$lib';

	export let data;

	const {
		primer_nombre,
		segundo_nombre,
		primer_apellido,
		segundo_apellido,
		tipo_documento,
		numero_documento,
		f_nacimiento,
		f_dilig,
		lugar_dilig,
		telefono_fijo,
		telefono_celular,
		correo_electronico,
		direccion_residencia,
		grupo_etario,
		cultura,
		pueblo,
		certificado_etnico,
		territorio_etnico,
		resguardo_indigena,
		comunidad_negra,
		lengua_nativa,
		lengua_cual
	} = data.formRowDetail;
</script>

<div class="bg-white p-8 rounded-lg shadow-lg w-full max-w-3xl">
	<Button text="regresar" on:click={() => goto('/form')} />

	<h1 class="text-2xl font-bold mb-4 text-center">Informacion del formulario</h1>
	<hr />

	<div class="grid grid-cols-2 mt-2 gap-4">
		<p class="text-lg">Primer Nombre: <strong>{primer_nombre}</strong></p>
		<p class="text-lg">Segundo Nombre: <strong>{segundo_nombre || '-'}</strong></p>
		<p class="text-lg">Primer Apellido: <strong>{primer_apellido || '-'}</strong></p>
		<p class="text-lg">Segundo Apellido: <strong>{segundo_apellido || '-'}</strong></p>
		<p class="text-lg">Tipo de documento: <strong>{tipo_documento || '-'}</strong></p>
		<p class="text-lg">Número de documento: <strong>{numero_documento || '-'}</strong></p>
		<p class="text-lg">Fecha de Nacimiento: <strong>{f_nacimiento || '-'}</strong></p>
		<p class="text-lg">Fecha de diligenciamiento: <strong>{f_dilig || '-'}</strong></p>
		<p class="text-lg">Lugar de diligenciamiento: <strong>{lugar_dilig || '-'}</strong></p>
		<p class="text-lg">Teléfono fijo: <strong>{telefono_fijo || '-'}</strong></p>
		<p class="text-lg">Teléfono celular: <strong>{telefono_celular || '-'}</strong></p>
		<p class="text-lg">Correo electrónico: <strong>{correo_electronico || '-'}</strong></p>
		<p class="text-lg">Dirección de residencia: <strong>{direccion_residencia || '-'}</strong></p>

		<p class="text-lg">¿A cuál Grupo etario pertenece?: <strong>{grupo_etario || '-'}</strong></p>

		<p class="text-lg">
			¿De acuerdo con su cultura, pueblo o rasgos físicos es o se reconoce como?:
			<strong>
				{cultura || '-'}
			</strong>
		</p>

		{#if cultura === 'Indígena'}
			<div />
			<p class="text-lg">
				pueblo al que pertenece:
				<strong>
					{pueblo || '-'}
				</strong>
			</p>
		{/if}

		<div />
		<p class="text-lg">
			¿Cuenta con certificado de pertenencia étnica?:
			<strong>
				{certificado_etnico || '-'}
			</strong>
		</p>
		<div />

		<p class="text-lg">
			¿Vive dentro de un Territorio étnico?:
			<strong>
				{territorio_etnico || '-'}
			</strong>
		</p>

		{#if cultura === 'Indígena' && territorio_etnico === 'Sí'}
			<div />

			<p class="text-lg">
				Resguardo indígena:
				<strong>
					{resguardo_indigena || '-'}
				</strong>
			</p>
			<p class="text-lg">
				Territorio colectivo de comunidad negra:
				<strong>
					{comunidad_negra || '-'}
				</strong>
			</p>
		{/if}

		<p class="text-lg">
			¿Habla la lengua nativa de su pueblo?:
			<strong>
				{lengua_nativa || '-'}
			</strong>
		</p>

		{#if lengua_nativa === 'Sí'}
			<p class="text-lg">
				¿Cuál?:
				<strong>
					{lengua_cual || '-'}
				</strong>
			</p>
		{/if}
	</div>
</div>
