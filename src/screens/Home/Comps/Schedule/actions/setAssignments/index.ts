// ----------- import Internals
import { asyncFn1 } from './asyncFn1';
import { setDataSuccess } from './setDataSuccess';
import { setDataBeforeAsync } from './setDataBeforeAsync';
import { setError } from './setError';

// ----------- set Main Function
export const setAssignments = async () => {
  setDataBeforeAsync();

  const dataSucess = await asyncFn1().catch(setError);

  setDataSuccess(dataSucess);

  // ----------- No Return
};
