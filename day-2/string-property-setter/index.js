const obj = {};

function setByPath(obj, path, value) {
    path.split('.').reduce((acc, key, i, arr) => {
        if (i === arr.length - 1) {
            acc[key] = value;
        }
        if (!acc.hasOwnProperty(key)) {
            acc[key] = {}
        }
        return acc[key]
    }, obj)
}

setByPath(obj, 'foo.bar', 1);
setByPath(obj, 'foo.bla', 2);
setByPath(obj, 'foo.bla', 3);
setByPath(obj, 'fiz.bla.baz', 5);

console.log(obj); // {foo: {bar: 1, bla: 2}}