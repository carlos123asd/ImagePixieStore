import { useEffect, useState } from "react";
import TitSection from "../components/atoms/TitSection";
import Search from "../components/molecules/Search";
import Footer from "../components/organism/Footer";
import Nav from "../components/organism/Nav";
import GroupImages from "../components/molecules/GroupImages";

export default function MyCollection(){
    const [collection,setCollection] = useState<[]>(JSON.parse(localStorage.getItem('imageLiked') || '[]'));

    useEffect(() => {

    },[])

    return <>
        <Nav />
        <TitSection titulo="My images" subtitulo="Your Personal Collection"/>
        <div className="contentsearchCollection">
            <Search colorBtn="#fff"/>
        </div>
        
        <Footer />
    </>
}