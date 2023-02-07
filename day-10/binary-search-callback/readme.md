## Реализовать функция бинарного поиска с callback

Необходимо написать функцию, которая бы принимала отсортированный массив и функцию-компаратор и возвращала бы индекс найденного элемента (если компаратор вернул 0).
Для поиска должен использоваться алгоритм бинарного поиска.

```js
console.log(bisect([1, 2, 3, 4, 5, 6, 7], (val) => 4 - val));   // 3
console.log(bisect([1, 2, 3, 4, 5, 6, 7], (val) => 234 - val)); // -1
```