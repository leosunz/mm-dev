/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: AllJobs
// ====================================================

export interface AllJobs_jobs_nodes {
  description: string;
  id: any;
  minutesToComplete: number;
  price: number;
}

export interface AllJobs_jobs {
  /**
   * A list of `Job` objects.
   */
  nodes: AllJobs_jobs_nodes[];
}

export interface AllJobs {
  /**
   * Reads and enables pagination through a set of `Job`.
   */
  jobs: AllJobs_jobs | null;
}
