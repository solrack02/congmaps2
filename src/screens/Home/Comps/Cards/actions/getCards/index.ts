// ----------- import Internals
import { asyncFn1 } from './asyncFn1';
import { asyncFn2 } from './asyncFn2';
import { asyncFn3 } from './asyncFn3';
import { asyncFn4 } from './asyncFn4';
import { setDataSuccess } from './setDataSuccess';
import { setDataBeforeAsync } from './setDataBeforeAsync';
import { setError } from './setError';
import { getAssigns } from '../../../../../Print/actions/getAssigns';

// ----------- set Main Function
export const getCards = async () => {
  // const paths = {
  //   functionForm: (ct: any) => ct.projectData.form.iptsChanges,
  // };
  setDataBeforeAsync();

  await getAssigns().catch(setError);
  const dataSucess1 = await asyncFn1().catch(setError);
  // const dataSucess2 = await asyncFn2().catch(setError);
  const dataSucess3 = await asyncFn3().catch(setError);
  const dataSucess4 = await asyncFn4().catch(setError);

  setDataSuccess({ dataSucess1, dataSucess3, dataSucess4 });

  // ----------- No Return
};
