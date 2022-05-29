create table app_public.working_time
(
	id uuid default uuid_generate_v4() primary key,
	mechanic_id uuid references app_public.mechanic on update cascade on delete cascade,
	time_slot_id varchar(14) references app_public.time_slot on update cascade on delete cascade
);

create table app_public.customer
(
	id uuid default uuid_generate_v4() primary key,
	full_name text not null,
	email text not null,
	phone varchar(40),
	address text,
	zip varchar(7),
	city text,
    created_at timestamp not null default now()
);

CREATE TYPE booking_status AS ENUM ('reserved', 'confirmed');

create table app_public.booking
(
	id uuid default uuid_generate_v4() primary key,
	mechanic_id uuid references app_public.mechanic on update cascade on delete cascade,
	customer_id uuid references app_public.customer on update cascade on delete cascade,
	time_slot_id varchar(14) references app_public.time_slot on update cascade on delete cascade,
	job_id uuid references app_public.job on update cascade on delete cascade,
	status booking_status not null,
	pickup_longitude float,
	pickup_latitude float,
	job_completed_at timestamp,
	paid_at timestamp,
	created_at timestamp not null default now()
);

