let number = +prompt("Введіть перше число");
let number2 =  +prompt("Введіть друге число");
let number3 =  +prompt("Введіть третє число");
let total = 0;

console.log("Введене перше число : " + number);
console.log("Введене друге число : " + number2);
console.log("Введене третє число : " + number3);

if (number < 0) {
    total += number; 
}

if (number2 < 0){
    total += number2;
}

if (number3 < 0){
    total += number3;
}

if (total < 0) {
    alert("Правильні числа. Результат = " + total)
}
else  {
    alert("Не правильні числа. Спробуйте знову")
}
console.log(total);