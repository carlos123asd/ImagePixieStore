import Atropos from "atropos/react";
import TitSection from "../atoms/TitSection";

export default function PhotoDescription({url, descripcion, alt}:{url:string,descripcion:string|null,alt:string|null}){
    return <>
        <Atropos style={{alignSelf:"flex-start"}}>
            <img width={800} height={600} src={url} alt={descripcion ? descripcion : "image not found"} />
        </Atropos>
        <TitSection titulo={alt === descripcion ? "Photo Description" : alt} subtitulo={descripcion} />
    </>
}