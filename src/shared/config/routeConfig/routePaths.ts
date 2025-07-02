import { REQUEST_ROUTE_PATH } from './routePaths.constants.ts';

export const ROUTE_PATHS = {
  REQUESTS: REQUEST_ROUTE_PATH,
  CREATE_REQUEST: `${REQUEST_ROUTE_PATH}/new`,
  REQUEST_DETAIL: (id: string | number = 'id') =>
    `${REQUEST_ROUTE_PATH}/${id}`,
};
