import { supabase } from '$lib/supabaseClient';

export async function load({ params }) {
	console.log(params);

	const { data, error } = await supabase.from('UserForm').select('*').eq('id', params._id).single();
	console.log(data);

	return {
		formRowDetail: data
	};
}
