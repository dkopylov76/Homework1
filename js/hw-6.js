//task 1
const numbers = [1, 5, 4, 10, 0, 3];

for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
    if (numbers[i] == 10) break;
}

//task 2
const numbs = [1, 5, 4, 10, 0, 3];

for (let i = 0; i < numbs.length; i++) {
    if (numbs[i] == 4)
    console.log(i);
};

//task 3
const nums = [1, 3, 5, 10, 20];
console.log(nums.join(' '));

//task 4
const array1 = [];

for (let i = 0; i < 3; i++) {
    const array2 = [];
    for (let i = 0; i < 3; i++) {
        array2.push(1);
    }
    array1.push(array2);
}

console.log(array1);

//task 5
const arr = [1, 1, 1];

for (let i = 0; i < 3; i++) {
    arr.push(2);
}

console.log(arr);

//task 6
const nums1 = [9, 8, 7, 'a', 6, 5];
const filterNums1 = nums1.filter(num1 => num1 !== 'a');
console.log(filterNums1.sort());

//task 7
const values = [9, 8, 7, 6, 5];

const userValue = +prompt('Попробуй угадать число от 1 до 10.');
if (values.includes(userValue)) {
    alert('Угадал.')
} else {
    alert('Не угадал.')
}

//task 8
let str = 'abcdef';
console.log(str.split('').reverse().join(''));

//task 9
const arr1 = [[1, 2, 3],[4, 5, 6]];
const arr2 = [];

for (let i = 0; i < arr1.length; i++) {
    arr2.push(...arr1[i]);
}

console.log(arr2);

//task 10
const arr10 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 0; i <= arr10.length; i++) {
    if (arr10[i + 1]) {
        console.log(arr10[i] + arr10[i+1]);
    }
}

//task 11
function square(arr11) {
    return arr11.map(item => item ** 2);
}

console.log(square([2, 4, 6, 8, 10]));

//task 12
function getLength(arr12) {
    return arr12.map(item => item.length);
}

console.log(getLength(['control', 'push', 'commit']));

//task 13
function getNegative(arr13) {
    return arr13.filter(item => item < 0);
}

console.log(getNegative([-2, 4, 6, -8, 10]));

//task 14
const arr14 = [];

for (let i = 0; i < 10; i++) {
    arr14.push(Math.random()*10);
}

console.log(arr14);