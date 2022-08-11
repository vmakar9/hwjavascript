/*Напишите функцию cutString(str, n), которая делит строку на подстроки, состоящие из n символов.
function cutString(str,n) {
    let res = [];
    for(let i =0;i<str.length;i+=n){
        res.push(str.substr(i,n));
    }
    return res;
}
document.writeln(cutString('наслаждение',3));*/
/*Напишіть функцію delete_characters(str, length), яка повертає підрядок, що складається із зазначеної кількості символів.
let str = 'Каждый охотник желает знать';
function delete_character(str,length){
    if((str.constructor === String)&& (length>0)){
        return str.slice(0,length);
    }
}
document.writeln(delete_character(str, 7));*/
/*Напишіть функцію insert_dash(str), яка приймає рядок str як аргумент і вставляє тире (-) між словами. При цьому всі символи рядка необхідно перевести у верхній регістр.
let str = "HTML JavaScript PHP";
function insert_dash(str){
    return str.replaceAll(" ","-").toUpperCase();
}
console.log(insert_dash(str));*/
/*Напишіть функцію, яка приймає рядок як аргумент і перетворює регістр першого символу рядка з нижнього регістру у верхній.
function st(str){
    let first = str.charAt(0);
    return str.replace(first,first.toUpperCase());
}
let str = 'каждый охотник желает знать';
console.log(st(str));*/
/*- Дано список імен.
    let n1 = 'Harry..Potter'
let n2 = 'Ron---Whisley'
let n3 = 'Hermione__Granger'
Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
let n1 = 'Harry Potter'
let n2 = 'Ron Whisley'
let n3 = 'Hermione Granger'
let n1 = 'Harry..Potter';
let n2 = 'Ron---Whisley';
let n3 = 'Hermione__Granger';
function normalName(str){
     return str.replaceAll(/[._-]/g,' ');
}
console.log(normalName(n1));
console.log(normalName(n2));
console.log(normalName(n3));
*/
/*створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100.
function  random_array(n){
     let array = []
     for(let i =0;i<n;i++){
          array.push(Math.floor(Math.random()*100+1));
     }
     return array;
}
console.log(random_array(10));*/
/*створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. Відсортувати його за допомоги sort
function  sort_random_array(n){
     let array = []
     for(let i =0;i<n;i++){
          array.push(Math.floor(Math.random()*100+1));
     }
    console.log(array);
    console.log(array.sort((a, b) => a - b));
}
console.log(sort_random_array(10));*/
/*створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. відфільтрувати  його за допомоги filter, залишивши тільки парні числа (без 0!)
function  filter_random_array(n){
    let array = []
    for(let i =0;i<n;i++){
        array.push(Math.floor(Math.random()*100+1));
    }
    console.log(array);
    console.log(array.filter((value) => value%2===0));
}
console.log(filter_random_array(10));*/
/*Напишіть функцію capitalize(str), яка повертає рядок, у якому кожне слово починається з великої літери.
function  capitalize(str){
    return str.replace(/(^|\s)\S/g, function(a) {return a.toUpperCase()})
}
let str = 'Каждый охотник желает знать';
console.log(capitalize(str));*/
/*Створити функцію-валідатор для адрес електронної пошти. Перевірка повинна включати в себе :данні до знака равлика(@), наявність равлика, крапку яка знаходиться не меньше ніж на 2 символ далі після равлика, функція не чутлива до регістру (some@email.com,SOME@EMAIL.COM,some@EMAIL.com, і тд - однакові значення)
Протестувати на значеннях
someemail@gmail.com
someeMAIL@gmail.com
someeMAIL@i.ua
some.email@gmail.com
let str1="someemail@gmail.com";
let str2 ="someeMAIL@gmail.com";
let str3 ="someeMAIL@i.ua";
let str4 ="meeMAIL@i.ua";
let str5 ="some.email@gmail.com"
function validator(str){
   let indexof = str.indexOf("@");
   let infotorav=str.substring(0,indexof);
   let infoafterrav=str.substring(indexof,1);
   if (infotorav.indexOf(".")){
       console.log("Wrong email");
   }

}
console.log(validator(str4));*/
/*є масив відсортувати його в спадаючому порядку за кількістю елементів в полі modules
let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];
coursesArray.sort((a,b)=>b.modules.length-a.modules.length);
console.log(coursesArray);*/
/*Напишіть функцію count(str, stringsearch), яка повертає кількість символів stringsearch у рядку str.
let symb = "о", str = "Астрономия это наука о небесных объектах";
function  count(str, symb){
    let count , index=0;
    for ( count = -1, index = 0; index != -1; count++, index = str.indexOf(symb, index + 1));
    return count;
}
console.log(count(str, symb));*/
/*Напишіть функцію cutString(str, n), яка видаляє зайві слова з рядка str, залишивши у ній n слів.
let str = "Сила тяжести приложена к центру масс тела";
function cutString(str,n){
    return str.split(" ").splice(0, n).join(" ");
}
console.log(cutString(str,5));*/
/*-стоврити масив книжок (назва, кількість сторінок, автори , жанри).
-знайти наібльшу книжку.
- знайти книжку/ки з найбільшою кількістю жанрів
- знайти книжку/ки з найдовшою назвою
- знайти книжку/ки які писали 2 автори
- знайти книжку/ки які писав 1 автор
- вісортувати книжки по кількості сторінок по зростанню*/
let books = [
    {name: 'Some Bkvnook', pages: 200, autors: ['somename', 'name', 'name', 'name'], ganre: ['aifusdgf']},
    {name: 'Some Bookd', pages: 300, autors: ['somename'], ganre: ['aifusdgf','deqsd']},
    {name: 'Some Boodsk', pages: 400, autors: ['somename'], ganre: ['aifusdgf','bgrgv','dfqwd']},
    {name: 'Some Bookldgdijku;', pages: 500, autors: ['somename', 'name', 'name'], ganre: ['aifusdgf']},
    {name: 'Some Bosdfk', pages: 100, autors: ['somename', 'name',], ganre: ['aifusdgf','asdwe','frgq','dfqwe']},
    {name: 'Some Boolsdfkmn', pages: 250, autors: ['somename', 'name'], ganre: ['aifusdgf','fbtrsd']}
]
let max =books[0];
let maxpageBook = books.forEach(book=>{
    if(book.pages>max.pages){
        max = book;
    }
});
console.log(max);
let maxganreBook = books.forEach(book=>{
    if(book.ganre.length>max.ganre.length){
        max = book;
    }
});
console.log(max);
let maxnameBook = books.forEach(book=>{
    if(book.name.length>max.name.length){
        max = book;
    }
})
console.log(max);
let twoautorsBook = books.forEach(book=>{
    if(book.autors.length===2 ){
        max= book;
    }
})
console.log(max);
let oneautorsBook =books.forEach(book=>{
    if(book.autors.length===1){
        max =book;
    }
})
console.log(max);
books.sort((a,b)=>a.pages-b.pages);
console.log(books);