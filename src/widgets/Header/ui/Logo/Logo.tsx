import logo from '../../../../shared/assets/logo.svg';
import { NavLink } from 'react-router-dom';
import { ROUTE_PATHS } from '../../../../shared/config/routeConfig/routePaths.ts';

export const Logo = () => {
  return (
    <NavLink to={ROUTE_PATHS.REQUESTS} end>
      <img src={logo} alt="logo" />
    </NavLink>
  );
};
