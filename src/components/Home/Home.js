import React, { useState } from "react";
import Card from "../UI/Card/Card";
import classes from "../UI/Card/Card.module.css";
import TaskInput from "../CourseGoals/TaskInput/TaskInput";
import TaskList from "../CourseGoals/TaskList/TaskList";

const tasks = [
  {
    id: "g1",
    title: "Do all exercises!",
    description: "I need by today you know",
  },
  {
    id: "g2",
    title: "Finish the today's!",
    description: "I need by today",
  },
];

const Home = (props) => {
  const [taskGoals, setTaskGoals] = useState(tasks);

  const addTaskHandler = (task) => {
    setTaskGoals((prevTasks) => {
      const updatedGoals = [...prevTasks];
      updatedGoals.unshift({
        title: task.title,
        description: task.description,

        id: Math.random().toString(),
      });
      return updatedGoals;
    });
  };
  const deleteItemHandler = (taskId) => {
    setTaskGoals((prevTasks) => {
      const updatedGoals = prevTasks.filter((task) => task.id !== taskId);
      console.log("deleted");
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

export default Home;
