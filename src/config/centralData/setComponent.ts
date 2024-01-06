import { setRoutes } from '../routes/setRoutes';

// ----------- set Component
export const setComponent = (path: string) => {
  // ----------- set Current Screen Comp
  const screens = Object.values(setRoutes());
  const CurrScreen = screens.find(item => item.path === path);
  const compToRender = CurrScreen?.component;

  // ----------- set Return
  return compToRender;
};
