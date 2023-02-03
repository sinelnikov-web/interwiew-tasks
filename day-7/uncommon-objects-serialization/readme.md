## Сериализация нестандартных объектов

Необходимо написать функцию, которая бы позволяла преобразовать заданные JS объекты в строку и обратно.

```js
const original = {
  myDate: new Date(),
  mySet: new Set([1, 2, 3]),
  myMap: new Map([
    [new Date(), {a: 1}]
  ])
};

const str = serialize(original);

// Объект должен иметь аналогичную структуру с original
parse(str);
```