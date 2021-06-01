function minMax(arr) {
    return arr.reduce((acc, val) => {
        return [acc[0] < val ? acc[0] : val, acc[1] > val ? acc[1] : val]
    }, [Infinity, -Infinity])
}

console.log(minMax([2, 9, 10, 12, 34, 4, 1]))
console.log(minMax([1]))
console.log(minMax([2, 1]))


function minMax2(arr) {
    return [Math.min(...arr), Math.max(...arr),]
}

console.log(minMax2([2, 9, 10, 12, 34, 4, 1]))
console.log(minMax2([1]))
console.log(minMax2([2, 1]))

