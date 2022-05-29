/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: CreateMechanicJob
// ====================================================

export interface CreateMechanicJob_createMechanicJob_mechanicJob {
  id: any;
  jobId: any | null;
  mechanicId: any | null;
}

export interface CreateMechanicJob_createMechanicJob {
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId: string | null;
  /**
   * The `MechanicJob` that was created by this mutation.
   */
  mechanicJob: CreateMechanicJob_createMechanicJob_mechanicJob | null;
}

export interface CreateMechanicJob {
  /**
   * Creates a single `MechanicJob`.
   */
  createMechanicJob: CreateMechanicJob_createMechanicJob | null;
}

export interface CreateMechanicJobVariables {
  mechanicId: any;
  jobId: any;
}
