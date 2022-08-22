import React, { useState, useEffect } from "react";
import "./App.css";
// Importing our components from the form
import Form from "./components/form";
import TodoList from "./components/todolist";
function App() {

     // State stuffs
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filter, setFilter] = useState([]);

  // Applying useEffect
  useEffect(() =>{
    filterHandler();
  }, [todos, status])

  // Filter function
  const filterHandler = () => {
    switch (status) {
      case "completed":
        setFilter(todos.filter((todo) => todo.completed === true));
        break;
        case "uncompleted":
          setFilter(todos.filter((todo) => todo.completed === false));
          break;
          default: 
          setFilter(todos);
    }
  };

  return (
    <>
      <header>Mishel's Todo App</header>
      <Form
        inputText={inputText}
        todos={todos}
        setTodos={setTodos}
        setInputText={setInputText}
        setStatus={setStatus}
        filter = {filter}
      />
      <TodoList todos={todos} setTodos={setTodos} filter = {filter} />
    </>
  );
}

export default App;
