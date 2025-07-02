import React, { type MouseEventHandler } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { type RequestType } from '../entities/request/model/types.ts';
import { ROUTE_PATHS } from '../shared/config/routeConfig/routePaths.ts';
import { type RootState } from '../app/store.ts';
import { RequestCard } from '../shared/ui/RequestCard';
import styles from './RequestsList.module.css';
import cn from 'classnames';
import { Button } from '../shared/ui/Button';

export const RequestsList = () => {
  const requests = useSelector((state: RootState) => state.requests.list);
  const navigate = useNavigate();
  console.log('requests', typeof requests, requests);

  if (!Array.isArray(requests)) {
    throw new Error('requests is not an array');
  }

  const handleClick: MouseEventHandler<HTMLUListElement> = (event) => {
    const id = (event.target as Element).closest('li')?.id;
    console.log('deleg', typeof id, id);
    if (id) {
      navigate(ROUTE_PATHS.REQUEST_DETAIL(id));
    }
  };

  const handleAdd = () => {
    navigate(ROUTE_PATHS.CREATE_REQUEST);
  };

  return (
    <div>
      <div className="header-spacer" />
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 24 }}>
        <h1 className={styles.header} style={{ margin: 0, flex: 1, textAlign: 'center' }}>Список заявок</h1>
      </div>
      {requests.length === 0 ? (
        <div style={{ textAlign: 'center', color: '#888', fontSize: 18, marginTop: 32 }}>
          Список заявок пуст
        </div>
      ) : (
        <ul onClick={handleClick} className={styles.list}>
          {requests.map((request: RequestType) => (
            <li
              key={request.id}
              id={request.id.toString()}
              style={{ cursor: 'pointer' }}
            >
              <RequestCard request={request} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
