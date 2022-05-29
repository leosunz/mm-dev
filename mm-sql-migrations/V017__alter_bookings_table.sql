alter table app_public.booking rename column pickup_longitude to longitude;

alter table app_public.booking rename column pickup_latitude to latitude;

alter table app_public.booking
	add job_started_at timestamptz not null;

alter table app_public.booking
	add address text;

alter table app_public.booking drop column duration_minutes;

alter table app_public.booking
	add phone text;

alter table app_public.booking
	add email text;

alter table app_public.booking
	add car_registration_number varchar(10);

drop index app_public.booking_customer_id_idx;

create index booking_customer_id_idx
	on app_public.booking (customer_id);

alter table app_public.booking drop constraint booking_customer_id_fkey;

alter table app_public.booking drop column customer_id;

drop table app_public.customer;