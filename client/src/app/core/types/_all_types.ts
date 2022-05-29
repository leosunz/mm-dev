import { AllJobs_jobs_nodes } from '../services/types/AllJobs';
import { AllTimeSlotsBetween_timeSlots_nodes } from '../services/types/AllTimeSlotsBetween';
import { AvailableMechanics_getAvailableMechanics_nodes } from '../services/types/AvailableMechanics';

export type Job = Partial<AllJobs_jobs_nodes>;

export type TimeSlot = Partial<AllTimeSlotsBetween_timeSlots_nodes>;
export type TimeSlotMechanic = AvailableMechanics_getAvailableMechanics_nodes;
