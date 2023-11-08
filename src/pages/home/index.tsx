import { Link } from "react-router-dom";
import Header from "components/Header";
import Footer from "components/Footer";
import Carousel from "components/Carousel";
import PostList from "components/PostList";

export default function Home() {
    return (
        <div>
            <Header />
            <Carousel />
            <PostList/>
            <Footer />
        </div>
    )
}