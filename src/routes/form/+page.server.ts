import { supabase } from '$lib/supabaseClient';
import { redirect } from '@sveltejs/kit';

export const load = async ({ params, locals }) => {
	let { data: UserForm, error } = await supabase.from('UserForm').select('*');
	if (error) {
		return console.log(error);
	}

	return {
		formRows: UserForm
	};
};

export const actions = {
	deleteRow: async ({ request }) => {
		const formId = await request.formData();
		const { error } = await supabase.from('UserForm').delete().eq('id', formId.get('id'));

		if (error) {
			console.error('Error deleting row:', error);
			return {
				status: 500,
				body: { error: 'Error deleting row' }
			};
		}

		return {
			status: 200,
			body: { message: 'Row deleted successfully' }
		};
	}
};
