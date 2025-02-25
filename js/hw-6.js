/*const firstNumber = Math.floor(Math.random() * 100) + 1;
const secondNumber = Math.floor(Math.random() * 100) + 1;
const mathAction = ['+', '-', '*', '/'];
result = join(firstNumber, mathAction, secondNumber);
alert('Попробуй решить простые арифметические задачи.');
while(true) {
    let userNumber = Number(prompt(`${firstNumber} + ${secondNumber}. Ваш ответ?`));
    if (userNumber === result) {
        console.log('Ответ верный.');
    } else {
        console.log('Ошибка.')
    }
}
*/

const firstNumber = [];
const N = 100;
 
for (let i = 0; i < N; i++) {
    firstNumber.push(i);
}

console.log(firstNumber);