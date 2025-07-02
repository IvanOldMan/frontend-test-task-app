import React from 'react';
import styles from './Footer.module.css';
import cn from 'classnames';

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      © {new Date().getFullYear()} Заявки | Все права защищены
    </footer>
  );
};
