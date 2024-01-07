import { getCtData, setData } from '../../../../config/centralData';
// import { getData } from '../../../Home/Comps/Schedule/Form';
import { asyncFn1 } from './asyncFn1';
import { asyncFn2 } from './asyncFn2';
import { asyncFn3 } from './asyncFn3';

export const getAssigns = async () => {
  setData([{ path: 'A2.list.condList', val: false }]);

  const cycles = await asyncFn2().catch(err =>
    console.log('Erro do Get Assigns!', { err }),
  );

  const cards = await asyncFn3().catch(err =>
    console.log('Erro do Get Assigns!', { err }),
  );

  const dataSuccess = await asyncFn1().catch(err =>
    console.log('Erro do Get Assigns!', { err }),
  );

  if (!dataSuccess) return;
  const { objAssignments, arrAssignments } = dataSuccess;

  setData([
    { path: 'A2.list.condList', val: true },
    { path: 'projectData.cards.list', val: cards },
    { path: 'projectData.cycles.list', val: cycles },
    { path: 'A2.list.itemsInfo', val: objAssignments },
    { path: 'A2.list.itemsList', val: arrAssignments },
  ]);
};
