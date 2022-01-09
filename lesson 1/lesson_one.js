// task 1
// 5)
let c = 2;
console.log(3 + ((28*c)/(c**2-49)+(c-7/c+7))*c/(c+7)-c/(c-7));
// 6)
let x = 3;
console.log(4.5 + (25*x**2 - 4**-1)/(5*x) - 2**-1 - 3*x);
// 8)
let a = 5;
console.log((2*a - 2)/(a - 2) + 1 - ((8*a)/(a**2 - 4) + (a - 2)/(a + 2))* a/(a + 2));

// task 2
let cattetA = +prompt("Введите прилежащий катет прямоугольного треугольника");
let cattetB = +prompt("Введите противолежащий катет прямоугольного треугольника");

console.log("Площадь треугольника: " + 1/2 * (cattetA * cattetB));
let gypotenuse = Math.sqrt(cattetA**2 + cattetB**2);
console.log("Гипотенуза равна: " + gypotenuse);
let perimeter = console.log("Периметр треугольника: " + (cattetA + cattetB + gypotenuse));
// task 3
let numberOne = +prompt("Введите первое число");
let numberTwo = +prompt("Введите второе число");
let numberThree = +prompt("Введите третье число");

if (numberOne > numberTwo && numberOne > numberThree){
    console.log(numberOne);
} else if(numberTwo > numberOne && numberTwo > numberThree) {
    console.log(numberTwo);
} else if(numberThree > numberOne && numberThree > numberTwo) {
    console.log(numberThree);
}
// task 4
let evenNumber = +prompt("Введите число");

if(evenNumber % 2 == 0){
    console.log("Ваше число является четным!");
} else {
    console.log("Вы ввели нечетное число");
}