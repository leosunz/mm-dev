export interface JobDescription {
  id: JobId;
  description: string;
  minutesToComplete: number;
}

export type JobId = string;
