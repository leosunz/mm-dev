import { Mechanic } from "../../../../../src/client/app/core/types/Mechanic";

import { deleteDocs } from "../../../helpers/deleteDocs";
import { adminInitialized } from "../../../adminInitialized";
const admin = adminInitialized;
const store = admin.firestore();

export async function timeSlotMechanicRemoveMechanicArea(
  area: string,
  mechanic: Mechanic
) {
  const docsToDelete = await store
    .collection(`areas/${area}/timeSlotMechanic`)
    .where("mechId", "==", mechanic.mechId)
    // .where('area', '==', area)
    .get();
  return deleteDocs(docsToDelete).then(() => console.log("Docs are deleted."));
}
