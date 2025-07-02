import { FC, MouseEventHandler, ReactNode } from 'react';
import { createPortal } from 'react-dom';
import { getModalRootNode } from '../utils/ts.ts';
import { RequestForm } from '../../../features/create-request-form/ui/RequestForm.tsx';
import { type RequestType } from '../../../entities/request/model/types.ts';
import { useDispatch } from 'react-redux';
import type { AppDispatch } from '../../../app/store.ts';
import { useNavigate } from 'react-router-dom';
import type { FormikConfig } from 'formik';
import { updateRequest } from '../../../entities/request/model/slice.ts';
import { v4 as createUniqId } from 'uuid';
// import { ModalHeader } from './ModalHeader/ModalHeader.tsx';
// import { ModalFooter } from './ModalFooter/ModalFooter.tsx';
// import { ModalContent } from './ModalContent/ModalContent.tsx';
// import { closeButtonPosition } from './Modal.types.ts';
// import { CLOSE_BUTTON_POSITION, MODAL_BACKGROUND } from './Modal.constants.ts';

interface ModalProps {
  isOpen: boolean;
  data: RequestType;
  onClose: () => void;
  // children?: ReactNode;
  // title?: string;
  // closeButtonPosition?: closeButtonPosition;
  // submitButton?: boolean;
}

export const Modal: FC<ModalProps> = ({ isOpen, data, onClose }) => {
  const handleCloseModal: MouseEventHandler<HTMLDivElement> = (event) => {
    const isAreaAroundModal = (event.target as Element)?.id;
    console.log('isAreaAroundModal', isAreaAroundModal);
  };

  const dispatch = useDispatch<AppDispatch>();

  const onSubmit: FormikConfig<RequestType>['onSubmit'] = (values) => {
    dispatch(
      updateRequest({
        ...values,
        id: data.id,
        createdAt: data.createdAt,
      }),
    );
    onClose();
  };

  const renderComponent = (modalOpenState: boolean) => {
    return (
      modalOpenState && (
        <div onClick={handleCloseModal}>
          <RequestForm
            onSubmit={onSubmit}
            name={data.name}
            description={data.description}
            category={data.category}
          />
          {/*<div className={modalItemClasses}>*/}
          {/*  <ModalHeader*/}
          {/*    title={title}*/}
          {/*    onClose={onClose}*/}
          {/*    closeButton={closeButtonPosition === CLOSE_BUTTON_POSITION.TOP}*/}
          {/*    closeButtonText=""*/}
          {/*  />*/}
          {/*  <ModalContent>{children}</ModalContent>*/}
          {/*  <ModalFooter*/}
          {/*    onClose={onClose}*/}
          {/*    closeButton={closeButtonPosition === CLOSE_BUTTON_POSITION.BOTTOM}*/}
          {/*    submitButton={submitButton}*/}
          {/*    onSubmit={handleSubmit}*/}
          {/*    closeButtonText={t('forms.buttons.close')}*/}
          {/*    submitButtonText={t('forms.buttons.search')}*/}
          {/*  />*/}
          {/*</div>*/}
          <button form="fuckenForm" type="submit">
            Сохранить изменения
          </button>
          <button onClick={onClose}>Отмена</button>
        </div>
      )
    );
  };

  return createPortal(renderComponent(isOpen), getModalRootNode());
};
