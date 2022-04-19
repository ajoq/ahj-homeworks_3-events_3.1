export default function getRandom(max, except) {
    let num = Math.floor(Math.random() * max);
    return num === except ? getRandom(max, except) : num;
}