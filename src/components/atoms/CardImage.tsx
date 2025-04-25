import { useState } from "react";
import { typeUnsplashImage } from "../../type/typeUnsplashImage";
import { GoHeartFill } from "react-icons/go";
import { IoMdDownload } from "react-icons/io";

export default function CardImage({info}:{info:typeUnsplashImage}){
    const [liked,setLiked] = useState<boolean>(false);

    const handleLike = () => {
        setLiked((prevLike) => {
            const newLike = !prevLike
            return newLike
        })
        
        const listImageLike:[] = JSON.parse(localStorage.getItem('imageLiked') || '[]')
        const imageFound = listImageLike.find((imageliked:typeUnsplashImage) => {
            return imageliked.id === info.id
        })
        if(!imageFound && !liked){
            localStorage.setItem('imageLiked', JSON.stringify([...listImageLike,info]));
        }else{
            const newList = listImageLike.filter((imageLiked:typeUnsplashImage) => {
                return imageLiked.id != info.id
            })
            localStorage.setItem('imageLiked', JSON.stringify(newList));
        }
        
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