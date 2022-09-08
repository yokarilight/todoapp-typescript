type ModalConfirmProps = {
	show: boolean;
	toggle: () => void;
	title: string;
	size?: string; // lg, md, sm

	headerClass?: string;
	bodyClass?: string;
	footerClass?: string;
	className?: string;
	children?: React.ReactNode

	apply: () => void;
	applyDisabled?: boolean;
	applyBtnName?: string;
	applyBtnClass?: string;

	cancel?: () => void;
	cancelBtnClass?: string;
	cancelBtnName?: string;

	showApplyBtn?: boolean;
  showCancelBtn?: boolean;
}

export default ModalConfirmProps;
