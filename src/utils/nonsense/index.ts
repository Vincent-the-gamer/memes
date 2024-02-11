import data from "./data.json"
import { generate } from "./generator"

export function generateArticle(title: string, min: number | undefined = undefined, max: number | undefined = undefined): string{
    return generate(title, {
        corpus: data,
        min,
        max
    }).join('\n    ')
}