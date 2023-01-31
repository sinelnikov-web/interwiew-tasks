function curry(fn) {

    return function inner(...args) {
        if (args.length >= fn.length) {
            return fn.apply(this, args)
        }

        return (...args2) => {
            return inner.apply(this, args.concat(args2))
        }
    }
}


const sum = curry((a, b, c, z) => a + b + c + z);

console.log(sum(1)(2)(3)(4)); // 10;
console.log(sum(1)(2)(3, 4)); // 10;
console.log(sum(1)(2, 3, 4)); // 10;