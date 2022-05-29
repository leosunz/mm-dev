/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: MechanicQuery
// ====================================================

export interface MechanicQuery_mechanic_mechanicJobs_nodes_job {
  description: string;
  id: any;
  minutesToComplete: number;
}

export interface MechanicQuery_mechanic_mechanicJobs_nodes {
  id: any;
  jobId: any | null;
  /**
   * Reads a single `Job` that is related to this `MechanicJob`.
   */
  job: MechanicQuery_mechanic_mechanicJobs_nodes_job | null;
}

export interface MechanicQuery_mechanic_mechanicJobs {
  /**
   * A list of `MechanicJob` objects.
   */
  nodes: MechanicQuery_mechanic_mechanicJobs_nodes[];
}

export interface MechanicQuery_mechanic {
  id: any;
  geohashes: (string | null)[];
  fullName: string;
  email: string | null;
  address: string | null;
  phone: string | null;
  travelTimeMinutes: number | null;
  /**
   * Reads and enables pagination through a set of `MechanicJob`.
   */
  mechanicJobs: MechanicQuery_mechanic_mechanicJobs;
}

export interface MechanicQuery {
  mechanic: MechanicQuery_mechanic | null;
}

export interface MechanicQueryVariables {
  mechanicId: any;
}
