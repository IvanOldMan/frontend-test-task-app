import React, { type MouseEventHandler } from 'react';
import { useSelector } from 'react-redux';
import { type RequestType } from '../entities/request/model/types.ts';

export const RequestsList = () => {
  const requests = useSelector((state: any) => state.requests.list);

  if (!requests.length) {
    return <h1>No requests found.</h1>;
  }

  return (
    <div>
      <h1>Requests_1</h1>
      <ul>
        {requests.map((request: RequestType) => (
          <li key={request.id} {...request} />
        ))}
      </ul>
    </div>
  );
};
