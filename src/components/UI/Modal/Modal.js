import React from "react";

import classes from "./Modal.module.css";
import { Button, Card } from "react-bootstrap";

const Modal = (props) => {
  return (
    <div>
      <div className={classes.backdrop} onClick={props.onConfirm}/>
      <Card className={classes.modal}>
        <div className={classes.header}>
          <h3>{props.title}</h3>
        </div>
        <div className={classes.content}>
          <p>{props.message}</p>
        </div>
        <div className={classes.actions}>
          <Button onClick={props.onConfirm} className="button">Okay</Button>
        </div>
      </Card>
    </div>
  );
};

export default Modal;
