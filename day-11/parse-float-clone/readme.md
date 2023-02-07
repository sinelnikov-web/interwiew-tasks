## Реализация функции аналогичной parseFloat

Необходимо написать функцию, которая бы повторяло поведение parseFloat.

```js
console.log(myParseFloat('10'));      // 10
console.log(myParseFloat('-10.2'));   // -10.2
console.log(myParseFloat('6e-2'));    // 0.06
console.log(myParseFloat('--20'));    // NaN
```