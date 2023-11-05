import Footer from "components/Footer";
import Header from "components/Header";
import PostsList from "components/PostList";

export default function PostList() {
    return (

        <>
        <Header />
        <PostsList hasNavigation={false} />
        <Footer />
        </>

    )
}