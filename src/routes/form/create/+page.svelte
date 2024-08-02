<script lang="ts">
	import { goto } from '$app/navigation';
	import { Input, Button, Select, RadioButton } from '$lib';

	let tipo_documento = [
		'CC-Cédula de ciudadanía',
		'CE-Cédula de extranjería',
		'TI -Tarjeta de identidad',
		'NUIP/Registro Civil'
	];

	let grupo_etario = [
		'Primera Infancia (0-5 años)',
		'Infancia (6 - 11 años)',
		'Adolescencia (12 - 18 años)',
		'Juventud (14 - 26 años)',
		'Adultez (27- 59 años)',
		'Persona Mayor (60 años o más)'
	];

	let cultura = [
		'Negro(a), mulato(a), afrodescendiente, afrocolombiano(a)',
		'Raizal del archipiélago de San Andrés, Providencia y Santa Catalina',
		'Palenquero(a) de San Basilio',
		'Gitano o Rrom',
		'Indígena',
		'Ningún grupo étnico'
	];

	let selectedCulture = '';
	let selectedCultureIndex: number;
	const handleCultureChange = (event) => {
		const selectElement = event.target;
		selectedCulture = selectElement.value;
		selectedCultureIndex = selectElement.selectedIndex;
	};

	let selectedEthnicOption: boolean;
	const handelEthnicTerritory = (event) => {
		const selectOption = event.target.value;
		selectedEthnicOption = selectOption === 'Sí' ? true : false;
		console.log(selectedEthnicOption);
	};

	let selectedNativeLanguage: boolean;
	const handleNativeLanguage = (event) => {
		const selectOption = event.target.value;
		selectedNativeLanguage = selectOption === 'Sí' ? true : false;
		console.log(selectedEthnicOption);
	};
</script>

<div class="bg-white p-8 rounded-lg shadow-lg w-full max-w-3xl">
	<Button text="regresar" on:click={() => goto('/form')} />
	<h1 class="text-2xl font-bold mb-4">Formulario</h1>

	<form method="post" action="?/createDataForm">
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
