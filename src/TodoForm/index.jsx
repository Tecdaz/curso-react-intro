import React from "react";
import "./TodoForm.css";
import { TodoContext } from "../TodoContext";

function TodoForm(){
    const { setOpenModal, addTodo } = React.useContext(TodoContext);

    const [error, setError] = React.useState(false);

    const onSubmit = (event) => {
        const textArea = document.querySelector('.todo-form-textarea');
        if(textArea.value.length !== 0){
            addTodo(textArea.value);
            setOpenModal(false);
        }else{
            textArea.placeholder = "Escribe algo para añadirlo a la lista";
            setError(true);
        }
        event.preventDefault();
        
    }

    const onCancel = () => {
        setOpenModal(false);
    }

    return(
        <form 
            onSubmit={onSubmit}
            className="todo-form">
            <label>Escribe tu nuevo TODO</label>
            <textarea
                onFocus={() => setError(false)}
                className={`todo-form-textarea ${error && 'todo-form-textarea--error'}`}
                placeholder={`${error? "Escribe algo para añadirlo a la lista" : "Sacar el perro"}`}>
            </textarea>
            <div className="todo-buttons-container">
                <button
                    onClick={onCancel}
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