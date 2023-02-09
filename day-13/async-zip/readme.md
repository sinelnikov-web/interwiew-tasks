## Реализовать zip для асинхронно итерируемых объектов

Необходимо реализовать функцию zip для множества асинхронно итерируемых объектов.

```js
async function* makeAsync(iter) {
  yield* iter;
}

// [1, 'a', '.'] [2, 'b', '.']
(async () => {
  for await (const el of zip(makeAsync(new Set([1, 2])), makeAsync(['a', 'b', 'z']), makeAsync('...'))) {
    console.log(el);
  }
})();
```