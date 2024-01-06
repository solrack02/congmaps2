// ----------- import Internals
import { asyncFn1 } from './asyncFn1';
import { setDataSuccess } from './setDataSuccess';
import { setDataBeforeAsync } from './setDataBeforeAsync';
import { setError } from './setError';
import { asyncUpload } from './asyncUpload';

// ----------- set Main Function
export const setCard = async () => {
  const paths = {
    functionForm: (ct: any) => ct.projectData.form.iptsChanges,
  };
  setDataBeforeAsync();

  const fileUrl = await asyncUpload(paths).catch(err => setError(err));
  const dataSucess = await asyncFn1(fileUrl).catch(setError);

  setDataSuccess(dataSucess);

  // ----------- No Return
};
