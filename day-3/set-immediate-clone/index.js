const timersMap = new Map();

function setImmediate(fn) {
    const timer = timersMap.size + 1;
    timersMap.set(timer, true);

    queueMicrotask(() => {
        if (timersMap.get(timer) === false) {
            return;
        }
        fn.apply(this)
    });

    return timer;
}

function clearImmediate(timer) {
    if (timer > timersMap.size) {
        return;
    }

    timersMap.set(timer, false)
}

setTimeout(() => {
    console.log(3);
}, 0);

setImmediate(() => {
    console.log(1);
});

const timer = setImmediate(() => {
    console.log(2);
});

clearImmediate(timer);