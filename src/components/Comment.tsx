import { useContext, useState } from "react"
import { PostProps } from "./PostList";
import { arrayUnion, doc, updateDoc } from "firebase/firestore";
import { db } from "firebaseApp";
import AuthContext from "context/AuthContext";
import { toast } from "react-toastify";

interface CommentsProps {
    post: PostProps;
}

export default function Comment({ post }: CommentsProps) {
    console.log(post)
    const [comment, setComment] = useState("");
    const { user } = useContext(AuthContext);
    const COMMENTS = [
        {
            id: 1,
            email: 1,
            content: 1,
            createdAt: 1
        }
    ]

    const onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        const {
            target: { name, value },
        } = e;

        if (name === "comment") {
            setComment(value);
        }
    }

    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {

            if (post && post?.id) {
                const postRef = doc(db, "posts", post.id);
                if (user?.uid) {
                    const commentObj = {
                        content: comment,
                        uid: user.uid,
                        email: user.email,
                        createdAt: new Date()?.toLocaleDateString("ko", {
                            hour: "2-digit",
                            minute: "2-digit",
                            second: "2-digit"
                        }),
                    }
                    await updateDoc(postRef, {
                        comments: arrayUnion(commentObj),
                        updatedDated: new Date()?.toLocaleDateString("ko", {
                            hour: "2-digit",
                            minute: "2-digit",
                            second: "2-digit"
                        })
                    })
                    toast.success("댓글을 등록하였습니다")
            }
        }
        } catch (e:any) {
            toast.error(e?.error)

    }
}

return (
    <div className="comments">
        <form className="comments__form" onSubmit={onSubmit}>
            <div className="form__block">
                <label htmlFor="comment">댓글 입력</label>
                <textarea name="comment" id="comment" value={comment} required onChange={onChange} />
            </div>
            <div className="form__block form__block-reverse">
                <input type="submit" value="입력" className="form__btn-submit" />
            </div>
        </form>
        <div className="comments__list">
            {COMMENTS?.map((comment) => (
                <div key={comment.id} className="comment__box">
                    <div className="comment__profile-box">
                        <div className="comment__email">{comment.email}</div>
                        <div className="comment__date">{comment.createdAt}</div>
                        <div className="comment__delete">삭제</div>
                    </div>
                    <div className="comment__text">{comment.content}</div>
                </div>
            ))}
        </div>
    </div>
)
}