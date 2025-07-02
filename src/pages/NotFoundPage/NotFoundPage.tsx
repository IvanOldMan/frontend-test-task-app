import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../../shared/ui/Button.tsx';
import { ROUTE_PATHS } from '../../shared/config/routeConfig/routePaths.ts';
import styles from './NotFoundPage.module.css';

export const NotFoundPage = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.container}>
      Такой страницы не существует
      <div className={styles.actions}>
        <Button secondary onClick={() => navigate(-1)}>
          Назад
        </Button>
        <Button onClick={() => navigate(ROUTE_PATHS.REQUESTS)}>На главную</Button>
      </div>
    </div>
  );
};
