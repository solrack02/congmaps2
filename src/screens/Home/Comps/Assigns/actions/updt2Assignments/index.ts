// ----------- import Internals
import { asyncFn1 } from './asyncFn1';
import { setDataSuccess } from './setDataSuccess';
import { setDataBeforeAsync } from './setDataBeforeAsync';
import { setError } from './setError';
import { asyncFn2 } from './asyncFn2';

// ----------- set Main Function
export const updtAssignments = async () => {
  setDataBeforeAsync();

  await asyncFn2().catch(setError);
  await asyncFn1().catch(setError); // uptd Card With Last Date

  setDataSuccess();

  // ----------- No Return
};
