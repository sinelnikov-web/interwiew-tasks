function reduce(arr: number[]): string {
    let res = '';
    let iter = arr[Symbol.iterator]();
    let current = iter.next();
    let rangeStarted = false;
    while (!current.done) {
        let next = iter.next();
        if (next.done) {
            break
        } else {
            if (next.value - current.value > 2) {
                if (res.at(-1) === '-') {
                    rangeStarted = false;
                }
                res += `${current.value} `
            } else if (next.value - current.value < 0) {
                if (res.at(-1) === '-') {
                    rangeStarted = false;
                    res += `${current.value} `;
                }
                next = iter.next()
            } else {
                rangeStarted = true;
                if (res.at(-1) !== '-') {
                    res += `${current.value}-`
                }
            }
        }
        current = next;
    }

    return res;
}

console.log(reduce([1, 3, 6, 8, 7, 11, 45, 46, 2])); // 1-3, 6-8, 11, 45-46