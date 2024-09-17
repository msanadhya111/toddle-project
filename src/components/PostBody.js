import { Fragment, useRef, useState } from "react";
import classes from "./PostBody.module.css";
import Modal from "../UI/Modal";
import NewPost from "./NewPost";

const PostBody = (props) => {

    const postSubjectRef = useRef();
    const [isNewPostAvailable, setAvailableNewPost] = useState(false);
    const [isPostExists, setPostExists] = useState(false);

    const createPostHandler = () => {
        setAvailableNewPost(true);
    }

    const newPostHandler = () => {
        setAvailableNewPost(false);
        setPostExists(true);
    }

    return (
        <Fragment>
                    <div className={classes.posts}>
                        <h1>Your Posts</h1>
                        <button onClick={createPostHandler} className={classes.button}>+ Create new post</button>
                    </div>
                    {isNewPostAvailable && 
                        <Modal> 
                            <div className={classes.content}>
                                <div className={classes.create}><b>Create a Post</b></div>
                                <div>Write something for your post</div><hr /><hr />
                                <div className={classes.subject}><b>Subject</b></div>
                                <input
                                    placeholder="Galapagos Islands, Ecuador"
                                    className={classes.input}
                                    ref={postSubjectRef}
                                ></input><hr /><hr />
                                <div className={classes.mood}><b>What's on your mind</b></div>
                                <input
                                    className={classes.input}
                                ></input><hr /><hr />
                                <button onClick={newPostHandler} className={classes.publish}>Publish</button>
                            </div>
                        </Modal>
                    }
                    {isPostExists && <NewPost postValue={props.postValue} subjectValue={postSubjectRef?.current?.value} />}
        </Fragment>
        )
};

export default PostBody;