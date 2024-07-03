import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {useFetching} from "../components/hooks/useFetching";
import PostService from "../API/PostService";
import Loader from "../components/UI/Loader/Loader";
import CommentsList from "../components/CommentsList";

const PostIdPage = () => {

    const params = useParams();
    const [post, setPost] = useState({});
    const [comments, setComments] = useState([]);
    const [fetchPostById, isLoading, error] = useFetching(async () => {
        const response = await PostService.getById(params.id);
        setPost(response.data);
    });
    const [fetchComments, isLoading_comments, error_comments] = useFetching(async () => {
        const response = await PostService.getCommentsPostById(params.id);
        setComments(response.data);
        console.log(response.data);
    });

    useEffect(() => {
        fetchPostById(params.id);
        fetchComments(params.id);
    }, []);

    return (
        <div>
            <h2 style={{textAlign:'center',marginTop:20}}>Post with ID = {params.id}</h2>
            {isLoading
                ? <Loader/>
                : <div style={{fontSize:20, textAlign:'center', margin:20, padding:10, border:'2px solid teal', borderRadius:16}}>{post.id} {post.title}</div>
            }
            {isLoading_comments
                ? <Loader/>
                : <CommentsList comments={comments}/>
            }
        </div>
    );
};

export default PostIdPage;