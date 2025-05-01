import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../features/store/store";
import { getImagesForTag } from "../../features/thunks/getImagesForTag";
import { setTag, setUser } from "../../features/slices/listImagesSlice";

export default function CardTag({titulo}:{titulo:string}){
    const dispatch = useDispatch<AppDispatch>()
    const word = useSelector<RootState>((state) => state.images.tag)

    const styleActive = {
        scale: "1.1",
        boxShadow: "0 0 10px 1px #2194F2",
        color: "#2194F2",
        background: "#fff",
    }

    const handleClickTag = () => {
        dispatch(getImagesForTag(titulo))
        dispatch((setTag(titulo)))
        dispatch(setUser(false))
    }

    return <>
        <div 
        onClick={handleClickTag} 
        style={word === titulo ? styleActive : {}}
        className="backgroundSegundary cardTag">
            {titulo}
        </div>
    </>
}