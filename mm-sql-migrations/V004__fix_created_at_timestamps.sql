alter table app_public.mechanic drop column created_at;
alter table app_public.mechanic add column created_at timestamp default now();
