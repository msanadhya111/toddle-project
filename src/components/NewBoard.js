import { Fragment, useRef, useState } from "react";
import Modal from "../UI/Modal";
import Post from "./Post";
import classes from "./NewBoard.module.css";

const NewBoard = (props) => {
    const postHeaderInput = useRef();
    const [isCreateBoardClicked, setCreateBoard] = useState(false);
    const createBoardHandler = () => {
        setCreateBoard(true);
        props.boardDisapeared();
    };
    return (
        <Fragment>
            {!isCreateBoardClicked && <Modal>
                <h1>Add a name of your board</h1>
                <input 
                    className={classes.input}
                    ref={postHeaderInput}
                    placeholder="Places around the world"
                ></input>
                <h2>Select post color</h2>
                <div>Here are some templates to help you get started with</div>
                <button className={classes.button} onClick={createBoardHandler}>Create Board</button>
            </Modal>}
            {isCreateBoardClicked && <Post postTitleText={postHeaderInput.current.value} />}
        </Fragment>
    )
}

export default NewBoard;