import { useParams, Link } from 'react-router-dom';
import {} from 'react';

export const RequestItem = () => {
  const { id } = useParams();

  return (
    <div>req ID: {id}</div>
    // <li>
    //   <Link to={`/requests/:${id}`}></Link>
    // </li>
  );
};
