/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: MakeReservation
// ====================================================

export interface MakeReservation_makeBooking_booking {
  id: any;
}

export interface MakeReservation_makeBooking {
  booking: MakeReservation_makeBooking_booking | null;
}

export interface MakeReservation {
  makeBooking: MakeReservation_makeBooking | null;
}

export interface MakeReservationVariables {
  mechanicId: any;
  jobsIds: (any | null)[];
  timeSlotId: string;
  longitude: number;
  latitude: number;
}
