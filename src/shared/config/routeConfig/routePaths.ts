import {
  REQUEST_ROUTE_PATH,
  WELCOME_ROUTE_PATH,
} from './routePaths.constants.ts';

export const ROUTE_PATHS = {
  ROOT: '/',
  REQUESTS: REQUEST_ROUTE_PATH,
  CREATE_REQUEST: `${REQUEST_ROUTE_PATH}/new`,
  WELCOME: WELCOME_ROUTE_PATH,
  REQUEST_DETAIL: (id: string | number = 'id') => `${REQUEST_ROUTE_PATH}/${id}`,
};
