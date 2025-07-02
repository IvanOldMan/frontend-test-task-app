import React from 'react';
import styles from './Footer.module.css';

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      © {new Date().getFullYear()} тестовое задание | Стариков Иван
    </footer>
  );
};
