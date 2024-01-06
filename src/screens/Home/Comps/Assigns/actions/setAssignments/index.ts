// ----------- import Internals
import { asyncFn1 } from './asyncFn1';
import { setDataSuccess } from './setDataSuccess';
import { setDataBeforeAsync } from './setDataBeforeAsync';
import { setError } from './setError';

// ----------- set Main Function
export const setAssignments = async () => {
  setDataBeforeAsync();

  await asyncFn1().catch(setError);
  // await asyncFn2().catch(setError);

  setDataSuccess();

  // ----------- No Return
};
