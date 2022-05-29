/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: UpdateWorkingTime
// ====================================================

export interface UpdateWorkingTime_updateWorkingTime_mechanic_vMechanicTimeSlotsNext90Days_nodes {
  id: string | null;
  mechanicId: any;
  timeSlotId: string;
  workingTimeMinutes: number | null;
}

export interface UpdateWorkingTime_updateWorkingTime_mechanic_vMechanicTimeSlotsNext90Days {
  /**
   * A list of `VMechanicTimeSlotsNext90Day` objects.
   */
  nodes: UpdateWorkingTime_updateWorkingTime_mechanic_vMechanicTimeSlotsNext90Days_nodes[];
}

export interface UpdateWorkingTime_updateWorkingTime_mechanic {
  /**
   * Reads and enables pagination through a set of `VMechanicTimeSlotsNext90Day`.
   */
  vMechanicTimeSlotsNext90Days: UpdateWorkingTime_updateWorkingTime_mechanic_vMechanicTimeSlotsNext90Days;
}

export interface UpdateWorkingTime_updateWorkingTime {
  /**
   * Reads a single `Mechanic` that is related to this `WorkingTime`.
   */
  mechanic: UpdateWorkingTime_updateWorkingTime_mechanic | null;
}

export interface UpdateWorkingTime {
  /**
   * Updates a single `WorkingTime` using a unique key and a patch.
   */
  updateWorkingTime: UpdateWorkingTime_updateWorkingTime | null;
}

export interface UpdateWorkingTimeVariables {
  mechanicId: any;
  timeSlotId: string;
  minutes: number;
}
