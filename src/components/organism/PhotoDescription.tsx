import Atropos from "atropos/react";
import imageTest from "../../assets/testInfoImage.jpg"
import TitSection from "../atoms/TitSection";

export default function PhotoDescription(){
    return <>
        <Atropos>
            <img width={800} height={600} src={imageTest} alt="" />
        </Atropos>
        <TitSection titulo="Photo Description" subtitulo="Middle of Nowhere airplane on ground surrounded with trees" />
    </>
}