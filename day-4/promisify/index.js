
function promisify(cb) {
    return (...args) => {
        return new Promise((resolve, reject) => {
            cb(...args, (err, data) => {
                if (err) {
                    reject(err)
                } else {
                    resolve(data)
                }
            })
        })
    }
}

function cbDiv(a, b, cb) {
    if (b === 0) {
        cb(new TypeError('Нельзя делить на 0'));

    } else {
        cb(null, a / b);
    }
}

const promiseDiv = promisify(cbDiv);

promiseDiv(1, 2).then(console.log);  // 0.5
promiseDiv(1, 0).catch(console.log); // TypeError('Нельзя делить на 0')