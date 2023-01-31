## Что и в каком порядке выведется в консоль?

И почему?

```js
console.log('foo');

setTimeout(() => {
  console.log('bar');
}, 0);

queueMicrotask(() => {
  console.log('baz');
  Promise.resolve().then().then(() => console.log('ban'));
});

new Promise((resolve) => {
  console.log('bla');
  resolve('baf');
}).then(console.log);

console.log('bak');
```