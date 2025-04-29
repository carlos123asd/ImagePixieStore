import { typeUnsplashImage } from "../../type/typeUnsplashImage";
import { GoHeartFill } from "react-icons/go";
import { IoMdDownload } from "react-icons/io";

export default function CardImage({isLiked,info,likeImageStorage}:{isLiked:boolean,info:typeUnsplashImage,likeImageStorage:(image: typeUnsplashImage) => void}){
    
    const handleLike = () => {
        likeImageStorage(info)
    } 

    return <>
        <div className="images__image">
            <div className="contentBtnsCardImage">
                <div onClick={handleLike} className="btnCardImage"><GoHeartFill color={isLiked ? "red" : "black"} size={30} /></div>
                <div className="btnCardImage"><IoMdDownload color="black" size={30} /></div>
            </div>
            <img className="images__image__img" src={info.urls.full} alt={info.alt_description ? info.alt_description : "Description not found"} />
        </div>
    </>
}