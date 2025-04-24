export default function TitSection({titulo,subtitulo}:{titulo:string,subtitulo:string | null}){

    return <>
        <h2 style={{
            padding: "0 2%"
        }}>{titulo}</h2>
        {subtitulo && <span style={{padding: "0 2%"}}>{subtitulo}</span>}
    </>
}