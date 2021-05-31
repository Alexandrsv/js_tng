/// Дан словарь из городов и дат выступлений рок-группы

/// Необходимо преобразовать словарь (key-value) в массив из названий городов
/// Вывод городов должен быть в хронологическом порядке
/// Города в которых концерт уже прошел нужно исключить
/// Результат ["Казань", "Питер", "Калининград"]

const concerts = {
    'Москва': new Date('2020-04-01'),
    'Казань': new Date('2021-07-02'),
    'Владивосток': new Date('2020-04-21'),
    'Калининград': new Date('2021-07-15'),
    'Омск': new Date('2020-04-18'),
    'Питер': new Date('2021-07-10'),
}

const rez = Object.entries(concerts).filter((item) => item[1] > new Date())
    .sort((item1, item2) => item1[1] - item2[1])
    .map(i => i[0])
console.log(rez)


//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


const rez2 = Object.keys(concerts).filter((item) => concerts[item] > new Date())
    .sort((item1, item2) => concerts[item1] - concerts[item2])

console.log(rez2)
