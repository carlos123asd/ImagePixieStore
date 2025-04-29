import { useState } from "react";
import { typeUnsplashImage } from "../../type/typeUnsplashImage";
import { GoHeartFill } from "react-icons/go";
import { IoMdDownload } from "react-icons/io";

export default function CardImage({info,likeImageStorage}:{info:typeUnsplashImage,likeImageStorage:(image: typeUnsplashImage) => void}){
    const [liked,setLiked] = useState<boolean>(false);
    

    const handleLike = () => {
        setLiked((prevLike) => {
            const newLike = !prevLike
            return newLike
        })
        likeImageStorage(info)
    } 

    return <>
        <div className="images__image">
            <div className="contentBtnsCardImage">
                <div onClick={handleLike} className="btnCardImage"><GoHeartFill color={liked ? "red" : "black"} size={30} /></div>
                <div className="btnCardImage"><IoMdDownload color="black" size={30} /></div>
            </div>
            <img className="images__image__img" src={info.urls.full} alt={info.alt_description ? info.alt_description : "Description not found"} />
        </div>
    </>
}