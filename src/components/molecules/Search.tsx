import { IoSearch } from "react-icons/io5";

export default function Search({colorBtn}:{colorBtn:string}){
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
            <input className="inputBuscar" type="text" placeholder="Search free hight resolution photos" />
            <div className="btnBuscar" style={{color: colorBtn}}>Search</div>
        </div>
    </>
}