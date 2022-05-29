-- DROP FUNCTION IF EXISTS make_booking(mechanic_id Uuid,
--                                                    time_slot_id Varchar(14),
--                                                    job_ids Uuid,
--                                                    longitude Float,
--                                                    latitude Float);

SET SEARCH_PATH TO app_public;
CREATE OR REPLACE FUNCTION app_public.make_booking(mechanic_id Uuid,
                                        time_slot_id Varchar(14),
                                        job_ids Uuid[],
                                        longitude Float,
                                        latitude Float)
    RETURNS app_public.Booking
AS
$$
DECLARE
    booking          app_public.Booking;
    duration_minutes Float;
    time_left        Float;
    job_id           Uuid;
BEGIN

    -- Delete obsolete reservations
    DELETE FROM app_public.booking WHERE (
        status = 'reserved' AND
        created_at <= NOW() - INTERVAL '5 minutes'
    );


    -- double check time
    SELECT app_public.get_total_time_assignment(make_booking.mechanic_id, make_booking.job_ids) INTO duration_minutes;

    SELECT app_public.get_time_left(make_booking.mechanic_id, make_booking.time_slot_id) INTO time_left;

    IF duration_minutes > COALESCE(time_left, 0) THEN
        RAISE EXCEPTION 'Mechanic does not have enough time for those jobs in the time slot'
            USING HINT = 'Please retry with another time or mechanic';
    END IF;

    INSERT INTO app_public.booking AS pc
    (mechanic_id,
     time_slot_id,
     longitude,
     latitude,
     duration_minutes)
    VALUES (make_booking.mechanic_id,
            make_booking.time_slot_id,
            make_booking.longitude,
            make_booking.latitude,
            duration_minutes)
    RETURNING * INTO booking;

    FOREACH job_id IN ARRAY make_booking.job_ids
        LOOP
            INSERT INTO app_public.booking_job (booking_id, job_id) VALUES (booking.id, job_id);
        END LOOP;
    RETURN booking;
END;
    /*
     SELECT make_booking( array['a', 'b', 'c'] );
     */
$$
    LANGUAGE plpgsql VOLATILE
                     STRICT
;

--
--
-- SELECT get_total_time_assignment('0632ace5-3f5c-42a0-9fcb-11b321aa1875',
--                                  ARRAY ['f4406bfd-9df6-44ff-ae34-26bf5e2f514d'::Uuid]);
-- SELECT get_time_left('0632ace5-3f5c-42a0-9fcb-11b321aa1875', '2019-11-28__09');
--
-- SELECT app_public.make_booking(
--                mechanic_id := '0632ace5-3f5c-42a0-9fcb-11b321aa1875',
--                time_slot_id := '2019-11-29__09',
--                job_ids := ARRAY ['f4406bfd-9df6-44ff-ae34-26bf5e2f514d'::uuid],
--                longitude := 17.6917165,
--                latitude := 59.8328145);