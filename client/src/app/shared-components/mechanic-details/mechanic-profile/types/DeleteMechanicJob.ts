/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: DeleteMechanicJob
// ====================================================

export interface DeleteMechanicJob_deleteMechanicJob {
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId: string | null;
  deletedMechanicJobNodeId: string | null;
}

export interface DeleteMechanicJob {
  /**
   * Deletes a single `MechanicJob` using a unique key.
   */
  deleteMechanicJob: DeleteMechanicJob_deleteMechanicJob | null;
}

export interface DeleteMechanicJobVariables {
  mechanicJobId: any;
}
