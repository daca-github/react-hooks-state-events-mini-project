import React from 'react';
import Task from './Task'

function TaskList({ tasks, onTaskDelete }) {
  return (
    <div>
      {tasks.map((task) => (
        <Task key={task.id} text={task.text} category={task.category} onTaskDelete={onTaskDelete} />

      ))}
    </div>
  );
}



export default TaskList
