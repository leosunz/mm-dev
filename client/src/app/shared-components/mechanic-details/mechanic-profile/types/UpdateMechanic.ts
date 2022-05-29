/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: UpdateMechanic
// ====================================================

export interface UpdateMechanic_updateMechanic_mechanic {
  fullName: string;
  travelTimeMinutes: number | null;
}

export interface UpdateMechanic_updateMechanic {
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId: string | null;
  /**
   * The `Mechanic` that was updated by this mutation.
   */
  mechanic: UpdateMechanic_updateMechanic_mechanic | null;
}

export interface UpdateMechanic {
  __typename: 'Mutation';
  /**
   * Updates a single `Mechanic` using a unique key and a patch.
   */
  updateMechanic: UpdateMechanic_updateMechanic | null;
}

export interface UpdateMechanicVariables {
  mechanicId: any;
  fullName: string;
  phone?: string | null;
  email?: string | null;
  address?: string | null;
  travelTimeMinutes: number;
}
