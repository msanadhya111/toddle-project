import { Fragment, useState } from "react";
import classes from "./BoardBody.module.css";
import dots from "../images/dots.JPG"

const BoardBody = (props) => {
    const [isBoardDropDown, setBoardDropDown] = useState(false);

    const boardDropDownHandler = () => {

        setBoardDropDown(true);
    }

    const boardElements = props.availableBoards.map((board) => {
        const boardData = (<div className={classes.board}>{board.name}
            <button type='button' onClick={boardDropDownHandler}>
                <img className={classes.dots} src={dots} />
            </button>
        </div>)
        return (
            <>
                {props.boardValue.length > 0 ?
                    board.name.includes(props.boardValue) &&
                    boardData
                    :
                    boardData
                    
               /*     {isBoardDropDown && <div className={classes.dropdown}>
                        <button>Edit Goal</button>
                        <button>Delete Goal</button>
                    </div>}) */
                    }
            </>
        )
    })
    return (
        <Fragment>
            {!props.isBoardDisapeared && <><h1 style={{ 'padding-left': '10px' }}>My Boards</h1>
                                          <div className={classes.boards}>{boardElements}</div></>}
        </Fragment>
    )

}

export default BoardBody;