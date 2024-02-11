export function randomInt(min: number = 0, max: number = 100) {
    const p = Math.random()
    return Math.floor(min * (1 - p) + max * p)
}
export function createRandomPick(arr: number[]) {
    arr = Array.isArray(arr) ? [...arr] : []; // copy
    function randomPick() {
        const len = arr.length - 1
        const index = randomInt(0, len)
        const picked = arr[index];
        [arr[index], arr[len]] = [arr[len], arr[index]]
        return picked
    }
    randomPick() // abandon first result.
    return randomPick
}