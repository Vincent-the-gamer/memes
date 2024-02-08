interface ImageSize { 
    width: string, 
    height: string 
}

export type Card = {
    title: string,
    description: string,
    imgUrl?: string,
    size?: ImageSize
    clickEvent?: () => any
}