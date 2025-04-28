import { typeUnsplashImage } from "../../type/typeUnsplashImage";
import { MdDeleteOutline } from "react-icons/md";
import { FaImage } from "react-icons/fa6";
import {useLocalStorage} from "../../hook/useLocalStorage";

export default function CardImageLiked({info}:{info:typeUnsplashImage}){
    const {deleteImageStorage} = useLocalStorage();

    const handleDeleteLike = () => {
        deleteImageStorage(info)
    }
    return <>
        <div className="images__image">
            <div className="contentBtnsCardImage">
                <div onClick={handleDeleteLike} className="btnCardImage"><MdDeleteOutline color="black" size={30} /></div>
                <div className="btnCardImage"><FaImage color="black" size={30} /></div>
            </div>
            <img className="images__image__img" src={info.urls.full} alt={info.alt_description ? info.alt_description : "Description not found"} />
        </div>
    </>
}