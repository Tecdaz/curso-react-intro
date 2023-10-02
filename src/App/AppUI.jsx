import React from 'react';
import { TodoCounter } from '../TodoCounter';
import { SearchBox } from '../SearchBox';
import { TodoList } from '../TodoList';
import { AddItemButton } from '../AddItemButton';
import { TodoItem } from '../TodoItem';

function AppUI({completedTodos,
    todos,
    searchValue,
    setSearchValue,
    completeTodo,
    deleteTodo,
    todosFiltered}) {
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

export { AppUI }