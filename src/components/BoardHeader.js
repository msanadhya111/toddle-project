import { Fragment, useRef, useState } from "react";
import NewBoard from "./NewBoard";
import classes from "./BoardHeader.module.css";
import logo from "../../src/images/toddle_image.JPG";

const BoardHeader = (props) => {

    const boardInput = useRef();

    const [isNewBoardClick, setNewBoard] = useState(false);
    const [isBoardDisapeared, setBoardDisappeared] = useState(false);

    const boardCreationHandler = () => {
        props.addBoard(boardInput.current.value);
        setNewBoard(true);
    };

    const boardDisappearedHandler = () => {
        props.boardDisappeared(true);
        setBoardDisappeared(true);
    }

    const searchHandler = () => {
        props.setBoardSearchValue(boardInput.current.value);
    }

    return (
        <Fragment>
            {!isBoardDisapeared && <div className={classes.container}>
                <span className={classes.toddle}>
                    <img className={classes['toddle-image']} src={logo} alt="toddle text"></img>
                    <b><span className={classes['toddle-text']}>{'toddle'}</span></b>
                </span>
                <span className={classes['toddle-button']}>
                    <input className={classes.search} type='search' ref={boardInput} placeholder="Search.." 
                                                    onInputCapture={searchHandler}>
                    </input>
                    <button className={classes.button} onClick={boardCreationHandler}>+ Create new board</button>
                </span>
            </div>}
            <div className={classes['horizontal-line']}></div>
            {isNewBoardClick && <NewBoard boardDisapeared={boardDisappearedHandler} />}
        </Fragment>
    )
}

export default BoardHeader;