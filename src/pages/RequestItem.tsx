import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { type RootState } from '../app/store.ts';
// import { RequestType } from '../entities/request/model/types.ts';
import { deleteRequest } from '../entities/request/model/slice.ts';
// import { Button } from '@/shared/ui/Button';
import { useState } from 'react';
import { Modal } from '../widgets/Modal/ui/Modal.tsx';

export const RequestItem = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [modalOpenState, setModalOpenState] = useState<boolean>(false);

  const request = useSelector((state: RootState) =>
    state.requests.list.find(({ id: requestId }) => requestId === id),
  );

  if (!request) {
    throw new Error('Request item not found');
  }

  const handleDelete = () => {
    if (request && confirm(`Удалить заявку ${request.name}`)) {
      dispatch(deleteRequest(request.id));
      navigate('/requests');
    }
  };

  const handleOpenModal = () => {
    setModalOpenState(true);
  };

  return (
    <div style={{ padding: '1rem' }}>
      <h1>{request.name}</h1>
      <p>
        <strong>Описание:</strong> {request.description}
      </p>
      <p>
        <strong>Категория:</strong> {request.category}
      </p>
      <p>
        <strong>Создана:</strong> {new Date(request.createdAt).toLocaleString()}
      </p>

      <div style={{ marginTop: '1rem' }}>
        <button onClick={handleOpenModal}>Редактировать заявку</button>
        <button
          onClick={handleDelete}
          style={{
            marginLeft: '1rem',
            backgroundColor: '#f44336',
            color: 'white',
          }}
        >
          Удалить заявку
        </button>
      </div>
      <Modal
        isOpen={modalOpenState}
        data={request}
        onClose={() => setModalOpenState(false)}
      />
    </div>
  );
};
