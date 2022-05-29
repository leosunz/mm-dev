create table app_public.log_client_errors
(
	id serial
		constraint log_client_errors_pk
			primary key,
	ts timestamp default now(),
	context jsonb not null,
	error jsonb not null
);

alter table app_public.working_time
    drop constraint if exists working_time_pk;

alter table app_public.working_time
    drop constraint if exists working_time_pkey;

alter table app_public.working_time
	add constraint working_time_pk
		primary key (mechanic_id, time_slot_id);