import { A1 } from '.';
import { TscRoute } from '@morfos/routes';

// ----------- set Info Screen
const route: TscRoute = {
  path: 'maps',
  routeCode: 'A1',
  component: A1,
  screenTitle: 'Território - Cidade Martins',
};

export default {
  route,
  msg: { loading: false },

  form: { iptsChanges: {} },
};
