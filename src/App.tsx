import Todos from './components/todos';
import NewTodo from './components/newTodo';
import {TodosContextProvider} from './store/todoContext';

import './App.css';

function App() {

  return (
    <TodosContextProvider>
      <NewTodo />
      <Todos />
    </TodosContextProvider>
  );
}

export default App;
