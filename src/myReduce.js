//С нуля реализовать reduce, как метод Array

const arr = [1, 1, 2, 3, 5, 8, 13]


Array.prototype.myReduce = function (callback, initial = null) {
    let acc
    const inputArr = this
    acc = initial ? initial : inputArr[0]
    inputArr.slice(initial ? 0 : 1, inputArr.length).forEach((i) => {
        acc = callback(acc, i, inputArr)
    })
    return acc
}


console.log(arr.myReduce((acc, i) => {
    return i + acc
}, 0))


console.log(arr.reduce((acc, i) => {
    return i + acc
}, 0))
