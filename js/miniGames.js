/*//Игра "Угадай число"
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
*/

//Игра "Простая арифметика"
function gameSimpleMath() {
    const firstNumber = Math.floor(Math.random() * 100) + 1;
    const secondNumber = Math.floor(Math.random() * 100) + 1;
    const mathActions = ['+', '-', '*'];
    const mathAction = mathActions[Math.floor(Math.random() * mathActions.length)];
    let result;

    console.log(firstNumber);
    console.log(secondNumber);
    console.log(mathAction);

    switch (mathAction) {
        case '+':
            userAnswer = +prompt(`Найдите сумму ${firstNumber} и ${secondNumber}. Ваш ответ?`);
            result = firstNumber + secondNumber;
            if (userAnswer === result) {
                alert('Верно!');
                break;
            } else {
                alert('Ошибка!')
            }
        case '-':
            userAnswer = +prompt(`Найдите разность ${firstNumber} и ${secondNumber}. Ваш ответ?`);
            result = Math.abs(firstNumber - secondNumber);
            if (userAnswer === result) {
                alert('Верно!');
                break;
            } else {
                alert('Ошибка!')
            }
        case '*':
            userAnswer = +prompt(`Найдите произведение ${firstNumber} и ${secondNumber}. Ваш ответ?`);
            result = Math.abs(firstNumber - secondNumber);
            if (userAnswer === result) {
                alert('Верно!');
                break;
            } else {
                alert('Ошибка!')
            }
        }
    }
    
    /*alert('Попробуй решить простые арифметические задачи.');
    while(true) {
        let userNumber = Number(prompt(`${firstNumber} + ${secondNumber}. Ваш ответ?`));
        if (userNumber === result) {
            console.log('Ответ верный.');
        } else {
            console.log('Ошибка.')
        }
    }*/