export const downloadImage = async (fileName:string,urlImage:string) => {
    try {
        const response = await fetch(urlImage);
        const blob = await response.blob();
        const objectURL = URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = objectURL
        link.download = fileName
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

        URL.revokeObjectURL(objectURL);
    } catch (error) {
        console.log("Download failed",error);
    }
}