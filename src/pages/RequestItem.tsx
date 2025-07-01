import { useParams } from 'react-router-dom';
import {} from 'react';

export const RequestItem = () => {
  const { id } = useParams();

  return <div>current ID: {id}</div>;
};
