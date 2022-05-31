/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: AllMechanics
// ====================================================

export interface AllMechanics_mechanics_nodes {
  id: any;
  fullName: string;
}

export interface AllMechanics_mechanics {
  /**
   * A list of `Mechanic` objects.
   */
  nodes: AllMechanics_mechanics_nodes[];
}

export interface AllMechanics {
  /**
   * Reads and enables pagination through a set of `Mechanic`.
   */
  allMechanics: AllMechanics_mechanics | null;
}
