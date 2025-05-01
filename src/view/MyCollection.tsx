import TitSection from "../components/atoms/TitSection";
import Footer from "../components/organism/Footer";
import Nav from "../components/organism/Nav";
import GroupImageLiked from "../components/molecules/GroupImageLiked";

export default function MyCollection(){

    return <>
        <Nav />
        <TitSection titulo="My images" subtitulo="Your Personal Collection"/>
        <GroupImageLiked />
        <Footer />
    </>
}