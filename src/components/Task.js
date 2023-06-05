import React from "react";

function Task({ text = "", category = "", onTaskDelete }) {
  const task = { text, category };
  
  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button className="delete" onClick={() => onTaskDelete(task)}>X</button>
    </div>
  );
}

export default Task;
