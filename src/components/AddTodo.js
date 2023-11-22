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
    <div>
      <input onChange={onChangeHandler} value={text} />
      <button onClick={() => onAddHelper()}>ADD</button>
    </div>
  );
}
