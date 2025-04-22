import { typeTags } from "../../type/typeTags";
import CardTag from "../atoms/CardTag";
import recordTags from "../../json/tags.json";

export default function GroupCardTags(){
    return <>
        <div style={{
            display:"flex",
            gap: "1em",
            paddingLeft: "3%",
        }}>
            {
                recordTags.map((tag:typeTags) => {
                    return <CardTag titulo={tag} />
                })
            }
        </div>
    </>
}