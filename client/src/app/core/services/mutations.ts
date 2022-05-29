import gql from 'graphql-tag';

export const SET_GEOHASHES = gql`
  mutation SetGeohashes($id: UUID!, $geohashes: [String]!) {
    updateMechanic(input: { patch: { geohashes: $geohashes }, id: $id }) {
      clientMutationId
      mechanic {
        id
        geohashes
      }
    }
  }
`;

export const UPDATE_WORKING_TIME = gql`
  mutation UpdateWorkingTime(
    $mechanicId: UUID!
    $timeSlotId: String!
    $minutes: Int!
  ) {
    updateWorkingTime(
      input: {
        mechanicId: $mechanicId
        timeSlotId: $timeSlotId
        patch: { minutes: $minutes }
      }
    ) {
      mechanic {
        vMechanicTimeSlotsNext90Days {
          nodes {
            id
            mechanicId
            timeSlotId
            workingTimeMinutes
          }
        }
      }
    }
  }
`;

export const CREATE_WORKING_TIME = gql`
  mutation CreateWorkingTime(
    $mechanicId: UUID!
    $timeSlotId: String!
    $minutes: Int!
  ) {
    createWorkingTime(
      input: {
        workingTime: {
          mechanicId: $mechanicId
          timeSlotId: $timeSlotId
          minutes: $minutes
        }
      }
    ) {
      mechanic {
        vMechanicTimeSlotsNext90Days {
          nodes {
            id
            mechanicId
            timeSlotId
            workingTimeMinutes
          }
        }
      }
    }
  }
`;

export const MAKE_RESERVATION = gql`
  mutation MakeReservation(
    $mechanicId: UUID!
    $jobsIds: [UUID]!
    $timeSlotId: String!
    $longitude: Float!
    $latitude: Float!
  ) {
    makeBooking(
      input: {
        mechanicId: $mechanicId
        jobIds: $jobsIds
        timeSlotId: $timeSlotId
        longitude: $longitude
        latitude: $latitude
      }
    ) {
      booking {
        id
      }
    }
  }
`;

export const DELETE_WORKING_TIME = gql`
  mutation DeleteWorkingTime($mechanicId: UUID!, $timeSlotId: String!) {
    deleteWorkingTime(
      input: { mechanicId: $mechanicId, timeSlotId: $timeSlotId }
    ) {
      mechanic {
        vMechanicTimeSlotsNext90Days {
          nodes {
            id
            mechanicId
            timeSlotId
            workingTimeMinutes
          }
        }
      }
    }
  }
`;
