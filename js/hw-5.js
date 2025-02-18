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
    let num;
    return Math.pow(num, 2);
}

let numSquare = defineSquareReturn(Number(prompt('Введите число:')));
console.log(`Квадрат равен ${numSquare}.`);