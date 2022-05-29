INSERT INTO app_public.time_slot (id, start_time)
SELECT cast(date_actual as varchar(10)) || '__09', date_actual + time '09:00'  from calendar where date_actual BETWEEN '2019-11-19' AND '2029-12-31'
UNION ALL
SELECT cast(date_actual as varchar(10)) || '__13', date_actual + time '13:00'  from calendar where date_actual BETWEEN '2019-11-19' AND '2029-12-31'
UNION ALL
SELECT cast(date_actual as varchar(10)) || '__18', date_actual + time '18:00'  from calendar where date_actual BETWEEN '2019-11-19' AND '2029-12-31';