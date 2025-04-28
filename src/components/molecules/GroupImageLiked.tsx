import CardImageLiked from "../atoms/CardImageLiked";
import { typeUnsplashImage } from "../../type/typeUnsplashImage";
import {useLocalStorage} from "../../hook/useLocalStorage";

export default function GroupImageLiked(){
    const {collection} = useLocalStorage();

    return  <>
        <div className="images">
            {
                collection.map((imageLiked:typeUnsplashImage,index:number) => {
                    return <CardImageLiked info={imageLiked} key={index} />
                })
            }
        </div>
    </>
}