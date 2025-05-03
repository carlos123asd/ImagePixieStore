import { createAsyncThunk } from "@reduxjs/toolkit";
import { extractCurrentPageFromUrl, parseLinkHeaders } from "../../utilities/parseLinkHeaders";

export const getImagesThunk = createAsyncThunk('imagesList', async (url:string) => {
    try {
        const response = await fetch(url, {
            headers: {
                Authorization: `Client-ID ${import.meta.env.VITE_ACCESS_KEY}`,
                'Accept-Version': 'v1',
            }
        });
        if(response.ok){
            const json = await response.json();
            const linkHeader = response.headers.get("Link");
            const total = response.headers.get("X-Total");
            const perPageValue = response.headers.get("X-Per-Page");
            const links = parseLinkHeaders(linkHeader ? linkHeader.split(',') : [])

            //LIMITS
            const remaining = response.headers.get('X-Ratelimit-Remaining');
            const limit = response.headers.get('X-Ratelimit-Limit');
            console.log(`Límites de la API: ${remaining}/${limit}`);
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
            const errorData = await response.json();
            throw new Error(`Error ${response.status}: ${errorData.message}`);
        }
    } catch (error) {
        console.error('Error execute fetch imageList: ',error)
        throw error;
    }
   
});