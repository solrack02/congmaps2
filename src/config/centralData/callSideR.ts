import { setData } from '.';
import { setComponent } from './setComponent';

// ----------- set Central Data Route
export const callSideR = (path: string) => {
  setData([
    { path: 'projectData.sideRight.open', val: true },
    {
      path: 'projectData.sideRight.component',
      val: setComponent(path),
    },
  ]);
};
