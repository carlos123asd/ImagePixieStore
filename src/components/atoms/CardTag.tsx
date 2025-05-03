import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../features/store/store";
import { getImagesForTag } from "../../features/thunks/getImagesForTag";
import { setTag, setUser } from "../../features/slices/listImagesSlice";
import { urlImagesTags } from "../../features/urls/urls";

export default function CardTag({titulo}:{titulo:string}){
    const dispatch = useDispatch<AppDispatch>()
    const word = useSelector<RootState>((state) => state.images.tag)

    const handleClickTag = () => {
        dispatch(getImagesForTag(urlImagesTags(titulo)))
        dispatch((setTag(titulo)))
        dispatch(setUser(false))
    }

    return <>
        <div 
        onClick={handleClickTag} 
        className={`backgroundSegundary cardTag ${word === titulo ? "cardTagActive" : ""}`}>
            {titulo}
        </div>
    </>
}