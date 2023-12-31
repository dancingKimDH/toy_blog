import { Link, useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { collection, deleteDoc, doc, getDocs, orderBy, query, where } from "firebase/firestore";
import { db } from "firebaseApp";
import AuthContext from "context/AuthContext";
import { toast } from "react-toastify";

interface PostListProps {
    hasNavigation?: boolean;
    defaultTab?: TapType | CategoryType;
}

 // 카테고리
 export type CategoryType = "Frontend" | "Backend" | "Web" | "Native";
 export const CATEGORIES:  CategoryType[] = ['Frontend', "Backend", "Web", "Native"];


type TapType = "all" | "my"

export interface CommentsInterface {
    content: string;
    uid: string;
    email: string;
    createdAt: String;
}

export interface PostProps {
    id?: string;
    title: string;
    email: string;
    summary: string;
    content: string;
    createdAt: string;
    uid: string;
    category?: CategoryType;
    comments?: CommentsInterface[];
}

export default function PostsList({ hasNavigation = true, defaultTab = "all" }: PostListProps) {

    const [activeTab, setActiveTab] = useState<TapType | CategoryType>(defaultTab);

    const [posts, setPosts] = useState<PostProps[]>([]);

    const { user } = useContext(AuthContext);

    const handleDelete = async (id: string) => {
        const confirm = window.confirm("해당 게시글을 삭제하시겠습니까?");
        if(confirm && id) {
            await deleteDoc(doc(db, 'posts', id));
            toast.success("게시글을 삭제하였습니다");
            // 변경된 리스트 가져오기
            getPosts();
        }
    }

    const getPosts = async () => {
        setPosts([]);
        let postRef = collection(db, "posts");
        let postsQuery;

        if(activeTab === "my" && user) {
            postsQuery = query(postRef, where("uid", '==', user?.uid), orderBy("createdAt", "desc"));
        } else if (activeTab === "all") {
            postsQuery = query(postRef, orderBy("createdAt", "desc"));
        } else {
            postsQuery = query(postRef, where("category", "==", activeTab), orderBy("createdAt", "desc"));
        }
        const datas = await getDocs(postsQuery);
        datas?.forEach((doc) => {
            const dataObj = { ...doc.data(), id: doc.id };
            setPosts((prev) => [...prev, dataObj as PostProps]);
        })
    }

    useEffect(() => {
        getPosts();
    }, [activeTab])
    // activeTab이 변하면 getPosts를 호출


    return (
        <>
            {hasNavigation && (
                <div className="post__navigation">
                    <div role="presentation" onClick={() => setActiveTab("all")}
                        className={activeTab === "all" ? "post__navigation--active" : ""}>전체 글</div>
                    <div role="presentation" onClick={() => setActiveTab("my")}
                        className={activeTab === "my" ? "post__navigation--active" : ""} >나의 글</div>
                        {CATEGORIES?.map((category) => (
                            <div key={category} role="presentation" onClick={() => setActiveTab(category)}
                            className={activeTab === category ? "post__navigation--active" : ""}>{category}</div>
                        ))}
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
                                <div className="post__delete" role="presentation" onClick={() => handleDelete(post?.id as string)}>삭제</div>
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