import React, { FC, FormEvent, useState, useRef } from 'react';
import ModalConfirm from './ModalConfirm';

interface TodoFormProps {
	handleAddTodoItem: (inputValue: string) => void;
}

const TodoForm:FC<TodoFormProps> = ({ handleAddTodoItem }) => {
	const [ isAddTodoErr, setIsAddTodoErr ] = useState<boolean>(false);
	const inputRef = useRef<HTMLInputElement>(null);

	const handleClearInput = (el: HTMLInputElement) => {
		el.value = '';
	};

	const handleSubmit = (event:FormEvent) => {
		event?.preventDefault();
		const inputValue = inputRef.current!.value;

		if (!inputValue) {
			return 
		}

		handleAddTodoItem(inputValue);

		if (inputRef.current !== null) {
			handleClearInput(inputRef.current);
		}
	};

	return (
		<>
			<form onSubmit={handleSubmit} className='w-full flex justify-center items-center gap-4 mt-4'>
				<input className='p-2 border rounded-md' type='text' placeholder='Please Type Any Text' ref={inputRef} />
				<button className='px-4 py-2 rounded font-bold text-white bg-blue-700' type='submit'>Submit</button>
			</form>
			{/* <ModalConfirm
				show={isAddTodoErr}
				toggle={(pre: boolean) => setIsAddTodoErr(!pre)}
				title='Warning'
				apply={() => setIsAddTodoErr(false)}
			/> */}
		</>
	);
}

export default TodoForm;
