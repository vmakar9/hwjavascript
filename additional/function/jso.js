/*створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
let min =(a,b,c)=>{
    if( a<b && a<c){
        return a;
    }
    if(b<a && b<c){
        return b;
    }
    if(c<a && c<b){
        return c;
    }
}
console.log(min(-1, 6, -2));*/
/*створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
let max = (a,b,c)=>{
    if(a>b && a>c){
        return a;
    }
    if(b>a && b>c){
        return b;
    }
    if(c>a && c>b){
        return c;
    }
}
console.log(max(20, 2, 24));*/
/*створити функцію яка повертає найбільше число з масиву
let mass =[7,0,-100,3.14,14,192];
let maxmass =(array)=>{
    return Math.max.apply(null,array);
}
console.log(maxmass(mass));*/
/*створити функцію яка повертає найменьше число з масиву
let mass =[7,0,-100,3.14,14,192];
let minmass=(array)=>{
    return Math.min.apply(null,array);
}
console.log(minmass(mass));*/
/*створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
let mass =[15,15,15];
let average = (array)=>{
    let sum =0;
    for(const arr of array){
        sum += arr;
    }
    return sum;
}
console.log(average(mass));*/
/*Дано натуральное число n. Выведите все числа от 1 до n.
let fun=(n)=>{
   for(let i=1;i<n;i++){
       console.log(i);
   }
   return n;
}
console.log(fun(11));*/
/*функція Приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"
let mass =[1,7,3,2,5,9,10];
let fon=(array,i)=>{
    let temp = array[i];
    array[i] = array[i+1];
    array[i+1]= temp;
    console.log(array);
}
fon(mass,1);*/
/*Сворити функцію яка буде переносити елементи з значенням 0 у кінець маисву. Зберігаючи при цьому порядок не нульових значень.*/
let pon=(array)=>{
        for (let i = 0;i<=1 ;i++) {
            if (!array[i]) {
                let temp = array[i];
                array[i] = array[i + 1];
                array[i + 1] = temp;
                return array;
            }

        }
}
let average = [1,0,3,0];
console.log(pon(average));