import { useEffect, useState } from "react";
import { typeUnsplashImage } from "../type/typeUnsplashImage";

export function useLocalStorage(key: string, initValue:typeUnsplashImage[]) {
    const [collection, setCollection] = useState<typeUnsplashImage[]>(() => {
        const data = localStorage.getItem(key)
        if(!data){
            return initValue
        }
        return JSON.parse(data)
    })

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(collection))
    }, [key, collection])

    const existImageOnLocalStorage = (idImage:string) => {
        const index = collection.find((refImage:typeUnsplashImage) => {
            return refImage.id === idImage
        })
        return index ? true : false
    }

    const likeImageStorage = (imagen:typeUnsplashImage) => {
        setCollection((prevCollection) => {
            const exists = prevCollection.some(
                (image) => image.id === imagen.id
            );
            if (exists) {
                return prevCollection.filter((imageCollection:typeUnsplashImage) => {
                    return imageCollection.id !== imagen.id
                })
            }else{
                return [...prevCollection, imagen];
            }
        })
    }

    return {collection,likeImageStorage,existImageOnLocalStorage} as const;
}