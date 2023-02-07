function allSettledLimit(iterable, limit) {
    let arr = [...iterable];
    let iter = iterable[Symbol.iterator]();
    let results = [];
    let counter = 0;
    let inQueue = 0;
    let index = 0;
    return new Promise((resolve) => {
        function addToQueue() {
            let current = iter.next();
            if (current.done) {
                return;
            }
            inQueue++;
            ((index) => {
                try {
                    current.value().then(res => {
                        results[index] = {
                            status: 'fulfilled',
                            value: res
                        }
                    }).catch(err => {
                        results[index] = {
                            status: 'rejected',
                            error: err
                        }
                    }).finally(() => {
                        counter++;
                        if (counter === arr.length) {
                            resolve(results);
                        } else {
                            addToQueue();
                        }
                    })
                } catch (err) {
                    counter++;
                    results[index] = {
                        status: 'rejected',
                        error: err
                    }
                    if (counter === arr.length) {
                        resolve(results);
                    }
                }
            })(index)
            index++;
            if (inQueue < limit) {
                addToQueue();
            }
        }
        addToQueue()
    })
}

allSettledLimit([
    () => fetch('//some-data-1'),
    () => fetch('//some-data-2'),
    () => Promise.resolve(1),
    () => fetch('//some-data-4')
], 2).then(console.log);