import { typeTags } from "../../type/typeTags";
import CardTag from "../atoms/CardTag";
import recordTags from "../../json/tags.json";

export default function GroupCardTags({setWord,word}:{setWord:(word:string) => void | null,word:string | null}){
    return <>
        <div style={{
            display:"flex",
            gap: "1em",
            paddingLeft: "3%",
            margin: "2em 0",
            flexWrap: "wrap"
        }}>
            {
                recordTags.map((tag:typeTags,index:number) => {
                    return <CardTag word={word ? word : ""} setWord={setWord} key={index} titulo={tag} />
                })
            }
        </div>
    </>
}