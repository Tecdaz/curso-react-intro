import React from 'react';
import { TodoCounter } from '../TodoCounter';
import { SearchBox } from '../SearchBox';
import { TodoList } from '../TodoList';
import { AddItemButton } from '../AddItemButton';
import { TodoItem } from '../TodoItem';
import { TodosError } from '../TodosError';
import { TodosLoading } from '../TodosLoading';
import { EmptyTodos } from '../EmptyTodos';
import { TodoContext } from '../TodoContext';
import { Modal } from '../Modal';

function AppUI() {
    const {
      loading,
      error,
      searchValue,
      todosFiltered,
      completeTodo,
      deleteTodo,
      todos,
      openModal,
    } = React.useContext(TodoContext);
    return (
      <>
        <TodoCounter />
        <SearchBox />
        <TodoList>
          {loading && !error && <TodosLoading />}
          {error && <TodosError />}
          {searchValue.length === 0 && todos.length === 0 && !loading && <EmptyTodos />}
          {searchValue.length > 0 && todosFiltered.length === 0 && <p>¡No hay TODOs que coincidan!</p>}

          {todosFiltered.map(todo => (
            <TodoItem 
              key={todo.text}
              text={todo.text}
              completed={todo.completed}
              onComplete={() => completeTodo(todo.text)}
              onDelete={() => deleteTodo(todo.text)}
            />
          ))}
        </TodoList>
        
        {openModal && <Modal/>}
        <AddItemButton />

        
      </>
    );
}


export { AppUI }