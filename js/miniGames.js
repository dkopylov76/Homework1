function gameHiddenNumber() {
    const hiddenNumber = Math.floor(Math.random() * 100) + 1;
    alert('Попробуйте угадать число от 1 до 100.');
    while(true) {
        let userNumber = Number(prompt('Ваш вариант?'));
        if (userNumber === hiddenNumber) {
            alert(`Вы угадали число ${hiddenNumber}!`);
            break;
        } else if (userNumber < hiddenNumber) {
            alert('Загаданное число больше. Попробуйте еще раз.')
        } else {
            alert('Загаданное число меньше. Попробуйте еще раз.')
        }
    }
}

function gameSimpleMath() {
    const firstNumber = Math.floor(Math.random() * 100) + 1;
    const secondNumber = Math.floor(Math.random() * 100) + 1;
    result = firstNumber + secondNumber;
    alert('Попробуй решить простые арифметические задачи.');
    while(true) {
        let userNumber = Number(prompt(`${firstNumber} + ${secondNumber}. Ваш ответ?`));
        if (userNumber === result) {
            console.log('Ответ верный.');
        } else {
            console.log('Ошибка.')
        }
    }
}