import { A2 } from '.';
import { TscRoute } from '@morfos/routes';

// ----------- set Info Screen
const route: TscRoute = {
  path: 'print',
  routeCode: 'A2',
  component: A2,
  screenTitle: '',
};

export default {
  route,
  msg: { loading: false },

  form: { iptsChanges: {} },
  list: {
    itemsInfo: {},
    itemsList: [],
  },
};
