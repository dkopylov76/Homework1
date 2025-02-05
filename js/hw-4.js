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
    console.log(n);
    console.log(num);
    } while (n >= 50);