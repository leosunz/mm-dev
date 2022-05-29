
create table if not exists app_public.mechanic
(
	id uuid default uuid_generate_v4()
		constraint mechanic_pk
			primary key,
	full_name text not null,
	rating double precision default 5,
	created_at int
);


create table if not exists app_public.job
(
	id uuid default uuid_generate_v4()
		constraint job_pk
			primary key,
	description text not null,
	minutes_to_complete double precision not null,
	created_at int
);

create table if not exists app_public.mechanic_job (
    	id uuid default uuid_generate_v4()
		constraint mechanic_job_pk
			primary key,
			mechanic_id uuid references app_public.mechanic,
			job_id uuid references  app_public.job
);


create table app_public.time_slot
(
	id varchar(14) not null
		constraint time_slot_pk
			primary key,
	start_time timestamp not null
);

comment on column app_public.time_slot.id is 'E.g. 2019-12-31__09';

