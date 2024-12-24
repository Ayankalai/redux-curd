import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../feature/todo/todoSlice';
import DisplayTodo from './DisplayTodo';

const AddTodo = () => {
  const [input, setInput] = useState('');
  const dispatch = useDispatch();

  const handleAddTodo = (e) => {
    e.preventDefault();
    if (input.trim() !== '') {
      dispatch(addTodo(input));
      setInput('');
    }
  };

  return (
    <div>
      <div className="text-center pt-4">
      <h3 className='text-center'>Add Todo</h3>

<form onSubmit={handleAddTodo}>
  <input
    type="text"
    value={input}
    onChange={(e) => setInput(e.target.value)}
    placeholder="Enter todo"
  />
  <button
    type="submit"
    disabled={input.trim() === ''}
  >
    Add
  </button>
</form>
      </div>

      <DisplayTodo setInput={setInput} />
    </div>
  );
};

export default AddTodo;
