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

    if (age < 0 || age == null) {
        alert('Вы ввели неправильное значение.');
    } else if (age >= 0 && age < 13) {
        alert('Привет, друг!');
    } else {
        alert('Добро пожаловать!');
    }
}

defineAge();