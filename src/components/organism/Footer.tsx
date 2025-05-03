import { RiContrastFill } from "react-icons/ri";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

export default function Footer(){
    return <>
        <div className="footer">
            <div style={{marginLeft: "3em"}} className="nav_content_name">
                <RiContrastFill color="black" size={30} />
                <span className="titnav">PixieStore</span>
            </div>
            <div style={{marginRight: "3em"}}>
                <div style={{display: "flex", alignItems: "center", gap:"2em"}}>
                    <div style={{display: "flex", flexDirection: "column", fontWeight: "600"}}>
                        <span className="infoHeader">@AlexDev</span>
                        <span className="infoHeader">carlos.med.dev@gmail.com</span>
                    </div>
                    <div>
                        <a href="https://www.linkedin.com/in/carlosmedinasalas/" target="_blank">
                            <FaLinkedin className="btnLinkedinFooter" size={40} color="black" />
                        </a>
                        <a href="https://github.com/carlos123asd/ImagePixieStore" target="_blank">
                            <FaGithub className="btnGitFooter" size={40} color="black" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </>
}