import Footer from "components/Footer";
import Header from "components/Header";
import PostsList from "components/PostList";
import Profile from "components/Profile";

export default function ProfilePage() {
    return (
        <>
            <Header />
            <Profile />
            <PostsList hasNavigation={false}/>
            <Footer />
        </>
    )

}