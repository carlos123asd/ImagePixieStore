import { downloadImage } from "../../utilities/downloadImage";
import TitSection from "./TitSection";

export default function SectionDownload({filename, download}: {filename: string, download: string}){

    return <>
        <TitSection titulo="Download" subtitulo={null} />
        <div style={{display: "flex", flexDirection: "row", justifyContent:"space-between", alignItems: "center"}}>
            <span>Free Download</span>
            <div onClick={() => downloadImage(filename,download)} className="backgroundSegundary cardTag">Download</div>
        </div>
    </>
}