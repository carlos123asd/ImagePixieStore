export default function TitSection({titulo,subtitulo}:{titulo:string|null,subtitulo:string | null}){

    return <>
            <h2 className="tituloSection">{titulo}</h2>
            {subtitulo && <span style={{padding: "0 2%"}}>{subtitulo}</span>}
    </>
}