import React, { FC } from 'react';
import { Button } from 'reactstrap';
import { FaSpinner } from 'react-icons/fa';

interface BtnStyle {
	[x: string]: string
}

interface ProgressButtonProps {
	wrapperClassName?: string;
	btnClassName?: string;
	btnStyle?: BtnStyle;
	btnColor?: string;
	isDisabled: boolean
	children: React.ReactNode;
	btnSz?: string;
	onClick: () => void,
	id?: string;
	isLoading: boolean;
}

const ProgressButton:FC<ProgressButtonProps> = (props) => {
	const {
		wrapperClassName = '',
    btnClassName = '',
    btnStyle = {},
    btnColor = 'primary',
    isDisabled = false,
    children = 'Apply',
    btnSz,
    onClick = () => {},
    id = '',
    isLoading = false,
	} = props;

	return (
		<div className={wrapperClassName}>
    <Button
      className={btnClassName}
      color={btnColor}
      onClick={onClick}
      disabled={isDisabled || isLoading}
      size={btnSz}
      id={id}
      style={btnStyle}
    >
      <>{children}</>
      <FaSpinner className={isLoading ? 'ml-2' : 'd-none'} />
    </Button>
  </div>
	);
}

export default ProgressButton;
