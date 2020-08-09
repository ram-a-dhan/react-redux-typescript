import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import TodoInput from './components/TodoInput';
import TodoItem from './components/TodoItem';
import logo from './logo.svg';
import './App.css';

const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const todoReducer:any = useSelector<Todo[]>(state => state);

  useEffect(() => {
    setTodos(todoReducer);
  }, [todoReducer]);
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>To-do App</h1>
        <div className="TodoApp my-2">

          <TodoInput />

          <table className="TodoList table table-borderless">
            <tbody>
              {todos.map((todo, index) => {
                return (
                  <TodoItem key={index} todo={todo} />
                )
              })}
            </tbody>
          </table>

        </div>
      </header>
    </div>
  );
}

export default App;
