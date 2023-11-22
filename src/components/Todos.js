import Todo from "./Todo";
import AddTodo from "./AddTodo";

import { useState } from "react";

export default function Todos() {
  const [todos, addTodo] = useState([]);
  function Add(text) {
    let todosCopy = [...todos];
    todosCopy.push(text);
    addTodo(todosCopy);
  }
  function Delete(text) {
    let todosCopy = [...todos];
    todosCopy = todosCopy.filter(function (todo) {
      return todo != text;
    });
    addTodo(todosCopy);
  }

  return (
    <>
      <AddTodo
        onAdd={(t) => {
          return Add(t);
        }}
      />
      {todos.map((todo) => {
        return (
          <Todo
            text={todo}
            onDelete={(t) => {
              return Delete(t);
            }}
          />
        );
      })}
    </>
  );
}
