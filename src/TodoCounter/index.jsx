import React from 'react';
import './TodoCounter.css'
import { TodoContext } from '../TodoContext';

function TodoCounter()  {
    const {todos, completedTodos } = React.useContext(TodoContext);
    if (todos.length === 0) {
        return (
            <h2 className="counter">
                Añade tu primer TODO 🗒️
            </h2>)
    }
    if(todos.length === completedTodos.length) {
        return (
        <h2 className="counter">
            Has completado todas tus tareas 🎊
        </h2>)
    }
    return (
        <h2 className="counter">
            Has completado <span>{completedTodos.length}</span> de <span>{todos.length}</span> TODOs
        </h2>
    );
}

export { TodoCounter };