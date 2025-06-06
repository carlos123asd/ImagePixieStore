import { useState } from "react";
import { IoSearch } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../features/store/store";
import { getImagesForTag } from "../../features/thunks/getImagesForTag";
import { setTag, setUser } from "../../features/slices/listImagesSlice";
import { urlImagesTags } from "../../features/urls/urls";

export default function Search({colorBtn}:{colorBtn:string}){
    const dispatch = useDispatch<AppDispatch>();
    const [search,setSearch] = useState<string>("");

    const handleClickSearch = () => {
        dispatch(getImagesForTag(urlImagesTags(search)))
        dispatch(setUser(false))
        dispatch((setTag("")))
    }

    const handleKeySearch = (e:React.KeyboardEvent<HTMLInputElement>) => {
        if(e.key === 'Enter'){
            e.preventDefault()
            handleClickSearch()
        }
    }

    return <>
        <div className="search">
            <IoSearch size={35} color="#899AA7" />
            <input 
            onKeyDown={handleKeySearch}
            onChange={(e) => setSearch(e.target.value)} 
            value={search} 
            className="inputBuscar" 
            type="text" 
            placeholder="Search free hight resolution photos" />
            <div onClick={handleClickSearch} className="btnBuscar" style={{color: colorBtn}}>Search</div>
        </div>
    </>
}