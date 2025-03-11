//task 1
let str = 'js';
console.log(str.toUpperCase('js'));

//task 2
const words = ['Вниз','вверх','внутрь','Наружу','Внезапно'];
const search = 'вн';
const wordsNew = [];

words.forEach((word) => {
    if (word.toLowerCase().startsWith(search.toLowerCase())) {
        wordsNew.push(word);
    }
});

console.log(wordsNew);

//task 3
