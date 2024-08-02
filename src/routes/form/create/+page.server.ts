import { supabase } from '$lib/supabaseClient';

export async function load() {}

export const actions = {
	createDataForm: async (event) => {
		try {
			const dataForm = await event.request.formData();
			console.log(dataForm);

			const formDataObject = Object.fromEntries(dataForm.entries());

			console.log(formDataObject);
			const response = await supabase.from('UserForm').insert([formDataObject]).select();

			console.log(response);
			if (response.error) {
				throw response.error;
			}

			return response;
		} catch (error) {
			console.error('error', error);
		}
	}
};
