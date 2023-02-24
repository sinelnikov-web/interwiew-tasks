function getAnagram(str) {
    const chars = [...str];
    const anagrams = [];

    createAnagram()

    function createAnagram(from=0) {
        if (from === str.length - 1) {
            const current = chars.join('');

            if (current !== str) {
                anagrams.push(current);
            }
            return;
        }

        for (let i = from; i < str.length; i++) {
            createAnagram(from + 1);
            rotate(from);
        }
    }

    function rotate(from) {
        if (from >= str.length - 1) {
            return;
        }
        chars.push(chars.splice(from, 1)[0]);
    }
    return anagrams;
}

console.log(getAnagram('cat')); // ['cta', 'atc', 'act', 'tca', 'tac']
