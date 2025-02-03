//task 1
let password = 'passw';
let userPass = prompt('Введите пароль');
if (password === userPass) {
    console.log("Пароль введен верно");
} else {
    console.log("Пароль введен неправильно");
}

//task 2
let c = Number(prompt('Введите число'));
if (c > 0 && c < 10) {
    console.log('Верно');
} else {
    console.log('Неверно');
}

//task 3
let d = Number(prompt('Введите первое число'));
let e = Number(prompt('Введите второе число'));
if (d > 100 || e > 100) {
    console.log('Верно');
} else {
    console.log('Неверно');
}

//task 4
let a = '2';
let b = '3';
// Код выше изменять менять нельзя. Чтобы решить задачу исправьте код ниже:
alert(Number(a) + Number(b));

//task 5
let monthNumber = Number(prompt("Введите номер месяца"));
switch (monthNumber) {
    case 1:
        console.log('Зима');
    break;
    case 2:
        console.log('Зима');
    break;
    case 3:
        console.log('Весна');
    break;
    case 4:
        console.log('Весна');
    break;
    case 5:
        console.log('Весна');
    break;
    case 6:
        console.log('Лето');
    break;
    case 7:
        console.log('Лето');
    break;
    case 8:
        console.log('Лето');
    break;
    case 9:
        console.log('Осень');
    break;
    case 10:
        console.log('Осень');
    break;
    case 11:
        console.log('Осень');
    break;
    case 12:
        console.log('Зима');
    break;
    default:
        console.log('Вы ввели что-то не то');
}

//taskadd
let num = prompt('Пожалуйста, введите любое число');
if (Number(num) = NaN) {
    console.log('Вы ввели что-то не то');
} else {
    if ((num % 2) === 0) {
        console.log ('Число четное');
        } else {
            console.log ('Число нечетное');
        }
    }