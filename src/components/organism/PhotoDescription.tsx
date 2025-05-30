import Atropos from "atropos/react";
import TitSection from "../atoms/TitSection";
import { FaEye } from "react-icons/fa";
import { useState } from "react";
import { IoIosCloseCircle } from "react-icons/io";
import { GiClick } from "react-icons/gi";

export default function PhotoDescription({url, descripcion, alt}:{url:string,descripcion:string|null,alt:string|null}){
    const [modal,setModal] = useState<boolean>(false);
    const [closeHover, setCloseHover] = useState<boolean>(false);

    const handleShowModal = () => {
        setModal((prevModalState) => {
            return !prevModalState
        })
    }

    return <>
        <div style={{display: modal ? "flex" : "none"}} className="modalPhotoInfo">
            <IoIosCloseCircle 
            onClick={handleShowModal} 
            onMouseEnter={() => setCloseHover(true)} 
            onMouseLeave={() => setCloseHover(false)}
            color={closeHover ? "#fff" : "#f0f1f5d6"} 
            size={100} 
            className="closeBtnModal" />
            <div className="contentPhotoModal">
                <Atropos style={{width:"100%", height:"100%"}}>
                <img
                    src={url}
                    alt={descripcion || "image"}
                    style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                    borderRadius: "1em",
                    }}
                />
                </Atropos>
            </div>
        </div>
        
        <div onClick={handleShowModal} className="contentImageInfoImage">
            <div className="clickIconInfoPhoto">
                <GiClick size={30} color="#fff"/>
            </div>
            <img
                src={url}
                alt={descripcion || "image"}
            />
            <div className="overlay">
                <FaEye size={150} color="#fff"/>
                <h1>View Image</h1>
            </div>
        </div>
        <TitSection titulo={alt === descripcion ? "Photo Description" : alt} subtitulo={descripcion} />
    </>
}

