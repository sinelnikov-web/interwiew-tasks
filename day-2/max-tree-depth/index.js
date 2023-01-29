function maxDepth(tree) {
    let stack = [[tree, 0]]
    let maxDepth = 0;
    while (stack.length) {
        let [current, depth] = stack.pop()
        if (depth > maxDepth) {
            maxDepth = depth;
        }
        if (current.children?.length) {
            stack.push(...current.children.map((node) => [node, depth + 1]))
        }
    }
    return maxDepth
}

const obj = {
    value: 'foo',
    children: [
        {
            value: 'bar'
        },

        {
            value: 'bla',
            children: [{value: 'baz', children: [{value: 'fiz'}]}]
        }
    ]
};

console.log(maxDepth(obj)); // 3