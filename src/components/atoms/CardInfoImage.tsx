import { CiHeart } from "react-icons/ci";
import { typeInfoAuthor } from "../../type/typeInfoAuthor";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../features/store/store";
import { getImagesForUser } from "../../features/thunks/getImagesForUser";
import { useNavigate } from "react-router-dom";
import { setTag } from "../../features/slices/listImagesSlice";

export default function CardInfoImage({username,name,numPhotos,numLikes,resolution,datePublish,image}:typeInfoAuthor){
    const date = datePublish.split('T')[0];
    const dispatch = useDispatch<AppDispatch>();
    const navigate = useNavigate();
    const formatDate = new Date(date).toLocaleDateString("en-GB",{
        day: "2-digit",
        month: "short",
        year: "numeric"
    })

    const handleClickUser = () => {
        dispatch(getImagesForUser(username))
        dispatch(setTag(""))
        navigate('/')
    }

    return <>
        <div style={{display:"flex", flexDirection:"column", gap: "1em"}}>
            <div className="sectionInfoAuthor" onClick={handleClickUser}>
                <div style={{display:"flex", flexDirection:"row", justifyContent:"space-between", gap: "1em"}}>
                    <img className="imgUser" src={image} alt="Photo Username" />
                    <div style={{
                        display:"flex", 
                        flexDirection:"column"
                        }}>
                        <span className="nameUser">{name}</span>
                        <span className="photosNumber">Photos: {numPhotos}</span>
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