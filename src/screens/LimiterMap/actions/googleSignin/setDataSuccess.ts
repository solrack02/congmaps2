// ----------- import Packs
import { goTo } from '@morfos/routes';
import AsyncStorage from '@react-native-async-storage/async-storage';

// ----------- import Internals
import { setData } from '#ctData';
import { TuserInfo } from '#dbTypes/TuserInfo';

// ----------- set Function
export const setDataSuccess = async (dataSuccess: TuserInfo) => {
  // ----------- stop Code If no Doc ID
  if (!dataSuccess.userDbInfo.docId) return;

  // ----------- set Data
  const dataAfterAsync = [
    { path: 'projectData.authUser', val: dataSuccess },
    { path: 'scInfo.A1.msg.loading', val: false },
  ];

  // ----------- set Local Storage
  await AsyncStorage.setItem('userId', dataSuccess.userDbInfo.docId);

  // ----------- change Data
  setData(dataAfterAsync);

  goTo('info-board');

  // ----------- No Return
};
