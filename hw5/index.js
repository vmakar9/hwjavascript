/*створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
function trinagle(a,b){
    return 0.5*a*b;
}
console.log(trinagle(10, 5));*/
/*створити функцію яка обчислює та повертає площу кола з радіусом r
function circle(r){
    return Math.round(Math.PI * Math.pow(r,2));
}
console.log(circle(3));*/
/*створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
function cil(h,r){
    return Math.round(2*Math.PI*r*h);
}
console.log(cil(3, 4));*/
/*створити функцію яка приймає масив та виводить кожен його елемент
let mass=["string",1,3.14,"sus",'yup',true];
function outputArray(array) {
    for (const arrayElement of array) {
        console.log(arrayElement);
    }
}
outputArray(mass);*/
/*створити функцію яка створює параграф з текстом. Текст задати через аргумент
function paragraph(text){
    document.write(`<p>${text}</p>`);
}
paragraph("text");*/
/*створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
function uli(argument){
    document.write(`<ul>`)
    for(let i=0;i<=3;i++) {
        document.write(`<li>${argument}</li>`);
    }
    document.write(`</ul>`)
}
uli("база")*/
/*створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
function uli2(text,countli){
    document.write(`<ul>`)
    for(let i=0;i<countli;i++){
        document.write(`<li>${text}</li>`)
    }
    document.write(`</ul>`)
}
uli2("База",5)*/
/*створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
let mass =["Ruy ga Gatoku",40.50,true];
function list(array){
    document.write(`<ol>`)
    for (const arrayElement of array) {
        document.write(`<li>${arrayElement}</li>`)
    }
    document.write(`</ol>`)
}
list(mass);*/
/*створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
let mass=[
    {
        id:1,
        name:"Vlad",
        age:20
    },
    {
      id:2,
      name:"Dimon",
      age:34
    },
    {
        id:3,
        name:"Cheburek",
        age:12
    }
]
function fields(array){
    for (const arrayElement of array) {
        for(const field in arrayElement){
            document.write(`<div>${field}</div>`)
        }

        }
    }
fields(mass);
*/
/*створити функцію яка повертає найменьше число з масиву
let mass=[31,21,41];
function min(array){
    return Math.min.apply(null,array);
}
console.log(min(mass));*/
/*створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13*/
let mass =[4,5,1,100];
function average(array){
    let sum =0;
    for (const arrayElement of array) {
        sum +=arrayElement;
    }
    return sum;
}
console.log(average(mass));
