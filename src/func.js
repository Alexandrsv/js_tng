function one(callback) {
    return callback ? callback(1) : 1
}

function two(callback) {
    return callback ? callback(2) : 2
}

function three(callback) {
    return callback ? callback(3) : 3
}

function four(callback) {
    return callback ? callback(4) : 4
}

function five(callback) {
    return callback ? callback(5) : 5
}

function six(callback) {
    return callback ? callback(6) : 6
}

function seven(callback) {
    return callback ? callback(7) : 7
}

function eight(callback) {
    return callback ? callback(8) : 8
}

function nine(callback) {
    return callback ? callback(9) : 9
}


function plus(n1) {
    return (n2) => (n1 + n2)
}

function minus(n1) {
    return (n2) => (n1 - n2)
}

function divide(n1) {
    return (n2) => (n1 / n2)
}

function multi(n1) {
    return (n2) => (n1 * n2)
}

console.log(one(plus(three()))) //4
console.log(two(divide(one(plus(three()))))) //2
console.log(two(multi(one(minus(nine())))))
