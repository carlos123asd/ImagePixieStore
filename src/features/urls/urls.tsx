//export const urlImagesInit = `https://api.unsplash.com/photos?page=1&per_page=30&client_id=${import.meta.env.VITE_ACCESS_KEY}`
export const urlImagesInit = 'https://api.unsplash.com/photos?page=1&per_page=30'
export const urlImagesTags = (word: string) => { 
	return `https://api.unsplash.com/search/photos?page=10&query=${word}`; 
}
export const urlImageUser = (username:string) => {
    return `https://api.unsplash.com/users/${username}/photos`
}