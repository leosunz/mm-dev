/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: MechanicTimeSlotsNext90Days
// ====================================================

export interface MechanicTimeSlotsNext90Days_mechanic_timeSlots_nodes {
  id: string | null;
  mechanicId: any;
  timeSlotId: string;
  workingTimeId: any | null;
  startTime: any | null;
  isoWeek: string | null;
  workingTimeMinutes: number | null;
  timeBooked: any | null;
}

export interface MechanicTimeSlotsNext90Days_mechanic_timeSlots {
  /**
   * The count of *all* `VMechanicTimeSlotsNext90Day` you could get from the connection.
   */
  totalCount: number;
  /**
   * A list of `VMechanicTimeSlotsNext90Day` objects.
   */
  nodes: MechanicTimeSlotsNext90Days_mechanic_timeSlots_nodes[];
}

export interface MechanicTimeSlotsNext90Days_mechanic {
  id: any;
  /**
   * Reads and enables pagination through a set of `VMechanicTimeSlotsNext90Day`.
   */
  timeSlots: MechanicTimeSlotsNext90Days_mechanic_timeSlots;
}

export interface MechanicTimeSlotsNext90Days {
  mechanic: MechanicTimeSlotsNext90Days_mechanic | null;
}

export interface MechanicTimeSlotsNext90DaysVariables {
  id: any;
}
