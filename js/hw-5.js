//task 1
alert('Введите два числа.');
let firstNumber = Number(prompt('Первое число?'));
let secondNumber = Number(prompt('Второе число?'));

const defineMoreLess = (firstNumber, secondNumber) => (firstNumber < secondNumber) ? firstNumber : secondNumber;

console.log(defineMoreLess(firstNumber, secondNumber));

//task 2
let num = Number(prompt('Введите число:'));

const isEven = (num) => (num % 2 === 0) ? `Число ${num} четное.` : `Число ${num} нечетное.`;

console.log(isEven(num));

//task 3
function defineSquare() {
    let num = Number(prompt('Введите число:'));
    let numSquare = Math.pow(num, 2);
    console.log(`Квадрат ${num} равен ${numSquare}.`);
}

defineSquare()

function defineSquareReturn() {
    let num = Number(prompt('Введите число:'));
    return Math.pow(num, 2);
}

let numSquare = defineSquareReturn();
console.log(`Квадрат равен ${numSquare}.`);

//task 4
let age = prompt('Введите Ваш возраст:');

function defineAge() {
    if (age < 0 || isNaN(age)) {
        return 'Вы ввели неправильное значение.';
    } else if (age >= 0 && age <= 12) {
        return 'Привет, друг!';
    } else {
        return 'Добро пожаловать!';
    }
}

console.log(defineAge(age));

//task 5
alert('Введите два числа.');
let firstNum = Number(prompt('Первое число?'));
let secondNum = Number(prompt('Второе число?'));

function defineCorrectNumber() {
    if (isNaN(firstNum) || isNaN(secondNum)) {
        return 'Одно или оба значения не являются числом.';
    } else {
        return firstNum * secondNum;
    }
}

console.log(defineCorrectNumber(firstNum, secondNum));

//task 6
let numb = Number(prompt('Введите число.'));

function defineCubeNumber() {
    if (isNaN(numb)) {
        return 'Переданный параметр не является числом';
    } else {
        return `${numb} в кубе равняется ${Math.pow(numb, 3)}.`;
    }
}

console.log(defineCubeNumber(numb));

//task 7
let r1 = Number(prompt('Введите радиус первого круга'));
let r2 = Number(prompt('Введите радиус второго круга'));

function getArea() {
    return Math.PI * this.radius ** 2;
}
function getPerimeter() {
    return C = 2 * Math.PI * this.radius;
}

const circle1 = {
    radius: r1,
    methodGetArea: getArea,
    methodGetPerimeter: getPerimeter
}

const circle2 = {
    radius: r2,
    methodGetArea: getArea,
    methodGetPerimeter: getPerimeter
}

console.log(`Площадь первого круга ${circle1.methodGetArea()}.`);
console.log(`Длина окружности первого круга ${circle1.methodGetPerimeter()}.`);
console.log(`Площадь второго круга ${circle2.methodGetArea()}.`);
console.log(`Длина окружности второго круга ${circle2.methodGetPerimeter()}.`);