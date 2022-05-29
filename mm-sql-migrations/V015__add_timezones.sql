drop view if exists app_public.v_mechanic_time_slots_next_90_days;
drop function if exists app_public.get_available_mechanics(from_time timestamp without time zone, to_time timestamp without time zone, geohash character varying, job_ids uuid[]);
drop function if exists app_public.get_available_mechanics(from_time timestamptz, to_time timestamptz, geohash character varying, job_ids uuid[]);
drop type if exists app_public.available_mechanic;
create type app_public.available_mechanic as
(
	mechanic_id uuid,
	time_slot_id varchar(14),
	start_time timestamptz
);




alter table app_public.time_slot alter column start_time type timestamptz using start_time::timestamptz;

alter table app_public.booking alter column job_completed_at type timestamptz using job_completed_at::timestamptz;

alter table app_public.booking alter column paid_at type timestamptz using paid_at::timestamptz;

alter table app_public.booking alter column created_at type timestamptz using created_at::timestamptz;
alter table app_public.job alter column created_at type timestamptz using created_at::timestamptz;


alter table app_public.mechanic alter column created_at type timestamptz using created_at::timestamptz;

alter table app_public.time_slot alter column start_time type timestamptz using start_time::timestamptz;






create view app_public.v_mechanic_time_slots_next_90_days(id, mechanic_id, working_time_id, time_slot_id, start_time, iso_week, working_time_minutes, time_booked) as
SELECT (m.id || (ts.id)::Text)    AS id,
       m.id                       AS mechanic_id,
       wt.id                      AS working_time_id,
       ts.id                      AS time_slot_id,
       ts.start_time,
       ts.iso_week,
       (sum(wt.minutes))::Integer AS working_time_minutes,
       sum(j.minutes_to_complete) AS time_booked
FROM ((((app_public.mechanic m
    CROSS JOIN (SELECT time_slot.id,
                       time_slot.start_time,
                       to_char(time_slot.start_time, 'IW'::Text) AS iso_week
                FROM app_public.time_slot
                WHERE ((time_slot.start_time >= now()) AND
                       (time_slot.start_time <= (now() + '90 days'::Interval DAY)))) ts)
    LEFT JOIN app_public.working_time wt ON (((ts.id)::Text = (wt.time_slot_id)::Text)))
    LEFT JOIN app_public.booking b ON ((((ts.id)::Text = (b.time_slot_id)::Text) AND (b.mechanic_id = wt.mechanic_id))))
         LEFT JOIN app_public.job j ON ((b.job_id = j.id)))
GROUP BY m.id, ts.id, wt.id, ts.start_time, ts.iso_week
ORDER BY m.id, ts.id;

comment on view app_public.v_mechanic_time_slots_next_90_days is '
@primaryKey mechanic_id, time_slot_id
@foreignKey (mechanic_id) references mechanic
@foreignKey (time_slot_id) references time_slot
@foreignKey (working_time_id) references working_time';


set timezone to 'Europe/Paris';

TRUNCATE app_public.time_slot cascade;

INSERT INTO app_public.time_slot (id, start_time)
SELECT cast(date_actual as varchar(10)) || '__09', date_actual + time '09:00+01'  from app_public.calendar where date_actual BETWEEN '2019-11-19' AND '2029-12-31'
UNION ALL
SELECT cast(date_actual as varchar(10)) || '__13', date_actual + time '13:00+01'  from app_public.calendar where date_actual BETWEEN '2019-11-19' AND '2029-12-31'
UNION ALL
SELECT cast(date_actual as varchar(10)) || '__18', date_actual + time '18:00+01'  from app_public.calendar where date_actual BETWEEN '2019-11-19' AND '2029-12-31';
