function diff(str1, str2) {
    let levensteinMatrix = [...str1].map((_, i) => {
        return [...str2].map((_, j) => {
            if (i === 0 && j === 0) {
                return 0;
            }
            if (i > 0 && j === 0) {
                return i;
            }
            if (j > 0 && i === 0) {
                return j;
            }
            return 0;
        })
    })
    for (let i = 1; i < str1.length; i++) {
        for (let j = 1; j < str2.length; j++) {
            let m = str1[i - 1] === str2[j - 1] ? 0 : 1;
            levensteinMatrix[i][j] = Math.min(
                levensteinMatrix[i][j -1 ] +1,
                levensteinMatrix[i - 1][j] + 1,
                levensteinMatrix[i - 1][j - 1] + m
            )
        }
    }
    return levensteinMatrix[str1.length - 1][str2.length - 1];
}

console.log(diff('bob', 'rob'));           // 1 (одна замена)
console.log(diff('австрия', 'австралия')); // 2 (два удаления)

// авструя
// австр