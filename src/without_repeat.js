// Написать функцию, которая возвращает
// массив только с уникальными значениями
// [1,1,2,2,3,4,5,5] -> [3,4]


let arr = [1, 1, 2, 2, 3, 4, 5, 5, 5]

function killRepeat(arr) {
    return arr.filter(i => {
        return arr.reduce((acc, val) => {
            return acc + (i === val)
        }, 0) === 1
    })
}

console.log(killRepeat(arr))


function killRepeat2(arr) {
    const rez = []
    const dic = {}
    for (let i = 0; i < arr.length; i++) {
        const item = arr[i]
        dic[item] = dic[item] ? dic[item] += 1 : 1
    }
    for (let i = 0; i < arr.length; i++) {
        if(dic[arr[i]]===1){
            rez.push(arr[i])
        }
    }
    return rez
}

console.log(killRepeat2(arr))


