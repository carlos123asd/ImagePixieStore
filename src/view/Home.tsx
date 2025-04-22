import TitSection from "../components/atoms/TitSection";
import Footer from "../components/organism/Footer";
import Header from "../components/organism/Header";
import Nav from "../components/organism/Nav";

export default function Home(){
    return <>
        <Nav />
        <Header />
        <TitSection titulo="Trending searches"/>
        <Footer />
    </>
}