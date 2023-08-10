## Реализация очереди с приоритетом

Необходимо написать класс, который бы предоставлял API очереди, но с возможности задания функции-компаратора для сортировки на вставке.

```js
const
  queue = new OrderedQueue<number>((a, b) => a - b);

queue.push(1);
queue.push(5);
queue.push(2);
queue.push(-1);
queue.push(5);
queue.push(2);
queue.push(-1);
queue.push(5);

console.log(queue.pop());  // 5
console.log(queue.pop());  // 5

console.log(queue.pop());  // 5
console.log(queue.pop());  // 2
console.log(queue.pop());  // 2
```