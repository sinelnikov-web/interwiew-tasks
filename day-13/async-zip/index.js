function zip(...generators) {
    return {
        [Symbol.asyncIterator]() {
            return this;
        },
        next() {
            return new Promise((resolve) => {
                const values = generators.map((generator) => generator.next());
                Promise.all(values).then((res) => {
                    if (res.some(value => value.done)) {
                        resolve({
                            done: true,
                            value: undefined
                        })
                    }
                    resolve({
                        done: false,
                        value: res.map(({value}) => value)
                    })
                })
            })
        }
    }
}

async function* makeAsync(iter) {
    yield* iter;
}

// [1, 'a', '.'] [2, 'b', '.']
(async () => {
    for await (const el of zip(makeAsync(new Set([1, 2])), makeAsync(['a', 'b', 'z']), makeAsync('...'))) {
        console.log(el);
    }
})();
