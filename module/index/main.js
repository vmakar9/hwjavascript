/*отримати масив об'єктів з endpoint`а https://jsonplaceholder.typicode.com/users*/
/*Вивести id,name всіх user в index.html. Окремий блок для кожного user.
3 Додати кожному блоку кнопку/посилання , при кліку на яку відбувається перехід  на сторінку user-details.html, котра має детальну інфорацію про об'єкт на який клікн*/

fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => {
        return response.json();
    })
 .then(users => users.forEach(user=>{
    let div = document.createElement('div');
    div.innerText = user.id + " " + user.name;
    document.body.appendChild(div);
    let button = document.createElement('button');
    button.innerText = "more info";
    button.onclick = function (){
        location.href=`user.html?id=${user.id}`;
    }
    div.appendChild(button);

 }))
