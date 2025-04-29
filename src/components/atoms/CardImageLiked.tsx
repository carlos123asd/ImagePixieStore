import { typeUnsplashImage } from "../../type/typeUnsplashImage";
import { MdDeleteOutline } from "react-icons/md";
import { FaImage } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

export default function CardImageLiked({likeImageStorage,info}:{likeImageStorage:(image:typeUnsplashImage) => void,info:typeUnsplashImage}){
    const navigation = useNavigate()

    const handleDeleteLike = () => {
        likeImageStorage(info)
    }

    const handleViewImage = () => {
        navigation("/details",{ state: { image: info } })
    }
    return <>
        <div className="images__image">
            <div className="contentBtnsCardImage">
                <div onClick={handleDeleteLike} className="btnCardImage"><MdDeleteOutline color="black" size={30} /></div>
                <div onClick={handleViewImage} className="btnCardImage"><FaImage color="black" size={30} /></div>
            </div>
            <img className="images__image__img" src={info.urls.full} alt={info.alt_description ? info.alt_description : "Description not found"} />
        </div>
    </>
}