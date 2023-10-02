import React from 'react';
import { useLocalStorage } from './useLocalStorage';
import './App.css'
import { AppUI } from './AppUI';


function App() {
  // States
  const [todos, saveTodos] = useLocalStorage('TODOS_V1', [])
  const [searchValue, setSearchValue] = React.useState('');

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
    <AppUI 
    completedTodos={completedTodos}
    todos={todos}
    searchValue={searchValue}
    setSearchValue={setSearchValue}
    completeTodo={completeTodo}
    deleteTodo={deleteTodo}
    todosFiltered={todosFiltered}/>
  );
   
}

export default App;
