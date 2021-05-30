//Есть последовательность скобок (()). Нужно проверить, корректна ли она. Написать через reduce

const brackets = '(())()(())'

const bracketsArr = brackets.split('')
let rez = bracketsArr.reduce((acc, item) => {
    if (acc === false) {
        return false
    } else if (item === '(') {
        return [...acc, item]
    } else if (item === ')') {
        if (acc === []) return false
        acc.pop()
        return acc
    }
}, [])

if (rez === false || rez.length > 0) {
    console.log('Невалид')
} else if (rez.length === 0) {
    console.log('Валидно')
}

