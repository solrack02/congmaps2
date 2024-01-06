// ----------- import Packs
import {
  arrayUnion,
  collection,
  doc,
  setDoc,
  Timestamp,
  updateDoc,
} from 'firebase/firestore';
import { firestoreInit } from '../../../../../../config/firebase';
import { getCtData } from '../../../../../../config/centralData';

// ----------- import Internals

// ---------- set Async Call
export const asyncFnCard = async () => {
  // ---------- set Data
  const iptChanges = getCtData(
    ct => ct.projectData?.assignments?.form.iptChanges,
  );

  if (!iptChanges.end || iptChanges.end === '') return;

  const cycleID = getCtData(
    ct => ct.projectData?.currForm.assignEditData.cycleID,
  );
  const card = getCtData(ct => ct.projectData?.currForm.assignEditData.card);
  const idToEdit = getCtData(ct => {
    const allCards = Object.values(ct.projectData?.cards.list);
    const currCard = allCards.find(i => i.cardNumber === card);

    return currCard.docId;
  });

  // ---------------------------------
  // ---------------------- SET ASSIGN
  // ---------------------------------
  const refDomain = collection(firestoreInit, 'cards');
  const refDomainDoc = doc(refDomain, idToEdit);

  const dataToAdd = {
    cycleID: { lastDate: iptChanges.end, updateAt: Timestamp.now() },
  };

  // ---------- set Async Call
  await updateDoc(refDomainDoc, dataToAdd);

  // ---------------------------------
  // -------------------- UPDATE CYCLE
  // ---------------------------------
  // const cycleID = iptChanges?.cycleID;
  // const refArr = collection(firestoreInit, 'cycles');
  // const refArrDoc = doc(refArr, cycleID);
  // const docId = refArrDoc.id;

  // const dataToAdd2 = {
  //   arrAssigns: arrayUnion(docId),
  // };
  // ---------- set Async Call
  // await updateDoc(refArrDoc, dataToAdd2);

  // return { newID: docId };
};
