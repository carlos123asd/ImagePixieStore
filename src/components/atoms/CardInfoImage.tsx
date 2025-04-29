import { CiHeart } from "react-icons/ci";
import { typeInfoAuthor } from "../../type/typeInfoAuthor";

export default function CardInfoImage({name,numPhotos,numLikes,resolution,datePublish,image}:typeInfoAuthor){
    const date = datePublish.split('T')[0];
    const formatDate = new Date(date).toLocaleDateString("en-GB",{
        day: "2-digit",
        month: "short",
        year: "numeric"
    })
    return <>
        <div style={{display:"flex", flexDirection:"column", gap: "1em"}}>
            <div style={{display:"flex", flexDirection:"row", justifyContent: "space-between"}}>
                <div style={{display:"flex", flexDirection:"row", justifyContent:"space-between", gap: "1em"}}>
                    <img style={{
                        borderRadius: "50%"
                    }} src={image} alt="" />
                    <div style={{
                        display:"flex", 
                        flexDirection:"column"
                        }}>
                        <span style={{marginBottom: ".1em",fontWeight: "bold"}}>{name}</span>
                        <span style={{color: "#7A8599"}}>Photos: {numPhotos}</span>
                    </div>
                </div>
                <div className="backgroundSegundary" style={{
                    display:"flex",
                    alignItems: "center",
                    width: "max-content",
                    padding: "0 1em",
                    borderRadius: "1em"
                }}>
                    <CiHeart size={30} color="black" />
                    <span>{numLikes}</span>
                </div>
            </div>
            <div style={{display:"flex", flexDirection:"column", gap: ".5em"}}>
                <span style={{fontWeight: "bold"}}>Photo Details</span>
                <div style={{display:"flex", flexDirection:"column", color: "#7A8599"}}>
                    <div style={{display:"flex", flexDirection:"row", justifyContent:"space-between"}}>
                        <span>Resolution</span>
                        <span>{resolution}</span>
                    </div>
                    <div style={{display:"flex", flexDirection:"row", justifyContent:"space-between"}}>
                        <span>Published date</span>
                        <span>{formatDate}</span>
                    </div>
                </div>
            </div>
        </div>
    </>
}