//Посчитать сумму значений на узлах дерева


const tree = [
    {
        v: 5,
        c: [
            {
                v: 5
            },
            {
                v: 10,
                c: [
                    {
                        v: 11,
                    }
                ]
            },
            {
                v: 11,
                c: [
                    {
                        v: 12,
                        c: [
                            {
                                v: 5
                            }
                        ]
                    }
                ]
            },
        ]
    },
    {
        v: 5,
        c: [
            {
                v: 7
            },
            {
                v: 12,
                c: [
                    {
                        v: 11,
                    }
                ]
            },
            {
                v: 14,
            },
        ]
    }
]

const sum = JSON.stringify(tree)
    .match(/(?<="v":)\d+/gm)
    .reduce((a, b) => a * 1 + b * 1)

console.log(sum)


function treeSum(tree) {
    if (!tree.length) return 0
    let sum = 0
    let stack = []

    tree.forEach(node => stack.push(node))
    while (stack.length) {
        let node = stack.pop()
        sum += node.v
        if (node.c) {
            node.c.forEach(node => stack.push(node))
        }
    }
    return sum

}

console.log(treeSum(tree))
