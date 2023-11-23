import { useState } from "react";

export default function AddTodo({ onAdd }) {
  const [text, setText] = useState("");

  function onAddHelper() {
    onAdd(text);
    setText("");
  }
  function onChangeHandler(event) {
    setText(event.target.value);
  }

  return (
    <div className="todo-app-container p-5 text-center m-5">
      <input
        onChange={onChangeHandler}
        value={text}
        className='block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900'
      />

      <button
        onClick={() => onAddHelper()}
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
      >
        ADD
      </button>
    </div>
  );
}
