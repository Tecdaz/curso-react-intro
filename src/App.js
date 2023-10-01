import { TodoCounter } from './TodoCounter';
import { SearchBox } from './SearchBox';
import { TodoList } from './TodoList';
import { AddItemButton } from './AddItemButton';
import { TodoItem } from './TodoItem';
import './App.css';


function App() {
  return (
    <div className="flex flex-col justify-center items-center h-screen w-screen">
      <h1>Todo App</h1>
      <TodoCounter />
      <SearchBox />

      <TodoList>
        <TodoItem />
        <TodoItem />
        <TodoItem />
      </TodoList>

      <AddItemButton />
      
    </div>
  );
}



export default App;
