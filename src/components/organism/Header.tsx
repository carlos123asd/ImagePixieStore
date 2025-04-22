import { IoSearch } from "react-icons/io5";

export default function Header(){
    return <>
        <div className="backHeader">
            <div className="header colorTextSegundary">
                <div className="header_content">
                    <h1 className="header_content_tit">PixieStore</h1>
                    <span className="header_content_sub">Beautiful, free images</span>    
                </div>
                <div style={{
                    width: "25%",
                    height: "60px",
                    background:"white",
                    display: "flex",
                    alignItems: "center",
                    borderRadius: "1em",
                    padding: "0 .5em",
                    paddingLeft: ".5em"
                }}>
                    <IoSearch size={35} color="#899AA7" />
                    <input className="inputBuscar" type="text" placeholder="Search free hight resolution photos" />
                    <div className="btnBuscar">Search</div>
                </div>
            </div>
        </div>
    </>
}