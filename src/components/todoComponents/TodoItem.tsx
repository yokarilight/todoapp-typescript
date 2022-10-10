import React, { FC, useState } from 'react';
import { ImCancelCircle } from 'react-icons/im';
import ModalConform from '../modals/ModalConfirm';

interface TodoItemProps {
	id: string;
	todo: string;
	handleDeleteTodoItem: (todoId: string) => void;
	isApplying: boolean;
}

const TodoItem:FC<TodoItemProps> = ({ id, todo, handleDeleteTodoItem, isApplying }) => {
	const [ isModalOpen, setIsModalOpen ] = useState<boolean>(false);

	const modalToggle = () => {
		setIsModalOpen(!isModalOpen)
	}

	return (
		<>
			<div className='w-64 px-4 py-2 bg-purple-500 flex justify-between items-center'>
				<div className='font-bold text-white'>{todo}</div>
				<ImCancelCircle onClick={() => setIsModalOpen(true)} />
			</div>
			<ModalConform
				show={isModalOpen}
				toggle={modalToggle}
				title='Delete Item Warning'
				apply={handleDeleteTodoItem.bind(null, id)}
				applyDisabled={isApplying}
				applyLoading={isApplying}
				cancelBtnClass='d-flex align-items-center'
			>
				Are you show you want to delete this item?
			</ModalConform>
		</>
	);
}

export default TodoItem;
