/*На странице user-details.html:
4 Вивести всю, без виключення, інформацію про об'єкт user на який клікнули
5 Додати кнопку "post of current user", при кліку на яку, з'являються title всіх постів поточного юзера
(для получения постов используйте эндпоинт https://jsonplaceholder.typicode.com/users/USER_ID/posts)
// 6 Каждому посту додати кнопку/посилання, при кліку на яку відбувається перехід на сторінку post-details.html, котра має детальну інфу про поточний пост.*/
console.log(location.href);
let url= new URL(location.href);
console.log(url);
let id = url.searchParams.get("id");
console.log(id);
fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
.then(response => response.json())
.then(users => {
   let div= document.createElement('div');
   let h = document.createElement("p");
   h.innerText = users.id;
   let h1 = document.createElement("p");
   h1.innerText = users.name;
   let h2 = document.createElement("p");
   h2.innerText = users.username;
   let h3 = document.createElement("p");
   h3.innerText = users.email;
   let h4 = document.createElement("p");
   h4.innerText = JSON.stringify(users.address);
   let h5 = document.createElement("p");
   h5.innerText = users.phone;
   let h6 = document.createElement("p");
   h6.innerText = users.website;
   let h7 = document.createElement("p");
   h7.innerText = JSON.stringify(users.company);
   div.append(h,h1,h2,h3,h4,h5,h6,h7);
   document.body.appendChild(div);
    fetch(`https://jsonplaceholder.typicode.com/users/${id}/posts`)
        .then(response => response.json())
        .then(titles =>{
            let ul = document.createElement('ul')
            for(const title in titles){
                let li = document.createElement('li');
                li.innerText = JSON.stringify(titles[title].title);
                ul.appendChild(li)
                let button2 = document.createElement('button')
                button2.innerText = "more information"
                ul.appendChild(button2);
                button2.onclick = function () {
                    location.href = `post-details.html?id=${users.id}`
                }
            }
            let button1 = document.createElement('button')
            button1.innerText = "post of current user"
            button1.onclick = function () {
                document.body.appendChild(ul);

            }
            document.body.appendChild(button1)
        })

})
