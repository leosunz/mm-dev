create table app_public.contact_when_geohash_available
(
	id uuid default uuid_generate_v4() PRIMARY KEY ,
	geohash varchar(15) not null,
	email text,
	created_at timestamptz default now()
);