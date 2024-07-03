import React from 'react';
import classes from "./Comment.module.css";
const Comment = ({email,body}) => {
    return (
        <div className={classes.comment}>
            <h3>{email}</h3>
            <p>{body}</p>
        </div>
    );
};

export default Comment;