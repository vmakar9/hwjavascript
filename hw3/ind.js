/* Є змінна х, якій ви надаєте довільне числове значення.
    Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3*/
let x = +prompt("Input number");
if(x===0){
    console.log("Wrong");
}else {
    console.log("Right")
}
/*Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
(в першу, другу, третю или четверту частину години).*/
let time = +prompt("Input time");
if(time>=0 && time <=15){
    console.log("first");
}
if(time>=16 && time<=30){
    console.log("second");
}
if(time>=31 && time<=45){
    console.log("third");
}
if(time>=46 && time<=59){
    console.log("fourth");
}
/* У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).*/
let day = +prompt("Input day");
if(day>=1 && day<=10){
    console.log("first half");
}
if(day>=11 && day<=20){
    console.log("second half");
}
if(day>=21 && day<=31){
    console.log("third half");
}
/*Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).*/
let numbday = +prompt("Input number of day");
switch (numbday){
    case 1: console.log("Monday","Practise");
    break;
    case 2: console.log("Tuesday", "Lecture");
    break;
    case 3: console.log("Wednesday", "Practise");
    break;
    case 4: console.log("Thursday", "Lecture");
    break;
    case 5: console.log("Friday", "Relax");
    break;
    case 6: console.log("Saturday", "English");
    break;
    case 7: console.log("Sunday", "Relax");
}
 /*Користувач вводить або має два числа.
    Потрібно знайти та вивести максимальне число з тих двох .
    Також потрібно врахувати коли введені рівні числа.*/

let a = +prompt("Input fist number");
let b =+prompt("Input second number");
if(a>b){
    console.log(a);
}
if(a<b){
    console.log(b);
}
 if(a===b){
    console.log("Numbers are the same");
}
/*є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
    за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної х являється falsy (хибноподыбне, тобто кастується до false)*/
let x;
if (x===0 || x===false ||x===NaN || x===''|| x===undefined ){
  x="default";
}
