// import { Mechanic } from '../../../../../src/client/app/core/types/Mechanic';
// import * as functions from 'firebase-functions';
// import {
//   MAXIMUM_TIME_AVAILABLE,
//   MINIMUM_TIME_AVAILABLE,
//   TIME_CHUNK_MINUTES,
// } from '../../../../../src/client/app/core/config';
// import { adminInitialized } from '../../../adminInitialized';
// import { splitIntoChunks } from '../../../helpers/split-into-chunks.fn';
// // import firebase from 'firebase';
// // import FieldValue = firebase.firestore.FieldValue;
// const admin = adminInitialized;
// const store = admin.firestore();
// type TimeSlotId = string;
// type MinutesAvailable = number;
//
// export function timeSlotMechanicAdd(
//   area: string,
//   allTimesAvailable: Record<TimeSlotId, MinutesAvailable>,
//   // timeSlot: string,
//   mechanic: Mechanic,
// ) {
//   // if (
//   //   timeAvailable < MINIMUM_TIME_AVAILABLE ||
//   //   timeAvailable > MAXIMUM_TIME_AVAILABLE
//   // ) {
//   //   throw new Error(
//   //     `Time available needs to be 1BETWEEN ${MINIMUM_TIME_AVAILABLE} and ${MAXIMUM_TIME_AVAILABLE} minutes. It is currently ${timeAvailable}`,
//   //   );
//   // }
//
//   // const timeLeft: any = {};
//
//   const batch = store.batch();
//   let i = 0;
//   Object.entries(allTimesAvailable).forEach(([timeSlotId, timeAvailable]) => {
//     splitIntoChunks(
//       timeAvailable,
//       TIME_CHUNK_MINUTES,
//       MINIMUM_TIME_AVAILABLE,
//       MAXIMUM_TIME_AVAILABLE,
//     ).forEach(timeLeftChunked => {
//       // if (!timeLeft[timeLeftThisTimeSlot]) {
//       //   timeLeft[timeLeftThisTimeSlot] = [];
//       // }
//       // timeLeft[timeLeftThisTimeSlot].push(timeSlotId);
//
//       // /${mechanic.mechId}__${timeLeftChunked}__${timeSlotId}
//       i++;
//       const ref = store.collection(`areas/${area}/timeSlotMechanic`).doc();
//       return batch.set(ref, {
//         mechId: mechanic.mechId,
//         viableJobs: mechanic.viableJobs,
//         timeLeft: timeLeftChunked,
//         timeSlot: timeSlotId,
//         // area,
//         // timeAvailable,
//         // timeLeft, // : timeLeft.map(tl => tl : FieldValue.arrayUnion(timeSlot)) },
//         // timeSlt,
//       });
//     });
//   });
//   console.log('---> Committing ' + i + ' instructions to batch.');
//   return batch.commit();
//
//   // return store
//   //   .doc(`areas/${area}/timeSlotMechanic/${mechanic.mechId}__${timeLeft}`)
//   //   .set({
//   //     mechId: mechanic.mechId,
//   //     viableJobs: mechanic.viableJobs,
//   //     // area,
//   //     // timeAvailable,
//   //     timeLeft, // : timeLeft.map(tl => tl : FieldValue.arrayUnion(timeSlot)) },
//   //     // timeSlt,
//   //   });
// }
