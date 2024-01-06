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
export const asyncFn1 = async () => {
  // ---------- set Data
  const iptChanges = getCtData(
    ct => ct.projectData?.assignments?.form.iptChanges,
  );

  // ---------------------------------
  // ---------------------- SET ASSIGN
  // ---------------------------------
  const getYear = new Date().getFullYear();
  const year = String(getYear);
  const refDomain = collection(firestoreInit, 'assignments');
  const refDomainDoc = doc(refDomain);
  const docId = refDomainDoc.id;

  const dataToAdd = {
    createdAt: Timestamp.now(),
    docId,
    ...iptChanges,
    year,
  };
  // ---------- set Async Call
  await setDoc(refDomainDoc, dataToAdd);

  // ---------------------------------
  // -------------------- UPDATE CYCLE
  // ---------------------------------
  const idToEdit: any = getCtData(ct => {
    const list = ct.projectData.cards.list;
    const found = Object.values(list).find(i => {
      return i.cardNumber === dataToAdd.card;
    });

    return found.docId;
  });

  const checkUpdt = !!dataToAdd.init;
  const checkUpdt2 = !!dataToAdd.end;

  if (checkUpdt) {
    const dataToUpdt3 = {
      state: 'opened',
    };
    const refDomain3 = collection(firestoreInit, 'cards');
    const refDomainDoc3 = doc(refDomain3, idToEdit);

    // ---------- set Async Call
    await updateDoc(refDomainDoc3, dataToUpdt3);
  }

  if (!checkUpdt2) return;

  const cycleID: any = dataToAdd.cycleID;
  const dataToUpdt2 = {
    [cycleID]: { lastDate: dataToAdd.end, updateAt: Timestamp.now() },
    state: 'opened',
  };

  if (!idToEdit) return;
  const refDomain2 = collection(firestoreInit, 'cards');
  const refDomainDoc2 = doc(refDomain2, idToEdit);

  // ---------- set Async Call
  await updateDoc(refDomainDoc2, dataToUpdt2);

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
