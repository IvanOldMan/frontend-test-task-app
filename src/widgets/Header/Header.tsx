import React from 'react';
import { Link } from 'react-router-dom';
import { Logo } from './ui/Logo/Logo.tsx';
import { ROUTE_PATHS } from '../../shared/config/routeConfig/routePaths.ts';

export const Header = () => {
  return (
    <header style={{ backgroundColor: 'lightgray' }}>
      <Logo />
      <Link to={ROUTE_PATHS.CREATE_REQUEST}>
        <button>new Request</button>
      </Link>
    </header>
  );
};
