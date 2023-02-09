function twoSum(arr, num) {
    let cache = new Map();

    for (let i = 0; i < arr.length; i++) {
        let value = arr[i];
        let diff = num - value;
        if (cache.has(diff)) {
            return [cache.get(diff), i]
        }
        cache.set(value, i);
    }
    return -1
}
console.log(twoSum([2, 7, 11, 15], 9)); // [0, 1]
console.log(twoSum([2, 7, 11, 15], 18)); // [1, 2]
console.log(twoSum([3, 2, 4], 6));      // [1, 2]
console.log(twoSum([3, 2, 4], 5));      // [0, 1]
console.log(twoSum([3, 2, 4], 10));      // -1
