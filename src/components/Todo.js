export default function Todo({ text , onDelete}) {
    function onDeleteHelper(text) {
        onDelete(text);
      }
  return (
    <div className="todoContainerClass">
      <div className="todoClass">
        <button className="delete" onClick={()=>onDeleteHelper(text)}>X</button>

        <p>{text}</p>
      </div>
    </div>
  );
}
