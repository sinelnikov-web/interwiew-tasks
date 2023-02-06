
function getUniqueStrs(arr) {
    const wordsMap = new Map();
    arr.forEach((str) => {
        const normalizedStr = [...str].sort().join('');

        if (wordsMap.has(normalizedStr)) {
            wordsMap.get(normalizedStr).count++;
        } else {
            wordsMap.set(normalizedStr, {str, count: 1})
        }
    })
    return [...wordsMap.values()].filter((word) => word.count === 1).map(({str}) => str)
}


console.log(getUniqueStrs(['atoe', 'otea', 'ben', 'enb', 'baz', 'foo'])); // ['baz', 'foo']
