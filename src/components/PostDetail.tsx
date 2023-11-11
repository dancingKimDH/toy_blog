import { useState, useEffect } from "react";
import { Link } from "react-router-dom"
import { useParams } from "react-router-dom"
import {PostProps} from "./PostList";
import { doc, getDoc } from "firebase/firestore";
import { db } from "firebaseApp";
import Loader from "./Loader";

export default function PostDetail() {
    
    const params = useParams();
    const [post, setPost] = useState<PostProps | null>(null)
    console.log(params);

    const getPost = async(id: string) => {
        if(id) {
            const docRef = doc(db, "posts", id);
            const docSnap = await getDoc(docRef);

            setPost({id: docSnap.id, ...(docSnap.data() as PostProps)});
            console.log(post)
        }
    }

    // delete
    const handleDelete = () => {
        console.log("delete");
    }

    useEffect(() => {
        if(params?.id) getPost(params?.id);
    }, [params?.id]);
    
    return (
        <div className="post__detail">
            {post ? (
            <div className="post__box">
                <div className="post__title">{post?.title}</div>
                <div className="post_profile_box">
                    <div className="post_profile" />
                    <div className="post_author_name"> {post?.email}</div>
                    <div className="post_date"> {post?.createdAt} </div>
                </div>
                <div className="post__utils-box">
                    <div className="post__delete" role="presentation" onClick={handleDelete}>삭제</div>
                    <div className="post__edit">
                        <Link to = {`/posts/edit/${post?.id}`}> 수정 </Link>
                    </div>
                </div>
                <div className="post__text post__text--prewrap"> 
                {post?.content}
                </div>

            </div>
            ) : <Loader />}
        </div>
    )
}