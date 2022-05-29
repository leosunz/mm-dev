CREATE UNIQUE INDEX IF NOT EXISTS start_time__index
    ON app_public.time_slot (start_time);

ALTER TABLE app_public.booking
    ADD COLUMN IF NOT EXISTS duration_minutes Int;

drop function IF EXISTS app_public.get_available_mechanics(timestamp with time zone,timestamp with time zone,character varying,uuid[]);

DROP FUNCTION IF EXISTS app_public.get_available_mechanics(from_time Timestamp, to_time Timestamp,
    geohash Varchar(15), job_ids Uuid[]);

-- auto-generated definition
DROP TYPE IF EXISTS app_public.Available_Mechanic;
CREATE TYPE app_public.Available_Mechanic AS
    (
    mechanic_id Uuid,
    time_slot_id Varchar(14),
    start_time Timestamptz
    );


ALTER TABLE app_public.mechanic
    ADD COLUMN IF NOT EXISTS travel_time_minutes Int DEFAULT 15;


CREATE OR REPLACE FUNCTION app_public.get_total_time_assignment(mechanic_id Uuid, job_ids Uuid[])
    RETURNS Int AS
$$

SELECT (
               (
                   SELECT SUM(minutes_to_complete)::Int
                   FROM app_public.job j
                   WHERE j.id = ANY (job_ids)
               )
               + (
                   SELECT travel_time_minutes
                   FROM app_public.mechanic m
                   WHERE m.id = mechanic_id
               )
           );
$$ LANGUAGE SQL STABLE;

-- /*
-- SELECT *
-- FROM app_public.get_total_time_assignment('0632ace5-3f5c-42a0-9fcb-11b321aa1875',
--                                           '{f4406bfd-9df6-44ff-ae34-26bf5e2f514d}');
--*/

CREATE OR REPLACE FUNCTION app_public.get_time_left(mechanic_id Uuid, time_slot_id Varchar(14))
    RETURNS Int AS
$$

SELECT (
               (
                   SELECT minutes
                   FROM app_public.working_time wt
                   WHERE wt.mechanic_id = get_time_left.mechanic_id
                     AND wt.time_slot_id = get_time_left.time_slot_id
               )
               - COALESCE((
                              SELECT SUM(duration_minutes)
                              FROM app_public.booking b
                              WHERE b.mechanic_id = get_time_left.mechanic_id
                                AND b.time_slot_id = get_time_left.time_slot_id
                          ), 0)
           )::Int;
$$ LANGUAGE SQL STABLE;

--/*

-- SELECT *
-- FROM app_public.get_time_left('0632ace5-3f5c-42a0-9fcb-11b321aa1875', '2019-11-21__09');


--       SELECT minutes
--                    FROM app_public.working_time wt
--                    WHERE wt.mechanic_id = '0632ace5-3f5c-42a0-9fcb-11b321aa1875'
--                      AND wt.time_slot_id = '2019-11-21__09'

-- */
DROP FUNCTION IF EXISTS app_public.get_available_mechanics(from_time timestamptz, to_time timestamptz,
                                                              geohash Varchar(15), job_ids Uuid[]);
DROP FUNCTION IF EXISTS app_public.get_available_mechanics(from_time timestamp, to_time timestamp,
                                                              geohash Varchar(15), job_ids Uuid[]);



--/*
-- SELECT *
-- FROM app_public.get_available_mechanics(now()::Timestamp, (now() + INTERVAL '90' DAY)::timestamptz,
--                                         '860880d87ffffff'::Varchar(15), '{f4406bfd-9df6-44ff-ae34-26bf5e2f514d}')
-- */


--
-- CREATE OR REPLACE FUNCTION app_public.get_available_time_slots(from_time timestamp, to_time timestamp,
--                                                               geohash Varchar(15), job_ids Uuid[])
--     RETURNS Setof app_public.Available_Mechanic AS
-- $$
--
--     SELECT start_time FROM app_public.time_slot ts
--     LEFT JOIN (SELECT  app_public.get_available_mechanics(get_available_time_slots.from_time, get_available_time_slots.to_time, geohash, job_ids) )
--      WHERE ts.start_time BETWEEN get_available_time_slots.from_time AND get_available_time_slots.to_time
--
--
-- $$ LANGUAGE SQL STABLE;
--
-- --/*
--  SELECT * from app_public.get_available_mechanics(now()::timestamp, (now() + interval '90' DAY)::timestamp, '860880d87ffffff'::varchar(15), '{f4406bfd-9df6-44ff-ae34-26bf5e2f514d}')
-- -- */


