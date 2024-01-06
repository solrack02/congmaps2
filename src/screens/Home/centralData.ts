import { A0 } from '.';
import { TscRoute } from '@morfos/routes';

// ----------- set Info Screen
const route: TscRoute = {
  path: 'home',
  routeCode: 'A0',
  component: A0,
  screenTitle: 'Território - Cidade Martins',
};

export default {
  route,
  msg: { loading: false },

  form: { iptsChanges: {} },
};
