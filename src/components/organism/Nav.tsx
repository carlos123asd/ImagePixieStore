import { RiContrastFill } from "react-icons/ri";
import { FaHeart } from "react-icons/fa";
import { TiHome } from "react-icons/ti";

export default function Nav(){
    return <>
        <div className="nav">
            <div className="nav_content_name">
                <RiContrastFill color="black" size={30} />
                <span>PixieStore</span>
            </div>
            <div className="nav_content_icons">
                <div className="nav_content_btn">
                    <FaHeart size={30} color="black"/>
                </div>
                <div className="nav_content_btn">
                    <TiHome size={40} color="black"/>
                </div>
            </div>
        </div>
    </>
}