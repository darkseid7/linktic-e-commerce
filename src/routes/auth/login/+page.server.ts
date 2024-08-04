import { redirect } from '@sveltejs/kit';

import type { Actions } from './$types';

export const actions: Actions = {
	login: async ({ request, locals: { supabase } }) => {
		const formData = await request.formData();
		const email = formData.get('email') as string;
		const password = formData.get('password') as string;

		const { data, error: errorMessage } = await supabase.auth.signInWithPassword({
			email,
			password
		});
		if (errorMessage) {
			return {
				errorMessage: 'Invalid email or password'
			};
		} else {
			redirect(303, '/form');
		}
	}
};
