import Tohead from './Tohead'
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Listtodo from "./Listtodo";
import Searchholder from "./Searchholder";
import './Todomain.css'

export default function Todomain() {
  const [todos, setTodos] = useState([
    { task: "sample case", id: uuidv4(), isDone: false }
  ]);
  const [newTodo, setNewTodo] = useState("");

  const newTask = (e) => {
    e.preventDefault(); // prevent page reload
    if (newTodo.trim() === "") return;
    setTodos((prevTodos) => [
      ...prevTodos,
      { task: newTodo, id: uuidv4(), isDone: false }
    ]);
    setNewTodo("");
  };

  const updateTodoValue = (event) => {
    setNewTodo(event.target.value);
  };

  const deleteTodo = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  const markAsDone = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, isDone: true } : todo
      )
    );
  };

  const markAsDoneAll = () => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => ({ ...todo, isDone: true }))
    );
  };

  return (
    <div>
        <Tohead/>
        <div style={{color: "#BF5700"}}><h2> TASKS </h2></div>
      <Searchholder
        newTodo={newTodo}
        updateTodoValue={updateTodoValue}
        newTask={newTask}
      />
      <Listtodo
        todos={todos}
        deleteTodo={deleteTodo}
        markAsDone={markAsDone}
      />
      <button onClick={markAsDoneAll} className="ButtonDone">Mark All as Done</button>
    </div>
  );
}
