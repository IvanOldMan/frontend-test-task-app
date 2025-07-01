import React from 'react';
import { Logo } from './ui/Logo/Logo.tsx';

export const Header = () => {
  return (
    <header style={{ backgroundColor: 'lightgray' }}>
      <Logo />
    </header>
  );
};
