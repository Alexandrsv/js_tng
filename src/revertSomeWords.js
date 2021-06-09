// Напишите функцию, которая принимает строку из одного или нескольких слов и возвращает ту же строку,
// но с перевернутыми словами из пяти или более букв
//
// Переданные строки будут состоять только из букв и пробелов.
// Пробелы будут включены только в том случае, если присутствует более одного слова.

// spinWords("Hey fellow warriors") => "Hey wollef sroirraw"
// spinWords("This is a test") => "This is a test"
// spinWords("This is another test") => "This is rehtona test"

function spinWords(string) {
    return string.split(' ').map(w => w.length >= 5 ? [...w.trim()].reverse().join('') : w.trim())
}

console.log(spinWords("Hey fellow warriors"))
console.log(spinWords("Warriors"))
console.log(spinWords("This is a test"))
console.log(spinWords("This is another test"))
console.log(spinWords("Just gniddik there is still one more"))


function spinWords2(string) {
    return string.replace(/\w{5,}/g, (w) => [...w].reverse().join(''))
}

console.log(spinWords2("Hey fellow warriors"))
console.log(spinWords2("Warriors"))
console.log(spinWords2("This is a test"))
console.log(spinWords2("This is another test"))
console.log(spinWords2("Just gniddik there is still one more"))
