import React from 'react';
import styles from './Header.module.css';
import cn from 'classnames';
import { Logo } from './ui/Logo/Logo';
import NavBar from './ui/NavBar/NavBar';
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
      <nav className={styles.nav}>
        <NavBar />
      </nav>
      <Button onClick={handleAdd} style={{ minWidth: 120, fontSize: 16, padding: '8px 20px', marginLeft: 24, marginRight: 24 }}>
        Новая заявка
      </Button>
    </header>
  );
};
