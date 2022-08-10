/*Знайти та вивести довижину настипних стрінгових значень
let str ="hello world";
console.log(str.length);
let str2 ="lorem ipsum";
console.log(str2.length);
let str3 ="javascript is cool";
console.log(str3.length);*/
/*Перевести до великого регістру наступні стрінгові значення
let str ="hello world";
let str2 ="lorem ipsum";
let str3 ="javascript is cool";
console.log(str.toUpperCase());
console.log(str2.toUpperCase())
console.log(str3.toUpperCase());*/
/*Перевести до нижнього регістру настипні стрінгові значення
let str= "HELLO WORLD";
let str2 = "LOREM IPSUM";
let str3 = "JAVASCRIPT IS COOL";
console.log(str.toLowerCase());
console.log(str2.toLowerCase());
console.log(str3.toLowerCase());*/
/*Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів
let str = ' dirty string   ';
console.log(str.trim());*/
/*Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
let str = 'Ревуть, воли, як, ясла, повні';
let arr = str.split(',');
console.log(arr);*/
/*є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.
let mass = [10,8,-7,55,987,-1011,0,1050,0];
let map = mass.map(value => value.toString());
console.log(map);*/
/*створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
let nums = [11,21,3];
function sortNumbs(numbs,direction){
    if (direction==='ascending'){
        numbs.sort((num1,num2)=>num1-num2);
    }
    if (direction==='descending'){
        numbs.sort((num1,num2)=>num2-num1);
    }
}
sortNumbs(nums,'ascending');
console.log(nums);
sortNumbs(nums, 'descending');
console.log(nums);*/
/*є масив
-- відсортувати його за спаданням за monthDuration
-- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
coursesAndDurationArray.sort((duration1,duration2)=>duration2.monthDuration-duration1.monthDuration);
console.log(coursesAndDurationArray);
let filter = coursesAndDurationArray.filter(value=>value.monthDuration>5);
console.log(filter);*/
/*описати колоду карт
- знайти піковий туз
- всі шістки
- всі червоні карти
- всі буби
- всі трефи від 9 та більше
let cards = [
    {cardSuit: 'clubs', value: 'Ace', color:'black'},
    {cardSuit: 'clubs', value: 2, color:'black'},
    {cardSuit: 'clubs', value: 3, color:'black'},
    {cardSuit: 'clubs', value: 4, color:'black'},
    {cardSuit: 'clubs', value: 5, color:'black'},
    {cardSuit: 'clubs', value: 6, color:'black'},
    {cardSuit: 'clubs', value: 7, color:'black'},
    {cardSuit: 'clubs', value: 8, color:'black'},
    {cardSuit: 'clubs', value: 9, color:'black'},
    {cardSuit: 'clubs', value: 10, color:'black'},
    {cardSuit: 'clubs', value: 'Jack', color:'black'},
    {cardSuit: 'clubs', value: 'Queen', color:'black'},
    {cardSuit: 'clubs', value: 'King', color:'black'},

    {cardSuit: 'diamonds', value: 'Ace', color:'red'},
    {cardSuit: 'diamonds', value: 2, color:'red'},
    {cardSuit: 'diamonds', value: 3, color:'red'},
    {cardSuit: 'diamonds', value: 4, color:'red'},
    {cardSuit: 'diamonds', value: 5, color:'red'},
    {cardSuit: 'diamonds', value: 6, color:'red'},
    {cardSuit: 'diamonds', value: 7, color:'red'},
    {cardSuit: 'diamonds', value: 8, color:'red'},
    {cardSuit: 'diamonds', value: 9, color:'red'},
    {cardSuit: 'diamonds', value: 10, color:'red'},
    {cardSuit: 'diamonds', value: 'Jack', color:'red'},
    {cardSuit: 'diamonds', value: 'Queen', color:'red'},
    {cardSuit: 'diamonds', value: 'King', color:'red'},

    {cardSuit: 'hearts', value: 'Ace', color:'red'},
    {cardSuit: 'hearts', value: 2, color:'red'},
    {cardSuit: 'hearts', value: 3, color:'red'},
    {cardSuit: 'hearts', value: 4, color:'red'},
    {cardSuit: 'hearts', value: 5, color:'red'},
    {cardSuit: 'hearts', value: 6, color:'red'},
    {cardSuit: 'hearts', value: 7, color:'red'},
    {cardSuit: 'hearts', value: 8, color:'red'},
    {cardSuit: 'hearts', value: 9, color:'red'},
    {cardSuit: 'hearts', value: 10, color:'red'},
    {cardSuit: 'hearts', value: 'Jack', color:'red'},
    {cardSuit: 'hearts', value: 'Queen', color:'red'},
    {cardSuit: 'hearts', value: 'King', color:'red'},
    {value: 'Joker', color:'red'},

    {cardSuit: 'spades', value: 'Ace', color:'black'},
    {cardSuit: 'spades', value: 2, color:'black'},
    {cardSuit: 'spades', value: 3, color:'black'},
    {cardSuit: 'spades', value: 4, color:'black'},
    {cardSuit: 'spades', value: 5, color:'black'},
    {cardSuit: 'spades', value: 6, color:'black'},
    {cardSuit: 'spades', value: 7, color:'black'},
    {cardSuit: 'spades', value: 8, color:'black'},
    {cardSuit: 'spades', value: 9, color:'black'},
    {cardSuit: 'spades', value: 10, color:'black'},
    {cardSuit: 'spades', value: 'Jack', color:'black'},
    {cardSuit: 'spades', value: 'Queen', color:'black'},
    {cardSuit: 'spades', value: 'King', color:'black'},
    {value: 'Joker', color:'black'},
];
let ace =cards.filter(value=>(value.cardSuit==='spades' && value.value==='Ace'));
console.log(ace);
let six =cards.filter(value=>value.value===6);
console.log(six);
let red = cards.filter(value=>value.color='red');
console.log(red);
let clubs = cards.filter(value=>(value.cardSuit==='clubs'&&value.value>=9+''));
console.log(clubs);
let reduce = cards.reduce(function (accumulator,card) {
    if (card.cardSuit === 'clubs') {
        accumulator.clubs.push(card)

    }
    if (card.cardSuit ==='diamonds'){
        accumulator.diamonds.push(card);

    }
    if(card.cardSuit==='hearts'){
        accumulator.hearts.push(card);

    }
    if(card.cardSuit==='spades'){
        accumulator.spades.push(card);

    }
    return accumulator;
        },{clubs:[],diamonds:[],hearts:[],spades:[]})
console.log(reduce);*/