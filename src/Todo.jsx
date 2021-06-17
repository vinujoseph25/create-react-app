export const Todo = (props) => {
  const { todo, index, updateTodo, removeTodo } = props;
  const { text, isCompleted } = todo;
  return (
    <div
      className="todo"
      style={{ textDecoration: isCompleted ? "line-through" : "" }}
    >
      {text}
      <div>
        <button onClick={() => updateTodo(index, !isCompleted)}>
          {isCompleted ? "Undo" : "Complete"}
        </button>
        <button onClick={() => removeTodo(index)}>x</button>
      </div>
    </div>
  );
};
