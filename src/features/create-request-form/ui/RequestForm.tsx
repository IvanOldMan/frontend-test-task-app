import React, { type FC, useRef, useEffect } from 'react';
import { type RequestType } from '../../../entities/request/model/types.ts';
import { ErrorMessage, Field, Form, Formik, type FormikConfig } from 'formik';
import { createRequestSchema } from '../model/validation';

const categories = ['Техническая', 'Финансовая', 'Общая'];

interface CreateFormProps
  extends Pick<RequestType, 'name' | 'description' | 'category'> {
  onSubmit: FormikConfig<RequestType>['onSubmit'];
  onClose: () => void;
}

export const RequestForm: FC<CreateFormProps> = ({
  onSubmit,
  name = '',
  description = '',
  category = '',
}) => {
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
      onSubmit={onSubmit}
    >
      <Form
        id="fuckenForm"
        style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}
      >
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
      </Form>
    </Formik>
  );
};
