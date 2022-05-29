/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: AllTimeSlotsBetween
// ====================================================

export interface AllTimeSlotsBetween_timeSlots_nodes {
  /**
   * E.g. 2019-12-31__09
   */
  id: string;
  startTime: any;
}

export interface AllTimeSlotsBetween_timeSlots {
  /**
   * A list of `TimeSlot` objects.
   */
  nodes: AllTimeSlotsBetween_timeSlots_nodes[];
}

export interface AllTimeSlotsBetween {
  /**
   * Reads and enables pagination through a set of `TimeSlot`.
   */
  timeSlots: AllTimeSlotsBetween_timeSlots | null;
}

export interface AllTimeSlotsBetweenVariables {
  fromTime: any;
  toTime: any;
}
