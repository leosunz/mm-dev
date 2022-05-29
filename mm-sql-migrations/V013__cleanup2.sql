alter table app_public.working_time
    drop constraint working_time_pk;

alter table app_public.working_time
	add constraint working_time_pk
		primary key (mechanic_id, time_slot_id);