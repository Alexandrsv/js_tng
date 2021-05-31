//Найти переметр элементов с X

const matrix = [
    'XOOXO',
    'XOOXO',
    'OOOXO',
    'XXOXO',
    'OXOOO'
]


function countFreeEdges(y, x) {
    if (matrix[y][x] === 'O') return 0
    const edges = [0, 0, 0, 0]

    if (y === 0) {
        edges[0] = 1
    } else if (matrix[y - 1][x] === 'O') {
        edges[0] = 1
    }

    if (y === matrix.length - 1) {
        edges[2] = 1
    } else if (matrix[y + 1][x] === 'O') {
        edges[2] = 1
    }

    if (x === 0) {
        edges[3] = 1
    } else if (matrix[y][x - 1] === 'O') {
        edges[3] = 1
    }

    if (x === matrix[0].length - 1) {
        edges[1] = 1
    } else if (matrix[y][x + 1] === 'O') {
        edges[1] = 1
    }

    return edges.reduce((acc, val) => acc + val)

}


let totalCountFreeEdges = 0
for (let i in matrix) {
    for (let j = 0; j < matrix[i].length; j++) {
        totalCountFreeEdges += countFreeEdges(parseInt(i), parseInt(j))
    }
}
console.log(totalCountFreeEdges)


function countFreeEdges2(y, x) {
    let p = 0
    if (matrix[y][x] === 'X') {
        p += x === 0 || matrix[y][x - 1] === 'O'
        p += y === 0 || matrix[y - 1][x] === 'O'
        p += y === matrix.length - 1 || matrix[y + 1][x] === 'O'
        p += x === matrix[y].length - 1 || matrix[y][x + 1] === 'O'
    }
    return p
}

totalCountFreeEdges = 0
for (let i in matrix) {
    for (let j = 0; j < matrix[i].length; j++) {
        totalCountFreeEdges += countFreeEdges2(parseInt(i), parseInt(j))
    }
}
console.log(totalCountFreeEdges)
