import React from "react";
import { useLocalStorage } from "./useLocalStorage";

const TodoContext = React.createContext();

function TodoProvider ({children}) {
    // States
  const {
    item: todos,
    saveItem: saveTodos,
    loading,
    error,
  } = useLocalStorage('TODOS_V1', [])
  const [searchValue, setSearchValue] = React.useState('');
  const [openModal, setOpenModal] = React.useState(false);

  // Filtered todos
  const completedTodos = todos.filter(todo => !!todo.completed);
  const todosFiltered = todos.filter(todo => todo.text.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()));

  const completeTodo = (text) => {
    const newTodos = [...todos];

    const todoIndex = newTodos.findIndex(todo => todo.text === text);

    newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
    saveTodos(newTodos)
  }

  const deleteTodo = (text) => {
    const newTodos = [...todos];

    const todoIndex = newTodos.findIndex(todo => todo.text === text);

    newTodos.splice(todoIndex, 1)
    saveTodos(newTodos)
  }
// eslint-disable-next-line
  const addTodo = (text) => {
    const newTodos = [...todos];
    newTodos.push({text: text, completed:false})

    saveTodos(newTodos)
  }
    return (
        <TodoContext.Provider value={{
            loading,
            error,
            completedTodos,
            searchValue,
            setSearchValue,
            todosFiltered,
            completeTodo,
            deleteTodo,
            addTodo,
            todos,
            openModal,
            setOpenModal,
        }}>
            {children}
        </TodoContext.Provider>
    )
}

export { TodoContext, TodoProvider }