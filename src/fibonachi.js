//Найти число в последовательности фибоначчи по номеру
let count = 0
const fib = (targetIndex) => {
    if (targetIndex <= 0) return null
    if (targetIndex <= 2) return 1
    const fibCalc = (a, b, index) => {
        ++count
        if (index === targetIndex) return a + b
        return fibCalc(b, a + b, ++index)
    }
    return fibCalc(1, 1, 3)
}
console.log(fib(10), count)


count = 0
const fib2 = (targetIndex) => {
    ++count
    if (targetIndex <= 0) return null
    if (targetIndex <= 2) return 1
    return fib2(targetIndex - 1) + fib2(targetIndex - 2)
}
console.log(fib2(10), count)
