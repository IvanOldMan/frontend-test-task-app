import React, { type FC, useRef, useEffect } from 'react';
import { type RequestType } from '../../../entities/request/model/types.ts';
import { ErrorMessage, Field, Form, Formik, type FormikConfig } from 'formik';
import { createRequestSchema } from '../model/validation';
import styles from './RequestForm.module.css';
import cn from 'classnames';

const categories = ['Техническая', 'Финансовая', 'Общая'];

interface CreateFormProps
  extends Pick<RequestType, 'name' | 'description' | 'category'> {
  onSubmit: FormikConfig<RequestType>['onSubmit'];
  onClose: () => void;
  title?: string;
}

export const RequestForm: FC<CreateFormProps> = ({
  onSubmit,
  name = '',
  description = '',
  category = '',
  title = 'Создание заявки',
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
      <Form id="fuckenForm" className={styles.form}>
        <h2 className={styles.title}>{title}</h2>

        <div className={styles.field}>
          <Field
            name="name"
            placeholder="Название"
            innerRef={focusRef}
            className={styles.input}
          />
          <ErrorMessage name="name" component="div" className={styles.error} />
        </div>

        <div className={styles.field}>
          <Field
            as="textarea"
            name="description"
            placeholder="Описание"
            className={styles.textarea}
          />
          <ErrorMessage
            name="description"
            component="div"
            className={styles.error}
          />
        </div>

        <div className={styles.field}>
          <Field as="select" name="category" className={styles.select}>
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
            className={styles.error}
          />
        </div>
      </Form>
    </Formik>
  );
};
