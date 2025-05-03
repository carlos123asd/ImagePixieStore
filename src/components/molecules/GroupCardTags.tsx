import { typeTags } from "../../type/typeTags";
import CardTag from "../atoms/CardTag";
import recordTags from "../../json/tags.json";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../features/store/store";
import { setTag } from "../../features/slices/listImagesSlice";
import { getImagesThunk } from "../../features/thunks/getImagesThunk";
import { urlImagesInit } from "../../features/urls/urls";

export default function GroupCardTags(){
    const dispatch = useDispatch<AppDispatch>()
    const word = useSelector<RootState>((state) => state.images.tag)

    const handleRemoveKeyWord = () => { 
        dispatch(setTag(""))
        dispatch(getImagesThunk(urlImagesInit))
    }

    return <>
        <div className="groupCard">
            <div className="contentCards">
                {
                    recordTags.map((tag:typeTags,index:number) => {
                        return <CardTag key={index} titulo={tag.name} />
                    })
                }
            </div>
            <span 
            onClick={handleRemoveKeyWord} 
            style={{
                textShadow: word ? "0 0 10px #2194F2" : "",
                color: word ? "#2194F2be" : "#93A4B5"
            }} 
            className={word ? "btnRemoveFilter" : "btnDisableFilter"}>Remove keyword</span>
        </div>
    </>
}