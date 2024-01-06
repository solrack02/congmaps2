import { setConnect, TsetDataProps } from '@morfos/central-data';
import { routes as pub } from '../../screens';
// import { routes as adm } from '../../screens/B_adm';
// import { routes as fin } from '../../screens/D_fin';
// import { routes as mng } from '../../screens/C_mng';
import { devData } from './devData';
import { projectData } from './projectData';
import { callSideR } from './callSideR';
import { TstrPath } from './TstrPath';

// ----------- set Central Data Object
const initCtData = { dev: devData, projectData, pub };
export type TctData = typeof initCtData;

// ----------- set Central Data Connect
export const { Connect, setData, useData, getCtData } = setConnect(initCtData);
export const setSideR = callSideR;

/*
// ----------- try New SetData
const conn = setConnect(initCtData);
export const { Connect, useData, getCtData } = conn;

const setDataOld = conn.setData;

// type TparOld = arr, obj, func arr,
type TparNew = TstrPath<TctData>;
type TparOld = TsetDataProps<TctData>;
type TparTest = TparOld | TparNew;

export const setData = (par: TparTest) => {
  const checkObj = typeof par === 'object';

  const condNew = checkObj && !par.hasOwnProperty('path');
  if (!condNew) return setDataOld(par);

  const { strPath } = use(initCtData);
  return strPath(par);
};

const strPath = (obj: TstrPath<{}>) => {};

interface TobjReturn<T> {
  strPath(obj: TstrPath<T>): void;
}

export function use<T>(ctData: T): TobjReturn<T>;

export function use(ctData = {}) {
  return { strPath };
}
 */
