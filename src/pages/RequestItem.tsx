import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { type RootState } from '../app/store.ts';
import { deleteRequest } from '../entities/request/model/slice.ts';
import { useState } from 'react';
import { Modal } from '../widgets/Modal/ui/Modal.tsx';
import styles from './RequestItem.module.css';
import { Button } from '../shared/ui/Button';
import { RequestForm } from '../features/create-request-form/ui/RequestForm.tsx';

export const RequestItem = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [modalOpenState, setModalOpenState] = useState<boolean>(false);

  const request = useSelector((state: RootState) =>
    state.requests.list.find(({ id: requestId }) => requestId === id),
  );

  const handleDelete = () => {
    if (request && confirm(`Удалить заявку ${request.name}`)) {
      dispatch(deleteRequest(request.id));
      navigate('/requests');
    }
  };

  const handleOpenModal = () => {
    setModalOpenState(true);
  };

  if (!request) {
    throw new Error('Request item not found');
  }

  const onSubmit = (data: any) => {
    // Handle form submission
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{request.name}</h1>
      <p>
        <span className={styles.label}>Описание:</span>
        <span className={styles.value}>{request.description}</span>
      </p>
      <p>
        <span className={styles.label}>Категория:</span>
        <span className={styles.value}>{request.category}</span>
      </p>
      <p>
        <span className={styles.label}>Создана:</span>
        <span className={styles.value}>
          {new Date(request.createdAt).toLocaleString('ru-RU', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
          })}
        </span>
      </p>
      <div className={styles.actions}>
        <Button secondary onClick={handleOpenModal}>
          Редактировать заявку
        </Button>
        <Button danger onClick={handleDelete}>
          Удалить заявку
        </Button>
      </div>
      <Modal isOpen={modalOpenState} onClose={() => setModalOpenState(false)}>
        <RequestForm
          onSubmit={onSubmit}
          name={request.name}
          description={request.description}
          category={request.category}
          onClose={() => setModalOpenState(false)}
          title="Редактирование заявки"
        />
        <div style={{ display: 'flex', gap: 12, marginTop: 16 }}>
          <Button type="submit" form="fuckenForm">
            Сохранить изменения
          </Button>
          <Button secondary onClick={() => setModalOpenState(false)}>
            Отмена
          </Button>
        </div>
      </Modal>
    </div>
  );
};
