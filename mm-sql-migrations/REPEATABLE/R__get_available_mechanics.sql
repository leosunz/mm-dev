create or replace function app_public.get_available_mechanics(from_time timestamp with time zone, to_time timestamp with time zone, geohash character varying, job_ids uuid[]) returns SETOF app_public.available_mechanic
	stable
	language sql
as $$
SELECT m.id AS mechanic_id, ts.id AS time_slot_id, start_time
FROM app_public.mechanic m
         INNER JOIN app_public.mechanic_job mj ON m.id = mj.mechanic_id AND mj.job_id = ANY (job_ids)
         INNER JOIN app_public.time_slot ts ON ts.start_time BETWEEN GREATEST(from_time, now()) AND to_time
WHERE geohash = ANY (m.geohashes)
    AND app_public.get_time_left(m.id, ts.id) >= app_public.get_total_time_assignment(m.id, job_ids)


$$;

/*
SELECT * from app_public.get_available_mechanics('2019-12-04T23:00:00.000Z', '"2019-12-19T22:59:59.999Z"',  '860880d9fffffff', '{"c6f7d1c3-b005-46e0-a087-7edc3999acc8"}')

 */