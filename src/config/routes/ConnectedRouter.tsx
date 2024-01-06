import React from 'react';
import { Router } from '@morfos/routes';
import { setRoutes } from './setRoutes';
import { setData } from '../centralData';

// ----------- set Connected Router
export const ConnectedRouter = () => {
  // ----------- set Changes
  const getData = (path: string) =>
    setData(() => [{ path: 'dev.selectedRoute', val: path }]);

  // ----------- set Return
  return <Router setHome="signin" routes={setRoutes()} getData={getData} />;
};
