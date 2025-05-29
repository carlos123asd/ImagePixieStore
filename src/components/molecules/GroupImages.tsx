import { useEffect, useState, useTransition } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getImagesThunk } from "../../features/thunks/getImagesThunk";
import { AppDispatch, RootState } from "../../features/store/store";
import CardImage from "../atoms/CardImage";
import { typeUnsplashImage } from "../../type/typeUnsplashImage";
import { useLocalStorage } from "../../hook/useLocalStorage";
import { urlImagesInit } from "../../features/urls/urls";
import ImageGridSkeleton from "../atoms/ImageGridSkeleton";
import { setPendingState } from "../../features/slices/listImagesSlice";

export default function GroupImages(){
    const [_, startTransition] = useTransition();
    const dispatch = useDispatch<AppDispatch>();
    const dataImageList = useSelector<RootState, typeUnsplashImage[]>((state) => state.images.data);
    const isPending = useSelector<RootState, boolean>((state) => state.images.isPending);
    const [listImages, setListImages] = useState<typeUnsplashImage[]>([]);
    const {likeImageStorage,collection} = useLocalStorage('imageLiked',[]);

    useEffect(() => {
        if (dataImageList.length === 0) {
            dispatch(getImagesThunk(urlImagesInit));
        } else {
            dispatch(setPendingState(true));
            startTransition(() => {
                setListImages(dataImageList);
                setTimeout(() => {
                    dispatch(setPendingState(false));
                },8000)
            })
        }
    }, [dataImageList,dispatch]);

    return <>
        <div className="images">
            {isPending ? (
                <ImageGridSkeleton collection={listImages} />
            ) : (
                listImages.map((image, index) => {
                const isLiked = collection.some((img) => img.id === image.id);
                return (
                    <CardImage
                    key={`${image.id}-${index}`}
                    isLiked={isLiked}
                    info={image}
                    likeImageStorage={likeImageStorage}
                    />
                );
                })
            )}
        </div>
    </>
}