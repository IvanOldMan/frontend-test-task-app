import * as Yup from 'yup';

export const createRequestSchema = Yup.object({
  name: Yup.string().required('Название обязательно'),
  description: Yup.string().required('Описание обязательно'),
  category: Yup.string().required('Выберите категорию'),
});
