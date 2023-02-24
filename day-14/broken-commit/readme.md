## Ломающий коммит

Имеется множество коммитов и функция проверки работы программы. На одном из коммитов программа начинает ломаться.
Необходимо выяснить за минимальное время этот коммит.

```js
const commits = ['good', 'good', 'good', 'bad', 'bad', 'bad', 'bad', 'bad', 'bad'];

const test = (commit) => commit === 'good';

console.log(findFirstBadCommit(commits, test)); // 3
```