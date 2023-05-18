import React from "react";

import "./TaskItem.css";

import Date from "../Date/Date";

const TaskItem = (props) => {
  // const [deleteText, setDeleteText] = useState('');

  const deleteHandler = () => {
    // setDeleteText('(Deleted!)');
    props.onDelete(props.id);
    // console.log(props.description);
  };

  return (
    <div className="col-3" onClick={deleteHandler}>
      {/* {props.children} */}
      <div className="goal-item">
      <b>Title:</b> {props.title}
      <br />
      <b>Description:</b> {props.description}
      <br />
      <b>Start Date:</b> <Date date={props.startdate} />
      <b>End Date:</b> <Date date={props.enddate} />
      <br />
      </div>
    </div>
  );
};

export default TaskItem;
