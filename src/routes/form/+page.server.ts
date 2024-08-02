export const actions = {
	default: async ({ request }) => {
		// TODO log the user in
		console.log(await request.formData());
	}
};
