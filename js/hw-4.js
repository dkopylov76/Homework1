//task 1
let i = 0;
while (i < 2) {
    console.log('Привет!');
    i++;
}

//task 2
let num = 0;
do {
    console.log(num+1);
    num++;
    } while(num < 5);

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