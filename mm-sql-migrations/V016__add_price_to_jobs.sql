alter table app_public.job
	add column if not exists price  double precision default 995 not null;

