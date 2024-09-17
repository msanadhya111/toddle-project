import classes from "./PostHeader.module.css";
import toddleImage from "../images/toddle_image.JPG";
import { useRef } from "react";

const PostHeader = (props) => {
    const postInput = useRef();
    const searchHandler = () => {
        props.setPostSearchValue(postInput.current.value);
    }
    return (
        <div className={classes.header}>
            <div className={classes['image-text']}>
                <img className={classes.image} src={toddleImage}></img>
                <h2 style={{color: 'black'}}>{props.postTitleText}</h2>
            </div>
            <input ref={postInput} className={classes.search} type="search" onInputCapture={searchHandler}></input>
        </div>
    )
};

export default PostHeader;