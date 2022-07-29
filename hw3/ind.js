let x = +prompt("Input number");
if(x===0){
    console.log("Wrong");
}else if(x<0 || x>0){
    console.log("Right")
}

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

let x;
if (x===0 || x===false ||x===NaN || x===''|| x===undefined ){
  x="default";
}
