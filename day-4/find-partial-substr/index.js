function find(pattern, arr) {
    return arr.filter((s) => matchPattern(pattern, s))
}

function matchPattern(pattern, str) {
    const patternIterator = pattern[Symbol.iterator]();

    let activePattern = patternIterator.next();

    if (activePattern.done) {
        return false;
    }

    for (const char of str) {
        if (activePattern.value === char) {
            activePattern = patternIterator.next()

            if (activePattern.done) {
                break
            }
        }
    }

    return activePattern.done
}

console.log(find('qiu', [
    'kobezzza',
    'iuq',
    'kibiza',
    'zprc'
])); // ['kobezzza', 'kibiza']