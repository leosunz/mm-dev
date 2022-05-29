import * as admin from 'firebase-admin';

const store = admin.firestore();

export async function deleteDocs(
  docsToDelete: FirebaseFirestore.QuerySnapshot,
) {
  const batch = store.batch();
  docsToDelete.forEach(doc => {
    batch.delete(doc.ref);
  });

  return await batch.commit();
}
