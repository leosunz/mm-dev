import * as functions from "firebase-functions";
import { Mechanic } from "../../src/client/app/core/types/Mechanic";
import { onMechanicAreasChanged } from "./actions/onMechanicAreasChanged";

export const onMechanicWriteFn = functions.firestore
  .document("mechanics/{mechId}")
  .onWrite((change, context) => {
    const beforeData: Mechanic = change.before.data() as Mechanic;
    const afterData: Mechanic = change.after.data() as Mechanic;

    beforeData.mechId = context.params.mechId;
    afterData.mechId = context.params.mechId;

    console.log("------BEFORE:");
    console.log(beforeData.areas);
    console.log("------AFTER:");
    console.log(afterData.areas);
    if (!(beforeData && afterData)) {
      return;
    }

    if (beforeData.areas !== afterData.areas) {
      console.log("AREAS HAVE BEEN CHANGED");
      onMechanicAreasChanged(afterData, beforeData.areas, afterData.areas);
    } else {
      console.log("new areas not detected :(");
    }
    // console.log('context:', context);
  });
