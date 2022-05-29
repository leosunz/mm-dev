import { Job } from '../core/types/_all_types';
import { DISCOUNT_MULTIPLE_JOBS } from '../core/config';

export function calculateTotalPrice(jobs: Job[]) {
  if (!jobs || jobs.length === 0) {
    return null;
  }
  return (
    jobs.reduce((ack, job) => ack + job.price - DISCOUNT_MULTIPLE_JOBS, 0) +
    DISCOUNT_MULTIPLE_JOBS
  );
}
