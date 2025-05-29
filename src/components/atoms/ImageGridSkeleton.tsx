import { typeUnsplashImage } from "../../type/typeUnsplashImage";

export default function ImageGridSkeleton({ collection }: { collection: typeUnsplashImage[] }){
    return (
        <>
            {collection.map((image, i) => (
                <div key={i} className="images__image image-skeleton__shimmer">
                    <img style={{ visibility: "hidden" }} src={image.urls.full} className="images__image__img" alt="" />
                </div>
            ))}
        </>
    );
}   