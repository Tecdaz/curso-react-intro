import React from "react";
import "./TodoForm.css";

function TodoForm(){
    return(
        <form className="todo-form">
            <label>Escribe tu nuevo TODO</label>
            <textarea 
                placeholder="Sacar el perro">
            </textarea>
            <div className="todo-buttons-container">
                <button 
                    className="todoForm-button todoForm-button--cancel">cancelar</button>
                <button
                    className="todoForm-button todoForm-button--add">
                    Añadir
                </button>
            </div>
        </form>
    )
}

export { TodoForm }