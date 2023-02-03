function waterfall(iterable, doneHandler) {
    const iter = iterable[Symbol.iterator]();
    function next(item, args=[]) {
        if (item.done) {
            doneHandler(null, ...args);
            return;
        }
        const cb = item.value;
        try {
            cb(...args, (err, ...newArgs) => {
                if (err) {
                    doneHandler(err)
                    return;
                }
                next(iter.next(), newArgs)
            })
        } catch (e) {
            doneHandler(e)
        }
    }
    next(iter.next())
}

waterfall([
    (cb) => {
        setTimeout(() => {
            cb(null, 'one', 'two');
        }, 1000)
    },

    (arg1, arg2, cb) => {
        console.log(arg1); // one
        console.log(arg2); // two
        cb(null, 'three');
    },

    (arg1, cb) => {
        console.log(arg1); // three
        cb(null, 'done');
    }
], (err, result) => {
    console.log(result); // done
});

waterfall(new Set([
    (cb) => {
        cb('ha-ha!');
    },

    (arg1, cb) => {
        cb(null, 'done');
    }
]), (err, result) => {
    console.log(err);    // ha-ha!
    console.log(result); // undefined
});
