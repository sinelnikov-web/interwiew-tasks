function intersectRanges(arr1, arr2) {
    let normalizedRanges1 = arr1.split('; ').map(range => range.split('-').map((num) => parseInt(num)));
    let normalizedRanges2 = arr2.split('; ').map(range => range.split('-').map((num) => parseInt(num)));
    let iter1 = normalizedRanges1.values();
    let iter2 = normalizedRanges2.values();
    let firstRange = iter1.next();
    let secondRange = iter2.next();
    let result = '';
    while (!firstRange.done && !secondRange.done) {
        const [firstStart, firstEnd] = firstRange.value;
        const [secondStart, secondEnd] = secondRange.value;
        if (firstEnd <= secondStart) {
            firstRange = iter1.next();
            continue;
        }
        if (firstStart >= secondEnd) {
            secondRange = iter2.next();
            continue;
        }
        if (firstStart <= secondStart) {
            if (firstEnd <= secondEnd) {
                result += `${secondStart}-${firstEnd} `;
                firstRange = iter1.next();
            } else {
                result += `${secondStart}-${secondEnd} `;
                secondRange = iter2.next();
            }
        } else {
            if (firstEnd <= secondEnd) {
                result += `${firstStart}-${firstEnd} `
                firstRange = iter1.next();
            } else {
                result += `${firstStart}-${secondEnd} `
                secondRange = iter2.next();
            }
        }
    }
    return result;
}

console.log(intersectRanges('1-2; 4-6; 9-11', '1-5; 10-14; 15')); // 1-2; 4-5; 10-11