import { useEffect, useState } from "react"
import { useLocalStorage } from "../../hook/useLocalStorage"


export default function BtnAddFavoriteInfo({id}:{id:string}){
    const storage = useLocalStorage('imageLiked',[])
    const [existLocalStorage,setExistLocalStorage] = useState<boolean>(false);

    useEffect(() => {
        const existImage = storage.existImageOnLocalStorage(id)
        setExistLocalStorage(existImage)
    }, [])

    return <>
        <div style={{
            margin: "1em auto", 
            width: "50%"
        }} 
            className={`backgroundSegundary cardTag ${existLocalStorage ? "cardTagDelete" : ""}`}>
            {existLocalStorage ? "Remove from favorites" : "Add to Favorites"}
        </div>
    </>
}