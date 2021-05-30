// aabbaa - true
// aabaB - false
// azaZA - true

function palindrom(word) {
    const reversedWord = word.split('').reverse().join('')
    return word.toLowerCase() === reversedWord.toLowerCase();
}

console.log(palindrom('azaZA'))
console.log(palindrom('aabaB'))
