import { RiContrastFill } from "react-icons/ri";
import { FaHeart } from "react-icons/fa";
import { TiHome } from "react-icons/ti";
import { useState } from "react";

export default function Nav(){
    const [hoverHeart,setHoverHeart] = useState<boolean>(false);
    const [hoverHome,setHoverHome] = useState<boolean>(false);

    return <>
        <div className="nav">
            <div className="nav_content_name">
                <RiContrastFill color="black" size={30} />
                <span className="titnav">PixieStore</span>
            </div>
            <div className="nav_content_icons">
                <div onMouseLeave={() => setHoverHeart(false)} onMouseEnter={() => setHoverHeart(true)} className="nav_content_btn">
                    <FaHeart size={30} color={hoverHeart ? "white" : "black"} />
                </div>
                <div onMouseLeave={() => setHoverHome(false)} onMouseEnter={() => setHoverHome(true)} className="nav_content_btn">
                    <TiHome size={40} color={hoverHome ? "white" : "black"} />
                </div>
            </div>
        </div>
    </>
}