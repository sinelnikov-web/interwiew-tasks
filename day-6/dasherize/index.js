function isLower(char) {
    if (typeof char !== 'string') {
        return false;
    }

    return char === char.toLowerCase();
}

function isCaseable(char) {
    if (typeof char !== 'string') {
        return false;
    }

    return char !== char.toLowerCase() || char !== char.toUpperCase();
}

function dasherize(str) {
    let chars = [...str];
    let res = '';

    for (let i = 0; i < str.length; i++) {
        const isFirst = i === 0;
        const isLast = i === str.length - 1;

        const char = str[i];
        const nextChar = isLast ? undefined : str[i + 1];

        if (isLower(char)) {
            res += char.toLowerCase();
            if (!isLower(nextChar) && !isLast) {
                res += '-';
            }
        } else {
            let canDash = !res.endsWith('-')
            if (isCaseable(nextChar) && isLower(nextChar) && !isFirst && canDash) {
                res += '-'
            }
            res += char.toLowerCase()
            if (!isCaseable(nextChar) && canDash && !isLast) {
                res += '-';
            }
        }
    }
    return res;
}

console.log(dasherize('createDocumentFragment')); // 'create-document-fragment'
console.log(dasherize('SuperMAN'));               // 'super-man'
console.log(dasherize('VirtualDOMFragment'));     // 'virtual-dom-fragment'
console.log(dasherize('Some123VALUE10'));     // 'some123-value-10'