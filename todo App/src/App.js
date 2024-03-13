import { useState } from 'react';
import './App.css';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

function App() {
  const [ren, setRen] = useState(false);

  return (
    <div className="App">
      <h1>Todo App:</h1>
      <TodoForm ren={ren} setRen={setRen} />
      <TodoList ren={ren}/>
    </div>
  );
}

export default App;
