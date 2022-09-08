import React from 'react';
import ModalConfirmProps from '../models/modalConfirmProps';
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap';

const ModalConfirm = (props: ModalConfirmProps) => {
	const {
		show,
		toggle,
    title,
		size,

		headerClass, 
    bodyClass,
    footerClass,
    className,
		children,

		apply,
    applyDisabled,
		applyBtnName,
		applyBtnClass,

		cancel,
		cancelBtnClass,
		cancelBtnName, 

		showApplyBtn,
		showCancelBtn,
	} = props;

	return (
		<Modal
      className={className}
      isOpen={show}
      toggle={toggle}
      size={size}
    >
      <ModalHeader
        className={headerClass}
        toggle={toggle}
      >
        {title}
      </ModalHeader>

      <ModalBody className={bodyClass}>
        <>{children}</>
      </ModalBody>

      <ModalFooter className={footerClass}>
        {
          showCancelBtn && (
            <Button
              className={cancelBtnClass}
              color='cancel'
              onClick={cancel || toggle}
            >
              <span>{cancelBtnName}</span>
            </Button>
          )
        }
        {
          showApplyBtn
            && (
            <Button
              btnClassName={`modal-apply-button ${applyBtnClass}`}
              onClick={apply}
              isDisabled={applyDisabled}
            >
              <span>{applyBtnName}</span>
            </Button>
            )
        }
      </ModalFooter>
    </Modal>
	);
}

export default ModalConfirm;
