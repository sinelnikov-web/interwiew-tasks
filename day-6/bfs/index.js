function log(tree) {
    const queue = [tree];
    const result = []
    while (queue.length > 0) {
        const node = queue.shift();
        result.push(node.value)
        if (node.children?.length > 0) {
            queue.push(...node.children)
        }
    }
    console.log(result.join(' '))
}

const tree = {
    value: 1,
    children: [
        {
            value: 2,
            children: [{value: 4}]
        },
        {
            value: 3
        }
    ]
};

log(tree); // 1 2 3 4