// ---------- set Packs
import { doc, updateDoc, CollectionReference } from 'firebase/firestore';

// ---------- set Internals
import { TuserAuthData, TuserInfo } from '#dbTypes/TuserInfo';
import { fbType } from '#firebase';

// ---------- set Local Types
type Tprops = {
  arrUser: TuserInfo[];
  refColl: CollectionReference<TuserInfo>;
  userAuthData: TuserAuthData;
};

// ---------- export Function
export const updateUser = async (props: Tprops) => {
  // ---------- get Props
  const { arrUser, refColl, userAuthData } = props;

  // ---------- get Doc to Update
  const currUser = arrUser[0].userDbInfo.docId;
  const userDoc = doc(refColl, currUser)
    // ---------- set type to Update
    .withConverter(fbType<{ userAuthData: TuserAuthData }>());

  // ---------- set Update Doc
  const dataToUpdate = { userAuthData };
  await updateDoc(userDoc, dataToUpdate);

  // ---------- set return to CT Data
  const userInfo: TuserInfo = {
    userAuthData,
    userDbInfo: {
      docId: currUser,
      createdAt: arrUser[0].userDbInfo.createdAt,
    },
    userDomains: arrUser[0].userDomains,
  };

  return userInfo;
};
