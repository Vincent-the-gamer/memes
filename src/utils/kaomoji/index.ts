import { Mojis } from "./mojis";

export default function useKaomoji(category: string | void = undefined) {
   const moji = category ? Mojis[category] : Object.values(Mojis).flatMap(i => i)
   return moji[Math.floor(Math.random() * moji.length)]
}