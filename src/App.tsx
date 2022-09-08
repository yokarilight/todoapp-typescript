import React, { FC, useState } from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

import TodoModal from './models/todoType';

import 'bootstrap/dist/css/bootstrap.min.css';

const App:FC = () => {
  const [ todos, setTodos ] = useState<TodoModal[]>([]);

  const handleAddTodoItem = (inputValue: string) => {
    setTodos((pre) => [...pre, { 'id': Math.random().toString(), 'description': inputValue }]);
  };

  const handleDeleteTodoItem = (todoId: string) => {
    setTodos((pre) => pre.filter(todo => todo.id !== todoId));
  };

  return (
    <div>
      <header className="w-full h-24 bg-green-300 flex justify-center items-center">
        <div className='text-center text-4xl font-bold'>
          Learn to make Todo App
        </div>
      </header>
      <TodoForm handleAddTodoItem={handleAddTodoItem} />
      <TodoList data={todos} handleDeleteTodoItem={handleDeleteTodoItem} />
    </div>
  );
}

export default App;
