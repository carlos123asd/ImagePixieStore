import { createAsyncThunk } from "@reduxjs/toolkit";

export const getImagesForUser = createAsyncThunk('imageListForUser', async (username:string) => {
    try {
        const response = await fetch(`https://api.unsplash.com/users/${username}/photos?client_id=${import.meta.env.VITE_ACCESS_KEY}`)
        if(response.ok){
            const json = await response.json()
            console.log(json)
            return json
        }else{
            console.log("ERROR GET IMAGE LIST FOR USER")
        }
    } catch (error) {
        console.error("error get Images List For User: "+error)
    }
})