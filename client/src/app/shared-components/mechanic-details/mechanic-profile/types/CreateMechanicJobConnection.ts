/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: CreateMechanicJobConnection
// ====================================================

export interface CreateMechanicJobConnection_createMechanicJob {
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId: string | null;
}

export interface CreateMechanicJobConnection {
  /**
   * Creates a single `MechanicJob`.
   */
  createMechanicJob: CreateMechanicJobConnection_createMechanicJob | null;
}

export interface CreateMechanicJobConnectionVariables {
  mechanicId: any;
  jobId: any;
}
