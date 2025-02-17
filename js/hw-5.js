//function defineMoreLess() {
    alert('Введите два числа.');
    let firstNumber = Number(prompt('Первое число?'));
    let secondNumber = Number(prompt('Второе число?'));
    if (firstNumber < secondNumber) {
        alert(`Меньшее число ${firstNumber}.`);
    } else if (firstNumber > secondNumber) {
        alert(`Меньшее число ${secondNumber}.`);
    } else {
        alert('Числа равны.');
    }
//}