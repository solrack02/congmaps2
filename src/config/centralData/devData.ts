import { Troutes } from '@morfos/routes';

// ----------- set Dev Data Object
type TdevDt = {
  errLang?: string;
  errBase?: string;

  devLog?: number;
  selectedRoute: string;
  routes?: {
    readAll: boolean;
    routesInfo: Troutes;
    selected: boolean;
  };
};

export const devData: TdevDt = {};
