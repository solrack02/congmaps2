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
export const asyncFn3 = async () => {
  // ---------- set Data

  // ---------------------------------
  // ---------------------- SET ASSIGN
  // ---------------------------------
  const refDomain = collection(firestoreInit, 'assignments');
  // const q = query(refDomain, "createdAt", "desc");
  const q = query(refDomain);

  // ---------- set Async Call
  return await getDocs(q);
};
