function createsAsyncSemaphore(cb, ...flags) {
    const flagsSet = new Set(flags);

    return function inner(flag) {
        if (flagsSet.has(flag)) {
            flagsSet.delete(flag);
            if (flagsSet.size === 0) {
                cb();
            }
        }
    }
}

const semaphore = createsAsyncSemaphore(() => {
    console.log('Boom!');
}, 'foo', 'bar');

semaphore('foo');
semaphore('bar'); // 'Boom!'

// Эта функция не будет выполняться
semaphore();
