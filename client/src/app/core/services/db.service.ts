import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Mechanic, MechId } from '../types/Mechanic';
import { MAXIMUM_TIME_AVAILABLE, MINIMUM_TIME_AVAILABLE } from '../config';
import { Apollo } from 'apollo-angular';
import { ApolloQueryResult } from 'apollo-client';
import { map } from 'rxjs/operators';
import {
  MechanicTimeSlotsNext90Days,
  MechanicTimeSlotsNext90DaysVariables,
} from './types/MechanicTimeSlotsNext90Days';
import {
  AvailableMechanics,
  AvailableMechanicsVariables,
} from './types/AvailableMechanics';
import { AllMechanics } from './types/AllMechanics';
import {
  AllTimeSlotsBetween,
  AllTimeSlotsBetweenVariables,
} from 'src/app/shared-components/select-time-slot/types/AllTimeSlotsBetween';
import {
  MakeReservation,
  MakeReservationVariables,
} from './types/MakeReservation';
import { DeleteWorkingTimeVariables } from './types/deleteWorkingTime';
import {
  ALL_JOBS,
  ALL_MECHANICS,
  ALL_TIME_SLOTS_BETWEEN,
  AVAILABLE_MECHANICS,
  MECHANIC,
  MECHANIC_TIME_SLOTS_NEXT90_DAYS,
} from './queries';
import {
  CREATE_WORKING_TIME,
  DELETE_WORKING_TIME,
  MAKE_RESERVATION,
  SET_GEOHASHES,
  UPDATE_WORKING_TIME,
} from './mutations';
import { SetGeohashesVariables } from './types/setGeohashes';
import IQuery = GQL.IQuery;

@Injectable({
  providedIn: 'root',
})
export class DbService {
  constructor(private apollo: Apollo) {}

  allJobs(): Observable<ApolloQueryResult<Pick<IQuery, 'jobs'>>> {
    const query = ALL_JOBS;
    return this.apollo.watchQuery<Pick<IQuery, 'jobs'>>({ query }).valueChanges;
  }

  getAllTimeSlotsBetween(variables: AllTimeSlotsBetweenVariables) {
    const query = ALL_TIME_SLOTS_BETWEEN;

    return this.apollo.watchQuery<AllTimeSlotsBetween>({
      query,
      variables,
    }).valueChanges;
  }

  allMechanics(): Observable<Partial<Mechanic>[]> {
    return this.apollo
      .watchQuery<AllMechanics>({
        query: ALL_MECHANICS,
      })
      .valueChanges.pipe(
        map(mqs =>
          mqs.data.mechanics.nodes.map(mq => {
            const m: Partial<Mechanic> = {
              fullName: mq.fullName,
              id: mq.id,
            };
            return m;
          }),
        ),
      );
  }

  availableMechanics(variables: AvailableMechanicsVariables) {
    const query = AVAILABLE_MECHANICS;

    return this.apollo.watchQuery<AvailableMechanics>({ query, variables })
      .valueChanges;
  }

  getMechanic(mechanicId: string) {
    return this.apollo.watchQuery<Pick<IQuery, 'mechanic'>>({
      query: MECHANIC,
      variables: { mechanicId },
    }).valueChanges;
  }

  getMechanicTimeSlots90Days(variables: MechanicTimeSlotsNext90DaysVariables) {
    const query = MECHANIC_TIME_SLOTS_NEXT90_DAYS;

    return this.apollo.watchQuery<MechanicTimeSlotsNext90Days>({
      query,
      variables,
      fetchPolicy: 'network-only',
    }).valueChanges;
  }

  setGeohashes(variables: SetGeohashesVariables) {
    return this.apollo.mutate({
      mutation: SET_GEOHASHES,
      variables,
    });
  }

  setWorkingTimeCheck(workingTimeMinutes): void {
    if (workingTimeMinutes === null) {
      return; // null means that the mechanic time should be removed
    }
    if (
      workingTimeMinutes < MINIMUM_TIME_AVAILABLE ||
      workingTimeMinutes > MAXIMUM_TIME_AVAILABLE
    ) {
      throw new Error(
        `Time available needs to be BETWEEN ${MINIMUM_TIME_AVAILABLE} and ${MAXIMUM_TIME_AVAILABLE} minutes. Value: ${workingTimeMinutes}`,
      );
    }
  }

  updateWorkingTime(mechanicId: MechId, timeSlotId: string, minutes: number) {
    this.setWorkingTimeCheck(minutes);
    const mutation = UPDATE_WORKING_TIME;
    const variables = { mechanicId, timeSlotId, minutes };

    return this.apollo.mutate({
      mutation,
      variables,
    });
  }

  getAllTimeSlots() {}

  createWorkingTime(mechanicId: MechId, timeSlotId: string, minutes: number) {
    this.setWorkingTimeCheck(minutes);
    const mutation = CREATE_WORKING_TIME;
    const variables = { mechanicId, timeSlotId, minutes };

    return this.apollo.mutate({
      mutation,
      variables,
    });
  }

  makeReservation(variables: MakeReservationVariables) {
    const mutation = MAKE_RESERVATION;
    return this.apollo.mutate<MakeReservation>({
      mutation,
      variables,
    });
  }

  deleteWorkingTime(variables: DeleteWorkingTimeVariables) {
    const mutation = DELETE_WORKING_TIME;
    return this.apollo.mutate({
      mutation,
      variables,
    });
  }
}
