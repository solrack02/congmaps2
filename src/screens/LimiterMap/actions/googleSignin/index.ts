// ----------- import Internals
import { asyncFn1 } from './asyncFn1';
import { setDataSuccess } from './setDataSuccess';
import { setDataBeforeAsync } from './setDataBeforeAsync';
import { setError } from './setError';

// ----------- set Main Function
export const googleSignin = async () => {
  setDataBeforeAsync();

  const dataSuccess = await asyncFn1().catch(setError);

  setDataSuccess(dataSuccess);

  // ----------- No Return
};
