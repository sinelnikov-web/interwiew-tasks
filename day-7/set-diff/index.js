function diff(iterable1, iterable2) {
    const set1 = new Set(iterable1);
    let result = [];
    for (let item of iterable2) {
        if (!set1.has(item)) {
            result.push(item)
        }
    }
    return result
}

console.log(diff([1, 2, 3, 4, 5], [3, 4, 1])); // [2, 5]