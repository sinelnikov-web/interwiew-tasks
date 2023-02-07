function iterate(tree) {
    let state = 0;
    let iter, childIter;
    return {
        [Symbol.iterator]() {
            return this;
        },
        next() {
            if (state === 0) {
                state++;
                return {
                    done: false,
                    value: tree.value
                }
            }
            if (!tree.children?.length) {
                return {
                    done: true,
                    value: undefined
                }
            }

            while (true) {
                if (childIter != null) {
                    const {done, value} = childIter.next();
                    if (done) {
                        childIter = null;
                    } else {
                        return {
                            done,
                            value
                        }
                    }
                }

                iter ??= tree.children.values();

                const {done, value} = iter.next();
                if (done) {
                    return {
                        done,
                        value: undefined
                    }
                }
                childIter ??= iterate(value);
            }
        }
    }
}

const i = iterate({
    value: 1,
    children: [{value: 2, children: [{value: 5}]}, {value: 3, children: [{value: 4}]}]
});

console.log(i.next()); // {value: 1, done: false}
console.log(i.next()); // {value: 2, done: false}
console.log(i.next()); // {value: 3, done: false}
console.log(i.next()); // {value: 4, done: false}
console.log(i.next()); // {value: undefined, done: true}
