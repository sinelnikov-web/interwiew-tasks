## Реализовать zip для синхронных Iterable объектов

Общее количество кортежей берется по минимальному значению.
Функция должна возвращать IterableIterator.

```js
console.log(...zip(new Set([1, 2]), ['a', 'b', 'z'], '...')); // [1, 'a', '.'] [2, 'b', '.']
```