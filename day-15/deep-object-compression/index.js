const obj = {
    a: {
        b: [1, 2],
        '': {c: 2},
        d: new Set([1, 2])
    }
};

/* {'a.b.0': 1, 'a.b.1': 2, 'a..c': 2} */
console.log(collapse(obj));

function collapse(obj) {
    const result = {};

    traverse(obj)

    function traverse(value, currentKey='') {
        if (typeof value !== 'object' || value == null || value instanceof Function) {
            result[currentKey] = value;
            return;
        }
        if (!Array.isArray(value) && value[Symbol.iterator]) {
            value = [...value];
        }
        for (let key in value) {
            let newKey = currentKey === '' ? key : currentKey + `.${key}`;
            traverse(value[key], newKey);
        }
    }

    return result;
}