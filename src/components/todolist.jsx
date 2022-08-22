import React from 'react';

import Todo from './todo';

function TodoList({todos, setTodos, filter}){
    console.log(todos);
    return(
        <div className="todo-container">
       <ul className="todo-list">
          {filter.map((todo)=>
          <Todo key={todo.id}
           text= {todo.text} 
           setTodos ={setTodos} 
          todos = {todos}
          todo = {todo}/>)}
       </ul>
        </div>
    );
}
export default TodoList;