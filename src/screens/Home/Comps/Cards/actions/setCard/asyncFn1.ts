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
export const asyncFn1 = async (fileUrl: string) => {
  // ---------- set Data
  const iptChanges = getCtData(ct => ct.projectData.cards.form.iptChanges);

  // ---------------------------------
  // ---------------------- SET ASSIGN
  // ---------------------------------
  const refDomain = collection(firestoreInit, 'cards');
  const refDomainDoc = doc(refDomain);
  const docId = refDomainDoc.id;

  const dataToAdd = {
    createdAt: Timestamp.now(),
    docId,
    ...iptChanges,
    imgUrl: fileUrl ?? '',
  };
  delete dataToAdd.imgCard;

  console.log({ dataToAdd });
  // ---------- set Async Call
  await setDoc(refDomainDoc, dataToAdd);

  // ---------------------------------
  // -------------------- UPDATE CYCLE
  // ---------------------------------
  // const cycleID = iptChanges?.cycleID;
  // const refArr = collection(firestoreInit, 'cycles');
  // const refArrDoc = doc(refArr, cycleID);
  // // const docId = refArrDoc.id;

  // const dataToAdd2 = {
  //   arrAssigns: arrayUnion(docId),
  // };
  // // ---------- set Async Call
  // await updateDoc(refArrDoc, dataToAdd2);

  // return { newID: docId };
};
