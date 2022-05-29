CREATE OR REPLACE FUNCTION app_public.is_geohash_available(geohash Character Varying) RETURNS Boolean
    STABLE
    LANGUAGE SQL
AS
$$


SELECT exists(SELECT TRUE
              FROM app_public.mechanic m
              WHERE geohash = ANY (m.geohashes));


$$;
