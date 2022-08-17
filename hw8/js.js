/*Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
створити пустий масив, наповнити його 10 об'єктами new User(....)
function User(id,name,surname,email,phone){
    this.id = id;
    this.name = name;
    this.surname =surname;
    this.email = email;
    this.phone = phone;
}
let user0 = new User(9,"vasyl","qwe","ghitjeknd@gmail.com",2112345);
let user1 = new User(8,"max","dfewq","bgffewe@gmail.com",89741928);
let user2 = new User(7,"kokos","bmkrdqe","nghdwerq@gmail.com",981719827389);
let user3 = new User(6,"petya","bgkniuhq","vbnjkgqwesdx231@gmail.com",1902737681312);
let user4 = new User(5, "nick","uifreisad","sadwqeac@gmail.com",213125446);
let user5 = new User(4,"kolya","bgfdsfqwe","jfkhur23198@gmail.com",1989787123);
let user6 = new User(3,"vfgrthas","frefqwed","bgfdwq657@gmail.com",987654321);
let user7 = new User(2,"john","vsdfw","bmgkofje@gmail.com",123456789);
let user8 = new User(1,"lin","ifgiewr","fgjhgje@gmail.com",456787654);
let user9 = new User(0,"min","qdqwdad","htyfsqw@gmail.com",123445623);
let arrayUser=[user0,user1,user2,user3,user4,user5,user6,user7,user8,user9];
Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
console.log(arrayUser.filter(user=>user.id%2===0));
Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
console.log(arrayUser.sort((a,b)=>a.id-b.id));*/
/*створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
створити пустий масив, наповнити його 10 об'єктами Client
class Client{
    constructor(id,name,surname,email,phone,order) {
        this.id =id;
        this.name =name;
        this.surname=surname;
        this.email = email;
        this.phone = phone;
        this.order = order;
    }
}
let user0 = new Client(9,"vasyl","qwe","ghitjeknd@gmail.com",2112345,["juice","milk","cola"]);
let user1 = new Client(8,"max","dfewq","bgffewe@gmail.com",89741928,["milk"]);
let user2 = new Client(7,"kokos","bmkrdqe","nghdwerq@gmail.com",981719827389,["water"]);
let user3 = new Client(6,"petya","bgkniuhq","vbnjkgqwesdx231@gmail.com",1902737681312,["watermelon","banana","orange","strawberry","chery"]);
let user4 = new Client(5, "nick","uifreisad","sadwqeac@gmail.com",213125446,["juice","chocolate"]);
let user5 = new Client(4,"kolya","bgfdsfqwe","jfkhur23198@gmail.com",1989787123,["chocolate bar","soda","gum"]);
let user6 = new Client(3,"vfgrthas","frefqwed","bgfdwq657@gmail.com",987654321,["energy bar","energy drink"]);
let user7 = new Client(2,"john","vsdfw","bmgkofje@gmail.com",123456789,["milkshake","strawberry","banana"]);
let user8 = new Client(1,"lin","ifgiewr","fgjhgje@gmail.com",456787654,["milk","fish"]);
let user9 = new Client(0,"min","qdqwdad","htyfsqw@gmail.com",123445623,["watermelon","banana","orange","grape","apple","chery"]);
let arrClient =[user0,user1,user2,user3,user4,user5,user6,user7,user8,user9];*/
/*Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
console.log(arrClient.sort((a,b)=>a.order.length-b.order.length));*/
/*- Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
-- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
-- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
-- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
-- changeYear (newValue) - змінює рік випуску на значення newValue
-- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
function Car(model,producer,year,maxspeed,volume){
    this.model = model;
    this.producer = producer;
    this.year = year;
    this.maxspeed =maxspeed;
    this.volume= volume;
    this.drive =function (){
        console.log(`їдемо зі швидкістю ${this.maxspeed} на годину`)
    }
    this.info =function (){
        console.log(`model-${this.model},producer-${this.producer},year-${this.year},volume-${this.volume}`)
    }
    this.increaseSpeed=function (newSpeed){
        this.maxspeed = newSpeed;
    }
    this.changeYear = function (newYear){
        this.year = newYear;
    }
    this.addDriver = function (driver){
        this.addDriver = driver;
    }
}
let car1= new Car("Tesla Model 3","Tesla Inc",2019,180,4)
console.log(car1);
car1.drive();
car1.info();
car1.changeYear(2020);
car1.addDriver("Ilon");
car1.increaseSpeed(220);
console.log(car1);*/
/*(Tе, тільки через клас)
Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
-- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
-- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
-- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
-- changeYear (newValue) - змінює рік випуску на значення newValue
-- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
class Car{
    constructor(model,producer,year,maxspeed,volume) {
        this.model = model;
        this.producer = producer;
        this.year = year;
        this.maxspeed =maxspeed;
        this.volume= volume;
        this.drive =function (){
            console.log(`їдемо зі швидкістю ${this.maxspeed} на годину`)
        }
        this.info =function (){
            console.log(`model-${this.model},producer-${this.producer},year-${this.year},volume-${this.volume}`)
        }
        this.increaseSpeed=function (newSpeed){
            this.maxspeed = newSpeed;
        }
        this.changeYear = function (newYear){
            this.year = newYear;
        }
        this.addDriver = function (driver){
            this.addDriver = driver;

        }
    }
}
let car1= new Car("Tesla Model 3","Tesla Inc",2019,180,4)
console.log(car1);
car1.drive();
car1.info();
car1.changeYear(2020);
car1.addDriver("Ilon");
car1.increaseSpeed(220);
console.log(car1);*/
/*створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
За допомоги циклу знайти яка попелюшка повинна бути з принцом.
Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку*/
class Cinderella {
    constructor(name, age, size) {
        this.name = name;
        this.age = age;
        this.size = size;
    }
}
class Prince{
    constructor(name,age,size) {
        this.name =name;
        this.age =age;
        this.size =size;
    }
}
let arr = [
    new Cinderella('Vika',21,38),
    new Cinderella('Tanya',20,40),
    new Cinderella('Ira',21,37),
    new Cinderella('Katya',19,38),
    new Cinderella('Zosia',22,40),
    new Cinderella('Nastya',23,41),
    new Cinderella('Oksana',21,39),
    new Cinderella('Olya',24,40),
    new Cinderella('Anya',22,42),
    new Cinderella('Masha',21,36)
]
let prince = new Prince("vasyl",25,39)
for(const girl of arr){
    if(prince.size===girl.size){
        console.log(`Cinderella name is ${girl.name}`);
    }
}
console.log(arr.find(value => value.size===prince.size));