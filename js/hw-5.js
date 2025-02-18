//task 1
function defineMoreLess() {
    alert('Введите два числа.');
    let firstNumber = Number(prompt('Первое число?'));
    let secondNumber = Number(prompt('Второе число?'));

    if (firstNumber < secondNumber) {
        alert(`Меньшее число ${firstNumber}.`);
    } else if (firstNumber > secondNumber) {
        alert(`Меньшее число ${secondNumber}.`);
    } else {
        alert(`Числа равны - ${firstNumber}.`);
    }
}

defineMoreLess();

//task 2
function defineEvenOdd() {
    let num = Number(prompt('Введите число:'));
    
    if (num % 2 == 0) {
        alert(`Число ${num} четное.`);
    } else {
        alert(`Число ${num} нечетное.`);
    }
}

defineEvenOdd()

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
function defineAge() {
    let age = Number(prompt('Введите Ваш возраст:'));

    if (age < 0 || age === null) {
        alert('Вы ввели неправильное значение.');
    } else if (age > 0 && age < 13) {
        alert('Привет, друг!');
    } else {
        alert('Добро пожаловать!');
    }
}

defineAge();

//task 5
function defineCorrectNumber() {
    alert('Введите два числа.');
    let firstNumber = prompt('Первое число?');
    let secondNumber = prompt('Второе число?');

    if (isNaN(firstNumber) || isNaN(secondNumber)) {
        alert('Одно или оба значения не являются числом.');
    } else {
        console.log(firstNumber * secondNumber);
    }
}

defineCorrectNumber();

//task 6
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
        return Mаth.PI * (this.radius ** 2);
    },
    getPerimeter() {
        return C = 2 * Mаth.PI * this.radius;
    }
}

const circle2 = {
    radius: r2,
    getArea() {
        return Mаth.PI * (this.radius ** 2);
    },
    getPerimeter() {
        return C = 2 * Mаth.PI * this.radius;
    }
}

console.log(circle1.getArea());
console.log(circle1.getPerimeter());
console.log(circle2.getArea());
console.log(circle2.getPerimeter());