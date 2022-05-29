import { difference } from "lodash";
import { Mechanic } from "../../../src/client/app/core/types/Mechanic";

// import * as functions from 'firebase-functions';
import {
  MAXIMUM_TIME_AVAILABLE,
  MINIMUM_TIME_AVAILABLE,
  TIME_CHUNK_MINUTES
} from "../../../src/client/app/core/config";
// import { adminInitialized } from '../../adminInitialized';
import { adminInitialized } from "../adminInitialized";
import { splitIntoChunks } from "../helpers/split-into-chunks.fn";
import { timeSlotMechanicRemoveMechanicArea } from "./areas/timeSlotMechanic/timeSlotMechanic-remove-mechanic-area";
// import firebase from 'firebase';
// import FieldValue = firebase.firestore.FieldValue;
const admin = adminInitialized;
const store = admin.firestore();
export function onMechanicAreasChanged(
  mechanic: Mechanic,
  areasBefore: string[],
  areasAfter: string[]
) {
  const newAreas = difference(areasAfter, areasBefore);
  addAreas(mechanic, newAreas);

  const deletedAreas = difference(areasBefore, areasAfter);
  deleteRemovedAreas(mechanic, deletedAreas);
}

function addAreas(mech: Mechanic, areas: string[]) {
  console.log("ADD THESE:", areas);
  let i = 0;
  // const batch = store.batch();
  areas.forEach(area => {
    Object.entries(mech.timeAvailable).forEach(
      // TODO should be changed to mech.timeLeft?
      async ([timeSlotId, timeAvailable]) => {
        const timeLeftMap: any = {};
        splitIntoChunks(
          timeAvailable,
          TIME_CHUNK_MINUTES,
          MINIMUM_TIME_AVAILABLE,
          MAXIMUM_TIME_AVAILABLE
        ).forEach(timeLeftChunked => {
          timeLeftMap["m" + timeLeftChunked] = timeAvailable >= timeLeftChunked;
        });
        // if (!timeLeft[timeLeftThisTimeSlot]) {
        //   timeLeft[timeLeftThisTimeSlot] = [];
        // }
        // timeLeft[timeLeftThisTimeSlot].push(timeSlotId);

        // /${mechanic.mechId}__${timeLeftChunked}__${timeSlotId}
        i++;
        console.log("Number: " + i);
        // const ref = store.collection(`timeSlotsInNearTime`).doc();
        // TODO change to doc('timeSlots/area+timeslot+mechId'
        return await store
          .doc(`timeSlots/${area}_${timeSlotId}_${mech.mechId}`)
          .set({
            mechId: mech.mechId,
            area,
            timeSlot: timeSlotId,
            viableJobs: mech.viableJobs,
            timeLeftMap,
            timeLeft: timeAvailable
            // area,
            // timeAvailable,
            // timeLeft, // : timeLeft.map(tl => tl : FieldValue.arrayUnion(timeSlot)) },
            // timeSlt,
          })
          .then(() => console.log("Added no " + i + "!"));
        // return;
        // });
      }
    );
  });
  // return batch.commit();

  // areas.forEach(area => {
  //   console.log('- AREA:', area);
  //   timeSlotMechanicAdd(area, mech.timeAvailable, mech)
  //     .then(() => {
  //       console.log(
  //         `++++ ADDED: areas/${area}/timeSlotMechanic ->${mech.mechId}`,
  //       );
  //     })
  //     .catch(rej => {
  //       return console.error(rej);
  //     });
  //
  // });
}

function deleteRemovedAreas(mechanic: Mechanic, areas: string[]) {
  console.log("REMOVE THESE:", areas);

  areas.forEach(area => {
    // timeSlotMechanicRemoveMechanicArea(area, mechanic).then(r => {});
  });
}
