// import * as functions from 'firebase-functions';

import { onMechanicWriteFn } from './onMechanicWriteFn';

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
// export const helloWorld = functions.https.onRequest((request, response) => {
//   response.send('Hello from Firebase!');
// });

export const onMechanicWrite2 = onMechanicWriteFn;
