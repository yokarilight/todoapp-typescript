import React, { FC } from 'react';
import { ImCancelCircle } from 'react-icons/im';

interface TodoItemProps {
	id: string,
	todo: string,
	handleDeleteTodoItem: (todoId: string) => void;
}

const TodoItem:FC<TodoItemProps> = ({ id, todo, handleDeleteTodoItem }) => {
	return (
		<div className='w-64 px-4 py-2 bg-purple-500 flex justify-between items-center'>
			<div className='font-bold text-white'>{todo}</div>
			<ImCancelCircle onClick={handleDeleteTodoItem.bind(null, id)} />
		</div>
	);
}

export default TodoItem;
