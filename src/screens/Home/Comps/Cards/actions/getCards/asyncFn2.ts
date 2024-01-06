// ----------- import Packs
import {
  arrayUnion,
  collection,
  doc,
  getDocs,
  orderBy,
  query,
  setDoc,
  Timestamp,
  updateDoc,
} from 'firebase/firestore';
import { firestoreInit } from '../../../../../../config/firebase';

// ----------- import Internals

// ---------- set Async Call
export const asyncFn2 = async () => {
  // ---------- set Data

  // ---------------------------------
  // ---------------------- SET ASSIGN
  // ---------------------------------
  const refDomain = collection(firestoreInit, 'cycles');
  const q = query(refDomain, orderBy('createdAt'));

  // ---------- set Async Call
  return await getDocs(q);
};
