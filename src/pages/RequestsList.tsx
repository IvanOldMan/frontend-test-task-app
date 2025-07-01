import React, { type MouseEventHandler } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { type RequestType } from '../entities/request/model/types.ts';
import { ROUTE_PATHS } from '../shared/config/routeConfig/routePaths.ts';

export const RequestsList = () => {
  const requests = useSelector((state: any) => state.requests.list);
  const navigate = useNavigate();

  const handleClick: MouseEventHandler<HTMLUListElement> = (event) => {
    const id = (event.target as Element).closest('li')?.id;

    console.log(requests);
    console.log(id);
    if (id) {
      navigate(ROUTE_PATHS.REQUEST_DETAIL(id));
    }
  };

  if (!requests.length) {
    return <h1>No requests found.</h1>;
  }

  return (
    <div>
      <h1>Requests_1</h1>
      <ul onClick={handleClick}>
        {requests.map((request: RequestType) => {
          console.log(request);

          return (
            <li key={request.id} id={request.id}>
              {' '}
              {request.name} - {request.description}
            </li>
          );
        })}
      </ul>
    </div>
  );
};
