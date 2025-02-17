//task 1
let i = 0;
while (i < 2) {
    console.log('Привет!');
    i++;
}

//task 2
let numb = 0;
do {
    console.log(numb+1);
    numb++;
    } while(numb < 5);

//task 3
let x = 0;
while (x <= 22) {
    if (x < 7) {
        x++;
    continue;
    }
    console.log(x);
    x++;
}

//task 4
let obj = {
    "Коля": 200,
    "Вася": 300,
    "Петя": 400
}
for (let key in obj) {
    console.log(`${key} — зарплата ${obj[key]} долларов.`);
    }

//task 5
let n = 1000;
let num = 0;
do {
    n /= 2;
    num += 1;
    } while (n >= 50);
console.log(n);
console.log(num);

//task 6
for (let friday = Number(prompt('Введите число первой пятницы месяца (от 1 до 7)')); friday <= 31; friday+=7) {
    let day = {
        "Пятница": friday,
        "Суббота": friday+1,
        "Воскресенье": friday+2,
        "Понедельник": friday+3,
        "Вторник": friday+4,
        "Среда": friday+5,
        "Четверг": friday+6,
    }
    for (let key in day) {
        console.log(`Сегодня ${["Пятница"]}, ${day["Пятница"]}-е число. Необходимо подготовить отчет.`);
        }
    }