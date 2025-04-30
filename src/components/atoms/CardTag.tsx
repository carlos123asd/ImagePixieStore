import { useDispatch } from "react-redux";
import { typeTags } from "../../type/typeTags";
import { AppDispatch } from "../../features/store/store";
import { getImagesForTag } from "../../features/thunks/getImagesForTag";

export default function CardTag({word,setWord,titulo}:{word:string,setWord:(word:string) => void,titulo:typeTags}){
    const dispatch = useDispatch<AppDispatch>()
    const styleActive = {
        scale: "1.1",
        boxShadow: "0 0 10px 1px #2194F2",
        color: "#2194F2",
        background: "#fff",
    }

    const handleClickTag = () => {
        setWord(titulo.name)
        dispatch(getImagesForTag(titulo.name))
    }

    return <>
        <div 
        onClick={handleClickTag} 
        style={word === titulo.name ? styleActive : {}}
        className="backgroundSegundary cardTag">
            {titulo.name}
        </div>
    </>
}