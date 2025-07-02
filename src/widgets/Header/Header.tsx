import React from 'react';
import styles from './Header.module.css';
import { Logo } from './ui/Logo/Logo';
import { Button } from '../../shared/ui/Button';
import { useNavigate } from 'react-router-dom';
import { ROUTE_PATHS } from '../../shared/config/routeConfig/routePaths';

export const Header = () => {
  const navigate = useNavigate();
  const handleAdd = () => {
    navigate(ROUTE_PATHS.CREATE_REQUEST);
  };
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Logo />
      </div>
      <Button onClick={handleAdd} className={styles.addButton}>
        Новая заявка
      </Button>
    </header>
  );
};
