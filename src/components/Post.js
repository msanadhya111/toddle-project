import { Fragment, useState } from "react";
import PostHeader from "./PostHeader";
import PostBody from "./PostBody";
import classes from "./Posts.module.css";


const Post = (props) => {
    const [postValue, setSearchPostValue] = useState('');
    const postValueUpdateHandler = (value) => {
        setSearchPostValue(value);
    }
    return (
        <Fragment>
            <PostHeader postTitleText={props.postTitleText} setPostSearchValue={postValueUpdateHandler} />
            <PostBody postValue={postValue} className={classes.posts} />
        </Fragment>
    )
};

export default Post;