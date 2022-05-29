/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: CreateWorkingTime
// ====================================================

export interface CreateWorkingTime_createWorkingTime_mechanic_vMechanicTimeSlotsNext90Days_nodes {
  id: string | null;
  mechanicId: any;
  timeSlotId: string;
  workingTimeMinutes: number | null;
}

export interface CreateWorkingTime_createWorkingTime_mechanic_vMechanicTimeSlotsNext90Days {
  /**
   * A list of `VMechanicTimeSlotsNext90Day` objects.
   */
  nodes: CreateWorkingTime_createWorkingTime_mechanic_vMechanicTimeSlotsNext90Days_nodes[];
}

export interface CreateWorkingTime_createWorkingTime_mechanic {
  /**
   * Reads and enables pagination through a set of `VMechanicTimeSlotsNext90Day`.
   */
  vMechanicTimeSlotsNext90Days: CreateWorkingTime_createWorkingTime_mechanic_vMechanicTimeSlotsNext90Days;
}

export interface CreateWorkingTime_createWorkingTime {
  /**
   * Reads a single `Mechanic` that is related to this `WorkingTime`.
   */
  mechanic: CreateWorkingTime_createWorkingTime_mechanic | null;
}

export interface CreateWorkingTime {
  /**
   * Creates a single `WorkingTime`.
   */
  createWorkingTime: CreateWorkingTime_createWorkingTime | null;
}

export interface CreateWorkingTimeVariables {
  mechanicId: any;
  timeSlotId: string;
  minutes: number;
}
