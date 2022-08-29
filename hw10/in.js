function first(awake){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            if(awake){
              resolve("I awake");

            }else{
                reject("i need more time");
            }
        },300)
    })
}
function second(breakfast){
    return new Promise((resolve, reject) => {
      setTimeout(() =>{
          if(breakfast){
              resolve("That was very good")
          }else {
              reject("I dont have a time")
          }
      },1000)
    })
}
function  third(shower){
    return new Promise((resolve, reject) => {
        setTimeout(() =>{
            if(shower){
                resolve("Im clean")
            }else {
                reject("The water was turned off again")
            }
        },500)
    })
}
function fourth(teeth){
    return new Promise((resolve, reject) => {
        setTimeout(() =>{
            if(teeth){
                resolve("My teeth now is clean")
            }else {
                reject("Where is my bubblegum")
            }
        },450)
    })
}
function fifth(dress){
    return new Promise((resolve, reject) => {
        setTimeout(() =>{
            if(dress){
                resolve("Now i look handsome")
            }else{
                reject("I need more time");
            }
        },750)
    })
}
function six(bus){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            if(bus){
                resolve("Waiting for the bus ")
            }else{
                reject("Where is he?")
            }
        },3000)
    })
}
function seven(dinner){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            if(dinner){
                resolve("Dinner time")
            }else{
                reject("I dont have a time")
            }
        },1000)
    })
}
function eight(work){
    return new Promise((resolve, reject) => {
      setTimeout(()=>{
          if(work){
              resolve("Im working")
          }else{
              reject("I want go home")
          }
      },5000)
    })
}
function nine(home){
    return new Promise((resolve, reject) => {
      setTimeout(()=>{
          if(home){
              resolve("Im going home")
          }else{
              reject("I need finish this job")
          }
      },2000)
    })
}
function ten(bed){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            if(bed){
                resolve("I go to the bed");
            }else{
                reject("I cant fall asleep")
            }
        },100)
    })
}
first(true)
    .then(a =>{
        console.log(a);
        return second(a);
    })
    .then(b =>{
        console.log(b);
        return third(b);
    })
    .then(c =>{
        console.log(c);
        return fourth(c);
    })
    .then(d =>{
        console.log(d);
        return fifth(d);
    })
    .then(e=>{
        console.log(e);
        return six(e);
    })
    .then(f=>{
        console.log(f);
        return seven(f);
    })
    .then(g=>{
        console.log(g);
        return eight(g);
    })
    .then(i=>{
        console.log(i);
        return nine(i);
    })
    .then(j =>{
        console.log(j);
        return ten(j);
    })
    .then(k =>{
        console.log(k);
    })
async function timetable(awake){
    const a = await first(awake);
    console.log(a);

    const b = await second(a);
    console.log(b);

    const c = await third(b);
    console.log(c);

    const d = await fourth(c);
    console.log(d);

    const e = await fifth(d);
    console.log(e);

    const f = await six(e);
    console.log(f);

    const g = await seven(f);
    console.log(g);

    const i = await eight(g);
    console.log(i);

    const j = await nine(i);
    console.log(j);

    const k = await ten(j);
    console.log(k);

}
timetable(true);



