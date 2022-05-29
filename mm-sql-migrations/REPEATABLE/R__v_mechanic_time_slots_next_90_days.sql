CREATE OR REPLACE VIEW app_public.v_mechanic_time_slots_next_90_days
            (id, mechanic_id, working_time_id, time_slot_id, start_time, iso_week, working_time_minutes, time_booked) AS
SELECT (m.id || (ts.id)::Text)    AS id,
       m.id                       AS mechanic_id,
       wt.id                      AS working_time_id,
       ts.id                      AS time_slot_id,
       ts.start_time,
       ts.iso_week,
       (sum(wt.minutes))::Integer AS working_time_minutes,
       sum(b.duration_minutes)    AS time_booked
FROM ((app_public.mechanic m
    CROSS JOIN (SELECT time_slot.id,
                       time_slot.start_time,
                       to_char(time_slot.start_time, 'IW'::Text) AS iso_week
                FROM app_public.time_slot
                WHERE ((time_slot.start_time >= now()) AND
                       (time_slot.start_time <= (now() + '90 days'::Interval DAY)))) ts)
    LEFT JOIN app_public.working_time wt ON   (ts.id)::Text = (wt.time_slot_id)::Text AND wt.mechanic_id = m.id
    )
         LEFT JOIN app_public.booking b
                   ON ((ts.id)::Text = (b.time_slot_id)::Text AND b.mechanic_id = wt.mechanic_id)
--          LEFT JOIN app_public.job j ON ((b.job_id = j.id)))
GROUP BY m.id, ts.id, wt.id, ts.start_time, ts.iso_week
ORDER BY m.id, ts.id;

COMMENT ON VIEW app_public.v_mechanic_time_slots_next_90_days IS '
@primaryKey mechanic_id, time_slot_id
@foreignKey (mechanic_id) references mechanic
@foreignKey (time_slot_id) references time_slot
@foreignKey (working_time_id) references working_time';


