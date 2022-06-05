/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: Mechanic
// ====================================================

export interface Mechanic_mechanic_mechanicJobs_nodes_job {
  description: string;
  id: any;
  minutesToComplete: number;
}

export interface Mechanic_mechanic_mechanicJobs_nodes {
  id: any;
  jobId: any | null;
  /**
   * Reads a single `Job` that is related to this `MechanicJob`.
   */
  job: Mechanic_mechanic_mechanicJobs_nodes_job | null;
}

export interface Mechanic_mechanic_mechanicJobs {
  /**
   * A list of `MechanicJob` objects.
   */
  nodes: Mechanic_mechanic_mechanicJobs_nodes[];
}

export interface Mechanic_mechanic {
  id: any;
  nodeId?: string;
  geohashes: (string | null)[];
  fullName: string;
  email: string | null;
  address: string | null;
  phone: string | null;
  travelTimeMinutes: number | null;
  /**
   * Reads and enables pagination through a set of `MechanicJob`.
   */
  mechanicJobs: Mechanic_mechanic_mechanicJobs;
  mechanicJobsByMechanicId?: Mechanic_mechanic_mechanicJobs;
}

export interface Mechanic {
  mechanic: Mechanic_mechanic | null;
}

export interface MechanicVariables {
  mechanicId: any;
}
