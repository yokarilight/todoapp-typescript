import React, { FC } from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap';
import { ImCross } from 'react-icons/im';
import { AiOutlineCheck } from 'react-icons/ai';

import ProgressButton from '../ProgressButton';

interface FooterStyle {
	[x: string]: string
}

interface ModalConfirmProps {
	show: boolean;
	toggle: () => void;
	title: string;
	headerClass?: string;
	footerClass?: string;
	footerStyle?: FooterStyle;
	className?: string;
	children: React.ReactNode;
	apply: () => void;
	applyDisabled: boolean;
	applyLoading: boolean;
	applyBtnName?: string,
	cancelBtnClass?: string;
	cancelBtnName?: string;
	applyBtnColor?: string;
	applyBtnClass?: string;
	size?: string;
}

// TODO: add ModalConfirm css style
const ModalConfirm:FC<ModalConfirmProps> = (props) => {
  const {
    show,
    toggle,
    title = '',
    headerClass,
    footerClass,
    footerStyle,
    className,
    children,
    apply,
    applyDisabled,
    applyLoading = false,
    applyBtnName = 'Apply',
    cancelBtnClass,
    cancelBtnName = 'Cancel',
    applyBtnColor,
    applyBtnClass,
    size,
  } = props;

  return (
    <Modal
      className={className}
      isOpen={show}
      toggle={toggle}
      size={size}
    >
      <ModalHeader
        className={`border-0 ${headerClass}`}
        toggle={toggle}
      >
        {title}
      </ModalHeader>

      <ModalBody style={{ 'maxHeight': '70vh', 'overflow': 'auto', 'padding': '24px 40px' }}>
        {children}
      </ModalBody>

      <ModalFooter className={`${footerClass}`} style={{ 'borderTop': '1px dashed #BCBCC0', ...footerStyle }}>
				<Button
					className={cancelBtnClass}
					color='cancel'
					onClick={toggle}
					disabled={applyLoading}
				>
					<ImCross />
					<span>{cancelBtnName}</span>
				</Button>
				<ProgressButton
					btnClassName={`modal-apply-button ${applyBtnClass}`}
					btnColor={applyBtnColor}
					onClick={apply}
					isDisabled={applyDisabled}
					isLoading={applyLoading}
				>
					<AiOutlineCheck />
					<span>{applyBtnName}</span>
				</ProgressButton>
      </ModalFooter>
    </Modal>
  );
};

export default ModalConfirm;
