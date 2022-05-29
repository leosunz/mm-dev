CREATE INDEX ON "app_public"."booking"("mechanic_id");
CREATE INDEX ON "app_public"."booking"("customer_id");
CREATE INDEX ON "app_public"."booking"("time_slot_id");
CREATE INDEX ON "app_public"."booking"("job_id");
CREATE INDEX ON "app_public"."mechanic_job"("job_id");
CREATE INDEX ON "app_public"."working_time"("mechanic_id");
CREATE INDEX ON "app_public"."mechanic_job"("mechanic_id");
