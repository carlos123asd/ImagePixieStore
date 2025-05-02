import { createAsyncThunk } from "@reduxjs/toolkit";
import { extractCurrentPageFromUrl, parseLinkHeaders } from "../../utilities/parseLinkHeaders";

export const getImagesThunk = createAsyncThunk('imagesList', async (url:string) => {
    try {
        const response = await fetch(url);
        if(response.ok){
            const json = await response.json();
            const linkHeader = response.headers.get("Link");
            const total = response.headers.get("X-Total");
            const perPageValue = response.headers.get("X-Per-Page");
            const links = parseLinkHeaders(linkHeader ? linkHeader.split(',') : [])
            return {
                images: json,
                pagination: {
                    total: parseInt(total ? total : "0"),
                    perPage: parseInt(perPageValue ? perPageValue : "0"),
                    links,
                    currentPage: extractCurrentPageFromUrl(url)
                }
            }
        }else{
            console.log("FAIL GET-IMAGES")
        }
    } catch (error) {
        console.error('Error execute fetch imageList: ',error)
        throw error;
    }
   
});