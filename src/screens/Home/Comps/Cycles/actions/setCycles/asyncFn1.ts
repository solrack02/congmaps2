// ----------- import Packs
import {
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
  const iptChanges = getCtData(ct => ct.projectData.cycles.form.iptChanges);

  // ---------- set Data Base Reference
  // if (!!weekendMeetingTime) {
  const refDomain = collection(firestoreInit, 'cycles');
  const refDomainDoc = doc(refDomain);

  const dataToAdd = {
    createdAt: Timestamp.now(),
    docId: refDomainDoc.id,
    arrAssigns: [],
    ...iptChanges,
  };
  // ---------- set Async Call
  await setDoc(refDomainDoc, dataToAdd);

  // ----------- set Return

  // }

  return {};
};
