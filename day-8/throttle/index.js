function throttle(fn, ms) {
    let timer = null;
    let lastArgs = null;
    return function inner(...args) {
        lastArgs = args;
        if (timer) {
            return;
        }
        fn.apply(this, args);
        timer = setTimeout(() => {
            timer = null;
            if (lastArgs !== args) {
                inner.apply(this, lastArgs);
            }
        }, ms)
    }
}

function laugh(...args) {
    console.log('Ha-ha!', ...args)
}

const throttledLaugh = throttle(laugh, 300);

throttledLaugh(1);
throttledLaugh(2);
setTimeout(() => {
    throttledLaugh(3);
}, 500)
throttledLaugh(4);

// 1 4 3