import { JobDescription } from './types/JobDescription';
import { BehaviorSubject } from 'rxjs';
import { addDays, format } from 'date-fns';

export const MECHANIC_JOBS: JobDescription[] = [
  {
    id: 'oil',
    description: 'Oljebyte',
    minutesToComplete: 65,
  },
  {
    id: 'tires',
    description: 'Däckskifte',
    minutesToComplete: 25,
  },
];
export const DAYS_IN_FUTURE_TO_SET_AVAILABILITY = 30;

const timeSlotsInNearTimeDefault = () => {
  const today = new Date();
  const timeSlots = [];
  const daysInFutureToSetAvailability = DAYS_IN_FUTURE_TO_SET_AVAILABILITY;

  for (let i = 0; i < daysInFutureToSetAvailability; i++) {
    const dateStr = format(addDays(today, i), 'yyyy-MM-dd');
    timeSlots.push(dateStr + '__09');
    timeSlots.push(dateStr + '__13');
    timeSlots.push(dateStr + '__18');
  }
  return timeSlots;
};

['2019-10-10__09', '2019-11-10__09', '2019-11-10__13', '2019-11-10__18'];
export const timeSlotsInNearTime = new BehaviorSubject<string[]>(
  timeSlotsInNearTimeDefault(),
);

export const DISCOUNT_MULTIPLE_JOBS = 200;
export const TIME_CHUNK_MINUTES = 15;
export const TRAVEL_TIME = 15;
export const MINIMUM_TIME_AVAILABLE = 45;
export const MAXIMUM_TIME_AVAILABLE = 210;

export const MAP_PRECISION = 6;

export const DATES_PER_PAGE = 5;

export const imageSizes = [400, 750, 1024, 1250, 1500];
