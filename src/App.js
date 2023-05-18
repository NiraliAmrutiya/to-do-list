import React, { useState } from "react";

import TaskList from "./components/CourseGoals/TaskList/TaskList";
import TaskInput from "./components/CourseGoals/TaskInput/TaskInput";
import Card from "./components/UI/Card/Card";
import classes from "./components/UI/Card/Card.module.css";
import "./App.css";

const tasks = [
  {
    id: "g1",
    title: "Do all exercises!",
    description: "I need by today you know",
    startdate: new Date(2023, 0, 14),
    enddate: new Date(2023, 0, 14),
  },
  {
    id: "g2",
    title: "Finish the today's!",
    description: "I need by today",
    startdate: new Date(2023, 6, 13),
    enddate: new Date(2023, 6, 13),
  },
];

const App = () => {
  const [taskGoals, setTaskGoals] = useState(tasks);

  const addTaskHandler = (task) => {
    setTaskGoals((prevTasks) => {
      const updatedGoals = [...prevTasks];
      updatedGoals.unshift({
        title: task.title,
        description: task.description,
        startdate: task.startdate,
        enddate: task.enddate,
        id: Math.random().toString(),
      });
      return updatedGoals;
    });
  };

  const deleteItemHandler = (taskId) => {
    setTaskGoals((prevTasks) => {
      const updatedGoals = prevTasks.filter((task) => task.id !== taskId);
      return updatedGoals;
    });
  };

  let content = (
    <p style={{ textAlign: "center" }}>No goals found. Maybe add one?</p>
  );

  if (taskGoals.length > 0) {
    content = <TaskList items={taskGoals} onDeleteItem={deleteItemHandler} />;
  }

  return (
    <div className="container">
      {/* You can give any other class in card component it would be added with card class. */}
      <Card className={classes.card}>
        <h4 className="text-center mb-4">ToDo List</h4>
        <TaskInput onAddTask={addTaskHandler} />
      </Card>
      <section id="goals">
        {content}
        {/* {courseGoals.length > 0 && (
          <CourseGoalList
            items={courseGoals}
            onDeleteItem={deleteItemHandler}
          />
        ) // <p style={{ textAlign: 'center' }}>No goals found. Maybe add one?</p>
        } */}
      </section>
    </div>
  );
};

export default App;
