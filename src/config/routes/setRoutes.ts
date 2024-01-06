// ----------- import packs
import { Troutes, TscRoute } from '@morfos/routes';

// ----------- import internals
import { routes as pub } from '../../screens/';
// import { routes as adm } from '../../screens/B_adm';
// import { routes as fin } from '../../screens/D_fin';
// import { routes as mng } from '../../screens/C_mng';
// import { routes as dev } from '../../screens/X_dev';

// ----------- set Function
export const setRoutes = (): Troutes => {
  // ----------- set Array with Routes
  const routes: Troutes = {};
  const mapRoutes = (item: { route: TscRoute }) => {
    const routeData = item.route;
    const path = routeData.path;
    routes[path] = routeData;
  };

  // ----------- set Data
  const arrPub = Object.values(pub);
  // const arrAdm = Object.values(adm);
  // const arrDev = Object.values(dev);
  // const arrMng = Object.values(mng);
  // const arrFin = Object.values(fin);

  // ----------- set Routes to Send
  arrPub.forEach(mapRoutes);
  // arrAdm.forEach(mapRoutes);
  // arrMng.forEach(mapRoutes);
  // arrFin.forEach(mapRoutes);
  // arrDev.forEach(mapRoutes);

  // ----------- set Return
  return routes;
};
