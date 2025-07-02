import type { FC, ReactNode } from 'react';
import { Navigate } from 'react-router-dom';

interface PrivateRoutProps {
  children: ReactNode;
}

export const PrivateRout: FC<PrivateRoutProps> = ({ children }) => {
  const raw = localStorage.getItem('requests');
  let requests: unknown = [];
  try {
    requests = raw ? JSON.parse(raw) : [];
  } catch {
    throw new Error('Ошибка чтения заявок из localStorage');
  }
  if (!Array.isArray(requests)) {
    throw new Error('requests is not an array');
  }
  if (requests.length === 0) {
    return <Navigate to="/welcomePage" replace />;
  }
  return children;
};
