// import { JobDescription } from '../core/types/JobDescription';
//
// export function getMinutesRequired(
//   jobs: JobDescription[],
//   travelTime: number,
//   timeChunkMinutes: number,
// ): number {
//   const minutesRequired = jobs.reduce(
//     (ackMinutes, job) => (ackMinutes += job.minutesToComplete),
//     travelTime,
//   );
//
//   // Should be rounded up to nearest timeChunk
//   return Math.ceil(minutesRequired / timeChunkMinutes) * timeChunkMinutes;
// }
