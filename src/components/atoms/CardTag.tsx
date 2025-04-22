import { typeTags } from "../../type/typeTags";

export default function CardTag({titulo}:{titulo:typeTags}){
    return <>
        <div className="backgroundSegundary cardTag">
            {titulo.name}
        </div>
    </>
}