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
const num = 32.58884;

console.log(Math.floor(num));
console.log(Math.ceil(num));
console.log(Math.round(num));

//task 4
const arr4 = [52, 53, 49, 77, 21, 32];
const minNum = Math.min(...arr4);
const maxNum = Math.max(...arr4);
console.log(minNum);
console.log(maxNum);

//task 5
function randonNum() {
    return Math.floor(Math.random() * 10) + 1;
}

console.log(randonNum());