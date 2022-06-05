create index booking_status_index
	on app_public.booking (status);
create index booking_created_at_index
	on app_public.booking (created_at);
