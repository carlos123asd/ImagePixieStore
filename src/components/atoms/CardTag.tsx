import { typeTags } from "../../type/typeTags";

export default function CardTag({word,setWord,titulo}:{word:string,setWord:(word: string) => void,titulo:typeTags}){

    const styleActive = {
        scale: "1.1",
        boxShadow: "0 0 10px 1px #2194F2",
        transition: "all .4s ease-in-out",
        color: "#2194F2",
        background: "#fff",
    }

    const handleClickTag = () => {
        setWord(titulo.name)
    }

    return <>
        <div 
        onClick={handleClickTag} 
        style={word === titulo.name ? styleActive : {}}
        className="backgroundSegundary cardTag">
            {titulo.name}
        </div>
    </>
}