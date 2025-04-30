import { typeTags } from "../../type/typeTags";

export default function CardTag({setWord,titulo}:{setWord:(word: string) => void,titulo:typeTags}){

    const handleClickTag = () => {
        setWord(titulo.name)
    }

    return <>
        <div onClick={handleClickTag} className="backgroundSegundary cardTag">
            {titulo.name}
        </div>
    </>
}