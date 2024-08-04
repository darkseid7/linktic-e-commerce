import { supabase } from '$lib/supabaseClient';
import { redirect } from '@sveltejs/kit';
import type { Actions } from './$types';
export async function load() {}

export const actions: Actions = {
	createDataForm: async (event) => {
		let id = null;
		try {
			const dataForm = await event.request.formData();
			console.log(dataForm);

			const formDataObject = Object.fromEntries(dataForm.entries());

			const response = await supabase.from('UserForm').insert([formDataObject]).select();

			console.log(response);
			if (response.error) {
				throw response.error;
			}

			id = response.data[0].id;
		} catch (error) {
			console.error('error', error);
		}

		throw redirect(303, `/form/${id}`);
	}
};
