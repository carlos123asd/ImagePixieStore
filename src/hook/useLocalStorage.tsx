import { useEffect, useState } from "react";
import { typeUnsplashImage } from "../type/typeUnsplashImage";

export function useLocalStorage(){
    const [collection, setCollection] = useState<typeUnsplashImage[]>(() => {
        const stored = localStorage.getItem('imageLiked');
        return stored ? JSON.parse(stored) : [];
    });
 
    useEffect(() => {
        const stored = localStorage.getItem('imageLiked');
        if (stored) {
            setCollection(JSON.parse(stored));
        }
    },[])

    const addImageToStorage = (newImage: typeUnsplashImage) => {
        setCollection(prev => {
            const imageFound = prev.find((imageliked) => imageliked.id === newImage.id);
            if (!imageFound) {
                return [...prev, newImage];
            }
            return prev;
        });
    }

    const deleteImageStorage = (image:typeUnsplashImage) => {
        setCollection(prev => prev.filter(imageLiked => imageLiked.id !== image.id));
    }

    const imageExists = (image: typeUnsplashImage) => {
        const found = collection.findIndex((imageCollection:typeUnsplashImage) => {
            return imageCollection.id === image.id
        })
        return found <= -1 ? false : true 
    }   

    const saveLocalStorage = (newCollection:typeUnsplashImage[]) => {
        localStorage.setItem('imageLiked', JSON.stringify(newCollection));
    }

    const likeImageStorage = (image: typeUnsplashImage) => {
        const exist = imageExists(image)
        if(exist){
            console.log("existe")
        }else{
            setCollection((currentCollection: typeUnsplashImage[]) => {
                let newCollection = currentCollection;
                console.log(newCollection.length)
                if(newCollection.length === 0){
                    console.log("entra 1")
                    newCollection.push(image)
                }else{
                    console.log("entra 1")
                    newCollection = [...newCollection,image]
                }
                saveLocalStorage(newCollection)
                return newCollection;
            })
        }
    }

    return {collection,addImageToStorage,deleteImageStorage,likeImageStorage}
}