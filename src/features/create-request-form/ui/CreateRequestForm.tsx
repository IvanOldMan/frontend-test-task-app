import React, { type FC, useRef, useEffect } from 'react';
import { type RequestType } from '../../../entities/request/model/types.ts';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { v4 as createUniqId } from 'uuid';
import { addRequest } from '../../../entities/request/model/slice';
import { type AppDispatch } from '../../../app/store.ts';
import { createRequestSchema } from '../model/validation';

const categories = ['Техническая', 'Финансовая', 'Общая'];

export const CreateRequestForm: FC<Partial<RequestType>> = ({
  id,
  name = '',
  description = '',
  category = '',
  createdAt,
}) => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const focusRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (focusRef.current) {
      focusRef.current.focus();
    }
  });

  return (
    <Formik
      initialValues={{ name, description, category }}
      validationSchema={createRequestSchema}
      onSubmit={(values) => {
        dispatch(
          addRequest({
            ...values,
            id: id || createUniqId(),
            createdAt: createdAt || new Date().toISOString(),
          }),
        );
        navigate('/requests');
      }}
    >
      <Form style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <h2>Создание заявки</h2>

        <div>
          <Field name="name" placeholder="Название" innerRef={focusRef} />
          <ErrorMessage name="name" component="div" style={{ color: 'red' }} />
        </div>

        <div>
          <Field as="textarea" name="description" placeholder="Описание" />
          <ErrorMessage
            name="description"
            component="div"
            style={{ color: 'red' }}
          />
        </div>

        <div>
          <Field as="select" name="category">
            <option value="">Выберите категорию</option>
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </Field>
          <ErrorMessage
            name="category"
            component="div"
            style={{ color: 'red' }}
          />
        </div>

        <button type="submit">Создать заявку</button>
      </Form>
    </Formik>
  );
};
