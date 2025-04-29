import CardImageLiked from "../atoms/CardImageLiked";
import { typeUnsplashImage } from "../../type/typeUnsplashImage";
import {useLocalStorage} from "../../hook/useLocalStorage";

export default function GroupImageLiked(){
    const {collection,likeImageStorage} = useLocalStorage("imageLiked",[]);

    return  <>
        <div className="images">
            {
                collection && collection.map((imageLiked:typeUnsplashImage,index:number) => {
                    return <CardImageLiked likeImageStorage={likeImageStorage} info={imageLiked} key={index} />
                })
            }
        </div>
    </>
}