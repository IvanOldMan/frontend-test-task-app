import React, { useEffect, useRef } from 'react';
import { type FormikConfig } from 'formik';
import { RequestForm } from '../features/create-request-form/ui/RequestForm.tsx';
import { addRequest } from '../entities/request/model/slice.ts';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { v4 as createUniqId } from 'uuid';
import { type RequestType } from '../entities/request/model/types.ts';
import { type AppDispatch } from '../app/store.ts';

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
      <button form="fuckenForm" type="submit">
        Создать заявку
      </button>
      <button onClick={handleClose}>Отмена</button>
    </>
  );
};
