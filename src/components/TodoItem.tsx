import React, { FC, useState, useRef } from 'react';
import { UncontrolledTooltip } from 'reactstrap';
import { ImCancelCircle } from 'react-icons/im';
import { BsPencilSquare, BsCheckCircle } from 'react-icons/bs';
import { AiFillDelete } from 'react-icons/ai';

interface TodoItemProps {
	id: string,
	todo: string,
	handleDeleteTodoItem: (todoId: string) => void;
}

const TodoItem:FC<TodoItemProps> = ({ id, todo, handleDeleteTodoItem }) => {
	const [ isEdit, setIsEdit ] = useState<boolean>(false);
	// const inputRef = useRef(todo);

	const handleEditTodoItem = (todoId: string) => {

	};

	return (
		<div className='w-64 px-4 py-2 bg-purple-500 flex justify-between items-center'>
			{isEdit ? (
				<input className='p-2 border rounded-md' type='text' placeholder='Please Type Any Text' value={todo} />
			) : (
				<div className='font-bold text-white'>{todo}</div>
			)}
			<div className='' >
				{isEdit ? (
					<>
						<BsCheckCircle className='cursor-pointer' id='todo-item-finish' onClick={handleEditTodoItem.bind(null, id)} />
						{/* <UncontrolledTooltip
							target='todo-item-finish'
							placement='bottom'
						>
							finish
						</UncontrolledTooltip> */}
						<ImCancelCircle className='cursor-pointer' id='todo-item-cancel' onClick={() => setIsEdit(false)} />
						{/* <UncontrolledTooltip
							target='todo-item-cancel'
							placement='bottom'
						>
							cancel
						</UncontrolledTooltip> */}
					</>
				) : (
					<>
						<BsPencilSquare className='cursor-pointer' id='todo-item-edit' onClick={() => setIsEdit(true)} />
						<UncontrolledTooltip
							target='todo-item-edit'
							placement='bottom'
						>
							edit
						</UncontrolledTooltip>
						<AiFillDelete className='cursor-pointer' id='todo-item-delete' onClick={handleDeleteTodoItem.bind(null, id)} />
						<UncontrolledTooltip
							target='todo-item-delete'
							placement='bottom'
						>
							delete
						</UncontrolledTooltip>
					</>
				)}
			</div>
		</div>
	);
}

export default TodoItem;
