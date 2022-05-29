/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: AvailableMechanicsQuery
// ====================================================

export interface AvailableMechanicsQuery_mechanics_nodes {
  id: any;
  fullName: string;
}

export interface AvailableMechanicsQuery_mechanics {
  /**
   * A list of `Mechanic` objects.
   */
  nodes: AvailableMechanicsQuery_mechanics_nodes[];
}

export interface AvailableMechanicsQuery {
  /**
   * Reads and enables pagination through a set of `Mechanic`.
   */
  mechanics: AvailableMechanicsQuery_mechanics | null;
}
