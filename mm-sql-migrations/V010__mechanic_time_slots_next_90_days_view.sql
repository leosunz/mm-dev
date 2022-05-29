alter table app_public.working_time
    add if not exists minutes int;

DROP VIEW IF EXISTS app_public.v_mechanic_time_slots_next_90_days;
CREATE VIEW app_public.v_mechanic_time_slots_next_90_days AS
SELECT m.id || ts.id              as id,
       m.id                       as mechanic_id,
       wt.id                      as working_time_id,
       ts.id                      as time_slot_id,
       ts.start_time              as start_time,
       iso_week,
       SUM(wt.minutes)::int            as working_time_minutes,
       SUM(j.minutes_to_complete) as time_booked
FROM app_public.mechanic m
         CROSS JOIN (
    SELECT id,
           start_time,
           TO_CHAR(start_time, 'IW') as iso_week
    FROM app_public.time_slot
    WHERE start_time BETWEEN now() AND now() + interval '90' day
) AS ts
         LEFT JOIN app_public.working_time wt ON ts.id = wt.time_slot_id
         LEFT JOIN app_public.booking b ON ts.id = b.time_slot_id AND b.mechanic_id = wt.mechanic_id
         LEFT JOIN app_public.job j ON b.job_id = j.id


GROUP BY m.id, ts.id, wt.id, ts.start_time, iso_week
ORDER BY m.id, ts.id;

comment on view app_public.v_mechanic_time_slots_next_90_days is E'
@primaryKey mechanic_id, time_slot_id
@foreignKey (mechanic_id) references mechanic
@foreignKey (time_slot_id) references time_slot
@foreignKey (working_time_id) references working_time'
;

-- select from app_public.v_mechanic_time_slots_next_90_days WHERE

