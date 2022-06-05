import gql from 'graphql-tag';

export const MECHANIC = gql`
  query Mechanic($mechanicId: ID!) {
    mechanic(nodeId: $mechanicId) {
      id
      geohashes
      fullName
      email
      address
      phone
      travelTimeMinutes
      mechanicJobsByMechanicId {
        nodes {
          id
          jobId
        }
      }
    }
  }
`;

export const MECHANIC_TIME_SLOTS_NEXT90_DAYS = gql`
  query MechanicTimeSlotsNext90Days($id: ID!) {
    mechanic(nodeId: $id) {
      id
      timeSlots: vMechanicTimeSlotsNext90DaysByMechanicId {
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
    allMechanics {
      nodes {
        id
        fullName
        nodeId
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
    allJobs {
      nodes {
        description
        id
        minutesToComplete
        price
      }
    }
  }
`;
