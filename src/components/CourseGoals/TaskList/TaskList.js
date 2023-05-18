import React from "react";
import TaskItem from "../TaskItem/TaskItem";
import "./TaskList.css";

const TaskList = (props) => {  
  
  return (
    <ul className="goal-list">
      {props.items.map((task) => (
        <TaskItem   
          key={task.id}
          title={task.title}
          description={task.description}
          startdate={task.startdate}
          enddate={task.enddate}
          onDelete={props.onDeleteItem}
        />
      ))}
    </ul>
  );
};

export default TaskList;
