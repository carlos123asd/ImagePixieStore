import { typeUnsplashImage } from "../../type/typeUnsplashImage";
import { GoHeartFill } from "react-icons/go";
import { IoMdDownload } from "react-icons/io";
import { downloadImage } from "../../utilities/downloadImage";
import { useNavigate } from "react-router-dom";

export default function CardImage({isLiked,info,likeImageStorage}:{isLiked:boolean,info:typeUnsplashImage,likeImageStorage:(image: typeUnsplashImage) => void}){
    const fileName:string = `pixiestore__${info.user.name}_${info.created_at}`
    const urlDownload:string = info.urls.full
    const navigate = useNavigate()

    const handleLike = () => {
        likeImageStorage(info)
    } 

    const handleViewImage = () => {
        navigate("/details", { state: { image: info } })
    }

    return <>
        <div onClick={handleViewImage} className="images__image">
            <div className="contentBtnsCardImage">
                <div onClick={handleLike} className="btnCardImage">
                    <GoHeartFill color={isLiked ? "red" : "black"} size={30} />
                </div>
                <div onClick={() => downloadImage(fileName,urlDownload)} className="btnCardImage">
                    <IoMdDownload color="black" size={30} />
                </div>
            </div>
            <img className="images__image__img" src={info.urls.full} alt={info.alt_description ? info.alt_description : "Description not found"} />
        </div>
    </>
}