/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: SetGeohashes
// ====================================================

export interface SetGeohashes_updateMechanic_mechanic {
  id: any;
  geohashes: (string | null)[];
}

export interface SetGeohashes_updateMechanic {
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId: string | null;
  /**
   * The `Mechanic` that was updated by this mutation.
   */
  mechanic: SetGeohashes_updateMechanic_mechanic | null;
}

export interface SetGeohashes {
  /**
   * Updates a single `Mechanic` using a unique key and a patch.
   */
  updateMechanic: SetGeohashes_updateMechanic | null;
}

export interface SetGeohashesVariables {
  id: any;
  geohashes: (string | null)[];
}
