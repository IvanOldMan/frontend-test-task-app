import React from 'react';
import type { RequestType } from '../../entities/request/model/types';

interface RequestCardProps {
  request: RequestType;
}

export const RequestCard: React.FC<RequestCardProps> = ({ request }) => {
  const date = new Date(request.createdAt);
  const formattedDate = date.toLocaleDateString('ru-RU', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  });

  return (
    <div style={{ padding: '8px 0' }}>
      <strong>{request.name}</strong>
      <span style={{ marginLeft: 12, color: '#888' }}>{formattedDate}</span>
    </div>
  );
}; 