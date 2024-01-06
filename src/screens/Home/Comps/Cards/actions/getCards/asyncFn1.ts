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
export const asyncFn1 = async () => {
  // ---------- set Data

  // ---------------------------------
  // ---------------------- SET ASSIGN
  // ---------------------------------
  const refDomain = collection(firestoreInit, 'cards');
  const q = query(refDomain, orderBy('cardNumber'));

  // ---------- set Async Call
  return await getDocs(q);
};
