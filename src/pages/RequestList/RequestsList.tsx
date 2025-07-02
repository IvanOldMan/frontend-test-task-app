import React, { type MouseEventHandler } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { type RequestType } from '../../entities/request/model/types.ts';
import { ROUTE_PATHS } from '../../shared/config/routeConfig/routePaths.ts';
import { type RootState } from '../../app/store.ts';
import { RequestCard } from '../../shared/ui/RequestCard.tsx';
import styles from './RequestsList.module.css';

export const RequestsList = () => {
  const requests = useSelector((state: RootState) => state.requests.list);
  const navigate = useNavigate();

  if (!Array.isArray(requests)) {
    throw new Error('requests is not an array');
  }

  const handleClick: MouseEventHandler<HTMLUListElement> = (event) => {
    const id = (event.target as Element).closest('li')?.id;
    if (id) {
      navigate(ROUTE_PATHS.REQUEST_DETAIL(id));
    }
  };

  return (
    <div>
      <div className="header-spacer" />
      <div className={styles.headerWrapper}>
        <h1 className={styles.header}>Список заявок</h1>
      </div>
      {requests.length === 0 ? (
        <div className={styles.emptyList}>Список заявок пуст</div>
      ) : (
        <ul onClick={handleClick} className={styles.list}>
          {requests.map((request: RequestType) => (
            <li
              key={request.id}
              id={request.id.toString()}
              className={styles.listItem}
            >
              <RequestCard request={request} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
