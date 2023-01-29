## Нахождение максимальной глубины в дереве

Необходимо написать функцию, которая бы возвращала максимальную глубину заданного дерева.

```js
const obj = {
  value: 'foo',
  children: [
    {
      value: 'bar'
    },

    {
      value: 'bla',
      children: [{value: 'baz'}]
    }
  ]
};

console.log(maxDepth(obj)); // 2
```