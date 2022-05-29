/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: DeleteWorkingTime
// ====================================================

export interface DeleteWorkingTime_deleteWorkingTime_mechanic_vMechanicTimeSlotsNext90Days_nodes {
  id: string | null;
  mechanicId: any;
  timeSlotId: string;
  workingTimeMinutes: number | null;
}

export interface DeleteWorkingTime_deleteWorkingTime_mechanic_vMechanicTimeSlotsNext90Days {
  /**
   * A list of `VMechanicTimeSlotsNext90Day` objects.
   */
  nodes: DeleteWorkingTime_deleteWorkingTime_mechanic_vMechanicTimeSlotsNext90Days_nodes[];
}

export interface DeleteWorkingTime_deleteWorkingTime_mechanic {
  /**
   * Reads and enables pagination through a set of `VMechanicTimeSlotsNext90Day`.
   */
  vMechanicTimeSlotsNext90Days: DeleteWorkingTime_deleteWorkingTime_mechanic_vMechanicTimeSlotsNext90Days;
}

export interface DeleteWorkingTime_deleteWorkingTime {
  /**
   * Reads a single `Mechanic` that is related to this `WorkingTime`.
   */
  mechanic: DeleteWorkingTime_deleteWorkingTime_mechanic | null;
}

export interface DeleteWorkingTime {
  /**
   * Deletes a single `WorkingTime` using a unique key.
   */
  deleteWorkingTime: DeleteWorkingTime_deleteWorkingTime | null;
}

export interface DeleteWorkingTimeVariables {
  mechanicId: any;
  timeSlotId: string;
}
