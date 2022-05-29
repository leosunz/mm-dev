drop view app_public.v_mechanic_time_slots_next_90_days;

alter table app_public.booking alter column time_slot_id set not null;

alter table app_public.booking alter column status set default 'reserved';

alter table app_public.booking alter column longitude set not null;

alter table app_public.booking alter column latitude set not null;

alter table app_public.booking alter column job_started_at drop not null;

drop index app_public.booking_job_id_idx;

create index booking_job_id_idx
	on app_public.booking (job_id);

alter table app_public.booking drop constraint if exists booking_job_id_fkey;

alter table app_public.booking drop column if exists job_id;



create table app_public.booking_job
(
	id uuid default uuid_generate_v4() not null primary key,
	booking_id uuid references app_public.booking,
	job_id uuid references app_public.job
);


create index booking_job_job_id_idx
	on app_public.booking_job (job_id);

create index booking_job_booking_id_idx
	on app_public.booking_job (booking_id);

