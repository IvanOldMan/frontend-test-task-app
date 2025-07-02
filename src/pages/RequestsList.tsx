import React, { type MouseEventHandler } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { type RequestType } from '../entities/request/model/types.ts';
import { ROUTE_PATHS } from '../shared/config/routeConfig/routePaths.ts';
import { type RootState } from '../app/store.ts';
import { RequestCard } from '../shared/ui/RequestCard';

export const RequestsList = () => {
  const requests = useSelector((state: RootState) => state.requests.list);
  const navigate = useNavigate();
  console.log('requests', typeof requests, requests);

  if (!Array.isArray(requests)) {
    throw new Error('requests is not an array');
  }
  if (!requests.length) {
    throw new Error('No requests found');
  }

  const handleClick: MouseEventHandler<HTMLUListElement> = (event) => {
    const id = (event.target as Element).closest('li')?.id;
    console.log('deleg', typeof id, id);
    if (id) {
      navigate(ROUTE_PATHS.REQUEST_DETAIL(id));
    }
  };

  return (
    <div>
      <h1>Requests_1</h1>
      <ul onClick={handleClick} style={{ listStyle: 'none', padding: 0 }}>
        {requests &&
          requests.map((request: RequestType) => (
            <li
              key={request.id}
              id={request.id.toString()}
              style={{ cursor: 'pointer' }}
            >
              <RequestCard request={request} />
            </li>
          ))}
      </ul>
    </div>
  );
};
