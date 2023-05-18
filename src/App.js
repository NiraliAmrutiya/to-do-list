import React, { useState } from "react";

import TaskList from "./components/CourseGoals/TaskList/TaskList";
import TaskInput from "./components/CourseGoals/TaskInput/TaskInput";
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

  const deleteItemHandler = (goalId) => {
    setTaskGoals((prevTasks) => {
      const updatedGoals = prevTasks.filter((goal) => goal.id !== goalId);
      return updatedGoals;
    });
  };

  let content = (
    <p style={{ textAlign: "center" }}>No goals found. Maybe add one?</p>
  );

  if (taskGoals.length > 0) {
    content = (
      <TaskList items={taskGoals} onDeleteItem={deleteItemHandler} />
    );
  }

  return (
    <div className="container">
      <section id="goal-form">
        <h4 className="text-center mb-4">ToDo List</h4>
        <TaskInput onAddTask={addTaskHandler} />
      </section>
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
