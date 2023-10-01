import { TodoCounter } from './TodoCounter';
import { SearchBox } from './SearchBox';
import { TodoList } from './TodoList';
import { AddItemButton } from './AddItemButton';
import { TodoItem } from './TodoItem';
import './App.css';

const listaTODOs = []
listaTODOs.push({text: 'Cortar cebolla', completed: true})
function App() {
  return (
    <>
      <h1>Todo App</h1>
      <TodoCounter completed={12} total={156}/>
      <SearchBox />

      <TodoList>
        {listaTODOs.map(todo => (
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



export default App;
