import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getImagesThunk } from "../../features/thunks/getImagesThunk";
import { AppDispatch, RootState } from "../../features/store/store";
import Spinner from "../atoms/Spinner";
import CardImage from "../atoms/CardImage";
import { typeUnsplashImage } from "../../type/typeUnsplashImage";

export default function GroupImages(){
    const [loading,setLoading] = useState(true);
    const dispatch = useDispatch<AppDispatch>();
    const stateImageList = useSelector<RootState, string>((state) => state.images.status);
    const dataImageList = useSelector<RootState, typeUnsplashImage[]>((state) => state.images.data);
    const [listImages, setListImages] = useState<typeUnsplashImage[]>([]);
    

    useEffect(() => {
        if(stateImageList === 'idle'){
            dispatch(getImagesThunk())
        }else if(stateImageList === 'pending'){
            setLoading(true)
        }else if(stateImageList === 'fulfilled'){
            setTimeout(() => {
                setLoading(false)
                setListImages(dataImageList)
                console.log('data',dataImageList)
            },2000)
        }else{
            console.log("error")
        }
    },[stateImageList])

    return <>
        {
            loading && <div style={{display: "flex", justifyContent:"center", margin:"2em 0"}}>
                <Spinner />
            </div>
        }
        {
            !loading && <div className="images">
                {
                    listImages.map((image:typeUnsplashImage, index:number) => {
                        return <CardImage key={index} info={image}/>
                    })
                }
            </div>
        }
    </>
}