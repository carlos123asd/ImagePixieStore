import { createAsyncThunk } from "@reduxjs/toolkit";

export const getImagesThunk = createAsyncThunk('imagesList', async () => {
    try {
        const response = await fetch(`https://api.unsplash.com/photos?page=1&client_id=${import.meta.env.VITE_ACCESS_KEY}`);
        if(response.ok){
            const json = await response.json();
            console.log(json)
            return json
        }else{
            console.log("FAIL GET-IMAGES")
        }
    } catch (error) {
        console.error('Error execute fetch imageList: ',error)
        throw error;
    }
   
});