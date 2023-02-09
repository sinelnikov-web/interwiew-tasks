## Вычислить разницу двух строк

Необходимо написать функцию, которая бы вычисляла разницу между двумя заданными строками.
Разница вычисляется из суммы всех добавлений, удалений и замен символов так, чтобы строки стали равны.

```js
console.log(diff('bob', 'rob'));           // 1 (одна замена)
console.log(diff('австрия', 'австралия')); // 2 (два удаления)
```