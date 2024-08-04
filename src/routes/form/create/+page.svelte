<script lang="ts">
	import { goto } from '$app/navigation';
	import { IsOInline } from '$lib';
	import { Input, Button, Select, RadioButton } from '$lib';

	import { tipo_documento, grupo_etario, cultura } from '$lib/utils';
	import { enhance } from '$app/forms';

	let selectedCulture = '';
	let selectedCultureIndex: number;
	let selectedNativeLanguage: boolean;
	let selectedEthnicOption: boolean;

	const handleCultureChange = (event) => {
		const selectElement = event.target;
		selectedCulture = selectElement.value;
		selectedCultureIndex = selectElement.selectedIndex;
	};

	const handelEthnicTerritory = (event) => {
		const selectOption = event.target.value;
		selectedEthnicOption = selectOption === 'Sí' ? true : false;
	};

	const handleNativeLanguage = (event) => {
		const selectOption = event.target.value;
		selectedNativeLanguage = selectOption === 'Sí' ? true : false;
	};
</script>

<div class="bg-white p-8 rounded-lg shadow-lg w-full max-w-3xl">
	<IsOInline />
	<Button text="regresar" on:click={() => goto('/form')} />
	<h1 class="text-2xl font-bold mb-4 text-center">Formulario</h1>

	<form method="post" action="?/createDataForm" use:enhance>
		<div class="grid grid-cols-2 gap-6">
			<Input name="primer_nombre" label="Primer Nombre*" required />
			<Input name="segundo_nombre" label="Segundo Nombre" />
			<Input name="primer_apellido" label="Primer Apellido*" required />
			<Input name="segundo_apellido" label="Segundo Apellido" />
			<Select name="tipo_documento" label="Tipo de documento*" items={tipo_documento} required />
			<Input name="numero_documento" label="Número de documento*" required />
			<Input type="date" name="f_nacimiento" label="Fecha de Nacimiento*" required />
			<Input type="date" name="f_dilig" label="Fecha de diligenciamiento" />
			<Input name="lugar_dilig" label="Lugar de diligenciamiento*" required />
			<Input name="telefono_fijo" label="Teléfono fijo" />
			<Input name="telefono_celular" label="Teléfono celular" />
			<Input type="email" name="correo_electronico" label="Correo electrónico" />
			<Input name="direccion_residencia" label="Dirección de residencia.*" required />
			<Select
				name="grupo_etario"
				label="¿A cuál Grupo etario pertenece?*"
				items={grupo_etario}
				required
			/>
			<Select
				name="cultura"
				label="¿De acuerdo con su cultura, pueblo o rasgos físicos es o se reconoce como?:*"
				items={cultura}
				required
				on:change={handleCultureChange}
			/>
			{#if selectedCultureIndex === 4}
				<div class=""></div>
				<Input
					name="pueblo"
					label="Si la respuesta anterior es Indígena, mencioné el pueblo al que pertenece"
					required
				/>
			{/if}
			<div />
			<RadioButton
				name="certificado_etnico"
				label="¿Usted cuenta con certificado de pertenencia étnica?*"
				required
			/>
			<div />

			<RadioButton
				name="territorio_etnico"
				label="¿Vive usted dentro de un Territorio étnico?*"
				required
				on:change={handelEthnicTerritory}
			/>
			{#if selectedEthnicOption && selectedCultureIndex === 4}
				<div />

				<Input name="resguardo_indigena" label="Resguardo indígena" />
				<Input name="comunidad_negra" label="Territorio colectivo de comunidad negra" />
				<div />
			{/if}

			<div />

			<RadioButton
				name="lengua_nativa"
				label="¿Usted habla la lengua nativa de su pueblo?*"
				required
				on:change={handleNativeLanguage}
			/>
			{#if selectedNativeLanguage}
				<Input
					name="lengua_cual"
					label="¿Usted habla la lengua nativa de su pueblo?, ¿Cuál?*"
					required
				/>
			{/if}
		</div>
		<div class="flex justify-end mt-5">
			<Button text="Enviar" />
		</div>
	</form>
</div>
