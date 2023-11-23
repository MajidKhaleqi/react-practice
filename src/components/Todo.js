export default function Todo({ text, onDelete }) {
  function onDeleteHelper(text) {
    onDelete(text);
  }
  return (
    <div className="todoContainerClass mt-2">
      <div className="todoClass p-2">
      <img className="delete" onClick={() => onDeleteHelper(text)} width="24" height="24" src="https://img.icons8.com/material-two-tone/24/000000/trash.png" alt="trash"/>
     

        <p>{text}</p>
      </div>
    </div>
  );
}
