import TitSection from "../components/atoms/TitSection";
import GroupCardTags from "../components/molecules/GroupCardTags";
import Footer from "../components/organism/Footer";
import Header from "../components/organism/Header";
import Nav from "../components/organism/Nav";
import GroupImages from "../components/molecules/GroupImages";
import { useState } from "react";


export default function Home(){
    const [word,setWord] = useState<string>("");

    return <>
        <Nav />
        <Header />
        <TitSection titulo="Trending searches" subtitulo={null} />
        <GroupCardTags setWord={setWord} word={word} />
        <TitSection titulo="New & Notable" subtitulo={null} />
        <GroupImages />
        <Footer />
    </>
}