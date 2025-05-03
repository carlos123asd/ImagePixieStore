export const parseLinkHeaders = (header:string[]) => {
    if(!header) return {}
    const link: Record<string, string> = {}
    console.log(header)
    header.forEach((part) => {
        const section = part.split(';')
        if(section.length !== 2) return

        const url = section[0].replace(/<(.*)>/,'$1').trim()
        const name = section[1].replace(/rel="(.*)"/,'$1').trim()
        link[name] = url;
    })
    console.log('link',link)
    return link
}

export const extractCurrentPageFromUrl = (url:string) => {
    const urlObj = new URL(url);
    return parseInt(urlObj.searchParams.get("page") ?? "1") || 1;
}