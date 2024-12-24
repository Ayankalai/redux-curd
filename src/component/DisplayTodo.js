import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeTodo, updateTodo } from '../feature/todo/todoSlice';

const DisplayTodo = () => {
    const todos = useSelector(state => state.todos);
    const dispatch = useDispatch();

    const handleUpdateTodo = (id, currentText) => {
       
        console.log(todos)
        const updatedText = prompt("update ur text",currentText)
        if (updatedText && updatedText.trim() !== '') {
            dispatch(updateTodo({id,text:updatedText}))
        }else{
            prompt("promt canot be empty")
        }

        
    };

    return (
        <div className="container mt-4">
            <ul className="list-group">
                {todos.map(todo => (
                    <li key={todo.id} className="list-group-item d-flex justify-content-between align-items-center">
                        {todo.text}
                        <button
                            className="btn btn-primary"
                            onClick={() => handleUpdateTodo(todo.id, todo.text)}
                        >
                            Edit
                        </button>
                        <button
                            className="btn btn-danger"
                            onClick={() => dispatch(removeTodo(todo.id))}
                        >
                            Delete
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default DisplayTodo;
