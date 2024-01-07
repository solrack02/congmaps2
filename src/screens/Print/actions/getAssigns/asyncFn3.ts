import { collection, getDocs, query, where } from 'firebase/firestore';
import { firestoreInit } from '../../../../config/firebase';
// import { getData } from '../../../Home/Comps/Schedule/Form';

export const asyncFn3 = async () => {
  console.log('INIT GET CARDS');
  // const currCycle = await getData('currCycle');
  // if (!currCycle)
  //   throw new Error('getAssigns asyncFn --> currCycle Not Found!');

  // const cycleInfo =
  //   Object.values(cycles.list).find((i: any) => i.docId === currCycle) ?? [];
  // const currYear = cycleInfo.year;
  // console.log({ currYear });

  const dbRef = collection(firestoreInit, 'cards');
  const searchDocs = await getDocs(dbRef);
  console.log({ searchDocs });

  // ---------- set Users Found if any
  // const arrAssignments: any = [];
  const objCards: any = {};
  searchDocs.forEach(doc => {
    const obj = doc.data();
    // console.log({ obj });
    // arrAssignments.push(obj.docId);
    objCards[obj.docId] = obj;
  });

  return objCards;

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
