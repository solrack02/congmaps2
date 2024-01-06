import { setData, TctData } from '../../../../../../config/centralData';
import { setErrorMsg } from './setErrorMsg';

// ----------- set Function
export const setError = (err: any) => {
  // ----------- set Data
  const dataBeforeAsync = (ct: TctData) => {
    // ----------- set Local Types
    const msg = setErrorMsg(err);

    // ----------- set Data Changes
    const change1 = { path: 'dev.errorMsg', val: err.message };
    const change2 = { path: 'XX.list.msgError', val: msg };
    return [change1, change2];
  };

  // ----------- change Data
  setData(dataBeforeAsync);

  // ----------- set Show Error
  console.error(err);
  throw err;

  // ----------- No Return
};
