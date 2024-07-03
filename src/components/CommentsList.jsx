import React from 'react';
import Comment from "./UI/comment/Comment";

const CommentsList = ({comments}) => {
    return (
        <div className={'commentsList'}>
            <h2 style={{textAlign: 'center'}}>Comments:</h2>
            {comments.map(comm => <Comment email={comm.email} body={comm.body}/>)}
        </div>
    );
};

export default CommentsList;