//task 1
const people = [
    { name: 'Глеб', age: 29 },
    { name: 'Анна', age: 17 },
    { name: 'Олег', age: 7 },
    { name: 'Оксана', age: 47 }
];

console.log(people.sort((a, b) => a.age - b.age));

//task 2
function isPositive(number) {
    return number > 0;
}
/*function isMale() {
    // писать код тут
}
 
function filter() {
    const filteredNumbers = numbers.filter(number => number > 10)
}
*/    
console.log(filter([3, -4, 1, 9], isPositive));
/*    
const people1 = [
    {name: 'Глеб', gender: 'male'},
    {name: 'Анна', gender: 'female'},
    {name: 'Олег', gender: 'male'},
    {name: 'Оксана', gender: 'female'}
];
    
console.log(filter(people1, isMale));
*/