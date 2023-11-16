import { useState } from "react"


export default function Comment() {
    const [comment, setComment] = useState("");

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

    return (
        <div className="comments">
            <form className="comments__form" action="">
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