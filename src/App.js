import { TodoCounter } from './TodoCounter';
import { SearchBox } from './SearchBox';
import { TodoList } from './TodoList';
import { AddItemButton } from './AddItemButton';
import { TodoItem } from './TodoItem';
import './App.css';

const listaTODOs = []
listaTODOs.push({text: 'Cortar cebolla', completed: true})
listaTODOs.push({text: 'Sacar el perro', completed: false})
function App() {
  return (
    <>
      <TodoCounter completed={completados(listaTODOs)} total={listaTODOs.length}/>
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
