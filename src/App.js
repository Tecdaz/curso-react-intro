import React from 'react';
import { TodoCounter } from './TodoCounter';
import { SearchBox } from './SearchBox';
import { TodoList } from './TodoList';
import { AddItemButton } from './AddItemButton';
import { TodoItem } from './TodoItem';
import './styles/App.css'



function App() {
  // States
  const [todos, setTodos] = React.useState([{ text: 'hola mundo', completed: true }]);
  const [searchValue, setSearchValue] = React.useState('');
  // Filtered todos
  const completedTodos = todos.filter(todo => !!todo.completed);
  const todosFiltered = todos.filter(todo => todo.text.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()));

  const completeTodo = (text) => {
    const newTodos = [...todos];

    const todoIndex = newTodos.findIndex(todo => todo.text === text);

    newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
    setTodos(newTodos)
  }

  const deleteTodo = (text) => {
    const newTodos = [...todos];

    const todoIndex = newTodos.findIndex(todo => todo.text === text);

    newTodos.splice(todoIndex, 1)
    setTodos(newTodos)
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
