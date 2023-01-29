var val = Promise.resolve(1);

var arr = [1, 2, 3];

for (var i = 0; i < arr.length; ++i) {
    val = val.then((val) => val + arr[i]);
}

val.then(console.log); // NaN - i === 3, arr[i] === undefined, undefined + number === NaN