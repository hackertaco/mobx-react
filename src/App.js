import React from "react";
import TodoList from "./components/TodoList";
import { TodoStore } from './store/TodoStore';

const store = TodoStore.create({
  todos: [{
    title: "react 까먹음",
    
  }],
});



const App = () => {
  return (
    <div className="container">
      <h1>Todos</h1>
      <TodoList todoStore = {store} />
    </div>
  );
};

export default App;