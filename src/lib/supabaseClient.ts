import { createClient } from '@supabase/supabase-js';

export const supabase = createClient(
	'https://ohjddcnfhotgguweaqjq.supabase.co',
	'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9oamRkY25maG90Z2d1d2VhcWpxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjI1NjUwNjgsImV4cCI6MjAzODE0MTA2OH0.egX88oeakiILpzg8BZ02TRhPuAHweM8FEr7HV9cbbsk'
);
