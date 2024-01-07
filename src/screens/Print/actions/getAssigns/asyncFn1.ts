import { collection, getDocs, query, where } from 'firebase/firestore';
import { firestoreInit } from '../../../../config/firebase';
// import { getData } from '../../../Home/Comps/Schedule/Form';

export const asyncFn1 = async () => {
  // const currCycle = await getData('currCycle');

  // if (!currCycle)
  //   throw new Error('getAssigns asyncFn --> currCycle Not Found!');

  // const cycleInfo =
  //   Object.values(cycles).find((i: any) => i.docId === currCycle) ?? [];
  // const currCycleID = cycleInfo.docId;
  // console.log({ cycleInfo });

  const dbRef = collection(firestoreInit, 'assignments');
  const q = query(dbRef, where('cycleID', '==', 'Wk86fCmDozTgrA5uTw53'));
  const searchUser = await getDocs(q);

  // ---------- set Users Found if any
  const arrAssignments: any = [];
  const objAssignments: any = {};
  searchUser.forEach(doc => {
    const obj = doc.data();

    arrAssignments.push(obj.docId);
    objAssignments[obj.docId] = obj;
  });

  return { arrAssignments, objAssignments };

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
