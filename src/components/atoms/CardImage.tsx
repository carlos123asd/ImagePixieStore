import { typeUnsplashImage } from "../../type/typeUnsplashImage";

export default function CardImage({info}:{info:typeUnsplashImage}){
    return <>
        <div className="images__image">
            <img className="images__image__img" src={info.urls.full} alt={info.alt_description ? info.alt_description : "Description not found"} />
        </div>
    </>
}