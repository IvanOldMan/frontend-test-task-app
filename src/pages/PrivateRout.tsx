import React from 'react';
import type { FC, ReactNode } from 'react';
import { Navigate } from 'react-router-dom';
import { ROUTE_PATHS } from '../shared/config/routeConfig/routePaths.ts';

interface PrivateRoutProps {
  children: ReactNode;
}

export const PrivateRout: FC<PrivateRoutProps> = ({ children }) => {
  const isHasList = localStorage.getItem('requests');
  return isHasList ? children : <Navigate to={ROUTE_PATHS.WELCOME} />;
};
