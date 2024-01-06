// ---------- set Packs
import { setDoc, Timestamp, DocumentReference } from 'firebase/firestore';

// ---------- set Internals
import { TuserAuthData, TuserInfo } from '#dbTypes/TuserInfo';

// ---------- set Local Types
type Tprops = {
  userAuthData: TuserAuthData;
  refDoc: DocumentReference<TuserInfo>;
};

// ---------- export Function
export const addNewUser = async (props: Tprops) => {
  // ---------- set Props
  const { userAuthData, refDoc } = props;

  // ---------- set Doc Data to Add
  const userDbInfo: TuserInfo = {
    userAuthData,
    userDbInfo: {
      createdAt: Timestamp.now(),
      docId: refDoc.id,
    },

    userDomains: { hasDomain: false },
  };

  // ---------- set New Doc
  const dataToAdd = { ...userDbInfo };
  await setDoc(refDoc, dataToAdd);

  return userDbInfo;
};
