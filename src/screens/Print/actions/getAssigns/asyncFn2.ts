import { collection, getDocs, query, where } from 'firebase/firestore';
import { firestoreInit } from '../../../../config/firebase';

export const asyncFn2 = async () => {
  // const currCycle = await getData('currCycle');
  // if (!currCycle)
  //   throw new Error('getAssigns asyncFn --> currCycle Not Found!');

  // const cycleInfo =
  //   Object.values(cycles.list).find((i: any) => i.docId === currCycle) ?? [];
  // const currYear = cycleInfo.year;
  // console.log({ currYear });

  const dbRef = collection(firestoreInit, 'cycles');
  // const q = query(dbRef, where('year', '==', currYear));
  const searchDocs = await getDocs(dbRef);

  // ---------- set Users Found if any
  // const arrAssignments: any = [];
  const objCycles: any = {};
  searchDocs.forEach(doc => {
    const obj = doc.data();
    // arrAssignments.push(obj.docId);
    objCycles[obj.docId] = obj;
  });

  return objCycles;

  // ----------OLD CALL
  // const dbRef = collection(firestoreInit, 'assignments');
  // const searchUser = await getDocs(dbRef);

  // // ---------- set Users Found if any
  // const arrAssignments: any = [];
  // const objAssignments: any = {};
  // searchUser.forEach(doc => {
  //   const obj = doc.data();

  //   arrAssignments.push(obj.docId);
  //   objAssignments[obj.docId] = obj;
  // });
  // //   const condNewUser = arrAssignments.length === 0;

  // return { arrAssignments, objAssignments };
};
