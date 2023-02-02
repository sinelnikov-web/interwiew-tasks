// function flat(arr, depth=1) {
//     if (depth === 0) {
//         return arr;
//     }
//     return flat(arr.reduce((acc, el) => Array.isArray(el) ? [...acc, ...el] : [...acc, el], []), depth - 1)
// }

function flat(arr, depth=1) {
    while (depth > 0) {
        arr = arr.reduce((acc, el) => Array.isArray(el) ? [...acc, ...el] : [...acc, el], [])
        depth--;
    }
    return arr
}

console.log(flat([[1, 2], [[1]], 2]));    // [1, 2, [1], 2]
console.log(flat([[1, 2], [[1]], 2], 2)); // [1, 2, 1, 2]