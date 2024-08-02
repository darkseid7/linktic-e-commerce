let grupo_etario = [
	'Primera Infancia (0-5 años)',
	'Infancia (6 - 11 años)',
	'Adolescencia (12 - 18 años)',
	'Juventud (14 - 26 años)',
	'Adultez (27- 59 años)',
	'Persona Mayor (60 años o más)'
];

let formulario = [
	{
		pregunta: '01. Primer Nombre*',
		nombre: 'primer_nombre',
		tipo: 'text',
		opciones: [],
		value: '',
		pattern: '.*',
		requerido: true
	},
	{
		pregunta: '02. Segundo Nombre',
		nombre: 'segundo_nombre',
		tipo: 'text',
		opciones: [],
		value: '',
		pattern: '.*',
		requerido: false
	},
	{
		pregunta: '03. Primer Apellido*',
		nombre: 'primer_apellido',
		tipo: 'text',
		opciones: [],
		value: '',
		pattern: '.*',
		requerido: true
	},
	{
		pregunta: '04. Segundo Apellido',
		nombre: 'segundo_apellido',
		tipo: 'text',
		opciones: [],
		value: '',
		pattern: '.*',
		requerido: false
	},
	{
		pregunta: '05. Tipo de documento*',
		nombre: 'tipo_documento',
		tipo: 'select',
		opciones: tipo_documento,
		value: '',
		pattern: '.*',
		requerido: true
	},

	{
		pregunta: '06. Número de documento*',
		nombre: 'número_documento',
		tipo: 'text',
		opciones: [],
		value: '',
		pattern: '^[0-9]+$',
		requerido: true
	},
	{
		pregunta: '07. Fecha de Nacimiento*',
		nombre: 'f_nacimiento',
		tipo: 'date',
		opciones: [],
		value: '',
		pattern: '.*',
		requerido: true
	},
	{
		pregunta: '08. Fecha de diligenciamiento',
		nombre: 'f_dilig',
		tipo: 'date',
		opciones: [],
		value: '',
		pattern: '.*',
		requerido: false
	},
	{
		pregunta: '09. Lugar de diligenciamiento*',
		nombre: 'lugar_dilig',
		tipo: 'text',
		opciones: [],
		value: '',
		pattern: '.*',
		requerido: true
	},
	{
		pregunta: '10. Teléfono fijo',
		nombre: 'teléfono_fijo',
		tipo: 'text',
		opciones: [],
		value: '',
		pattern: String.raw`\d{7,10}`,
		requerido: false
	},
	{
		pregunta: '11. Teléfono celular',
		nombre: 'teléfono_celular',
		tipo: 'text',
		opciones: [],
		value: '',
		pattern: String.raw`\d{7,10}`,
		requerido: false
	},
	{
		pregunta: '12. Correo electrónico',
		nombre: 'correo_electrónico',
		tipo: 'text',
		opciones: [],
		value: '',
		pattern: '.*',
		requerido: false
	},
	{
		pregunta: '13. Dirección de residencia.*',
		nombre: 'dirección_residencia',
		tipo: 'text',
		opciones: [],
		value: '',
		pattern: '.*',
		requerido: true
	},
	{
		pregunta: '14. ¿A cuál Grupo etario pertenece?*',
		nombre: 'grupo_etario',
		tipo: 'select',
		opciones: grupo_etario,
		value: '',
		pattern: '.*',
		requerido: true
	},
	{
		pregunta: '15. ¿De acuerdo con su cultura, pueblo o rasgos físicos es o se reconoce como?:*',
		nombre: 'cultura',
		tipo: 'select',
		opciones: cultura,
		value: '',
		pattern: '.*',
		requerido: true
	},
	{
		pregunta: '16. Si la respuesta anterior es Indígena, mencioné el pueblo al que pertenece',
		nombre: 'pueblo',
		tipo: 'textfield',
		opciones: [],
		value: '',
		pattern: '.*',
		requerido: true,
		depende_de: [{ campo: 'cultura', valor: 'Indígena' }]
	},
	{
		pregunta: '17. ¿Usted cuenta con certificado de pertenencia étnica?*',
		nombre: 'certificado_etnico',
		tipo: 'radio button',
		opciones: [],
		value: '',
		pattern: '.*',
		requerido: true
	},
	{
		pregunta: '18. ¿Vive usted dentro de un Territorio étnico?*',
		nombre: 'territorio_etnico',
		tipo: 'radio button',
		opciones: [],
		value: '',
		pattern: '.*',
		requerido: true,
		depende_de: undefined
	},

	{
		pregunta: '19. Resguardo indígena',
		nombre: 'resguardo_indigena',
		tipo: 'textfield',
		opciones: [],
		value: '',
		pattern: '.*',
		requerido: false,
		depende_de: [
			{ campo: 'cultura', valor: 'Indígena' },
			{ campo: 'territorio_etnico', valor: 'SI' }
		]
	},
	{
		pregunta: '20.2. Territorio colectivo de comunidad negra',
		nombre: 'comunidad_negra',
		tipo: 'textfield',
		opciones: [],
		value: '',
		pattern: '.*',
		requerido: false,
		depende_de: [
			{ campo: 'cultura', valor: 'Indígena' },
			{ campo: 'territorio_etnico', valor: 'SI' }
		]
	},
	{
		pregunta: '21. ¿Usted habla la lengua nativa de su pueblo?*',
		nombre: 'lengua_nativa',
		tipo: 'radio button',
		opciones: [],
		value: '',
		pattern: '.*',
		requerido: true
	},

	{
		pregunta: '21.1. ¿Usted habla la lengua nativa de su pueblo?, ¿Cuál?*',
		nombre: 'lengua_cual',
		tipo: 'textfield',
		opciones: [],
		value: '',
		pattern: '.*',
		requerido: true,
		depende_de: [{ campo: 'lengua_nativa', valor: 'SI' }]
	}
];
