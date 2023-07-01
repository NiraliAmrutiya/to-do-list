import React from "react";
import ReactDOM from "react-dom";

import classes from "./Modal.module.css";
import { Button, Card } from "react-bootstrap";

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onConfirm} />;
};

const ModalOverlay = (props) => {
  return (
    <Card className={classes.modal}>
      <div className={classes.header}>
        <h3>{props.title}</h3>
      </div>
      <div className={classes.content}>
        <p>{props.message}</p>
      </div>
      <div className={classes.actions}>
        <Button onClick={props.onConfirm} className="button">
          Okay
        </Button>
      </div>
    </Card>
  );
};

const Modal = (props) => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <Backdrop onConfirm={props.onConfirm} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <ModalOverlay
          title={props.title}
          message={props.message}
          onConfirm={props.onConfirm}
        />,
        document.getElementById("overlay-root")
      )}
    </React.Fragment>
  );
};

export default Modal;
