import React, { FC } from 'react';
import TodoItem from './TodoItem';

interface TodoListProps {
	data: {
		'id': string,
		'description': string
	}[],
	handleDeleteTodoItem: (todoId: string) => void;
}

const TodoList:FC<TodoListProps> = ({ data, handleDeleteTodoItem }) => {
	return (
		<div className='flex justify-center items-center flex-col gap-4 mt-6'>
			{data.map((todoItem) => <TodoItem key={todoItem.id} id={todoItem.id} todo={todoItem.description} handleDeleteTodoItem={handleDeleteTodoItem}></TodoItem>)}
		</div>
	);
}

export default TodoList;
