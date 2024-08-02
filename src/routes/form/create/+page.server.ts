import { supabase } from '$lib/supabaseClient';

export async function load() {
	// const { data } = await supabase.from('countries').select();
	// return {
	// 	countries: data ?? []
	// };
}

export const actions = {
	createDataForm: async (event) => {
		try {
			const dataForm = await event.request.formData();
			console.log(dataForm);
			const formDataObject = Object.fromEntries(dataForm.entries());

			console.log(formDataObject);
			const { data, error } = await supabase.from('UserForm').insert([formDataObject]).select();

			console.log(error);
			if (error) {
				throw error;
			}

			return data;
		} catch (error) {
			console.error('error', error);
		}
	}
};
