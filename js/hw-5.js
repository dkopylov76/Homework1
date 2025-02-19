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
        return 0;
    } else {
        return 1
    }
}

if (defineCorrectNumber(firstNum, secondNum) === 0) {
    console.log('Одно или оба значения не являются числом.');
} else {
    console.log(firstNum * secondNum);
}

//task 6
let numb = Number(prompt('Введите число.'));

function defineCubeNumber() {
    if (isNaN(numb)) {
        return 0
    } else {
        return Math.pow(numb, 3);
    }
}

console.log(defineCubeNumber(numb));
console.log('Переданный параметр не является числом');
/*//task 7
let r1 = Number(prompt('Введите радиус первого круга'));
let r2 = Number(prompt('Введите радиус второго круга'));

const circle1 = {
    radius: r1,
    getArea() {
        return 3.14159 * (this.radius ** 2);
    },
    getPerimeter() {
        return C = 2 * 3.14159 * this.radius;
    }
}

const circle2 = {
    radius: r2,
    getArea() {
        return 3.14159 * (this.radius ** 2);
    },
    getPerimeter() {
        return C = 2 * 3.14159 * this.radius;
    }
}

console.log(`Площадь первого круга ${circle1.getArea()}.`);
console.log(`Длина окружности первого круга ${circle1.getPerimeter()}.`);
console.log(`Площадь второго круга ${circle2.getArea()}.`);
console.log(`Длина окружности второго круга ${circle2.getPerimeter()}.`);
*/