import TitSection from "../components/atoms/TitSection";
import Search from "../components/molecules/Search";
import Footer from "../components/organism/Footer";
import Nav from "../components/organism/Nav";
import GroupImageLiked from "../components/molecules/GroupImageLiked";

export default function MyCollection(){

    return <>
        <Nav />
        <TitSection titulo="My images" subtitulo="Your Personal Collection"/>
        <div className="contentsearchCollection">
            <Search colorBtn="#fff"/>
        </div>
        <GroupImageLiked />
        <Footer />
    </>
}