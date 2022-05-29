/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: AvailableMechanics
// ====================================================

export interface AvailableMechanics_getAvailableMechanics_nodes {
  mechanicId: any | null;
  timeSlotId: string | null;
  startTime: any | null;
}

export interface AvailableMechanics_getAvailableMechanics {
  /**
   * A list of `AvailableMechanic` objects.
   */
  nodes: AvailableMechanics_getAvailableMechanics_nodes[];
}

export interface AvailableMechanics {
  /**
   * Reads and enables pagination through a set of `AvailableMechanic`.
   */
  getAvailableMechanics: AvailableMechanics_getAvailableMechanics;
}

export interface AvailableMechanicsVariables {
  fromTime: any;
  toTime: any;
  geohash: string;
  jobIds: (any | null)[];
}
