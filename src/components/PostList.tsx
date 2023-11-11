import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "firebaseApp";
import AuthContext from "context/AuthContext";

interface PostListProps {
    hasNavigation?: boolean;
}

type TapType = "all" | "my"

export interface PostProps {
    id?: string;
    title: string;
    email: string;
    summary: string;
    content: string;
    createdAt: string;
    uid: string;
}

export default function PostsList({ hasNavigation = true }: PostListProps) {

    const [activeTab, setActiveTab] = useState<TapType>("all");

    const [posts, setPosts] = useState<PostProps[]>([]);

    const { user } = useContext(AuthContext);

    const getPosts = async () => {
        const datas = await getDocs(collection(db, "posts"));
        datas?.forEach((doc) => {
            const dataObj = { ...doc.data(), id: doc.id };
            setPosts((prev) => [...prev, dataObj as PostProps]);
        })
    }

    useEffect(() => {
        getPosts();
    }, [activeTab])


    return (
        <>
            {hasNavigation && (
                <div className="post__navigation">
                    <div role="presentation" onClick={() => setActiveTab("all")}
                        className={activeTab === "all" ? "post__navigation--active" : ""}>전체 글</div>
                    <div role="presentation" onClick={() => setActiveTab("my")}
                        className={activeTab === "my" ? "post__navigation--active" : ""} >나의 글</div>

                </div>
            )}

            <div className="post__list">
                {posts?.length > 0 ? posts?.map((post, index) => (
                    <div key={post?.id} className="post__box">
                        <Link to={`/posts/${post?.id}`}>
                            <div className="post_profile_box">
                                <div className="post_profile" />
                                <div className="post_author_name">{post?.email}</div>
                                <div className="post_date"> {post?.createdAt} </div>
                            </div>
                            <div className="post_title"> {post?.title} </div>
                            <div className="post_text"> {post?.summary} </div>
                        </Link>


                        {post?.email === user?.email && (
                            <div className="post__utils-box">
                                <div className="post__delete">삭제</div>
                                <Link to={`/posts/edit/${post?.id}`}><div className="post__edit">수정</div></Link>
                            </div>
                        )}
                    </div>
                )) :
                    <div className="c">
                        게시글이 없습니다
                    </div>}
            </div>
        </>


    )
}