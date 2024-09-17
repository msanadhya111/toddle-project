import { useState } from "react";
import BoardBody from "./BoardBody";
import BoardHeader from "./BoardHeader";

const Board = () => {
    const initialBoards = [
        {
            name: 'Earth Changes and Journeys',
        },
        {
            name: 'Eating Right',
        }
    ]

    const [isBoardDisapeared, setBoardDisappeared] = useState(false);
    const [boardValue, setSearchBoardValue] = useState('');

    const boardDisappearedHandler = () => {
        setBoardDisappeared(true);
    }

    const boardValueUpdateHandler = (value) => {
        setSearchBoardValue(value);
    }

    const addBoardHandler = (value) => {
        initialBoards.push({
            name: value
        })
    }

    return (
        <div>
            <BoardHeader boardDisappeared={boardDisappearedHandler} setBoardSearchValue={boardValueUpdateHandler}
                         addBoard={addBoardHandler}
            />
            <BoardBody isBoardDisapeared={isBoardDisapeared} boardValue={boardValue} availableBoards={initialBoards} />
        </div>
    )
};

export default Board;