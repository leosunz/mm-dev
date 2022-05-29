import gql from 'graphql-tag';

export const MECHANIC = gql`
  query Mechanic($mechanicId: UUID!) {
    mechanic(id: $mechanicId) {
      id
      geohashes
      fullName
      email
      address
      phone
      travelTimeMinutes
      mechanicJobs {
        nodes {
          id
          jobId
          job {
            description
            id
            minutesToComplete
          }
        }
      }
    }
  }
`;

export const MECHANIC_TIME_SLOTS_NEXT90_DAYS = gql`
  query MechanicTimeSlotsNext90Days($id: UUID!) {
    mechanic(id: $id) {
      id
      timeSlots: vMechanicTimeSlotsNext90Days {
        totalCount
        nodes {
          id
          mechanicId
          timeSlotId
          workingTimeId
          startTime
          isoWeek
          workingTimeMinutes
          timeBooked
        }
      }
    }
  }
`;

export const AVAILABLE_MECHANICS = gql`
  query AvailableMechanics(
    $fromTime: Datetime!
    $toTime: Datetime!
    $geohash: String!
    $jobIds: [UUID]!
  ) {
    getAvailableMechanics(
      fromTime: $fromTime
      toTime: $toTime
      geohash: $geohash
      jobIds: $jobIds
    ) {
      nodes {
        mechanicId
        timeSlotId
        startTime
      }
    }
  }
`;

export const ALL_MECHANICS = gql`
  query AllMechanics {
    mechanics {
      nodes {
        id
        fullName
      }
    }
  }
`;

export const ALL_TIME_SLOTS_BETWEEN = gql`
  query AllTimeSlotsBetween($fromTime: Datetime!, $toTime: Datetime!) {
    timeSlots(
      filter: {
        startTime: {
          greaterThanOrEqualTo: $fromTime
          lessThanOrEqualTo: $toTime
        }
      }
    ) {
      nodes {
        id
        startTime
      }
    }
  }
`;

export const ALL_JOBS = gql`
  query AllJobs {
    jobs {
      nodes {
        description
        id
        minutesToComplete
        price
      }
    }
  }
`;
