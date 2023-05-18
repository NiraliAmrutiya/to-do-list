import React, { useState } from "react";

import Button from "../../UI/Button/Button";
import styles from "./TaskInput.module.css";
import Modal from "../../UI/Modal/Modal";
// import styled from "styled-components";

// const FormControl = styled.div`
//   margin: 0.5rem 0;

//   & label {
//     font-weight: bold;
//     display: block;
//     margin-bottom: 0.5rem;
//     color : ${props => props.invalid ? 'red' : '#5f5f5f'};
//   }

//   & input {
//     display: block;
//     width: 100%;
//     border: 1.5px solid ${props => props.invalid ? 'red' : '#5f5f5f'};
//     background : ${props => props.invalid ? '#fad0ec' : 'transparent'};
//     font: inherit;
//     line-height: 1.5rem;
//     padding: 0 0.25rem;
//   }

//   & input:focus {
//     outline: none;
//     background: ;
//     border-color: #8b005d;
//   }

// `;

const CourseInput = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredDescription, setEnteredDescription] = useState("");
  const [enteredStartDate, setEnteredStartDate] = useState("");
  const [enteredEndDate, setEnteredEndDate] = useState("");
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

  const startDateChangeHandler = (event) => {
    setEnteredStartDate(event.target.value);
  };

  const endDateChangeHandler = (event) => {
    setEnteredEndDate(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();

    const taskData = {
      title: enteredTitle,
      description: enteredDescription,
      startdate: new Date(enteredStartDate),
      enddate: new Date(enteredEndDate),
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
    setEnteredStartDate("");
    setEnteredEndDate("");
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <div>
      {error && <Modal title={error.title} message={error.message} onConfirm={errorHandler} />}
      <form onSubmit={formSubmitHandler}>
        <div className="row">
          <div
            className={`${styles["form-control"]} ${
              !isValid && styles.invalid
            } col-6`}
          >
            <label>Title</label>
            <input
              type="text"
              className="form-control"
              value={enteredTitle}
              onChange={titleChangeHandler}
            />
          </div>
          <div className="col-6">
            <label>Description</label>
            <input
              type="text"
              className="form-control"
              value={enteredDescription}
              onChange={descriptionChangeHandler}
            />
          </div>
          <div className="col-6">
            <label>Start Date</label>
            <input
              type="date"
              className="form-control"
              value={enteredStartDate}
              onChange={startDateChangeHandler}
            />
          </div>
          <div className="col-6">
            <label>End Date</label>
            <input
              type="date"
              className="form-control"
              value={enteredEndDate}
              onChange={endDateChangeHandler}
            />
          </div>
        </div>

        <Button type="submit">Add Goal</Button>
      </form>
    </div>
  );
};

export default CourseInput;
