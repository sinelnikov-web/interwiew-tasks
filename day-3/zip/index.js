function zip(...iterables) {
    const iters = [...iterables.map((i) => i[Symbol.iterator]())]

    return {
        [Symbol.iterator]() {
            return this;
        },
        next() {
            const result = new Array(iters.length);
            for (let [index, iter] of iters.entries()) {
                const data = iter.next()
                if (data.done) {
                    return {done: true, value: undefined}
                }
                result[index] = data.value
            }
            return {
                done: false,
                value: result
            }
        }
    }
}

console.log(...zip(new Set([1, 2]), ['a', 'b', 'z'], '...')); // [1, 'a', '.'] [2, 'b', '.']