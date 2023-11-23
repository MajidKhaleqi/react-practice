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
      <div class="grid grid-cols-2 gap-4">
        <div className="">
          <AddTodo
            onAdd={(t) => {
              return Add(t);
            }}
          />
        </div>
        <div className="m-5 font-bold text-center">
          Todoos :
          {todos.length > 0 ? (
            todos.map((todo) => {
              return (
                <Todo
                  text={todo}
                  onDelete={(t) => {
                    return Delete(t);
                  }}
                />
              );
            })
          ) : (
            <p className="m-5 font-bold ">Nothing to show!</p>
          )}
        </div>
      </div>
    </>
  );
}
