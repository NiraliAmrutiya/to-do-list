import React, { useState } from "react";

import Button from "../../UI/Button/Button";
import styles from "./TaskInput.module.css";
import Modal from "../../UI/Modal/Modal";
import Input from "../../UI/Input/Input";
// import styled from "styled-components";

const CourseInput = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredDescription, setEnteredDescription] = useState("");

  const [error, setError] = useState();

  const [isValid, setIsValid] = useState(true);

  // const goalInputChangeHandler = (event) => {
  //   if (event.target.value.trim().length > 0) {
  //     setIsValid(true);
  //   }
  //   setEnteredTitle(event.target.value);

  // };

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  const descriptionChangeHandler = (event) => {
    setEnteredDescription(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();

    const taskData = {
      title: enteredTitle,
      description: enteredDescription,
    };

    if (
      enteredTitle.trim().length === 0 ||
      enteredDescription.trim().length === 0
    ) {
      setError({
        title: "Invalid input",
        message:
          "Please enter a valid Title and Description (non-empty values).",
      });
      setIsValid(false);
      return;
    }
    props.onAddTask(taskData);
    console.log(taskData);

    //resets the form to empty
    setEnteredTitle("");
    setEnteredDescription("");
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <div>
      {error && (
        <Modal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <form onSubmit={formSubmitHandler}>
        <div className="row">
          <div
            className={`${styles["form-control"]} ${
              !isValid && styles.invalid
            } col-6`}
          >
            <Input
              label="Title"
              type="text"
              className="form-control"
              value={enteredTitle}
              onChange={titleChangeHandler}
            />
          </div>
          <div className="col-6">
            <Input
              label="Description"
              type="text"
              className="form-control"
              value={enteredDescription}
              onChange={descriptionChangeHandler}
            />
          </div>
        </div>

        <Button type="submit">Add Goal</Button>
      </form>
    </div>
  );
};

export default CourseInput;
