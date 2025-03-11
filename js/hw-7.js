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
function randomNum() {
    return Math.floor(Math.random() * 10) + 1;
}

console.log(randomNum());

//task 6
const numRandom = Math.floor(Math.random() * 100) + 1;
const length = Math.floor(numRandom / 2);
const arrRandom = [];

for (let i = 0; i < length; i++) {
    arrRandom.push(Math.floor(Math.random() * (numRandom + 1)));
}
console.log(numRandom);
console.log(length);
console.log(arrRandom);

//task 7
const firstNumber = 34;
const secondNumber = 68;

function twoNumbers() {
    return Math.floor(firstNumber + Math.random() * (secondNumber - firstNumber + 1));
}

console.log(twoNumbers());