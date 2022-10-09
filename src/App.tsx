import React, { FC, useState } from 'react';
import TodoForm from './components/todoComponents/TodoForm';
import TodoList from './components/todoComponents/TodoList';

import TodoModal from './models/todoType';

const App:FC = () => {
  const [ todos, setTodos ] = useState<TodoModal[]>([]);
  const [ isApplying, setIsApplying ] = useState<boolean>(false);

  const handleAddTodoItem = (inputValue: string) => {
    setTodos((pre) => [...pre, { 'id': Math.random().toString(), 'description': inputValue }]);
  };

  const handleDeleteTodoItem = (todoId: string) => {
    setIsApplying(true);
    setTodos((pre) => pre.filter(todo => todo.id !== todoId));
    setIsApplying(false);
  }

  return (
    <div>
      <header className="w-full h-24 bg-green-300 flex justify-center items-center">
        <div className='text-center text-4xl font-bold'>
          Learn to make Todo App
        </div>
      </header>
      <TodoForm handleAddTodoItem={handleAddTodoItem} />
      <TodoList data={todos} handleDeleteTodoItem={handleDeleteTodoItem} isApplying={isApplying} />
    </div>
  );
}

export default App;
