// ----------- import Packs
import { doc } from 'firebase/firestore';

// ----------- import Internals
import { googleAuth } from './googleAuth';
import { getDbInfo } from './getDbInfo';
import { addNewUser } from './addNewUser';
import { updateUser } from './updateUser';
import { TuserAuthData, TuserInfo } from '#dbTypes/TuserInfo';

// ---------- set Async Call
export const asyncFn1 = async () => {
  // ---------- set Google Auth Permission
  const userData = await googleAuth();

  // ---------- set user Object to set or update
  const userAuthData: TuserAuthData = {
    userName: userData.displayName,
    userImage: userData.photoURL,
    userEmail: userData.email,
  };

  // ---------- set Collection Reference
  const dbInfo = await getDbInfo(userData);
  const { refColl, condNewUser, arrUser } = dbInfo;

  // ---------- set Doc Reference
  const refDoc = doc(refColl);

  // ---------- set New User
  if (condNewUser) {
    return await addNewUser({ userAuthData, refDoc });
  } else {
    // ---------- set Update User
    return await updateUser({ arrUser, refColl, userAuthData });
  }
};
