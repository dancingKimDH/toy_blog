import { Link } from "react-router-dom";
import { useState } from "react";

interface PostListProps {
    hasNavigation ?: boolean;
}

type TapType = "all" | "my"

export default function PostsList({ hasNavigation = true }) {
    
    const [activeTab, setActiveTab] = useState<TapType>("all")
    
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
                {[...Array(10)].map((e, index) => (
                    <div key={index} className="post__box">
                        <Link to={`/posts/${index}`}>
                            <div className="post_profile_box">
                                <div className="post_profile" />
                                <div className="post_author_name"> DH</div>
                                <div className="post_date"> 2023 </div>
                            </div>
                            <div className="post_title"> 게시글 {index}</div>
                            <div className="post_text"> hello world! </div>
                            <div className="post__utils-box">
                                <div className="post__delete">삭제</div>
                                <div className="post__edit">수정</div>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        </>


    )
}