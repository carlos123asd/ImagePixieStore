import { createAsyncThunk } from "@reduxjs/toolkit";

export const getImagesForTag = createAsyncThunk('imagesListByTag', async (word:string) => {
    try { 
        const response = await fetch(`https://api.unsplash.com/search/photos?page=10&query=${word}&client_id=${import.meta.env.VITE_ACCESS_KEY}`)
        if(response.ok){
            const json = await response.json()
            return json
        }else{
            console.log("FAIL GET-IMAGES-BY-TAG")
        }
    } catch (error) {
        console.error('Error execute fetch imageListByTag:',error)
        throw error;
    }
})