//task 1
function defineMoreLess(firstNumber, secondNumber) {
    alert('Введите два числа.');
    let firstNumber = Number(prompt('Первое число?'));
    let secondNumber = Number(prompt('Второе число?'));
    
    if (firstNumber < secondNumber) {
        return firstNumber;
    } else if (firstNumber > secondNumber) {
        return secondNumber;
    } else {
        return firstNumber;
    }
}

console.log(defineMoreLess(firstNumber, secondNumber));

//task 2
function isEven(num) {
    let num = Number(prompt('Введите число:'));
    return num % 2 === 0;
}

if (isEven(num) == true) {
    console.log(`Число ${num} четное.`);
} else {
    console.log(`Число ${num} нечетное.`);
}

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
function defineAge(age) {
    let age = prompt('Введите Ваш возраст:');

    if (age < 0 || isNaN(age)) {
        return 0;
    } else if (age >= 0 && age < 13) {
        return 1;
    } else {
        return 2;
    }
}

switch (defineAge(age)) {
    case 1:
       console.log('Привет, друг!');
       break;
    case 2:
       console.log('Добро пожаловать!');
       break;
    default:
       console.log('Вы ввели неправильное значение.');
 }

//task 5
function defineCorrectNumber() {
    alert('Введите два числа.');
    let firstNumber = Number(prompt('Первое число?'));
    let secondNumber = Number(prompt('Второе число?'));
    
    if (isNaN(firstNumber) || isNaN(secondNumber)) {
        console.log('Одно или оба значения не являются числом.');
    } else {
        console.log(firstNumber * secondNumber);
    }
}

/*//task 6
function defineCubeNumber() {
    let num = prompt('Введите число.');
    
    if (isNaN(num)) {
        alert('Переданный параметр не является числом');
    } else {
        let numCube = Math.pow(num, 3);
        console.log(`${num} в кубе равняется ${numCube}.`);
    }
}

defineCubeNumber();

//task 7
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