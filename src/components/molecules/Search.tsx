import { useState } from "react";
import { IoSearch } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../features/store/store";
import { getImagesForTag } from "../../features/thunks/getImagesForTag";

export default function Search({colorBtn}:{colorBtn:string}){
    const dispath = useDispatch<AppDispatch>();
    const [search,setSearch] = useState<string>("");

    const handleClickSearch = () => {
        dispath(getImagesForTag(search))
    }

    const handleKeySearch = (e:React.KeyboardEvent<HTMLInputElement>) => {
        if(e.key === 'Enter'){
            e.preventDefault()
            handleClickSearch()
        }
    }

    return <>
        <div style={{
            width: "25%",
            height: "60px",
            background:"white",
            display: "flex",
            alignItems: "center",
            borderRadius: "1em",
            padding: "0 .5em",
            paddingLeft: ".5em",
            border: "1px solid #DBE0E5"
        }}>
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