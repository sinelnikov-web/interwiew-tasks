function compare(obj1, obj2) {

    if (!isDeepComparable(obj1) || !isDeepComparable(obj2)) {
        return obj1 === obj2;
    }

    if (obj1.constructor !== obj2.constructor) {
        return false;
    }

    if (Array.isArray(obj1)) {
        if (obj1.length !== obj2.length) {
            return false;
        }
        for (let i = 0; i < obj1.length; i++) {
            if (!compare(obj1[i], obj2[i])) {
                return false;
            }
        }
        return true;
    }

    const obj1Entries = Object.entries(obj1);
    const obj2Entries = Object.entries(obj2);

    obj1Entries.sort(sort);
    obj2Entries.sort(sort);

    for (let i = 0; i < obj1Entries.length; i++) {
        if (!compare(obj1Entries[i], obj2Entries[i])) {
            return false;
        }
    }
    return true;

    function sort([key1], [key2]) {
        return key1.localeCompare(key2);
    }

    function isDeepComparable(value) {
        const constructor = value?.constructor;
        return constructor && (Array.isArray(value) || constructor === Object || constructor == null);
    }
}


console.log(compare({a: 1, b: [1, 2, 3]}, {a: 1, b: [1, 2, 3]})); // true
console.log(compare({a: 1, b: [1, 2]}, {a: 1, b: [1, 2, 3]}));    // false
console.log(compare({a: 1, b: [1, 2, 3], foo: null, bar: undefined}, {a: 1, b: [1, 2, 3], foo: null, bar: undefined}));    // true
