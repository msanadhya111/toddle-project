import { createPortal } from "react-dom";
import classes from "./Modal.module.css";
import { Fragment } from "react";

const Overlay = (props) => {
    return (
        <div className={classes.overlay}>
            <div className={classes.content}>{props.children}</div>
        </div>
    )
};

const BackDrop = (props) => {
    return (
        <div className={classes.backDrop}></div>
    )
}

const Modal = (props) => {
    const portalElement = document.getElementById('overlay');
    return (
        <Fragment>
            {createPortal(<BackDrop />, portalElement)}
            {createPortal(<Overlay>{props.children}</Overlay>, portalElement)}
        </Fragment>
    )
};

export default Modal;