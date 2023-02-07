## Реализовать класс LRU кеша

Необходимо реализовать класс кеширования с алгоритмом LRU.

```js
const cache = new LRUCache(3); // Размер кеша

cache.set('key1', 1);
cache.set('key2', 2);
cache.set('key3', 3);

console.log(cache.get('key1')); // 1

cache.set('key4', 4);

console.log(cache.has('key2')); // false
```