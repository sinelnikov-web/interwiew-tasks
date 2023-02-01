function sort(arr) {
    const positions = []
    const elements = []
    arr.forEach((el, i) => {
        if (el % 2 === 0) {
            positions.push(i)
            elements.push(el)
        }
    })
    elements.sort((a, b) => a - b)

    elements.forEach((el, i) => {
        arr[positions[i]] = el
    })

    return arr;
}

console.log(sort([7, 1, 4, 2, 9, 8])); // [7, 1, 2, 4, 9, 8]