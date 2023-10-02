import React from 'react';
import { TodoCounter } from './TodoCounter';
import { SearchBox } from './SearchBox';
import { TodoList } from './TodoList';
import { AddItemButton } from './AddItemButton';
import { TodoItem } from './TodoItem';
import './styles/App.css'



function App() {
  function useLocalStorage(itemName, initialValue) {
    const localData = localStorage.getItem(itemName);
    let parsedData;
    if (localData) {
      parsedData = JSON.parse(localData);
    }else{
      localStorage.setItem(itemName, JSON.stringify(initialValue));
      parsedData = initialValue;
    }

    const [item, setItem] = React.useState(parsedData);
    
    const saveItem = (newItem) => {
      localStorage.setItem(itemName, JSON.stringify(newItem));
      setItem(newItem);
    }

    return [item, saveItem]
  }



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
    <>
      <TodoCounter completed={completedTodos.length} total={todos.length} />
      <SearchBox
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />

      <TodoList>
        {todosFiltered.map(todo => (
          <TodoItem key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />

        ))}
      </TodoList>

      <AddItemButton />

    </>
  );
}

export default App;
