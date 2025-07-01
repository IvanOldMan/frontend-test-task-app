import { FC, ReactNode } from 'react';
import { Navigate } from 'react-router-dom';

interface PrivateRoutProps {
  children: ReactNode;
}

export const PrivateRout: FC<PrivateRoutProps> = ({ children }) => {
  const isAuth = localStorage.getItem('token');
  return isAuth ? children : <Navigate to="/welcomePage" replace />;
};
