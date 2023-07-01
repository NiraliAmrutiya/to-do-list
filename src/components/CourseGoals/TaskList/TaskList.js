import React from "react";
import TaskItem from "../TaskItem/TaskItem";
import "./TaskList.css";

const TaskList = (props) => {
  return (
    <div className="goal-list row">
      {props.items.map((task) => (
        <TaskItem
          key={task.id}
          id={task.id}
          title={task.title}
          description={task.description}
          onDelete={props.onDeleteItem}
        ></TaskItem>
      ))}
    </div>
  );
};

export default TaskList;
