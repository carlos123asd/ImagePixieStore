import { typeInfoAuthor } from "../../type/typeInfoAuthor";
import BtnAddFavoriteInfo from "../atoms/BtnAddFavoriteInfo";
import CardInfoImage from "../atoms/CardInfoImage";
import SectionDownload from "../atoms/SectionDownload";

export default function InfoAuthor({name,numPhotos,numLikes,resolution,datePublish,image,download}:typeInfoAuthor){
    return <>
        <CardInfoImage 
        name={name} 
        numPhotos={numPhotos} 
        numLikes={numLikes} 
        resolution={resolution} 
        datePublish={datePublish}
        image={image}
        download={null}
        />
        <SectionDownload filename={`pixiestore__${name}_${datePublish}.jpg`} download={download ? download : ''} />
        <BtnAddFavoriteInfo />
    </>
}