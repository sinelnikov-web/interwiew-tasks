function bisect<T>(arr: Array<T>, comparator: (value: T) => number): number {
    let
        left = 0,
        right = arr.length - 1,
        mid = Math.floor(arr.length / 2 );

    while (left < right) {
        const value = arr[mid];
        const compareResult = comparator(value);
        if (compareResult === 0) {
            return mid;
        } else if (compareResult > 0) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
        mid = left + Math.floor((right - left) / 2);
    }
    return -1;
}

console.log(bisect([1, 2, 3, 4, 5, 6, 7], (val) => 6 - val));   // 5
console.log(bisect([1, 2, 3, 4, 5, 6, 7], (val) => 234 - val)); // -1
console.log(bisect([1, 2, 3, 4, 5, 6, 7], (val) => 2 - val)); // 1
