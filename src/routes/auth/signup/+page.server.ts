import { redirect } from '@sveltejs/kit';

import type { Actions } from './$types';

export const actions: Actions = {
	signup: async ({ request, locals: { supabase } }) => {
		const formData = await request.formData();
		const email = formData.get('email') as string;
		const password = formData.get('password') as string;

		console.log(formData);

		const { data, error } = await supabase.auth.signUp({ email, password });

		console.log(data);
		if (error) {
			console.error('Error signing up:', error);
			return {
				errorMessage: 'Error signing up'
			};
		}

		throw redirect(303, '/form');
	}
};
