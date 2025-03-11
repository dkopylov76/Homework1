//task 1
let str = 'js';
console.log(str.toUpperCase('js'));

//task 2
const words = ['Вниз','вверх','внутрь','Наружу','Внезапно'];
const search = 'вн';
words.forEach((word) => {
    if (word.toLowerCase().includes(search.toLowerCase())) {
        console.log(word);
    }
});