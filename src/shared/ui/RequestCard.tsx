import React from 'react';
import type { RequestType } from '../../entities/request/model/types';
import styles from './RequestCard.module.css';
import cn from 'classnames';

interface RequestCardProps {
  request: RequestType;
  className?: string;
}

export const RequestCard: React.FC<RequestCardProps> = ({ request, className }) => {
  const date = new Date(request.createdAt);
  const formattedDate = date.toLocaleDateString('ru-RU', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  });

  return (
    <div className={cn(styles.card, className)}>
      <span className={styles.title}>{request.name}</span>
      <span className={styles.date}>{formattedDate}</span>
    </div>
  );
}; 