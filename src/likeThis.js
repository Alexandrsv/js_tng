// Вы, наверное, знаете систему «лайков» по ​​Facebook и другим страницам. Люди могут "лайкать" сообщения в блогах, изображения или другие предметы.
// Мы хотим создать текст, который должен отображаться рядом с таким элементом.
//
// likes [] -- must be "no one likes this"
// likes ["Peter"] -- must be "Peter likes this"
// likes ["Jacob", "Alex"] -- must be "Jacob and Alex like this"
// likes ["Max", "John", "Mark"] -- must be "Max, John and Mark like this"
// likes ["Alex", "Jacob", "Mark", "Max"] -- must be "Alex, Jacob and 2 others like this"
function likes(names) {
    switch (names.length) {
        case 0:
            return 'no one likes this'
        case 1:
            return `${names[0]} likes this`
        case 2:
            return `${names[0]} and ${names[1]} like this`
        case 3:
            return `${names[0]}, ${names[1]} and ${names[2]} like this`
        default:
            return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`
    }
}

console.log(likes([])) // must be "no one likes this"
console.log(likes(["Peter"])) // must be "Peter likes this"
console.log(likes(["Jacob", "Alex"])) // must be "Jacob and Alex like this"
console.log(likes(["Max", "John", "Mark"])) // must be "Max, John and Mark like this"
console.log(likes(["Alex", "Jacob", "Mark", "Max"])) // must be "Alex, Jacob and 2 others like this"


function likes2(names) {
    return [
        'no one likes this',
        `${names[0]} likes this`,
        `${names[0]} and ${names[1]} like this`,
        `${names[0]}, ${names[1]} and ${names[2]} like this`,
        `${names[0]}, ${names[1]} and ${names.length - 2} others like this`
    ][Math.min(4, names.length)]
}

console.log(likes2([])) // must be "no one likes this"
console.log(likes2(["Peter"])) // must be "Peter likes this"
console.log(likes2(["Jacob", "Alex"])) // must be "Jacob and Alex like this"
console.log(likes2(["Max", "John", "Mark"])) // must be "Max, John and Mark like this"
console.log(likes2(["Alex", "Jacob", "Mark", "Max"])) // must be "Alex, Jacob and 2 others like this"
