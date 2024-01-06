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
  where,
} from 'firebase/firestore';
import { firestoreInit } from '../../../../../../config/firebase';

// ----------- import Internals

// ---------- set Async Call
export const asyncFn4 = async () => {
  // ---------- set Data

  // ---------------------------------
  // ---------------------- SET ASSIGN
  // ---------------------------------
  const refDomain = collection(firestoreInit, 'assignments');
  const q = query(refDomain, where('group', '==', 'Todos os Grupos'));

  // ---------- set Async Call
  return await getDocs(q);
};
