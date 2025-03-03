//task 1
const numbers = [1, 5, 4, 10, 0, 3];
for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
    if (numbers[i] == 10) break;
}

//task 2
const numbs = [1, 5, 4, 10, 0, 3];
for (let i = 0; i < numbs.length; i++) {
    if (numbs[i] === 4)
    console.log(i);
};

//task 3
const nums = [1, 3, 5, 10, 20];
let joinNums = nums.join(' ');
console.log(joinNums);