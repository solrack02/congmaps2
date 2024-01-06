// ---------- set Packs
import { collection, getDocs } from 'firebase/firestore';
import { where, query } from 'firebase/firestore';
import { User } from 'firebase/auth';

// ---------- set Internals
import { firestoreInit, fbType } from '#firebase';
import { TuserInfo } from '#dbTypes/TuserInfo';

// ---------- export Function
export const getDbInfo = async (userData: User) => {
  const refColl = collection(firestoreInit, 'users')
    // ---------- set Type to FirebaseData
    .withConverter(fbType<TuserInfo>());

  // ---------- set Data Query
  const filter1 = where('userAuthData.userEmail', '==', userData.email);
  const dbRef = query(refColl, filter1);

  // ---------- get all collection data
  const searchUser = await getDocs(dbRef);

  // ---------- set Users Found if any
  const arrUser: TuserInfo[] = [];
  searchUser.forEach(doc => {
    const obj = doc.data();
    return arrUser.push(obj);
  });
  const condNewUser = arrUser.length === 0;

  // ---------- set Return
  return { refColl, condNewUser, arrUser };
};
