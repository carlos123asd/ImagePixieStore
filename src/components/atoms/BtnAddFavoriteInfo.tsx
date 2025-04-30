import { useEffect, useState } from "react"
import { useLocalStorage } from "../../hook/useLocalStorage"
import { useSelector } from "react-redux";
import { RootState } from "../../features/store/store";
import { typeUnsplashImage } from "../../type/typeUnsplashImage";


export default function BtnAddFavoriteInfo({id}:{id:string}){
    const storage = useLocalStorage('imageLiked',[])
    const [existLocalStorage,setExistLocalStorage] = useState<boolean>(false);
    const dataImageList = useSelector<RootState, typeUnsplashImage[]>((state) => state.images.data);

    useEffect(() => {
        const existImage = storage.existImageOnLocalStorage(id)
        setExistLocalStorage(existImage)
    }, [storage.collection])


    const handleClick = () => {
        const getImage = dataImageList.find((image:typeUnsplashImage) => {
            return image.id === id
        })
        if (getImage) {
            storage.likeImageStorage(getImage);
        } else {
            console.error("Image not found for the given ID:", id);
        }
    }

    return <>
        <div style={{
            margin: "1em auto", 
            width: "50%"
        }} 
        onClick={handleClick}
        className={`backgroundSegundary cardTag ${existLocalStorage ? "cardTagDelete" : ""}`}>
            {existLocalStorage ? "Remove from favorites" : "Add to Favorites"}
        </div>
    </>
}