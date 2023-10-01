import React from 'react';
import { TodoCounter } from './TodoCounter';
import { SearchBox } from './SearchBox';
import { TodoList } from './TodoList';
import { AddItemButton } from './AddItemButton';
import { TodoItem } from './TodoItem';
import './App.css';



function App() {
  const [todos, setTodos] = React.useState([{text:'hola mundo', completed:true}]);
  const [searchValue, setSearchValue] = React.useState('');

  const completedTodos = todos.filter(todo => !!todo.completed);
  const todosFiltered = todos.filter(todo => todo.text.toLowerCase().includes(searchValue.toLowerCase()));
  console.log(searchValue);
  return (
    <>
      <TodoCounter completed={completedTodos.length} total={todos.length}/>
      <SearchBox 
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />

      <TodoList>
        {todosFiltered.map(todo => (
          <TodoItem key={todo.text}
                    text={todo.text} 
                    completed={todo.completed} 
          />

        ))}
      </TodoList>

      <AddItemButton />
      
    </>
  );
}

function completados(listaTODOs){
  let completados = 0
  listaTODOs.forEach(todo => {
    if(todo.completed){
      completados++
    }
  })
  return completados
}

export default App;
