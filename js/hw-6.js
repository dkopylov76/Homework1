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
const array = [9, 8, 7, 'a', 6, 5];
array.sort();
array.pop();
console.log(array);