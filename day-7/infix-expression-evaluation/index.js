function calc(expr) {
    expr = expr.replace(/\d+|[+\-*/()]/g, ' $& ').trim();
    const lexemes = expr.split(/\s+/);

    const priorities = {
        '(': -1,
        ')': -1,
        '+': 1,
        '-': 1,
        '*': 2,
        '/': 2
    }

    const stack = [];
    const queue = [];

    for (const lexeme of lexemes) {
        if (/\d/.test(lexeme)) {
            queue.push(parseInt(lexeme))
        } else if (lexeme === '(') {
            stack.push(lexeme)
        } else if (lexeme === ')') {
            while (true) {
                const head = stack.pop();
                if (head === '(') {
                    break;
                }
                queue.push(head);
            }
        } else {
            if (stack.length > 0 && stack.at(-1) !== '(') {
                while (priorities[stack.at(-1)] > priorities[lexeme]) {
                    queue.push(stack.pop())
                }
            }
            stack.push(lexeme);
        }
    }

    while (stack.length > 0) {
        queue.push(stack.pop())
    }

    const exprStack = [];

    while (queue.length > 0) {
        const current = queue.shift();

        if (typeof current === 'number') {
            exprStack.push(current);
        } else {
            switch (current) {
                case '+': {
                    exprStack.push(exprStack.pop() + exprStack.pop())
                    break;
                }
                case '-': {
                    const first = exprStack.pop();
                    exprStack.push(exprStack.pop() - first);
                    break;
                }
                case '*': {
                    exprStack.push(exprStack.pop() * exprStack.pop())
                    break;
                }
                case '/': {
                    const first = exprStack.pop();
                    exprStack.push(exprStack.pop() / first);
                    break;
                }
            }
        }
    }
    return exprStack[0] ?? NaN;
}

console.log(calc('12+5*2/(60-58)-5')); // 12
