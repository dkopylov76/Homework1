//Игра "Угадай число"
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

//Игра "Простая арифметика"
function gameSimpleMath() {
    const firstNumber = Math.floor(Math.random() * 100) + 1;
    const secondNumber = Math.floor(Math.random() * 100) + 1;
    const mathActions = ['+', '-', '*', '/'];
    const mathAction = mathActions[Math.floor(Math.random() * mathActions.length)];
    let result;

    switch (mathAction) {
        case '+':
            userAnswer = +prompt(`Найдите сумму ${firstNumber} и ${secondNumber}. Ваш ответ?`);
            result = firstNumber + secondNumber;
            if (userAnswer === result) {
                alert('Верно!');
                break;
            } else {
                alert('Ошибка!');
                break;
            }
        case '-':
            userAnswer = +prompt(`Найдите разность ${firstNumber} и ${secondNumber}. Отнимите от большего числа меньшее. Ваш ответ?`);
            result = Math.abs(firstNumber - secondNumber);
            if (userAnswer === result) {
                alert('Верно!');
                break;
            } else {
                alert('Ошибка!');
                break;
            }
        case '*':
            userAnswer = +prompt(`Найдите произведение ${firstNumber} и ${secondNumber}. Ваш ответ?`);
            result = firstNumber * secondNumber;
            if (userAnswer === result) {
                alert('Верно!');
                break;
            } else {
                alert('Ошибка!');
                break;
            }
        case '/':
            userAnswer = +prompt(`Найдите частное ${firstNumber} и ${secondNumber}. Разделите большее число на меньшее. Ответ округлите до целых. Ваш ответ?`);
            if (firstNumber > secondNumber) {
                result = Math.round(firstNumber / secondNumber);
            } else {
                result = Math.round(secondNumber / firstNumber);
            }
            if (userAnswer === result) {
                alert('Верно!');
                break;
            } else {
                alert('Ошибка!');
                break;
            }
        }
    }

//Игра "Переверни текст"
function gameTextFlipOver() {
    let str = prompt('Введите текст, а я переверну его!');
    alert(str.split('').reverse().join(''));
}

//Игра "Викторина"
function gameQuiz() {
    const quiz = [
        {
            question: `Какого цвета небо?`,
            options: [`1. Красный`, `2. Голубой`, `3. Зеленый`],
            correctAnswer: 2
        },
        {
            question: `Сколько дней в неделе?`,
            options: [`1. Шесть`, `2. Семь`, `3. Восемь`],
            correctAnswer: 2
        },
        {
            question: `Сколько у человека пальцев на одной руке?`,
            options: [`1. Четыре`, `2. Пять`, `3. Шесть`],
            correctAnswer: 2
        }
    ];

    let answer = 0;

    for (let answer = 0; answer < quiz.length; answer++) {
        let qiuzQuestion = +prompt(`${quiz[i].question}\n Выберите правильный ответ.\n${quiz[i].options}`);
        if (qiuzQuestion == quiz[1].correctAnswer) {
            answer++;
            alert('Вы ответили верно!');
        } else {
            alert('Вы ошиблись!');
        }
    }

    alert(`Вы ответили верно на ${answer} вопросов.`)
}