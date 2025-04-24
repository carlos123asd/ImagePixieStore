import TitSection from "./TitSection";

export default function SectionDownload(){
    return <>
        <TitSection titulo="Download" subtitulo={null} />
        <div style={{display: "flex", flexDirection: "row", justifyContent:"space-between", alignItems: "center"}}>
            <span>Free Download</span>
            <div className="backgroundSegundary cardTag">Download</div>
        </div>
    </>
}