import { supabase } from '$lib/supabaseClient';

export async function load({ params }) {
	const { data, error } = await supabase.from('UserForm').select('*').eq('id', params._id).single();

	return {
		formRowDetail: data
	};
}
