import { Link } from "react-router-dom"

export default function PostDetail() {
    return (
        <div className="post__detail">
            <div className="post__box">
                <div className="post__title">PostPage</div>
                <div className="post_profile_box">
                    <div className="post_profile" />
                    <div className="post_author_name"> DH</div>
                    <div className="post_date"> 2023 </div>
                </div>
                <div className="post__utils-box">
                    <div className="post__delete">삭제</div>
                    <div className="post__edit">
                        <Link to = {`/posts/edit/1`}> 수정 </Link>
                    </div>
                </div>
                <div className="post__text"> Non arcu risus quis varius quam quisque.
                    Velit sed ullamcorper morbi tincidunt ornare. Netus et malesuada fames ac turpis egestas. Consequat id porta nibh venenatis cras sed. Libero enim sed faucibus turpis in. Nunc pulvinar sapien et ligula ullamcorper. Netus et malesuada fames ac turpis egestas. Enim praesent elementum facilisis leo. Vel facilisis volutpat est velit egestas dui. Netus et malesuada fames ac turpis egestas. Eget sit amet tellus cras adipiscing enim eu turpis. Porttitor rhoncus dolor purus non enim praesent elementum facilisis leo. Aliquet bibendum enim facilisis gravida neque convallis a cras semper. Ultrices neque ornare aenean euismod elementum nisi quis eleifend quam. Odio eu feugiat pretium nibh ipsum consequat. Pretium fusce id velit ut tortor. A erat nam at lectus urna duis convallis convallis. </div>

            </div>
        </div>
    )
}