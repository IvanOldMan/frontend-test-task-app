import React, { useEffect, useRef } from 'react';
import { type FormikConfig } from 'formik';
import { RequestForm } from '../features/create-request-form/ui/RequestForm.tsx';
import { addRequest } from '../entities/request/model/slice.ts';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { v4 as createUniqId } from 'uuid';
import { type RequestType } from '../entities/request/model/types.ts';
import { type AppDispatch } from '../app/store.ts';
import { Button } from '../shared/ui/Button';

export const CreateRequest = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const onSubmit: FormikConfig<RequestType>['onSubmit'] = (values) => {
    dispatch(
      addRequest({
        ...values,
        id: createUniqId(),
        createdAt: new Date().toISOString(),
      }),
    );
    navigate('/requests');
  };

  const handleClose = () => {
    navigate('/requests');
  };

  // Пример: если есть переменная errors, выбросить ошибку при наличии ошибок
  // if (errors && Object.keys(errors).length > 0) {
  //   throw new Error('Validation error in CreateRequest');
  // }

  return (
    <>
      <RequestForm onSubmit={onSubmit} />
      <div style={{ display: 'flex', gap: 12, marginTop: 16, justifyContent: 'center' }}>
        <Button type="submit" form="fuckenForm">Создать заявку</Button>
        <Button secondary onClick={handleClose}>Отмена</Button>
      </div>
    </>
  );
};
