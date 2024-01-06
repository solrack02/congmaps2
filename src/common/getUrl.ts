import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { getCtData } from '../config/centralData';
import { storage } from '../config/firebase';

export const getUrl = async (infoImg: any, type = 'images') => {
  //   const userId = getCtData(ct => ct.projectData.authUser.userInfo?.docId);
  const userId = 'Xxx1';
  const refDate = new Date().toLocaleString().replace(' ', '-');
  const myRef = ref(storage, `${type}/${infoImg.name}-${refDate}-${userId}`);
  await uploadBytes(myRef, infoImg, infoImg);
  const url = getDownloadURL(myRef);

  return url;
};
