function extractQuotes(str) {
    return [...str.matchAll(/(["'`])(?<word>(?:\\\1|.)*?)\1/g)].map((match) => match.groups.word);
}

console.log(extractQuotes('Это строка в "кавычках\'" и `"эта"` тоже, а это "хитрая строка\\""')); // ["кавычках'", '"эта"', 'хитрая строка\\"']
